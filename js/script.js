document.querySelector(".hamburger-menu").addEventListener('click', function(){
    document.querySelector(".nav-menu").classList.toggle("display");
});

// const btn = document.getElementById("btn");

// const btn = document.getElementsByClassName("btn")[0];
// btn.style.backgroundColor = "green";

// const btn = document.querySelector(".btn");
// btn.addEventListener('click', () =>{
    
// })

// if usersname is 8 characters and less than
const nameInput = document.getElementById('name');
const validateName = () =>{
    const name = nameInput.value;
    const pattern = /^[a-zA-Z_]{3,8}$/;
    if (pattern.test(name)){
        console.log('valid username');
    }else {
        console.log('username should be between 3 and 8 characters');
    }

};

nameInput.addEventListener('blur', validateName);

