
function formControl(action){
    console.log('hi')
    let form=document.querySelector("form");
    form.className="signup-form "+action;
}

const inputs = document.querySelectorAll("[required]");
console.log(inputs)
function checkInput(){
    let count=0
    inputs.forEach((input) =>{
        if(input.value==""){
            count=count+1
        }
    })
    if(count==0){
        return true
    }
    else if(count>0){
        return false
    }
}

function checkPassowrds(){
    console.log(checkInput())
    if(checkInput()==true){
        const password = document.querySelector('#password');
        const confirm = document.querySelector('#confirm-password');
        if (confirm.value === password.value && password.value!='') {
            confirm.setCustomValidity('');
            alert("Account Created Successfully")
            setTimeout(() => {
                formControl('close')
            }, 1000);
        } 
        else if(confirm.value != password.value){
            confirm.setCustomValidity('Passwords do not match');
        }
    }
}