const{dash, dep, sell} = require("./commands")

let [, , product, count] = process.argv;

if (!product) {
   dash()
} else {
    let [, , command, product, count] = process.argv;
    if (command === "--dep") {
        dep(product, count);
    } else if (command === "--sell") {
        sell(product, count)
    }
}

/***
node app.js --dep tarvuz 25   Omborga maxsulot qo'shish
node app.js -sell tarvuz 6  Sotuvni amalga oshirish
node app.js  Umumiy statistikani ko'rish ("Dashboard" dasturi )


Asosiy shartlar
  Maxsulot nomi Case-Insensitive
  Har bir jarayondan keyin Feeback berilsin. Masalan: 25 ta "T arvuz"
muvaffaqiyatli qo'shildi!)
  Hisob kitoblar iqtisodiyotga mos bo'lishi.Ro'yxatdan o'tmagan maxsulotni ham sotish mumkin
emas.
  Maxsulotlar unique bo'lishi kerak.


Dashboard dasturi
--node dash.js
Ombordagi maxsulotlar haqida umumiy malumot olish. Qaynday maxsulot bor ,
nechta sotildi, nechta edi....
Depozit dasturi
node dep.js tarvuz 25
Omborga "T arvuz" maxsulotini kiritish va uning dastlabgi soni. Y a'ni omborga
qaysi maxsulot, necha dona keltirildi ). Bundan keyin "Dashboard" dasturida
jadval ko'rinishida tarvuzning 25 ta borligi ko'rinishi kerak.echo "# mern_3_oy" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Uroljon/mern_3_oy.git
git push -u origin main
Sotuv dasturi
node sell.js tarvuz 6
Qaysi maxsulot necha dona sotildi. Demak "Dashboard" dasturida tarvuz
avvaliga 25 dona bo'lgani, 6 ta sotilgani va sotuvdan so'ng u 19 dona qolgani
aks etishi kerak. Jadval ko'rinishida).
 */