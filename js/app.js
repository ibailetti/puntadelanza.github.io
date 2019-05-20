const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const parent = document.querySelector('.nav-links');

    burger.addEventListener('click', () =>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links

        Array.prototype.forEach.call(parent.children, child => {
            if(child.style.animate){                
                child.style.animate = '';
            } else {                
                child.style.animate = `navLinkFade 0.5s ease forwards ${child / 7 + 6}s`;
            }
        });
        /*
        parent.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${child / 7 + 0.3}s`;
            }
        });
        */
    });
}

navSlide();