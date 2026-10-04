#!/bin/zsh
# 20 sn kısa kesim, C (kurumsal) yazı stili: açılış yazısı + lacivert kapanış kartı.
# Yazılar scripts/html/*.html'den Chrome ile PNG olarak çiziliyor.
set -e
cd "${0:A:h}/.."
SRC=assets/kaynak_gemini.mp4
LAC="scale=1080:1920:flags=lanczos,setsar=1,fps=24"
D=$(ffmpeg -i $SRC 2>&1 | sed -n 's/.*Duration: \([0-9:.]*\).*/\1/p' | awk -F: '{print $1*3600+$2*60+$3}')
KART=4
OFF=$(echo "$D - 0.8" | bc)
TOP=$(echo "$OFF + $KART" | bc)
ffmpeg -v error -y -i $SRC -loop 1 -t 4 -i scenes/yazi_acilis.png -loop 1 -t $KART -i scenes/kapanis_c.png -filter_complex "\
[0:v]${LAC}[v0];\
[1:v]format=rgba,fade=t=in:st=0.3:d=0.6:alpha=1,fade=t=out:st=3.2:d=0.6:alpha=1[y];\
[v0][y]overlay=0:0:eof_action=pass[v0y];\
[2:v]${LAC},fade=t=in:st=0:d=0.1[k];\
[v0y][k]xfade=transition=fade:duration=0.8:offset=${OFF}[v];\
[0:a]apad=whole_dur=${TOP},afade=t=out:st=$(echo "$TOP - 2.2" | bc):d=2.2[a]" \
  -map "[v]" -map "[a]" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart output/kisa_taslak_v2.mp4
echo "bitti: output/kisa_taslak_v2.mp4 ($TOP sn)"
