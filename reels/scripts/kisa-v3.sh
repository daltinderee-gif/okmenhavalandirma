#!/bin/zsh
# Kısa kesim v3 (~28 sn): dert → Ökmen davlumbazı → mutlu mutfak → kapanış.
# Kaynaklar: assets/kaynak_gemini.mp4 (ilk Gemini videosu), assets/gemini_2.mp4 (ikinci; son 7 sn "sonra" sahnesi)
set -e
cd "${0:A:h}/.."
V="scale=1080:1920:flags=lanczos,setsar=1,fps=24,hqdn3d=1.5:1.5:3:3,unsharp=5:5:0.8:5:5:0.0,format=yuv420p"
A="aresample=48000,aformat=channel_layouts=stereo"
mkdir -p scenes/_v3
# 1) dert 0–13 sn + açılış yazısı
ffmpeg -v error -y -t 13 -i assets/kaynak_gemini.mp4 -loop 1 -framerate 24 -t 13 -i scenes/yazi_acilis.png -filter_complex \
 "[0:v]${V}[v];[1:v]format=rgba,fade=t=in:st=0.3:d=0.6:alpha=1,fade=t=out:st=3.4:d=0.6:alpha=1[y];[v][y]overlay=0:0:shortest=1,format=yuv420p[o];[0:a]${A}[a]" \
 -map "[o]" -map "[a]" -c:v libx264 -crf 16 -c:a aac scenes/_v3/1.mp4
# 2) Ökmen davlumbazı 13–20 sn + "Ökmen farkı"
ffmpeg -v error -y -ss 13 -i assets/kaynak_gemini.mp4 -loop 1 -framerate 24 -t 7 -i scenes/yazi_okmen_farki.png -filter_complex \
 "[0:v]${V}[v];[1:v]format=rgba,fade=t=in:st=1.2:d=0.6:alpha=1,fade=t=out:st=5.6:d=0.6:alpha=1[y];[v][y]overlay=0:0:shortest=1,format=yuv420p[o];[0:a]${A}[a]" \
 -map "[o]" -map "[a]" -c:v libx264 -crf 16 -c:a aac scenes/_v3/2.mp4
# 3) mutlu mutfak: ikinci videonun 13–20 sn'si + "Mutfağınız nefes alıyor"
ffmpeg -v error -y -ss 13 -i assets/gemini_2.mp4 -loop 1 -framerate 24 -t 7 -i scenes/yazi_ferah.png -filter_complex \
 "[0:v]${V}[v];[1:v]format=rgba,fade=t=in:st=0.8:d=0.6:alpha=1,fade=t=out:st=5.6:d=0.6:alpha=1[y];[v][y]overlay=0:0:shortest=1,format=yuv420p[o];[0:a]${A}[a]" \
 -map "[o]" -map "[a]" -c:v libx264 -crf 16 -c:a aac scenes/_v3/3.mp4
# 4) kapanış kartı (sessiz ses izi ile)
ffmpeg -v error -y -loop 1 -framerate 24 -t 4 -i scenes/kapanis_c.png -f lavfi -t 4 -i anullsrc=r=48000:cl=stereo -filter_complex "[0:v]scale=1080:1920,setsar=1,format=yuv420p[o]" -map "[o]" -map 1:a -c:v libx264 -crf 16 -c:a aac scenes/_v3/4.mp4
# birleştir: 0,6 sn yumuşak geçişler
ffmpeg -v error -y -i scenes/_v3/1.mp4 -i scenes/_v3/2.mp4 -i scenes/_v3/3.mp4 -i scenes/_v3/4.mp4 -filter_complex "\
[0:v][1:v]xfade=transition=fade:duration=0.6:offset=12.4[x1];[x1][2:v]xfade=transition=fade:duration=0.6:offset=18.8[x2];[x2][3:v]xfade=transition=fade:duration=0.6:offset=25.2[v];\
[0:a][1:a]acrossfade=d=0.6[a1];[a1][2:a]acrossfade=d=0.6[a2];[a2][3:a]acrossfade=d=0.6,afade=t=out:st=25.4:d=3[a]" \
 -map "[v]" -map "[a]" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart output/kisa_taslak_v3.mp4
echo "bitti: output/kisa_taslak_v3.mp4"
