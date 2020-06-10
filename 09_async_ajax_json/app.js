document.getElementById('btn1').addEventListener('click',loadCustomer)
function loadCustomer(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json',true)
    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            const customer = JSON.parse(this.responseText)
            const output = `
            <ul>
            <li>${customer.id}</li>
            <li>${customer.name}</li>
            <li>${customer.company}</li>
            <li>${customer.phone}</li>
            </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}