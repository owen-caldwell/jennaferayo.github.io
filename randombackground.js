// random background color
function randomBg() { // function definition
    const background = document.getElementById('bgimg');
    let randomBackground = Math.floor(Math.random() * 4) + 1;
    console.log('Random hue:', randomBackground);
    // apply color with style object using HSL color mode
    background.src = 'background/' + randomBackground + '.gif';
}
randomBg()