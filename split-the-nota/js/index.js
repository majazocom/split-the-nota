import { calcSum } from './modules/operations.js';

//skapa event listener på knappen

document.getElementById('calculateButton').addEventListener('click', function() {

    const friends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;
    const sum = document.getElementById('sum').value;

    const total = calcSum(sum, friends, tip);

    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = total;
})

