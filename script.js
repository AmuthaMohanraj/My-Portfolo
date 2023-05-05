

function valid() {

    var name = document.getElementById('bx1');
    var error1 = document.getElementById('er1')
    var pattern1 = /^[a-z A-Z]{3,}$/;


    if (name.value == "") {
        error1.innerHTML = 'Enter Your Name';
        name.focus();
        return false;
    } else if (pattern1.test(name.value) == false) {
        error1.innerHTML = 'Invalid Name';
        name.focus();
        return false;
    } else {
        error1.innerHTML = "";
    }


    var email = document.getElementById('bx2');
    var error2 = document.getElementById('er2');
    var pattter2 = /^[a-zA-Z]{3,}[0-9]{2,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}$/;


    if (email.value == "") {
        error2.innerHTML = "Enter Your EmailId"
        email.focus();
        return false;
    } else if (pattter2.test(email.value) == false) {
        error2.innerHTML = "Invalid EmailId";
        email.focus();
        return false;
    } else {
        error2.innerHTML = "";
    }

    var message = document.getElementById('bx3');
    var error3 = document.getElementById('er3')

    if (message.value == "") {
        error3.innerHTML = "Enter Your Message";
        message.focus();
        return false;
    } else {
        error3.innerHTML = "";
    }

}


var home = document.getElementById('home')
var about = document.getElementById('about');
var blog = document.getElementById('blog');
var portfolio = document.getElementById('portfolio');
var contact = document.getElementById('contact');


function bodyhide() {

    home.style.display = "block";
    about.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";
    blog.style.display = "none";
}


function aboutshow() {
    home.style.display = "none";
    about.style.display = "block";
    portfolio.style.display = "none";
    contact.style.display = "none";
    blog.style.display = "none";
}



function blogshow() {
    home.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";

}

function portfolioshow() {
    home.style.display = "none";
    portfolio.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    blog.style.display = "none";

}




function contactshow() {
    home.style.display = "none";
    contact.style.display = "block";
    about.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";

}