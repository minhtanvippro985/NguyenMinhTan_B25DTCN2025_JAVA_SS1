let bookName = prompt("Nhap ten sach cua ban");
bookName = bookName.trim()
let bookAuthor = prompt("Nhap ten tac gia : ");
bookAuthor = bookAuthor.trim();


let bookYear = +prompt("Nhap nam xuat ban");
let bookPrice = +prompt("Nhap gia tien cua ban");
let bookStorage = +prompt("Nhap so luong trong kho");


bookAuthor = bookAuthor.toUpperCase()
bookName = bookName.toUpperCase()

const currentYear = new Date().getFullYear();
let authorcode = bookAuthor.slice(0, 3);
let bookID = Math.floor(((Math.random() * 1000) + 1));


console.log("Ma sach :" + authorcode + bookYear + "-" + bookID);
console.log("Ten sach : " + bookName);
console.log("Tac gia : " + bookAuthor);
console.log("Nam xuat ban : " + bookYear);
console.log("Tuoi sach: " + Number(currentYear - bookYear));
console.log("Tong gia tri : " + Number(bookPrice * bookStorage));
console.log("Trong kho : " + bookStorage);
console.log("Ngan le goi y : ke so " + (Math.floor((Math.random() * 10) + 1)))



