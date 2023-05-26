// step1 :
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step2:
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawValueString = withdrawInput.value;
    const withdrawAmmount = parseFloat(withdrawValueString);
    withdrawInput.value = ''
    if(isNaN(withdrawAmmount)){
        alert('please enter an valid ammount number');
        return;
    }
    // step3:
    const currentWithdraw = document.getElementById('withdrawCurrent');
    const currentWithdrawString = currentWithdraw.innerText;
    const currentWithdrawAmmount = parseFloat(currentWithdrawString);
    
    // step5:
    const currentBalance = document.getElementById('balanceCurrent');
    const currentBalanceValueString = currentBalance.innerText;
    const currentBalanceAmmount = parseFloat(currentBalanceValueString);
    if(withdrawAmmount > currentBalanceAmmount){
        alert('insufficient balance');
        return
    }
    // step4:
    const totalWithDraw = currentWithdrawAmmount + withdrawAmmount;
    currentWithdraw.innerText = totalWithDraw;
    // step5.1:
    const newBalance = currentBalanceAmmount - withdrawAmmount;
    currentBalance.innerText = newBalance;

})