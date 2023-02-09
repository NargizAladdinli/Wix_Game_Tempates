const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();


//dark Mode code
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        button.style.background = "#111"
        button.style.color = "white"
        button.innerText = "Dark"
    }
    else{
        // button.style.background = "whtite"
        // button.style.color = "#111"
        button.innerText = "Light"
    }
})
