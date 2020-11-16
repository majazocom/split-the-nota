let calcSum = (sum, friends, tip) => {
    console.log(sum, friends, tip);
    //räkna ut den totala summan
    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;

    //dela på antalet vänner
    const friendSum = divideTotal(total, friends);
    //returnera varderas summa
    console.log('each friend should pay: ' + friendSum)

    return friendSum;
}

let divideTotal = (total, friends) => {
    const sumDivided = total / parseInt(friends);
    return sumDivided;
}

let calculateTip = (sum, tip) => {

    const calculatedTip = parseInt(sum) * parseFloat(tip);

    return calculatedTip;
}

export { calcSum };