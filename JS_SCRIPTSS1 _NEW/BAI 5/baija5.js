
let bookName = prompt("Nhap ten cua cuon sach : ");
let bookYear = +prompt("Nhap nam xuat ban cua cuon sach : ");
let currentYear = +prompt("Nhap nam hien tai : ");


console.log("Sach : " + bookName);
console.log("Nam xuat ban : " + bookYear);
console.log("Tuoi cua sach la : ", (currentYear - bookYear) + "tuoi");



alert("Tuoi cua sach la : " + (currentYear - bookYear) + " tuoi");