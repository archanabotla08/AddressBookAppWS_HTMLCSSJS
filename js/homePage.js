window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>ZipCode</th><th>PhoneNumber</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`
    let addressBookList = createAddressBookJSON();
    for (const person of addressBookList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>${person._fullName}</td>
    <td>${person._address}</td>
    <td>${person._city}</td>
    <td>${person._state}</td>
    <td>${person._zipCode}</td>
    <td>${person._phoneNumber}</td>
    <td>
        <img id="${person._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="${person._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookListLocal = [{
            _fullName: "Sridhar",
            _address: "Shivaji Nager",
            _city: "Mumbai",
            _state: "Maharashtra",
            _zipCode: "898123",
            _phoneNumber: "9890912342"

        },
        {
            _fullName: "Sweety Botla",
            _address: "Sri-Nagar colony ",
            _city: "Nanded",
            _state: "Maharashtra",
            _zipCode: "901234",
            _phoneNumber: "8912345687"
        },
        {
            _fullName: "Archana Botla",
            _address: "Sita Nagar colony",
            _city: "Jaipur",
            _state: "Rajasthan",
            _zipCode: "458923",
            _phoneNumber: "9910991099"
        }
    ];
    return addressBookListLocal;
};