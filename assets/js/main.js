let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];


let celsius = fahrenheit.map(function (e) {
    return (e - 32) / 1.8;
});

let runden = celsius.map(function (e) {
    return Math.round(e);
});

console.log(runden);