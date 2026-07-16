import os, base64
b = "D:\\DeskTop\\TmpPW"
# Font fix
css = open(b + "/src/styles/global.css", "r", encoding="utf-8").read()
css = css.replace('LXGW WenKai', 'Noto Serif SC')
open(b + "/src/styles/global.css", "w", encoding="utf-8").write(css)
print("fonts fixed")
