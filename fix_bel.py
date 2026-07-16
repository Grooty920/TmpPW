c = open('D:\\DeskTop\\TmpPW\\src\\pages\\index.astro','rb').read()
c = c.replace(b'\x07', b'')
c = c.replace(b'style={
imation-delay:', b'style={nimation-delay:')
open('D:\\DeskTop\\TmpPW\\src\\pages\\index.astro','wb').write(c)
print('fixed')
