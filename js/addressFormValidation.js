window.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('#fullName');
    const textError = document.querySelector('.text-error');
    text.addEventListener('input', function() {
        const regName = /^[A-Z]{1}[a-zA-Z\s+]{2,}$/; // /^[A-Z][a-z]{2,}$/;
        if (regName.test(text.value))
            textError.textContent = "";
        else textError.textContent = "Invalid First Name ";
    });
    
    });
    window.addEventListener('DOMContentLoaded', (event) => {
        const text = document.querySelector('#address');
        const textError = document.querySelector('.text-error-address');
        text.addEventListener('input', function() {
            const regName = /^[A-Z]{1}[a-zA-Z0-9,-\s+]{2,}$/;
            if (regName.test(text.value))
                textError.textContent = "";
            else textError.textContent = "Invalid Address Text ";
        });    
    });
    
    window.addEventListener('DOMContentLoaded', (event) => {
        const text = document.querySelector('#phoneNumber');
        const textError = document.querySelector('.text-error-phone');
        text.addEventListener('input', function() {
            const regName = /^(?:(?:\+|0{0,2})91(\s*\s*)?|[0]?)?[789]\d{9}$/;
            if (regName.test(text.value))
                textError.textContent = "";
            else textError.textContent = "Invalid Phone Number";
        });    
    });