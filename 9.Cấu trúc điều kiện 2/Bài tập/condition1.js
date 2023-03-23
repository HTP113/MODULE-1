// Bài 1
function divisible(){
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    if (a % b == 0) {
        document.getElementById('result1').innerHTML = "a chia hết cho b";
    }else document.getElementById('result1').innerHTML = "a không chiah hết cho b";
};
có thể use thẻ div or thẻ span để thay thế thẻ output
Bài 2
function yearOld() {
    let edge = document.getElementById('ADGE').value;
    // if(isNaN(edge)){
    //     document.getElementById('ADGE2').innerHTML = "Vui lòng nhập lại số";
    //     return;
if (edge < 15) {
    document.getElementById('ADGE2').innerHTML = "Học sinh không đủ tuổi vào lớp 10";
} else document.getElementById('ADGE2').innerHTML = "Học sinh đủ tuổi vào lớp 10";
};

// Bài 3
function
    checkNumber() {
    let number = parseInt(document.getElementById('Number').value);
    if (number < 0) {
        document.getElementById('NUMBER').innerHTML = number + "< 0";
    } else if (number == 0) {
        document.getElementById('NUMBER').innerHTML = number + "= 0";
    } else {
        document.getElementById('NUMBER').innerHTML = number + "> 0";
    }
}
// cách khác dùng hàm alert
function checkNumber() {
    let number = parseInt(document.getElementById('number3').value);
    if (number < 0) {
        alert(number + "< 0");
    }else if (number == 0) {
        alert (number + " = 0");
    }else alert (number + "> 0");
};
//Bài 4
function maxNumber() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number').value);
    let num3 = parseInt(document.getElementById('number6').value);
    if (num1 > num2) {
        if (num1 > num3) {
            document.getElementById('result').innerHTML = num1 + " là số lớn nhất";
        } else{
            document.getElementById('result').innerHTML = num3 + "là số lớn nhất";
        }
    }else if (num2 > num3) {
        document.getElementById('result').innerHTML = num2 + " là số lớn nhất";
    }else 
    document.getElementById('result').innerHTML = num3 + " là số lớn nhất";
}
function maxNumber(){
    let a = parseInt(document.getElementById('number4'))
}



cách khác dùng max
function maxNumber(){
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let num3 = parseInt(document.getElementById('number3').value);
    let max = num1;              //  cho num1 là số lớn nhất
    if (num2 > max){            //  nếu num2  lớn hơn num1  thì là số lớn nhất
        max = num2;
    }
    if (num3 > max) {          // num3  lớn hơn num2 thì là số lớn nhất
        max = num3;   
    }
    document.getElementById('result').innerHTML = max + "là số lớn nhất";
}
sử dụng if ,elseif,else và && toán tử 
function maxNumber() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let num3 = parseInt(document.getElementById('number3').value);

    if (num1 >= num2 && num1 >= num3) {
      document.getElementById('result').innerHTML = num1 + " là số lớn nhất";
    } else if (num2 >= num1 && num2 >= num3) {
      document.getElementById('result').innerHTML = num2 + " là số lớn nhất";
    } else {
      document.getElementById('result').innerHTML = num3 + " là số lớn nhất";
    }
  }
//Bài 5 cách này có sai gì không ra kết quả
function rank() {
    let text1 = Number(document.getElementById('test1').value);
    let text2 = Number(document.getElementById('test2').value);
    let text3 = Number(document.getElementById('test3').value);
    let avg = (test1 + test2 + test3)/3;
    let rank;
    if (avg >= 8) {
        rank = "Gioi";
    }else if (avg >= 6.5) {
        rank = "Khá";
    }else if (avg >= 5) {
        rank = "Trung bình";
    }else if (avg >= 3.5){
        rank = "Trung bình -Yếu";
    }else{
        rank = "Yếu";
    }

let resultAvg = document.getElementById('result');
resultAvg.innerHTML = `Điểm trung bình: ${avg} - Học lực: ${rank}`;
}
sử dụng cách này 
function Avg() {
    let test1 = Number(document.getElementById('test1').value); // phương thức Number() trước document để biến đổi thành kiểu số 
    let test2 = Number(document.getElementById('test2').value);
    let test3 = Number(document.getElementById('test3').value);
    //let avg = (test1 + 2 * test2 + 3 * test3) / 6; có thể dùng cách dưới gọn hơn
    let avg = (test1 + test2 + test3)/3
    if (avg >= 8) {
        document.getElementById('result').innerHTML = "Điểm trung bình: " + avg + " giỏi";
    } else if (avg >= 6.5) {
        document.getElementByIdById('result').innerHTML = "Điểm trung bình: " + avg + "khá";
    } else if (avg >= 5) {
        document.getElementByIdById('result').innerHTML = "Điểm trung bình: " + avg + "trung bình";

    } else if (avg >= 3.5) {
        document.getElementByIdById('result').innerHTML = "Điểm trung bình: " + avg + "trung bình-yếu";
    }else
    document.getElementByIdById('result').innerHTML = "Điểm trung bình: " + avg + "yếu";
};
//Bài 6:
function total(){
    let sales = parseInt(document.getElementById('sales').value);
    let result;
    if (sales >= 10000) {
    result = sales * 0.15;
        document.getElementById('result').innerHTML = result + ("hoa hồng 15%");
    }else if (sales >= 5000) {
    result = sales * 0.1;
        ocument.getElementById('result').innerHTML = result + ("hoa hồng 10%");
    }else if (sales >= 1000) {
    result = sales * 0.05;
        document.getElementById('result').innerHTML = result + ("hoa hồng 5%");
    }else
    document.getElementById('result').innerHTML = result + ("không đạt doanh số");
};
