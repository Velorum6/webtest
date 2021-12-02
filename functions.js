var options = [
    "48Y5K-Q84MC-N6LVA-IG8QV-54WJ9",
    "SSFSY-S0QUP-42ICN-I43KE-F1E8S"
];

function help(){
    var randOptionNum = Math.floor(Math.random() * options.length);

    document.getElementById('doThis').innerHTML = options[randOptionNum];
}