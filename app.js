function formSubmit() {

    event.preventDefault();

    const userData = dataFromInputField();
    const p = document.createElement('p');
    p.innerText = userData.firstName;
    const div = document.getElementById('storeUser')
    div.appendChild(p);
    
    
}




function dataFromInputField (){
    const  userData = {};
    userData['firstName'] = document.getElementById('firstName').value;
    userData['lastName'] = document.getElementById('lastName').value;
    userData['email'] = document.getElementById('email').value;
    

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('email').value = ''

   return userData;
       
    
}
