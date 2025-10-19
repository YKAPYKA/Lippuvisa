function tarkastaVastaukset() {
    var laskuri = 0;
    var inputs = document.querySelectorAll('.arvaus');
    inputs.forEach(function(input) {
        var userInput = input.value.toLowerCase(); // toLowerCasen avulla vastaukseksi kelpaa sekä "chile", että "Chile"
        var oikeaVastaus = input.dataset.correctAnswer.toLowerCase();
        var image = input.parentElement.querySelector('img');
        if (userInput === oikeaVastaus) {
            image.style.border = '10px solid #48ff00'; // jos vastaus on oikea, tulee siihen vihreät kehykset
            laskuri++;
        } else {
            image.style.border = '10px solid #ff0000'; // muuten punaiset kehykset
        }
    });
    alert('Oikeita vastauksia : ' + laskuri);
}

document.getElementById('tarkastaVastaukset').addEventListener('click', tarkastaVastaukset);


anime({
    targets: '#ball',
    translateX: [
        { value: 0, duration: 0 },
        { value: window.innerWidth - document.getElementById('ball').offsetWidth, duration: 4000 }, //innerWidthin ja offsetWidhtin avulla sain pallon liikkumisen määrätymään ikkunan leveyden kanssa kun sivun avaa/päivittää
        { value: 0, duration: 4000 }   
    ],
    rotate: [
        { value: '360deg', duration: 4000, easing: 'linear' },
        { value: '-90deg', duration: 4000, easing: 'linear' }  //-degreen avulla sain pallon pyörimään eri suuntaan takaisinpäin mennessä, lukua piti myös pienentää, jotta pyörintänopeus näyttäisi samalle toiseen suuntaan mennessä
    ],
    easing: 'linear',
    loop: true
});

function lippuOpacity() {
    var opat = document.querySelectorAll('.lippu img');
    opat.forEach(function(opacity) {
        anime({
            targets: opacity,
            opacity: [0, 1],
            duration: 1500, 
            easing: 'easeInQuad',
            delay: 300  // lisäsin pienen delayn, että taustakuvan kartta kerkeää näkyä hetken ennen kuvien ilmestymistä
        });
    });
}

window.addEventListener('load', lippuOpacity);