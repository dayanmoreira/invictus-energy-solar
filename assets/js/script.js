window.addEventListener("scroll",function(){
  let header = document.querySelector('.header')
  header.classList.toggle('rolagem',window.scrollY>50)
})

// let $html = document.querySelector('html')
// let $checkbox = document.querySelector('dark')

// $checkbox.addEventListener('change',function(){
//   $html.classList.toggle('dark-mode')
// })

gsap.from('.titulo', {opacity:0, duration:1, delay:1, y:10})
gsap.from('.descricao', {opacity:0, duration:1, delay:1.2, y:10})
gsap.from('.btn', {opacity:0, duration:1, delay:1.6, y:10})
gsap.from('.logo', {opacity:0, duration:1, delay:2, y:10})
gsap.from('.imagem', {opacity:0, duration:1, delay:2, y:10})
gsap.from('.navbar .nav_item', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})

document.addEventListener('mousemove',move);
function move(e){
  this.querySelectorAll('.mover').forEach(layer => {
    const speed = layer.getAttribute('data-velo')
    const x = (window.innerWidth - e.pageX*speed)/120
    const y = (window.innerWidth - e.pageY*speed)/120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}


document.querySelector('#menu').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#fechar').onclick = () =>{
  navbar.classList.remove('active');
}
