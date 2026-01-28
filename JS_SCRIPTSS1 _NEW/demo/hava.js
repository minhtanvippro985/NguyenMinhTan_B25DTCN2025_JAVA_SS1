//alert("hhellowor inside lmao")

// var declaration 
let number = 10 ;

//recall a value 
// dang nam trong 1 bien

number = 20 ;

// console (number)

// Assignment operator ( dau bang )
let hens = 67 ; 
// const hens = 67 ;  // khong cong vao

hens = hens + 20 ;

let age = 15 ;




// console.log(age) ; // print ra console


// //const
// Dùng để khai báo hằng số – giá trị không thể thay đổi sau khi gán
// Dùng cho các giá trị cố định, không nên bị ghi đè.
// Ví dụ://

 let input = prompt("Moi ban nhap");  // nhap prompt

 alert("ban" + "ten la"  + input); // len ngoai

 console.log(input) ;  // ben trong console

//  window.alert()

//  window.print()  // ghi truc tiep

//  window.prompt() // write

//  window.confirm("chac chan")

// chuyen prompt thanh so thi dung  
// // parseFloat() va number()


  let soa = prompt("Moi ban nhap so a");

  let sob =  prompt("Moi ban nhap so B");

//   let soa = parseInt(prompt("Moi ban nhap so a"));
//   let sob =  parseInt(prompt("Moi ban nhap so B"));

    let result =  Number(soa) + Number(sob) ;
    // let result =  +soa + +sob ;

    //output a + b 
    console.log(result);
    alert("dap an la " + result );

// data type 
    parseInt("10.5") // phan nguyen 10
    parseFloat("10.5") // lay phan ca thap phan 10.5

// primitive - nguyen thuy 
// string , number

// Nan - not a number

//reference - tham chieu
// convert : string to number


// toan tu
    let num1 = 10 ; 
    let num2 = 20
    console.log(num1 + num2) ; // 30
    console.log(num1 - num2) ; // -10
    console.log(num1 * num2); // 200
    console.log(num1 / num2); // chia
    console.log(num1 ** num2) ; //10^20
    console.log(num1 % num2) ; //10% chia lay du


    
    toFixed(n) // lam tron so

    isNaN(value)// kiem tra gia tri co phai nan

    Number.isInteger(value) // kiem tra so nguyen


    let first = "zigger" ;

    let mssg = "hello ninja welcome to java" ;
    console.log("mssg")


    console.log(mssg[0]);// lay ki tu dau tien

    console.log(mssg.length); // lay do dai cua ki tu

    //template literal , backtick `````
    // ${lmaoer}  -- template

    let lmaoer = 40 ;

    let randomstuff = `hello , \n ${lmaoer} stupid ni `;


    console.log(randomstuff);
    
    // string escape  
    // \n -- newline
    // \' - nhay don
    // \" nhay kep
    //  \\ gach cheo


    //string.method
     randomstuff.toUpperCase();
     randomstuff.trim(); // loai bo nulltext (space)


     //string.method(arg)
    
     let rootstrig = "hello ninja";

     let eindex = rootstrig.indexOf("e");
     console.log(eindex) ;
    let sliced = rootstrig.slice(0 ,4);
     console.log(sliced) ;  
     
     rootstrig.replace("ninja" , "nigga");
     rootstrig.includes("ninja") // kiem tra co ko
     rootstrig.split(); // mang phan tu


    
    //math object

        //math.PI ----so pi
        // math.round(4.9) ---lam tron
        // math.abs(-456) ----gia tri tuyet doi
        // math.pow(2,5) ----2 mu 5 (so mu)
        // math.floor(3.999) -- so nguyen
        //math.cell / lam tron len