// CÂU LỆNH IF
// // xếp loại học lực cấp 3
// // 8<= dtb < 10 : giỏi
// // 5<= dtb < 8:khá
// // 0<= dtb < 5:yếu

// let dtb = 15;
// if (dtb >= 8 && dtb < 10) {    // 15>=8 TRUE
//     console.log("giỏi");           //&& 15<10 FALSE    VẬY LÀ FALSE
// }
// if (dtb >= 5 && dtb < 8) {         //15 >= 5 TRUE

//     console.log("khá");            ///&& 15<8 FALSE    VẬY LÀ FALSE
// }
// if (dtb >= 0 && dtb < 5) {             //15>=0 TRUE 
//     console.log("yếu");            //&& 15<5 FALSE    VẬY LÀ FALSE
// }
// => TRUE && FALSE SẼ LÀ FALSE

/---------- VIẾT GỌN if, else(if)
if (dtb >= 8 && dtb <= 10) {
    console.log("giỏi");
} else {
    if (dtb >= 5 && dtb < 8) {
        console.log("khá");
    } else {
        if (dtb >= 0 && dtb < 5) {
            console.log("yếu");
        }else{
            console.log("điểm không hợp lệ");
        }
    }
}
//câu lệnh if,else if
if(dtb >= 8 && dtb <= 10){
console.log("giỏi");
}else if(dtb >= 5 && dtb <= 8){
    console.log("khá");
}else if (dtb >= 0 && dtb <= 5){
    console.log("yếu");
}else{
    console.log("điểm không hợp lệ");
}






// CÂU LỆNH  IF ELSE cơ bản
if (a > 0) {
    console.log("Số dương");
}
if (a < 0) {
    console.log("Số âm");
}
//VIÉT GỌN
if (a > 0) {
    console.log("Số dương");
} else {
    console.log("Số âm");
}


var a1 = 6;
var a2 = 8;
if(a1>a2){
    console.log(`Số lớn nhất là a1`);
}else{
    console.log(`Số lớn nhất là a2`);
}
 // or ta dùng cách 
 a1>a2 ? console.log(`Số lớn nhất là a1`) : console.log(`Số lớn nhất là a2`);
 ///
 var a1 = 6;
var a2 = 8;
var a3 = 1;
if (a1 > a2 && a1 > a3){
    console.log("a1 là max");
}else{
    if(a2 > a1 > a3) {
        console.log("a2 là max");
    }else{
        console.log("a3 là max");
    }
}
// or dùng cách
 a1 > a2 && a1 > a3 ? console.log("a1 là max") : 
 ((a2 > a1 && a2 > a3) ? console.log("a2 là max") :
 console.log("a3 là max"))
