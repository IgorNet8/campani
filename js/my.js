const bdnopen=document.querySelector(".byssnes-buton")
const modall=document.querySelector(".modall")
const clse = document.querySelector('.modall-close')



bdnopen.onclick=function(){
    modall.classList.add('actyv')   
}


clse.onclick=function(){
    modall.classList.remove('actyv')   
}
