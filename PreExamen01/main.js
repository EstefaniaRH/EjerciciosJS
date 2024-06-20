const products = {
    "A": 270,
    "B": 340,
    "C": 390
};
let productoPrecio = 0;
let monto = 0;
const coins = [100, 50, 10];
let transacciones = [];
let cuenta = 0;

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    if (product) {
        productoPrecio = products[product];
        document.getElementById('payment-section').classList.remove('hidden');
        document.getElementById('form').classList.add('hidden');
        document.getElementById('result-message').textContent = `Hola, ${name}. Has seleccionado el Producto ${product} por $${productoPrecio}.`;
        document.getElementById('end-session').classList.remove('hidden');
    } else {
        alert('Por favor, selecciona un producto.');
    }
});

function addCoin(amount) {
    monto += amount;
    document.getElementById('total-amount').textContent = monto;
    if (monto >= productoPrecio) {
        const change = monto - productoPrecio;
        let changeMessage = '';
        if (change > 0) {
            const changeCoins = calculateChange(change, coins);
            changeMessage = `Tu cambio es $${change}: ${changeCoins.join(', ')}.`;
        }
        document.getElementById('change-message').textContent = changeMessage;
        document.getElementById('result-message').textContent = 'Gracias por tu compra!';
        
        transacciones.push({
            product: document.getElementById('product').value,
            price: productoPrecio,
            paid: monto,
            change: change
        });
        cuenta++;
        
        monto = 0; 
        document.getElementById('total-amount').textContent = monto;
        document.getElementById('payment-section').classList.add('hidden');
        document.getElementById('form').classList.remove('hidden');
    }
}

function calculateChange(amount, coins) {
    const change = [];
    for (let coin of coins) {
        while (amount >= coin) {
            change.push(`$${coin}`);
            amount -= coin;
        }
    }
    return change;
}

function reporte() {
    let registro = `Resumen de la sesión:\n\n`;
    registro += `Número de operaciones: ${cuenta}\n\n`;
    registro += `Transacciones:\n`;
    transacciones.forEach((transaction, index) => {
        registro += `Compra ${index + 1}:\n`;
        registro += `Producto: ${transaction.product}\n`;
        registro += `Precio: $${transaction.price}\n`;
        registro += `Pagado: $${transaction.paid}\n`;
        registro += `Cambio: $${transaction.change}\n\n`;
    });
    alert(registro);

    transacciones = [];
    cuenta = 0;
    document.getElementById('end-session').classList.add('hidden');
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById('form').classList.remove('hidden');
    document.getElementById('result-message').textContent = '';
    document.getElementById('change-message').textContent = '';
}