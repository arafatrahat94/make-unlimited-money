// step 1: added event handler on the log in button;
document.getElementById('loginButton').addEventListener('click', function(){
    // step2: get the value of email address and password 
    const email = document.getElementById('usernameField');
    const emailValue = email.value;
    const password = document.getElementById('passwordFeild');
    const passwordValue = password.value;
    // step4: compare with the provided email adress and password to log in;
    if(emailValue === 'logeachi@mail.com' && passwordValue === '4206'){
        
    }
    else{
        alert('please check you id or password if its correct')
    }
    password.value = ''
})