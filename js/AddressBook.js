class AddressBook {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(fullName) {
        let fullNameRegex = RegExp(/^[A-Z]{1}[a-zA-Z\s+]{2,}$/);
        if (fullNameRegex.test(fullName))
            this._fullName = fullName;
        else
            throw "Invalid FullName";
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = /^[A-Z]{1}[a-zA-Z0-9,-\s+]{2,}$/;
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid Address";
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = /^(?:(?:\+|0{0,2})91(\s*\s*)?|[0]?)?[789]\d{9}$/;
        if (phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
        else
            throw "Invalid PhoneNumber";
        
    }

    toString() {
        return "Id: " + this.id + "\nFullName: " + this.fullName + "\nAddress: " + this.address + 
        "\nCity: " + this.city + "\nState: " + this.state + "\nZipCode: " + this.zipCode + 
        "\nPhoneNumber: " + this.phoneNumber;
    }
}