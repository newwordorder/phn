jQuery( document ).ready(function() {
    var scenes = Array.from(document.querySelectorAll('[data-scene="scene"]'));
    scenes.map(scene => {new Parallax(scene, {
            pointerEvents: true,
            relativeInput: true,
        });
    })

    let tl = new TimelineMax();

    tl
    .set('#site-logo',{left:'-12rem'})
    .set('#toggleMenu', {right:'-6rem'})
    .set('.header__circle--primary', {left:'-32.25rem'})
    .set('.header__circle--accent', {top:'-67.75rem'})
    .set('.header__circle--dark', {top:'-188.875rem'})
    .to('.preloader-wrap', 0.6, {opacity:0})
    .to('.header__circle--accent', 0.6, {top:'-57.75rem', ease: Power2.easeOut, delay: 0.4})
    .to('.header__circle--dark', 0.6, {top:'-178.875rem', ease: Power2.easeOut, delay: -0.5})
    .to('.header__circle--primary', 0.8, {left:'-12.25rem', ease: Power2.easeOut, delay:-0.7})
    .to('#site-logo', 0.6, {left:'2rem', ease: Power2.easeOut,  delay: -0.4})
    .to('#toggleMenu', 0.6, {right:'2rem',  ease: Power2.easeOut, delay:-0.6})
    .set('.preloader-wrap',{display:'none'})

});