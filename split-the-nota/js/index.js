import { calcSum } from './modules/operations.js';

let friends = 0;
let tip = 0;
let sum = 0;


//skapa event listener på knappen

document.getElementById('calculateButton').addEventListener('click', function() {

    friends = document.getElementById('numberOfFriends').value;
    tip = document.getElementById('tip').value;
    sum = document.getElementById('sum').value;

    const total = calcSum(sum, friends, tip);

    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = total;
})

