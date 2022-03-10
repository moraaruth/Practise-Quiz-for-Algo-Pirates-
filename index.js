let earth = {
    small: 'country',
    wide: 'continent'
    }
    
    console.log(earth.small);


    let celsius = document.getElementById('celsius');
    let fahrengeit = document.getElementById('fahrengeit');

    celsius.oninput = () => {
        let output = (parseFloat(celsius.value)* 9) / 5 + 32;
        fahrengeit.value = parseFloat(output.toFixed(2));


    };

    fahrengeit.oninput = () => {
        let output = ((parseFloat(fahrengeit.value) - 32) * 5) / 9;
        celsius.value = parseFloat(output.toFixed(2));


    };


