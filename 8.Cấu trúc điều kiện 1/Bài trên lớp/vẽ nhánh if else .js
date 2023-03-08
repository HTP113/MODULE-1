//câu lệnh rẽ nhánh if /else
var date = 2;  //if đc thực hiện
if (date == 2) {
console.log('Hôm nay là thứ 2');
}else if (date > 0 ){ // vẫn là if date == 2 đúng vì chỉ có 1 đk đc tính
    console.log('hôm nay là thứ 6');
}else if (date ===3) { // nếu số 3 thì if bỏ qua và 3 thực hiện
    console.log('Hôm nay là thứ ba');
}else if (date ===4) {  //
    console.log('Hôm nay là thứ tư');
}else { //nếu if else vẫn ko đúng thì sẽ xuất hiện else
    console.log('Không biết');

}
//lệnh rẽ nhánh switch
var date = 2;
switch(date) { //date tính toán để lấy gt ra
    case 2: // case sd toán tử 3 dấu bằng
        console.log('Hôm nay là thứ 2');
        break;// nó là thoát dừng lại ngay case thứ 2
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
         break;
         case 6: //or cách gộp
         case 7:
         case 8:
            console.log('Hôm nay là thứ 6, 7, 8');
            break
            default:
                console.log('Không biết');
}