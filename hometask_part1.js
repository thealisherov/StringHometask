/* String1. n butun soni berilgan (1 <= n <= 26). Lotin alfavitidagi dastlabki n ta
 katta harflarni chiqaruvchi programma tuzilsin.
 */
// let n = 23;
// let beginning = 65;
// let ending = 90;
// n += beginning;
// if (beginning <= n  && n <= ending) {
//   for (let i = beginning; i < n; i++) {

//     console.log(String.fromCharCode(i));
//   }
// } else {
//   console.log("Siz noto'g'ri son kiritdingiz");
// }

/* String2. Kiritilgan belgining nimaligini aniqlovchi programma tuzilsin. Agar kiritilgan belgi raqam bo'lsa 
- "digit", lotincha harf bo'lsa - "lotin" yozuvi chiqarilsin. Boshqa xolatlar uchun nol chiqarilsin.
 */

//  let input2 = ";";
//  let startDigit = 48;
//  let endDigit = 57;
//  let startUpperLetters = 65;
//  let endingOfUpperLetters = 90;
//  let startOfSmallLetters = 97;
//  let endingOfSmallLetters = 122;

//  let charCode = String(input2).charCodeAt(0);

//  if (startDigit <= charCode && charCode <= endDigit) {
//    console.log("Digit(son)");
//  } else if (
//    (startUpperLetters <= charCode && charCode <= endingOfUpperLetters) ||
//    (startOfSmallLetters <= charCode && charCode <= endingOfSmallLetters)
//  ) {
//    console.log("Lotin");
//  } else {
//    console.log("Boshqa belgi");
//  }

// String3. Satr beilgan. Satrning birinchi va oxirgi belgisini
//  UTF-16 jadvalidagi kodini chiqaruvchi programma tuzilsin.

// let textInput = "O'zbekiston";

//  if (typeof textInput == "string") {
//     let firstCharCode = textInput.charCodeAt(0);
//     let lastCharCode = textInput.charCodeAt(textInput.length - 1);

//     console.log(`Birinchi belgi: '${textInput[0]}' - UTF-16 kodi: ${firstCharCode}`);
//     console.log(
//       `Oxirgi belgi: '${textInput[textInput.length - 1]}' - UTF-16 kodi: ${lastCharCode}`
//     );

//  } else {
// console.log("Kiritilgan belgi lotin alifbosidagi harf emas")
//  }

// String4. N natural soni va belgi berilgan. N ta kiritilgan belgidan iborat satr hosil qiling
//  va ekranga chiqaring. Masalan: N = 5; Belgi = 'A'; Natija = AAAAA

// let x = 5;
// let inputStr = "a";
// console.log(inputStr.repeat(x,inputStr))

// String5. Kiritilgan satrni teskari tartibda chiqaruvchi programma tuzilsin.

//   function reversedText(newMessage) {
//     let reversed = "";
//     for (let i = newMessage.length -1; i >= 0; i--) {
//       reversed += newMessage[i];
//   }
// return reversed;
// }

// console.log(reversedText("Salom"))

// String6. Satr va N natural soni berilgan. Shu satr belgilari orasiga N tadan "*" belgisi qo’yib
// yangi satr qaytaruvchi getStringStars(N) nomli funksiya tuzilsin.

// function getStringStars(son, yangiSatr){
// return yangiSatr.split("").join("*".repeat(son));
// }
// console.log(getStringStars(5,"salom"));

// String7. Satr berilgan. Satrdagi raqamlar sonini aniqlovchi programma tuzilsin.
// (for of va isNaN dan foydalaning !)

// function isNumber(yangiText) {
//   let iterator = 0;
//   for (let i = 0; i < yangiText.length; i++) {
//     let charcode = yangiText.charCodeAt(i);
//     if (charcode >= 48 && charcode <= 57) {
//       iterator++;
//     }
//   }
//   return iterator;
// }

// console.log(isNumber("My nick is thealisherov0826"));

// String8. Satr berilgan. Satrdagi kichik lotin va kirill harflarining umumiy
// sonini aniqlovchi programma tuzilsin.

// function mixedText(mixedStr) {
//   let lotin = 0;
//   let krill = 0;
//   for (let i = 0; i < mixedStr.length; i++) {
//     let charcodeOfMixedStr = mixedStr.charCodeAt(i);
//     if (charcodeOfMixedStr >= 97 && charcodeOfMixedStr <= 122) {
//       lotin++;
//     }
//     if (charcodeOfMixedStr >= 1072 && charcodeOfMixedStr <= 1103) {
//       krill++;
//     }
//   }
//   console.log(`Lotin harflari soni ${lotin} ta`);
//   console.log(`krill harflari soni ${krill} ta`);
//   console.log(`jami harflar soni ${krill + lotin} ga teng`);
// }

// mixedText("salom салом");


// String9. Satr berilgan. Satrdagi xamma katta lotin harflari
//  kichigiga almashtiruvchi programma tuzilsin.


// function toLower(kattaSatr) {
// console.log(kattaSatr.toLowerCase())
// }
// toLower("ASSALAMU ALAYKUM")


// String10. Satr berilgan. Satrdagi xamma katta harflarini kichigiga, kichiklarini
//  kattasiga almashtiruvchi programma tuzilsin.


/* function UPlow(mixedSatr) {
for (let i = 0; i < mixedSatr.length; i++) {
    let charCodeMixedSatr = mixedSatr.charCodeAt(i);
    let CHAR = mixedSatr[i];
    if (charCodeMixedSatr >= 65 && charCodeMixedSatr <= 90){
    console.log(CHAR.toLowerCase());
} else {
    console.log(CHAR.toUpperCase());   
}    
}
}
UPlow("SaTr")

 */