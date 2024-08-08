// 1.Adlandirma
//Kotu Örnek
const d = 30;
const p = 0.25;

//İyi Örnek
const daysInMonth = 30;
const interestRate = 0.25;

//2.3.-Kisa ve Öz Fonksiyonlar Yazın
// Tek Sorumlulk İlkesi

//Kotu Örnek
const _taxRate = 0;
function calculateTotalPrice(price, tax, discount) {
  _taxRate = 1 + tax;
  return price + price * tax - discount;
}
calculateTotalPrice(100, 0.25, 10);

//İyi Örnek

const taxRate = 0;
function calculateTotalPrice(price, tax, discount) {
  return price + price * tax - discount;
}
calculateTotalPrice(100, 0.25, 10);
taxRate = 1 + tax;

//4. Yorumlardan Kaçının
