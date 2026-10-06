#!/bin/zsh
# "Atölyemizden" reel'i: kendi atölye fotoğraflarından yavaş yakınlaşmalı 9:16 video + C stili yazı + kapanış.
set -e
cd "${0:A:h}/.."
FOTOLAR=(foto1 foto7 foto2 foto4 foto5 foto3 foto6)
SURE=2.6
mkdir -p scenes/_atolye
i=0
for f in $FOTOLAR; do
  i=$((i+1))
  ffmpeg -v error -y -loop 1 -framerate 24 -t $SURE -i assets/atolye/$f.jpg -vf "scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='1+0.06*on/($SURE*24)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1080x1920:fps=24,format=yuv420p" -c:v libx264 -crf 17 -an scenes/_atolye/$i.mp4
done
G=0.4; GIR=(); FIL=""; ONC="0:v"; TOP=$SURE
for k in $(seq 1 $i); do GIR+=(-i scenes/_atolye/$k.mp4); done
for k in $(seq 1 $((i-1))); do
  OFF=$(echo "$TOP - $G" | bc); FIL+="[$ONC][$k:v]xfade=transition=fade:duration=$G:offset=${OFF}[a${k}];"; ONC="a$k"; TOP=$(echo "$TOP + $SURE - $G" | bc)
done
ffmpeg -v error -y $GIR -filter_complex "${FIL%;}" -map "[$ONC]" -c:v libx264 -crf 17 scenes/_atolye/kolaj.mp4
# yazı + kapanış kartı
KOFF=$(echo "$TOP - 0.6" | bc)
ffmpeg -v error -y -i scenes/_atolye/kolaj.mp4 -loop 1 -framerate 24 -t 5 -i scenes/yazi_atolye.png -loop 1 -framerate 24 -t 4 -i scenes/kapanis_c.png -filter_complex "\
[1:v]format=rgba,fade=t=in:st=0.4:d=0.6:alpha=1,fade=t=out:st=4.2:d=0.6:alpha=1[y];\
[0:v][y]overlay=0:0:eof_action=pass,fps=24,format=yuv420p[v];\
[2:v]scale=1080:1920,setsar=1,fps=24,format=yuv420p[k];\
[v][k]xfade=transition=fade:duration=0.6:offset=${KOFF}[o]" -map "[o]" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart output/atolyemizden.mp4
echo "bitti: output/atolyemizden.mp4"
