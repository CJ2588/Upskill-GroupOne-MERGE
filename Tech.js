const btn = document.getElementById('menubtn');
const nav = document.getElementById('menu')        

btn.addEventListener( 'click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('open')
})