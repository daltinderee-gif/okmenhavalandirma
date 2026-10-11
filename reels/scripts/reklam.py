"""Seslendirmeli reklam filmi: sahneler + seslendirme cümleleri zamanlı yerleştirilir.

    python3 scripts/reklam.py            # output/reklam_filmi.mp4

SAHNELER sırayla kurulur; bir sahne dosyası yoksa atlanır (Flow'dan geldikçe eklenir).
Seslendirme ses/vo_rasalgethi.wav; CUMLELER (başlangıç, bitiş) bu dosyadaki saniyeler,
nerede ise videodaki hangi saniyede başlayacağı."""
import glob, os, subprocess

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
os.chdir(KOK)
ARA = "scenes/_reklam"
os.makedirs(ARA, exist_ok=True)
V = ("scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,fps=24,"
     "hqdn3d=1:1:2:2,unsharp=5:5:0.6:5:5:0.0,format=yuv420p")
GECIS = 0.5

# (ad, kaynak, başlangıç sn, süre sn, üst yazı png, yazının görünme aralığı)
SAHNELER = [
    ("dert",     "assets/kaynak_gemini.mp4", 0,  9, "scenes/yazi_acilis.png", (0.4, 4.6)),
    ("sahibi",   "scenes/sahne2_*.mp4",       0,  6, None, None),
    ("arama",    "scenes/sahne3_arama.mp4",   0,  5, None, None),
    ("telefon",  "scenes/sahne4_*.mp4",       0,  6, None, None),
    ("montaj",   "scenes/sahne7_*.mp4",       0,  6, "scenes/etiket_ekip_alt.png", (0.5, 5.0)),
    ("davlumbaz","assets/kaynak_gemini.mp4", 13,  6, "scenes/yazi_okmen_farki.png", (0.8, 5.0)),
    ("ferah",    "assets/gemini_2.mp4",      13,  7, None, None),
    ("mutlu",    "scenes/sahne10_*.mp4",      0,  5, None, None),
    ("kapanis",  "scenes/kapanis_c.png",      0,  4, None, None),
]

# seslendirme cümleleri (vo dosyasındaki bas, bit) → hangi sahnenin içinde, sahne başından kaç sn sonra
VO = "ses/vo_rasalgethi.wav"
CUMLELER = [
    ((0.0, 3.0),   "dert", 1.6),     # Mutfağınızda duman, ısı ve koku mu var?
    ((3.3, 7.9),   "dert", 4.6),     # Bu sadece konfor değil…
    ((7.9, 10.0),  "arama", 0.6),    # Çözüm bir telefon uzağınızda.
    ((10.1, 15.6), "montaj", 0.2),   # Ökmen Havalandırma teknik ekibi gelir…
    ((15.6, 17.0), "davlumbaz", 0.6),# Ve montaj tamam.
    ((17.0, 21.0), "ferah", 0.4),    # Şimdi mutfağınız nefes alıyor. Ekibiniz rahat, servis hızlı.
    ((21.0, 23.7), "ferah", 4.4),    # Çünkü havalandırma mutfağın bel kemiğidir.
    ((23.7, 27.0), "kapanis", 0.3),  # Ökmen Havalandırma. Ücretsiz keşif için hemen arayın.
]


def bul(desen):
    d = sorted(glob.glob(desen))
    return d[0] if d else None


def parca(ad, kaynak, bas, sure, png, aralik):
    cikti = f"{ARA}/{ad}.mp4"
    resim = kaynak.endswith(".png")
    g = (["-loop", "1", "-framerate", "24"] if resim else ["-ss", str(bas)]) + ["-t", str(sure), "-i", kaynak]
    f = f"[0:v]{V},tpad=stop_mode=clone:stop_duration={sure},trim=0:{sure},setpts=PTS-STARTPTS"
    if png:
        a, b = aralik
        g += ["-loop", "1", "-framerate", "24", "-t", str(sure), "-i", png]
        f += (f"[v];[1:v]format=rgba,fade=t=in:st={a}:d=0.5:alpha=1,fade=t=out:st={b}:d=0.5:alpha=1[o];"
              "[v][o]overlay=0:0:shortest=1,format=yuv420p")
    # ortam sesi: varsa kaynağın sesi, yoksa sessizlik
    sesli = not resim and "Audio" in subprocess.run(["ffmpeg", "-i", kaynak], capture_output=True, text=True).stderr
    g += [] if sesli else ["-f", "lavfi", "-t", str(sure), "-i", "anullsrc=r=48000:cl=stereo"]
    ses_girdi = "0:a" if sesli else f"{2 if png else 1}:a"
    f += f"[vo];[{ses_girdi}]aresample=48000,aformat=channel_layouts=stereo,apad=whole_dur={sure},atrim=0:{sure}[ao]"
    subprocess.run(["ffmpeg", "-v", "error", "-y", *g, "-filter_complex", f, "-map", "[vo]", "-map", "[ao]",
                    "-r", "24", "-c:v", "libx264", "-crf", "16", "-pix_fmt", "yuv420p", "-c:a", "aac", cikti], check=True)
    return cikti


parcalar, baslar, t, eksik = [], {}, 0.0, []
for ad, desen, bas, sure, png, aralik in SAHNELER:
    kaynak = bul(desen)
    if not kaynak:
        eksik.append(ad)
        continue
    baslar[ad] = t
    parcalar.append((parca(ad, kaynak, bas, sure, png, aralik), sure))
    t += sure - GECIS
toplam = t + GECIS

# görüntü + ortam sesi zinciri
girdi, f = [], []
for yol, _ in parcalar:
    girdi += ["-i", yol]
ov, oa, tt = "0:v", "0:a", parcalar[0][1]
for k, (_, sure) in enumerate(parcalar[1:], 1):
    f.append(f"[{ov}][{k}:v]xfade=transition=fade:duration={GECIS}:offset={tt - GECIS:.2f}[v{k}]")
    f.append(f"[{oa}][{k}:a]acrossfade=d={GECIS}[a{k}]")
    ov, oa, tt = f"v{k}", f"a{k}", tt + sure - GECIS

# seslendirme cümleleri
n = len(parcalar)
girdi += ["-i", VO]
karisim = []
for i, ((b, e), sahne, ofset) in enumerate(CUMLELER):
    if sahne not in baslar:
        continue
    gecikme = int((baslar[sahne] + ofset) * 1000)
    f.append(f"[{n}:a]atrim={b}:{e},asetpts=PTS-STARTPTS,adelay={gecikme}|{gecikme}[c{i}]")
    karisim.append(f"[c{i}]")
f.append(f"{''.join(karisim)}amix=inputs={len(karisim)}:normalize=0[vo]")
f.append(f"[{oa}]volume=0.22[ortam]")
f.append(f"[ortam][vo]amix=inputs=2:normalize=0,afade=t=out:st={toplam - 1.5:.2f}:d=1.5,loudnorm=I=-15:TP=-1.5[a]")

cikti = "output/reklam_filmi.mp4"
subprocess.run(["ffmpeg", "-v", "error", "-y", *girdi, "-filter_complex", ";".join(f), "-map", f"[{ov}]",
                "-map", "[a]", "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p",
                "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", cikti], check=True)
print(f"bitti: {cikti} ({toplam:.1f} sn)")
if eksik:
    print("eksik sahneler:", ", ".join(eksik))
