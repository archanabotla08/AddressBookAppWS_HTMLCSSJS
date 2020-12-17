window.addEventListener('DOMContentLoaded', (event) => {

const text = document.querySelector('#fullName');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    const regName = /^[A-Z]{1}[a-zA-Z0-9,-\s+]{2,}$/; // /^[A-Z][a-z]{2,}$/;
    if (regName.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Invalid First Name ";
});
});
window.addEventListener('DOMContentLoaded', (event) => {
    const address = document.querySelector('#address');
   const textError = document.querySelector('.text-error-address');
    address.addEventListener('input', function() {
        const regName = /^[A-Z]{1}[a-zA-Z0-9,-\s+]{2,}$/; // /^[A-Z][a-z]{2,}$/;
        if (regName.test(address.value))
            textError.textContent = "";
        else textError.textContent = "Invalid Address ";
    })    
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

const save = () => {
    try {
        let addressBook = createAddressBook();
        createAndUpdateStorage(addressBook);
    } catch (e) {
        return
    }
}

const createAddressBook = () => {
    let addressBook = new AddressBook();
    try {
        addressBook.fullName = getInputValueById('#fullName');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    addressBook.address = getInputValueById('#address');
    addressBook.city = getInputValueById('#city');
    addressBook.state = getInputValueById('#state');
    addressBook.zipCode = getInputValueById('#zipCode');
    addressBook.phoneNumber = getInputValueById('#phoneNumber');
    alert(addressBook.toString());
    return addressBook;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

function createAndUpdateStorage(addressBook) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBook);
    } else {
        addressBookList = [addressBook];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}


const resetForm = () => {
    
    setValue('#fullName', '');
    setValue('#address', '');
    setValue('#city', 'Select City');
    setValue('#state', 'Select State');
    setValue('#zipCode', '');
    setValue('#phoneNumber', '');
  
}