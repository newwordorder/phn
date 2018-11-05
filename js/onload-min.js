jQuery( document ).ready(function() {
    var scenes = Array.from(document.querySelectorAll('[data-scene="scene"]'));
    scenes.map(scene => {new Parallax(scene, {
            pointerEvents: true,
            relativeInput: true,
        });
    })

});