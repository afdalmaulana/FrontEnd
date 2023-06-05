/*
setiap elemen berada dalam box tapi warnanya transparan

perhatikan setiap specifity untuk pemberian warna
id => # nilainya 100
class => nilainya 10
element nilainya 1

property display
inline
element inline html hanya bisa di atur tingginya
b, strong, i, em, a, span, sub, sup, button, input,
label, select, textarea

img defaultnya inline tapi kita bisa mengatur lebar dan tingginya
lebar dan tingginya inline bisa di atur apabila inline-block
=> display : inline-block
apabila menggunakan inline-block maka ada spasi pada setiap box
untuk menghilangkannya yaitu dengan element harus di tulis
secara satu baris

block
secara default menambahkan baris baru
h1-h6, p, ol, ul, li, form, hr, div

none digunakan untuk menghilangkan element
display : none;

ukuran width dan height
height adalah tinggi
width adalah lebar
px => nilainya absolut
% => relatif tergantung pembungkusnya atau layar browser
in, cm, mm, pt adalah point, pc 

overflow
visibile, auto, hidden, scroll

css box
margin adalah daerah diluar box element
overlapping margin adalah margin vertikal yang saling mendorong
tapi nilai yang terbesar yang di ambil tapi tidak berlaku
apabila dengan negatif margin
berbeda dengan horizontal maka nilai margin akan di jumlahkan

margin auto
margin-left : auto
margin-right : auto
maka box akan berada di tengah

margin : 50px
maka ukuran margin ke empatnya akan berukuran 50px

margin : 50px 100px
50px => ukuran atas dan bawah
100px => ukuran kiri dan kanan

margin : 30px 50px 40px
30px => atas
50px => kiri kanan
40px => bawah

margin : 10px 20px, 30px, 40px
10px => atas
20px => kanan
30px => bawah
40px => kiri

padding
padding tidak bisa diberi nilai negatif dan auto
padding menambah ukuran box element 
adalah  jarak antara margin dan konten
padding : 10px 20px, 30px, 40px
10px => atas
20px => kanan
30px => bawah
40px => kiri

ukuran dimensi box akan berubah apabila ada border padding maka untuk menyamakannya digunakan rumus
rumus ukuran width
ukuran width - (2 * ukuran padding) - (2 * ukuran border)
untuk ukuran dimensi box secara auto
maka digunakan => box-sizing : border-box;

css reset => meyer css reser
margin pada tag <body> memiliki ukuran secara default
maka untuk menghilangkannya perlu di ketik di css
body{
    margin-top : 0;
}
itu adalah namanya reset
* itu adalah untuk semua


table
tr => table row
th => table heading => th rowspan=""
td => table data => td colspan=""

script di head gunanya untuk import
script untuk request data ke backend, promise, async await => trycatch
*/
