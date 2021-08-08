let btn = document.querySelector('.btn');
let light = document.querySelector('.light')

btn.addEventListener('click' , function(){
    btn.classList.toggle("active");
    light.classList.toggle('on');
});