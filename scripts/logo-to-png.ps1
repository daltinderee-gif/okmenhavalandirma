# Convert logo JPEG to PNG with white background made transparent.
# Uses C# inline for performance (1.5M+ pixels processed in <1s).

Add-Type -AssemblyName System.Drawing

$inputPath  = Join-Path $PSScriptRoot "..\public\logo.jpeg"
$outputPath = Join-Path $PSScriptRoot "..\public\logo.png"

if (-not (Test-Path $inputPath)) {
  Write-Error "Input not found: $inputPath"
  exit 1
}

# Inline C# for fast pixel ops via LockBits
$cs = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class LogoProcessor {
    public static void Convert(string input, string output, int threshold) {
        using (var src = new Bitmap(input)) {
            var bmp = new Bitmap(src.Width, src.Height, PixelFormat.Format32bppArgb);
            using (var g = Graphics.FromImage(bmp)) {
                g.Clear(Color.Transparent);
                g.DrawImage(src, 0, 0, src.Width, src.Height);
            }

            var rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
            var data = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int len = data.Stride * bmp.Height;
            var bytes = new byte[len];
            Marshal.Copy(data.Scan0, bytes, 0, len);

            // BGRA byte order on Windows; alpha is the 4th byte.
            for (int i = 0; i < len; i += 4) {
                byte b = bytes[i];
                byte g2 = bytes[i + 1];
                byte r = bytes[i + 2];

                if (r >= threshold && g2 >= threshold && b >= threshold) {
                    // Pure white → fully transparent
                    bytes[i + 3] = 0;
                } else {
                    // Soft edge: near-white gets partial transparency to avoid jaggy outline
                    int minColor = Math.Min(r, Math.Min(g2, b));
                    if (minColor >= 220) {
                        int delta = 255 - minColor;
                        int alpha = (int)(delta * 255.0 / (255 - threshold + 1));
                        if (alpha < 0) alpha = 0;
                        if (alpha > 255) alpha = 255;
                        bytes[i + 3] = (byte)alpha;
                    }
                }
            }

            Marshal.Copy(bytes, 0, data.Scan0, len);
            bmp.UnlockBits(data);
            bmp.Save(output, ImageFormat.Png);
            bmp.Dispose();
        }
    }
}
"@

Add-Type -TypeDefinition $cs -ReferencedAssemblies "System.Drawing"

Write-Host "Logo dönüştürülüyor: $inputPath → $outputPath"
[LogoProcessor]::Convert($inputPath, $outputPath, 248)

$size = (Get-Item $outputPath).Length
Write-Host "Tamam ✓  PNG boyutu: $([math]::Round($size/1KB, 1)) KB"
