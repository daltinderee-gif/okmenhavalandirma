#!/bin/zsh
# Kaynak Gemini videosunu Sahne 1 / Sahne 8 olarak böler ve
# 20 sn kısa kesimin ilk taslağını (açılış yazısı + logo kapanışı) üretir.
set -e
cd "${0:A:h}/.."
SRC=assets/kaynak_gemini.mp4
KES=13
TEL="0530 900 93 44"
FB="/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FR="/System/Library/Fonts/Supplemental/Arial.ttf"
LAC="scale=1080:1920:flags=lanczos,setsar=1"
ENC=(-c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k)

ffmpeg -v error -y -i $SRC -t $KES -vf $LAC $ENC assets/sahne1.mp4
ffmpeg -v error -y -ss $KES -i $SRC -vf $LAC $ENC assets/sahne8.mp4

# Kapanış kartı: beyaz zemin, logo, "Ücretsiz keşif", telefon
ffmpeg -v error -y -f lavfi -i "color=white:s=1080x1920:r=24:d=3.5" -i assets/logo.png -filter_complex "\
[1]scale=960:-1[l];[0][l]overlay=(W-w)/2:430,\
drawtext=fontfile='$FB':text='Ücretsiz keşif':fontcolor=0x1a3a5c:fontsize=86:x=(w-tw)/2:y=1250,\
drawtext=fontfile='$FB':text='$TEL':fontcolor=0x2e6ca4:fontsize=104:x=(w-tw)/2:y=1390,\
drawtext=fontfile='$FR':text='okmenhavalandirma.com':fontcolor=0x555555:fontsize=48:x=(w-tw)/2:y=1560,\
format=yuv420p" -c:v libx264 -crf 18 -an scenes/kapanis_karti.mp4

# 20 sn taslak: açılış sorusu + kaynak video + kapanış kartı
D=$(ffmpeg -i $SRC 2>&1 | sed -n 's/.*Duration: \([0-9:.]*\).*/\1/p' | awk -F: '{print $1*3600+$2*60+$3}')
OFF=$(echo "$D - 0.6" | bc)
TOP=$(echo "$OFF + 3.5" | bc)
mkdir -p output
ffmpeg -v error -y -i $SRC -i scenes/kapanis_karti.mp4 -filter_complex "\
[0:v]$LAC,fps=24,drawtext=fontfile='$FB':text='Mutfağınız':fontcolor=white:fontsize=96:borderw=5:bordercolor=black@0.55:x=(w-tw)/2:y=300:enable='between(t,0.4,3.6)':alpha='min(1,(t-0.4)/0.4)',\
drawtext=fontfile='$FB':text='nefes alıyor mu?':fontcolor=white:fontsize=96:borderw=5:bordercolor=black@0.55:x=(w-tw)/2:y=420:enable='between(t,0.4,3.6)':alpha='min(1,(t-0.4)/0.4)'[v0];\
[1:v]fps=24,setsar=1[v1];[v0][v1]xfade=transition=fade:duration=0.6:offset=${OFF}[v];\
[0:a]apad=whole_dur=$TOP,afade=t=out:st=$(echo "$TOP - 2" | bc):d=2[a]" \
  -map "[v]" -map "[a]" $ENC -movflags +faststart output/kisa_taslak_v1.mp4
echo "bitti: output/kisa_taslak_v1.mp4 ($TOP sn)"
