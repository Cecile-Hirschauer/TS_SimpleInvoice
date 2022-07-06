"use strict";
class FormInput {
    constructor() {
        this.form = document.getElementById('form');
        this.type = document.getElementById('type');
        this.firstname = document.getElementById('firstname');
        this.lastname = document.getElementById('lastname');
        this.address = document.getElementById('address');
        this.country = document.getElementById('country');
        this.city = document.getElementById('city');
        this.zip = document.getElementById('zip');
        this.product = document.getElementById('product');
        this.price = document.getElementById('price');
        this.quantity = document.getElementById('quantity');
        this.tva = document.getElementById('tva');
        // Listener
        this.submitFormListener();
    }
    // Listeners
    submitFormListener() {
        this.form.addEventListener('submit', this.submitFormListener.bind(this));
    }
    handleFormSumit(e) {
        e.preventDefault();
        const inputs = this.inputData();
        if (Array.isArray(inputs)) {
            const [type, firstname, lastname, address, country, city, zip, product, price, quantity, tva] = inputs;
            console.log(type, firstname, lastname, address, country, city, zip, product, price, quantity, tva);
        }
    }
    inputData() {
        const type = this.type.value;
        const firstname = this.firstname.value;
        const lastname = this.lastname.value;
        const address = this.address.value;
        const country = this.country.value;
        const city = this.city.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstname, lastname, address, country, city, zip, product, price, quantity, tva];
        }
        else {
            alert("Les valeurs numériques doivent être supérieures à zéro.");
            return;
        }
    }
}
new FormInput();
