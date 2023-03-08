// gồm key $ value lưu trử thông tin một đối tượng cụ thể
//tạo bằng {}   
//dấu , cách cặp key và value
//KEY là name sondang là VALUE           DẤU : ngăn cách giữa key và value 
 
var myInfo = {          
    name: 'Son Dang',    
   age: 18,
   address: 'Ha Noi, VN'
};

//** cách  kt lấy ra value nào cách thứ 2 thêm []
console.log(myInfo.name);
//lấy từ mykey và myintfo
var myInfo = {          
   name: 'Son Dang',    
  age: 18,
  address: 'Ha Noi, VN'
};
var myKey = 'address';
console.log(myInfo[myKey]);
//add key mới or tạo ra một biến 0r xóa đi một key value
var emaiKey = 'email';
var myInfo = {          
   name: 'Son Dang',    
  age: 18,
  address: 'Ha Noi, VN'
  [emaiKey]: 'pichey@gmail.com'
  delete myInfo.age;
};
console.log(myInfo);
lưu trử value là một funcition ko? THIS chính là (myInfo)
getName: function() {
   return this.name;
}
console.log(myInfo.getName());
thì nó là 1 function ta gọi nó là 
function-- phương thức method
Object-- THUỘC TÍNH property




