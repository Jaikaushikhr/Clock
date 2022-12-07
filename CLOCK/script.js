let info;

function animate(){

info = new Date();
document.getElementById('second').style.rotate = 6*info.getSeconds()+"deg";
document.getElementById('minuts').style.rotate = 6*info.getMinutes()+"deg";
document.getElementById('hour').style.rotate =30*info.getHours()+"deg";


    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
maang