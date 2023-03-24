// // tính tổng từ 1 đến 10
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//     total += i;
// }
// console.log(`Tổng là: ${total}`);// in ra tổng là 55

//   `${}` cú pháp là một chuổi template literal  nhúng gt vào ký tuwj``backtick 
// biến đổi thành chuỗi


//++// định nghĩa hàm sum
// let total = sum(1,10); // 1,10 là số đối  arggument
// function sum(start, end){   // start,end là tham số parameter
//     let total = 0;
//     for(let i=start;i<=end;i++){
//         total +=i;
//     }
//     return total;  
// }
// let total1 = sum(50,100);
// let total2 = sum(1,1000);
// console.log(`Tổng la: ${total}`); //10 
// console.log(`Tổng la: ${total1}`);//100
// console.log(`Tổng la: ${total2}`);// 1000 vì đk start <= end tức tham số và số đối cuối

// //tính tổng 50-100\
// let total = 0;
// for (let i = 50; i <= 100; i++) {
//     total += i;
// }
// console.log(`Tổng là: ${total}`); /// tổng là 3285
 //== có thể dùng cách này tính tổng    total = (start + end) * (end - start + 1) / 2;


// kiểm tra số chẵn
// function isEven(numbers){
//     if (numbers % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
    
// }
// let check = isEven(5); // trả về false
// console.log(check);
// //
//  đây cũng là biến toàn cục (global variable)  nhưng ở bên trong có biến cục bộ
let total = 0;
function sum(start, end) {
    let total = 0;     /// biến cục bộ ở trong một biến khác có tên total cũng được khai báo bên trong phạm vi của hàm sum,
    // và giá trị của biến này chỉ tồn tại trong quá trình thực thi của hàm sum.
    for(let i = start;i <= end;i ++){
        total += i;
    }
    return total;
}
sum(1,3); // sẽ ko ảnh hưởng bên ngoài 
console.log(total); // kết quả là 0
// sau khi gọi hàm sum(1,3), giá trị của biến total sẽ vẫn là 0, 
//giá trị mặc định ban đầu. của biến toàn cục

// đây là biến toàn cụ vì được khai báo let total = 0 ở ngoài
// let total = 0;
// function sum(start,end){
//     for(let i = start; i <= end; i ++){
// total += i;
//     }
//     return total;
// }
// sum(1,3); //ổng của 1+2+3 từ lần gọi hàm trước .

// sum(2,4);  //và 2+3+4 từ lần gọi hàm mới nhất)
// console.log(total);   sẽ là 15

