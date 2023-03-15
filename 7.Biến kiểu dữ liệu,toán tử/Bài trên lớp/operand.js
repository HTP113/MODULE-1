
// số học:+,-,*,%(chia lấy dư),()
// var a = 5;
// var b = "5";

// so sánh ==,!=(khác bằng),>=,<=,=== (s2 giá trị và kiểu dữ liệu)
// console.log(a==b); 5==5 true
// console.log(a!=b); 5!=5 false
// console.log(a===b); 5=5,nhưng khác kiểu dữ liệu =>false

// logic &&(2 đk true mới kq true),||(or:chỉ cần 1 đk true sẽ kq true),!(khác)
// var a = true;
// var b = false;
// console.log(a&&b); // false
// var a = 5 == "5"; / true
// var b = 5 === "5"; /false
// console.log(a&&b); //false vì 1 đk sai

// var a = 5 == "5"; / true
// var b = 5 === "5"; /false
// var c = !b;        /  true
// console.log((a||b)&& c); a or b true mà && c true thì ra true

// gán +=,*=,-=,%=,**=(số  mũ) ++,--
// (+=) 
// let a = 5;
// console.log(a);
//  a += 5;  // a = a(cũ) + 5; gán a = +=5 là in ra 10
// console.log(a);  //= 10
// (%=)
// a %= 2; // a = a%2
// console.log(a); (chia lấy số dư = 0 vì 10/2=5)

// let a = 2;
// console.log(a); // a **=4;
// (++)
// let a = 5;
// a++; // a = a + 1; 
// console.log(a);// = 6 
// ++a;   // a = a + 1;
// console.log(a); = 7
// let a = 5;
// let b = ++a ==6;  //cộng trc ss sau  là true
// console.log(b); ==6 true
// let a = 5;
// let b = a++ !==6; // công sau là a++ = 5 và khác 6 true
// console.log(b); =6 true
// console.log(a); a qua biểu thức ss tăng lên in ra 6
// let a = 5;
// let b = a++ * 5 + --a*2;

// thì a++ là 5 vì có biểu thức *5 =25 thì tăng lên 6
//  --a là trừ lui 1 giá trị 5*2=10 mà  25+10 =35
// console.log(a); =5
// console.log(b); = 35
//  nối chuổi
// let a = 5
// let str = ""; // số + chuỗi ra chuỗi + chuỗi thì nối vô luôn
// console.log(a + str + "xxx");
// console.log(1 +2 + "3" + 4 + 5); số + chuỗi ra 3345 nối chuỗi
// số 1+2 =3 mà + vs "3" thì ra "33"
// "33"+4+5
// ra "334"
// tiếp "3345"
//   NaN NOTANUMBER
//  let a = 5
//  let b;
//  console.log(a + b); ra NaN




