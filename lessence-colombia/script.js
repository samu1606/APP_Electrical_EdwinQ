const products = [
    {
        id: 1,
        nombre: "L'Essence Classique Marrón",
        precioAnterior: 120000,
        precioActual: 90000,
        imagen: "assets/bolso-1.jpg"
    },
    {
        id: 2,
        nombre: "L'Essence Noir Elegance",
        precioAnterior: 120000,
        precioActual: 90000,
        imagen: "assets/bolso-2.jpg"
    },
    {
        id: 3,
        nombre: "L'Essence Ivoire Monogram",
        precioAnterior: 120000,
        precioActual: 90000,
        imagen: "assets/bolso-3.jpg"
    },
    {
        id: 4,
        nombre: "L'Essence Bianco Studs",
        precioAnterior: 120000,
        precioActual: 90000,
        imagen: "assets/bolso-4.jpg"
    },
    {
        id: 5,
        nombre: "L'Essence Chocolat Luxe",
        precioAnterior: 120000,
        precioActual: 90000,
        imagen: "assets/bolso-5.jpg"
    }
];

const productGrid = document.getElementById('product-grid');
let cart = [];

// Cargar Productos
function displayProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.imagen}" alt="${product.nombre}" class="product-image">
            <div class="product-info">
                <h3>${product.nombre}</h3>
                <div class="price-tag">
                    <span class="old-price">$${product.precioAnterior.toLocaleString()}</span>
                    <span class="new-price">$${product.precioActual.toLocaleString()} COP</span>
                </div>
                <button class="btn-add" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        </div>
    `).join('');
}

// Carrito de compras
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`¡${product.nombre} añadido al carrito!`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Boton de WhatsApp
document.querySelector('.cart-icon').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    let message = "Hola L'ESSENCE COLOMBIA! Me gustaría pedir:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.nombre} - $${item.precioActual.toLocaleString()}\n`;
        total += item.precioActual;
    });

    message += `\nTotal a pagar: $${total.toLocaleString()} COP`;

    const whatsappUrl = `https://wa.me/573223578118?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

displayProducts();
