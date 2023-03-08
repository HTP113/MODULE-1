//canvas trong html vẻ hình anh trong trang wed
<canvas id="myCanvas" width="200" height="100"></canvas>
//width & height là thuộc tính
/ là thuộc tính truy xuất đối tượng canvas
// vẽ đường thảng sd pt lineTo()
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveto(o,o);
ctx.lineTo(200.100);
ctx.stroke();
//vẽ đường tròn sd pt arc()
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPanth();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
//VẼ CHỮ sd pt fillText() or strokeText()
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = 30px Arial;
ctx.arc(95,50,40,0,2*Math.PI);
ctx.fillText("Hello world,10,50");
// hiệu ứng Gradient sd pt createLinearGradient(),addColorStop() để tạo
// hiệu ứng gradient tròn sd pt createRadialGradient()