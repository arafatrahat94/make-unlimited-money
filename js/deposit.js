// step one: add click handler on the deposit button:
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 : get the input value from deposit feild
    const input = document.getElementById('input-deposit');
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    if(isNaN(inputValue)){
        alert('please enter an valid ammount number to deposit')
        return;
    }
    input.value = '';
    // step4: get the current deposit ammount;
    const currentDeposit = document.getElementById('deposit-total');
    const currentDepositValueStrng = currentDeposit.innerText;
    const currentDepositAmmount = parseFloat(currentDepositValueStrng);

    // step5: now sum the newdeposit ammount with the current deposit ammount;
    const totaldeposit = currentDepositAmmount + inputValue;
    currentDeposit.innerText = totaldeposit;
    // step6: get the current balance and add input value with it;
    const currentBalance = document.getElementById('balanceCurrent');
    const currentBalanceValueString = currentBalance.innerText;
    const currentBalanceAmmount = parseFloat(currentBalanceValueString);

    const newBalance = currentBalanceAmmount + inputValue;
    currentBalance.innerText = newBalance;
})