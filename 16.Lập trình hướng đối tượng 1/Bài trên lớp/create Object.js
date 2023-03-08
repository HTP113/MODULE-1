//setter: kiểm soát việc cập nhật bất hợp pháp

// getter kiểm  soát việc truy cập bất hợp pháp
let person = {}; // đối tượng  rỗng {}
//cập nhật đối tượng vào cặp rỗng
{
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music' , 'skiing'],
    bio: function () {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old.He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    //4 thành phần trên là dữ liệu  => thuộc tính (property)
greeting: function () {
    alert('Hi! I\'m ' + this.name[0] + '.');
}
};
person.bio();
let objectName = {
    member1Name: member1Value,
    member2Name: member2value,
    member2Name: member3value,
}
//2 thành phần trên là dữ liệu thuộc tính => phương thức(method)
"." // truy xuất các pt và thuộc tính của đối tượng
person.age
person.interests
//Sub namespaces(không gian tên phụ)
name: { 
    first: 'Bob',
    last: 'Smith'
},
//tọa ra một subnamespace thêm dấu .
name [0]
name[1] // thay bằng
person.name.first
person.name.last
//có thể dấu [ ''] thay dấu chấm
//định nghĩa lớp trong java
//sd hàm sd tạo đối tượng ds từ khóa new dùng this để truy xuất 
//sd hàm bên trong 
// getInfo() thông qua hàm get..Info()
// kb hàm bawng thuộc tính prototype
//sd object literals tạo đối tưởng và mảng trong
let o = {}; // thay cho let 0 = new Object();
let a = [];// thay cho let a = new Array();
singleton khó ít dùng
