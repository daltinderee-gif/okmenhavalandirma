"""Sahne 3: markasız arama ekranını kare kare (24 fps) Chrome ile çizer, ffmpeg ile videoya çevirir."""
import subprocess, os, concurrent.futures as cf
KOK = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(KOK, "html", "arama.html")
CIKTI = os.path.join(KOK, "..", "scenes", "arama_kare")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
METIN = "diyarbakır restoran havalandırma"
FPS, SURE = 24, 6.0

def durum(k):
    t = k / FPS
    if t < 0.5:
        return dict(n=0, i=int(t * 4) % 2 == 0, s=0, v=0)
    yazim = 2.2
    if t < 0.5 + yazim:
        return dict(n=int((t - 0.5) / yazim * len(METIN)) + 1, i=1, s=0, v=0)
    s = min(1, max(0, (t - 3.1) / 0.5))
    v = min(1, max(0, (t - 3.8) / 0.6))
    return dict(n=len(METIN), i=int(t * 4) % 2 == 0 and s == 0, s=round(s, 3), v=round(v, 3))

def ciz(k):
    d = durum(k)
    url = f"file://{HTML}?n={d['n']}&i={int(d['i'])}&s={d['s']}&v={d['v']}"
    yol = os.path.join(CIKTI, f"{k:04d}.png")
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                    "--allow-file-access-from-files", "--window-size=1080,1920",
                    f"--screenshot={yol}", url], capture_output=True)
    return k

with cf.ThreadPoolExecutor(6) as h:
    list(h.map(ciz, range(int(FPS * SURE))))
subprocess.run(["ffmpeg", "-v", "error", "-y", "-framerate", str(FPS), "-i", os.path.join(CIKTI, "%04d.png"),
                "-c:v", "libx264", "-crf", "18", "-pix_fmt", "yuv420p",
                os.path.join(KOK, "..", "scenes", "sahne3_arama.mp4")], check=True)
print("bitti: scenes/sahne3_arama.mp4")
