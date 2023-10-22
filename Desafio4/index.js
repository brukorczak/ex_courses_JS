
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value 
}

function formatSplit (value){
    if(value === 1)
    return value + ' person';
    else 
    return value + ' people';
}

function update(){
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value
    console.log(bill,tipPercent,split)

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split; 
 
    document.getElementById('tipPercent'). innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}

// function carLoan(loan, rate= 2.9, years= 5){
//     return(loan * rate / 100 * years)+ loan 
// }
// console.log(carLoan(20000))

// function price(){
//     let total = 0
//     for (let value of arguments)
//         total += value 
//         return total
// }
// console.log(price(10,20.,50))

// //function delcaration
// function movie(){
//     console.log('chihiro');
// }
// movie()

// //function expression
// const car = function(){
//     console.log('tesla');
// }
// car()

// const truck = car
// truck()