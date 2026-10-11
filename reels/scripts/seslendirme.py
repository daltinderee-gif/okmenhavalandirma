"""Gemini TTS ile Türkçe seslendirme: python3 scripts/seslendirme.py [ses1 ses2 ...]
Anahtar GEMINI_API_KEY ortam değişkeninden okunur. Çıktı: ses/seslendirme_<ses>.wav"""
import base64, json, os, sys, urllib.request, wave

MODEL = "gemini-3.8-flash-tts"
METIN = (
    "Mutfağınızda duman, ısı ve koku mu var? "
    "Bu sadece konfor değil; çalışanınızın sağlığı, müşterinizin deneyimi demek. "
    "Çözüm bir telefon uzağınızda. "
    "Ökmen Havalandırma teknik ekibi gelir, ücretsiz keşif yapar, mutfağınıza özel planlar. "
    "Ve montaj tamam. Şimdi mutfağınız nefes alıyor; ekibiniz rahat, servis hızlı. "
    "Çünkü havalandırma, mutfağın bel kemiğidir. "
    "Ökmen Havalandırma. Ücretsiz keşif için hemen arayın."
)
YONERGE = ("Bunu Türkçe, bir televizyon reklamı spikeri gibi oku: ciddi, sıcak ve güven veren bir ses, "
           "acele etmeden, cümleler arasında kısa nefes payı bırakarak, doğal Türkçe vurgu ve tonlamayla:\n\n")

def uret(ses: str):
    anahtar = os.environ["GEMINI_API_KEY"]
    govde = {
        "contents": [{"parts": [{"text": YONERGE + METIN}]}],
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": ses}}},
        },
    }
    istek = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
        data=json.dumps(govde).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": anahtar})
    cevap = json.load(urllib.request.urlopen(istek, timeout=180))
    pcm = base64.b64decode(cevap["candidates"][0]["content"]["parts"][0]["inlineData"]["data"])
    yol = os.path.join(os.path.dirname(__file__), "..", "ses", f"seslendirme_{ses}.wav")
    with wave.open(yol, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)
    print(f"{ses}: {len(pcm) / 48000:.1f} sn → ses/seslendirme_{ses}.wav")

for s in sys.argv[1:] or ["Charon", "Orus", "Alnilam", "Gacrux"]:
    try:
        uret(s)
    except Exception as e:
        print(f"{s}: hata → {getattr(e, 'read', lambda: str(e).encode())().decode()[:300]}")
