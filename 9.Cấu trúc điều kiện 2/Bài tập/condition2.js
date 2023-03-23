////Bài 1:
// function changeTemp() {
//     let temp = document.getElementById("temp").value;
//     let from = document.getElementById("From").value;
//     let to = document.getElementById("To").value;
//     if (from == "c" && to == "f") {
//         let Temp1 = (Number(temp) * 9) / 5 + 32;
//         document.getElementById("result").innerHTML = Temp1 + " độ F";
//     } else if (from == "c" && to == "c") {
//         document.getElementById("result").innerHTML = temp + " độ C";
//     } else if (from == "f" && to == "c") {
//         let Temp2 = ((Number(temp) - 32) * 5) / 9;
//         document.getElementById("result").innerHTML = Temp2 + " độ C";
//     } else {
//         document.getElementById("result").innerHTML = temp + " độ F";
//     }
// }


////Bài 2:
// function unitConver() {
//     let unit = document.getElementById("unit").value;
//     let from = document.getElementById("from").value;
//     let to = document.getElementById("to").value;
//     if (from == "m" && to == "ft") {
//         document.getElementById("result").innerHTML = Number(unit)*3.2800 + " ft";
//     } else if (from == "m" && to == "ft") {
//         document.getElementById("result2").innerHTML = unit + " m";
//     } else if (from == "if" && to == "m") {
//         document.getElementById("result").innerHTML = Number(unit) / 3.2800 + " m";
//     } else {
//         document.getElementById("result").innerHTML = unit + " ft"
//     }
// }
//

////Bài 3:
// function acreageS(){
//     let num = document.getElementById('Edge').value;
//     document.getElementById('result').innerHTML = Number(num)*Number(num);
// }


// //Bài 4:
// function rectangleS () {
//     let a = document.getElementById('A').value;
//     let b = document.getElementById('B').value;
//     document.getElementById('result').innerHTML = Number(a)*Number(b);
// }

// //Bài 5:
// function triangleS(){
//     let a = document.getElementById('A').value;
//     let b = document.getElementById('B').value;
//     let area = (Number(a)*Number(b))/2;
//     document.getElementById('result').innerHTML = area;
// }

// //Bài 6:
// function equation() {
//     let a = document.getElementById('A').value;
//     let b = document.getElementById('B').value;
//     document.getElementById('result').innerHTML = - b/a;
// }

// Bài 7:
function equation() {
    let a = document.getElementById('A').value;
    let b = document.getElementById('B').value;
    let c = document.getElementById('C').value;
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        x1 = (- b + Math.sqrt(delta)) / (2 * a);
        x2 = (- b + Math.sqrt(delta)) / (2 * a);
        document.getElementById('result').innerHTML = ("Phương trình có hai nghiệm phân biệt: x1 = " + x1  +' và x2 = ' +x2);

    } else if (delta == 0) {
        x3 = -b / (2 * a);
        document.getElementById('result').innerHTML = ("Phương trình có nghiệm kép : x = " + x3);
    }else document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
}

