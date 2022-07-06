class FormInput {
    form: HTMLFormElement;
    type: HTMLSelectElement;
    firstname: HTMLInputElement;
    lastname: HTMLInputElement;
    address: HTMLInputElement;
    country: HTMLInputElement;
    city: HTMLInputElement;
    zip: HTMLInputElement;
    product: HTMLInputElement;
    price: HTMLInputElement;
    quantity: HTMLInputElement;
    tva: HTMLInputElement;
    
    constructor() {
        this.form = document.getElementById('form') as HTMLFormElement;
        this.type = document.getElementById('type') as HTMLSelectElement;
        this.firstname = document.getElementById('firstname') as HTMLInputElement;
        this.lastname = document.getElementById('lastname') as HTMLInputElement;
        this.address = document.getElementById('address') as HTMLInputElement;
        this.country = document.getElementById('country') as HTMLInputElement;
        this.city = document.getElementById('city') as HTMLInputElement;
        this.zip = document.getElementById('zip') as HTMLInputElement;
        this.product = document.getElementById('product') as HTMLInputElement;
        this.price = document.getElementById('price') as HTMLInputElement;
        this.quantity = document.getElementById('quantity') as HTMLInputElement;
        this.tva = document.getElementById('tva') as HTMLInputElement;
        
        // Listener
        this.submitFormListener();
    }
    
    // Listeners
    private submitFormListener(): void {
        this.form.addEventListener('submit', this.submitFormListener.bind(this));
    }
    
    private handleFormSumit(e: Event) {
        e.preventDefault();
        
        const inputs = this.inputData();
        
        if (Array.isArray(inputs)) {
            const [type, firstname, lastname, address, country, city, zip, product, price, quantity, tva] = inputs;
            console.log(type, firstname, lastname, address, country, city, zip, product, price, quantity, tva)
        }
        
    }
    
    private inputData (): [string, string, string, string, string, string, number, string, number, number, number] | void {
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
            return [type, firstname, lastname, address, country, city, zip, product, price, quantity, tva]
        } else {
            alert("Les valeurs numériques doivent être supérieures à zéro.");
            return;
        }
    
    }
    
    
}

 

new FormInput();