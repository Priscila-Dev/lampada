const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');
const ligar = document.querySelector('ligar');
const desligar = document.querySelector('desligar');
const trocar = document.querySelector('trocar');

const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.play();
}

const stopSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.pause();
}

function isLampBroken () {

    return lamp.src.indexOf ('quebrada') > -1; 
}

function lampOn () {
    if (!isLampBroken()) {
        lamp.src = '../img/ligada.png';
    }
}

function lampOff () {
    if (!isLampBroken()) {
        lamp.src = '../img/desligada.png';
    }
}

function lampOnOff (event) {
    if (turnOnOff.textContent === 'Ligar') {

        lampOn();
        playSom('interrupitor');
        turnOnOff.textContent = 'Desligar';
        turnOnOff.classList.add('desligar');

        

    }else if (turnOnOff.textContent === 'Trocar Lâmpada') {

        lamp.src = '../img/desligada.png'
        turnOnOff.textContent = 'Ligar';
        turnOnOff.classList.remove('trocar');
        turnOnOff.classList.add('ligar');
    
    } else {

    lampOff();
    playSom('interrupitor')
    turnOnOff.textContent = 'Ligar';
    turnOnOff.classList.remove('desligar');
    turnOnOff.classList.add('ligar');
    
    }
}
        
function lampBroken () {
    lamp.src = '../img/quebrada.png';

    playSom('quebrando')
    turnOnOff.textContent = 'Trocar Lâmpada';
    turnOnOff.classList.remove('ligar');
    turnOnOff.classList.remove('desligar');
    turnOnOff.classList.add('trocar')
}

turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', () => {
    lampOff ();
    if (turnOnOff.textContent === 'Desligar') {
        turnOnOff.textContent = 'Ligar';
        turnOnOff.classList.remove('desligar');
        turnOnOff.classList.add('ligar');
    }
});
lamp.addEventListener ('dblclick', lampBroken);