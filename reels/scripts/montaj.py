"""60 sn hikâye reel'ini sahnelerden kurar.

Sahne dosyaları scenes/ (veya assets/) altında `sahneN*.mp4` adıyla durur.
Eksik sahne atlanır ve ekrana yazılır; böylece Gemini'den sahneler geldikçe
her seferinde güncel bir taslak çıkarılabilir.

    python3 scripts/montaj.py            # output/hikaye_taslak.mp4
"""
import glob, os, subprocess, sys

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
os.chdir(KOK)

# (sahne, süre sn, üstüne binecek saydam PNG, PNG'nin göründüğü aralık)
PLAN = [
    (1, 6.0, "scenes/yazi_acilis.png", (0.3, 5.4)),
    (2, 6.0, None, None),
    (3, 5.0, None, None),
    (4, 6.0, None, None),
    (5, 6.0, "scenes/etiket_mesut.png", (0.6, 5.4)),
    (6, 3.0, None, None),
    (7, 6.0, "scenes/etiket_ekip.png", (0.6, 5.4)),
    (8, 6.0, None, None),
    (9, 7.0, None, None),
    (10, 5.0, None, None),
]
KAPANIS = ("scenes/kapanis_c.png", 4.0)
GECIS = 0.5  # sahneler arası yumuşak geçiş
LAC = "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,fps=24"


def bul(n):
    for kok in ("scenes", "assets"):
        adaylar = sorted(glob.glob(f"{kok}/sahne{n}_*.mp4") + glob.glob(f"{kok}/sahne{n}.mp4"))
        if adaylar:
            return adaylar[0]
    return None


ARA = "scenes/_ara"
os.makedirs(ARA, exist_ok=True)
ENC = ["-c:v", "libx264", "-preset", "fast", "-crf", "16", "-pix_fmt", "yuv420p", "-an"]


def parca(ad, girdi, sure, png=None, aralik=None, resim=False):
    """Bir sahneyi 1080x1920, 24 fps, tam süreli ara dosyaya çevirir (üstüne yazı/etiket bindirerek)."""
    cikti = f"{ARA}/{ad}.mp4"
    g = (["-loop", "1", "-framerate", "24"] if resim else []) + ["-t", str(sure), "-i", girdi]
    f = f"[0:v]{LAC},tpad=stop_mode=clone:stop_duration={sure},trim=0:{sure},setpts=PTS-STARTPTS"
    if png:
        a, b = aralik
        g += ["-loop", "1", "-framerate", "24", "-t", str(sure), "-i", png]
        f += (f"[v];[1:v]format=rgba,fade=t=in:st={a}:d=0.5:alpha=1,fade=t=out:st={b}:d=0.5:alpha=1[o];"
              f"[v][o]overlay=0:0:shortest=1")
    subprocess.run(["ffmpeg", "-v", "error", "-y", *g, "-filter_complex", f, "-r", "24", *ENC, cikti], check=True)
    return cikti


parcalar, eksik = [], []
for n, sure, png, aralik in PLAN:
    dosya = bul(n)
    if not dosya:
        eksik.append(n)
        continue
    parcalar.append((parca(f"s{n:02d}", dosya, sure, png, aralik), sure))

png, sure = KAPANIS
parcalar.append((parca("kapanis", png, sure, resim=True), sure))

# xfade zinciri
girdiler, filtre = [], []
for yol, _ in parcalar:
    girdiler += ["-i", yol]
onceki, toplam = "0:v", parcalar[0][1]
for k, (_, sure) in enumerate(parcalar[1:], 1):
    cikis = f"x{k}"
    filtre.append(f"[{onceki}][{k}:v]xfade=transition=fade:duration={GECIS}:offset={toplam - GECIS:.2f}[{cikis}]")
    onceki, toplam = cikis, toplam + sure - GECIS

cikti = "output/hikaye_taslak.mp4"
komut = ["ffmpeg", "-v", "error", "-y", *girdiler, "-filter_complex", ";".join(filtre),
         "-map", f"[{onceki}]", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "18",
         "-pix_fmt", "yuv420p", "-movflags", "+faststart", cikti]
subprocess.run(komut, check=True)
print(f"bitti: {cikti} ({toplam:.1f} sn, ses yok)")
if eksik:
    print("eksik sahneler (atlandı):", ", ".join(map(str, eksik)), file=sys.stderr)
