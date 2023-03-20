// disabled ko cho kích vào 
// box-shadow lóe
//

//////////////////////////////////////
// while
// let number = +prompt("Nhập vào 1 số : ");
// while(number<0){
//     number = +prompt("Sai ! Yêu cầu nhập lại");
// }
// let number;
// number = +prompt("Nhập vào 1 số");
// do{
//     if(number<0){
//         number = +prompt("sai ! Yêu cầu nhập lại:");
//     }
// } while(number<0)

// // for  qua 0=0  ok, 0<10 ok,  in ra i = 0 rồi lên i++ 
// //khi này i=1
// for(let i=0;i<10;i++){
//     console.log(`${i}`); ra từ 0 - 9
// }
// //  xét i =0 đk ok < hơn 10 in log ra 0 lên i++ =1 rồi in ra 1
// // tiếp tục 0,1,2,3,4,5,6,7,8,9 tiếp i++ lên 10 xét đk 10 ko < 10 dừng ko in ra
// let i = 0
// for(;i<10;i++){
//     console.log($`{i}`);
// }

// // i =0 là 0= 0 ko thực hiện điều kiện nên in ra log là in vô tận
// let i = 0
// for(;;i++){
//     console.log(`${i}`);
// }

// ///in ra log 0  đến 11       vì khi lặp đến 10 > 10 vẫn i ++ lên 11 <10 thì dừng break ko tăng lên i ++                                
// let i = 0
// for(;;){
//     console.log(`${i}`);
//     if(i>10){
//         break;
//     }
//     i++;
// }

// ///   in ra a vô tận vì cho biến i = 0 ko xét đk nên log gì ra đó vì đang ở vòng lặp for
// let i = 0
// for(;;){
//     console.log("a......");
// }

// in ra 2,4,6,8 vì qua tăng lên 3 thì 3 ko chia hết cho 2 nên ko thực hiện đc đk tăng lên 1 in ra 4 ok
// for (let i = 2; i <=10; i++) {
//     if (i % 2 != 0) {
//         continue;
//     }
//     console.log(`${i}`);
// }
//  ko in ra gì hết
// for (let i = 2; i <= 10; i++) {
//      if (i % 2 != 0)    
//     console.log(`${i}`); 
// }

//  ko in ra gì hết
// for (let i = 2; i <= 10; i++) {
//       console.log(`${i}`);
//     if (i % 2 != 0) 
// }


//  ko in ra gì hết vì đk sai

// for (let i = 2;i <= 10 ; i+=2) {
//     if (i % 2 == 0){    //2%2=1  không đúng ss vs 0
//         continue;
//     }
//     console.log(`${i}`);
// }

