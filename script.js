document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Mochila Unicornio', price: '$20', description: 'Mochila con diseño de unicornio.', contactLink: 'contacto.html' },
        { name: 'Estuche de lápices', price: '$8', description: 'Estuche con varios lápices de colores.', contactLink: 'contacto.html' },
        { name: 'Lonchera Dinosaurio', price: '$15', description: 'Lonchera con diseño de dinosaurio.', contactLink: 'contacto.html' }
    ];

    const productGrid = document.getElementById('product-grid');
    const modal = document.getElementById('product-details-modal');
    const modalContent = document.getElementById('modal-content');
    const contactButton = document.getElementById('contact-button');

    // Función para mostrar los productos en la pantalla principal
    function displayProducts() {
        productGrid.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: ${product.price}</p>
                <button onclick="openModal(${index})">Ver detalles</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Función para abrir el modal y mostrar detalles del producto seleccionado
    function openModal(index) {
        const selectedProduct = products[index];
        modalContent.innerHTML = `
            <h2>${selectedProduct.name}</h2>
            <p><strong>Precio:</strong> ${selectedProduct.price}</p>
            <p><strong>Descripción:</strong> ${selectedProduct.description}</p>
        `;
        // Mostrar el botón de contacto
        contactButton.style.display = 'block';
        // Redirigir al usuario a la página de contacto al hacer clic en el botón
        contactButton.onclick = function() {
            window.location.href = selectedProduct.contactLink;
        };
        modal.style.display = 'block';
    }

    // Cerrar el modal al hacer clic en el botón de cierre (x)
    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function() {
        modal.style.display = 'none';
        // Ocultar el botón de contacto al cerrar el modal
        contactButton.style.display = 'none';
    };

    // Mostrar los productos al cargar la página
    displayProducts();
});
