let a=6;
let b=++a;
let c=a++ - b;
let d=--a * c;
let e=a - ++b;
let f=e-- + c;
let x=c++ - a;
//moja kalkulacija je bila tacna za sve brojeve

if (a>b) {
   console.log("a je veci od b")
} else {
   console.warn("a nije veci od b")
}

switch (d>e) {
   case true:
      console.log("d je vece od e");
    break;
   case false:
      console.log("d nije vece od e");
    break;
}

let rezultatJedan=c+a>f;

if (rezultatJedan) {
   console.log("Rezultat je true i to je" + rezultatJedan);//ovdje sam napravio logicku gresku jer sam mislio ispisati rezulatat ali je true ili false postavljeno ne broj
} else {
   console.warn("Rezultat je false i njegov rezulat je" + rezultatJedan);
}

let odabranaOpcija=8;

if (odabranaOpcija===1) {
   console.log("Odabrali ste" + odabranaOpcija + "opciju");
} else if (odabranaOpcija===2) {
   console.log("Odabrali ste" + odabranaOpcija + "opciju");
} else if (odabranaOpcija===3) {
   console.log("Odabrali ste" + odabranaOpcija + "opciju");
} else {
   console.warn("Odabrali ste opciju" + odabranaOpcija + "koja nije trenutno dostupna");
}
/*sve radi kako treba samo neznam razmak napraviti izmedju saberenim stringova i varijabli,i napraviti error za to ako neko ne unese nista odnosno ako rezultat bude unfefined*/

const pdv=5;
let kolicinaNovca=14;
let suma=kolicinaNovca-pdv;

suma += b;

switch (suma > kolicinaNovca) {
   case (true):
        console.warn("tranzakcija nije mogucja jer je kolicina sume je" + suma + ",a kolicina novca koju vi imate jeste" + kolicinaNovca);
      break;
   case (false):
        console.log("Vasa tranzakcija je uspjesno odradjena");  
      break;
   }   
 
console.log(a); 
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(x);

for (let y=20 ; y>=1 ; y--) {
   if ( y % 2===1 ) {
      console.log( y );
   }
}


for (let p=1 ; p<=10 ; p++) {
   if ( p % 3 !==0 && p % 7 !==0) {
      console.log(p);
   }
}


for (let zad2=1 ; zad2<=550 ; zad2++) {
   if ( zad2 % 9 ===0 ) {
      console.log(zad2);
   }
}


for (let kub=1 ; kub<=37 ; kub++) {
   console.log(kub*kub*kub);
}

kub2=1;
while(kub2<=37) {
   console.log(kub2*kub2*kub2);
   ++kub2;
}