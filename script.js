let loginForm = document.querySelector('.login_form_container');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll = () => {

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {

    if(window.scrollY > 80){
        document.querySelector('.header-2').classList.add('active');
    }
    else{
        document.querySelector('.header-2').classList.remove('active');
    }
}
