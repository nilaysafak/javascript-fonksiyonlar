// İki sayıyı toplayan fonksiyon (normal fonksiyon)
function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

// İki sayıyı toplayan fonksiyon (ok fonksiyonu)
const toplaOk = (sayi1, sayi2) => sayi1 + sayi2;

// Bir dizideki en büyük elemanı bulan fonksiyon
function enBuyukElemaniBul(dizi) {
  if (dizi.length === 0) {
    return null; // Boş dizi durumunda null döndür
  }
  
  let enBuyuk = dizi[0]; // İlk elemanı en büyük olarak kabul et
  
  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] > enBuyuk) {
      enBuyuk = dizi[i];
    }
  }
  
  return enBuyuk;
}

// Alternatif olarak Math.max() kullanarak:
function enBuyukElemaniBul2(dizi) {
  if (dizi.length === 0) return null;
  return Math.max(...dizi);
}

// Bir dizide belirli bir elemanın var olup olmadığını kontrol eden fonksiyon
function elemanVarMi(dizi, eleman) {
  return dizi.includes(eleman);
}

// Alternatif yaklaşım (includes kullanmadan):
function elemanVarMi2(dizi, eleman) {
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] === eleman) {
      return true;
    }
  }
  return false;
}

// Örnek kullanımlar
console.log("Toplama (normal fonksiyon):", topla(5, 3));
console.log("Toplama (ok fonksiyonu):", toplaOk(5, 3));

const sayilar = [3, 8, 1, 6, 2, 10, 4];
console.log("En büyük eleman:", enBuyukElemaniBul(sayilar));
console.log("En büyük eleman (Math.max ile):", enBuyukElemaniBul2(sayilar));

console.log("6 sayısı dizide var mı?", elemanVarMi(sayilar, 6));
console.log("9 sayısı dizide var mı?", elemanVarMi(sayilar, 9));