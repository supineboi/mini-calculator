let calculation = ''
let isNum1 = true;
let isOp = false;

// click on Numbers
$('.num').click( (event) => {
    let num = event.target.innerText;

    if(num == '.'){
        console.log("dot check");
        let isDot = calculation.includes('.');

        if(isDot){
            return;
        }
    }

    calculation += num;

    if(isNum1)
    $('.num1').text(calculation);

    else
    $('.num2').text(calculation);
})

// Making all fields default
$('.clear').click( (event) => {
    $('.num1').text('')
    $('.num2').text('')
    $('.operator').text('')
    calculation = '';
    isNum1 = true;
    isOp = false;
})

// Click on any Operator
$('.sign').click( (event) => {

    // if first number not entered default will be 0
    let num1 = $('.num1').text();
    if(!num1){
        $('.num1').text('0');
    }

    if(!isOp){
        let op = event.target.innerText;
        $('.operator').text(op);
        isNum1 = false;
        calculation = '';
        isOp = true;
    }
})

function calculationResult(num1,num2,op){
    let result = 0;
    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '÷':
            result = num1 / num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
    }

    if(!Number.isInteger(result))
        return result.toFixed(2);

    return result;
}

// Perform Calculation
$('.equal').click( () => {
    isNum1 = true;

    let num1 = Number($('.num1').text());
    let num2 = Number($('.num2').text());
    let op = $('.operator').text();

    let result = calculationResult(num1,num2,op);
    
    $('.num1').text(result);
    $('.num2').text('');
    $('.operator').text('');
    isOp = false;

    if(result)
    calculation = String(result); 
    else
    calculation = ''
})