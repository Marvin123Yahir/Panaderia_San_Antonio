// ===================== BASE DE DATOS DE PRODUCTOS =====================
const productosDB = [
    { id: 1, nombre: "Borrego", descripcion: "Pan con pasta de fresa y vainilla", precio: 4, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Borrego_2.jpg" },
    { id: 2, nombre: "Cuerno de Pasta", descripcion: "Pasta blanca con relleno de queso.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Cuerno_1.jpg" },
    { id: 3, nombre: "Pierna", descripcion: "Pan favorito con pasta blanca.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Pierna_1.jpg" },
    { id: 4, nombre: "Chamuco", descripcion: "Pan dulce con relleno de pasta blanca.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Chamuco_1.jpg" },
    { id: 5, nombre: "Tortitas Grandes", descripcion: "Tortias grandes, y pedido perzonalizado. Y minimo un dia de anticipación.", precio: 15.00, categoria: "panes_especiales", catNombre: "Panes Especiales", imagen: "img_2/Tortitas.jpeg" },
    { id: 6, nombre: "Concha (Volcan)", descripcion: "Pan favorito con pasta blanca.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Volcan_1.jpg" },
    { id: 7, nombre: "Galleta", descripcion: "Con la reseta misma de las mantecadas.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Galleta_1.jpg" },

    { id: 8, nombre: "Pastel Choco Cuadrado 1kg", descripcion: "Escoge el color a gusto para tu pastel, con relleno zarzamora y chocolate.", precio: 600.00, categoria: "reposteria", catNombre: "Repostería", imagen: "img_2/Pastel_Chocolate_5.jpeg" },
    { id: 9, nombre: "Pastel Choco Redondo 1Kg", descripcion: "Escoge el color a gusto para tu pastel, con relleno zarzamora y chocolate.", precio: 580.00, categoria: "reposteria", catNombre: "Repostería", imagen: "img_2/Pastel_Chocolate_6_1.jpeg" },
    { id: 10, nombre: "Pastel de Tres Leches Cuadrado 1kg", descripcion: "Escoge el color a gusto para tu pastel, con relleno de mermelada, durazno, piña y zarzamora.", precio: 580.00, categoria: "reposteria", catNombre: "Repostería", imagen: "img_2/Pastel_Chocolate_2.jpeg" },
    { id: 11, nombre: "Pastel de Tres Leches Redondo 1Kg", descripcion: "Escoge el color a gusto para tu pastel, con rellenos mermelada, durazno, piña y zarzamora.", precio: 580.00, categoria: "reposteria", catNombre: "Repostería", imagen: "img_2/Pastel_Verde.jpeg" },
    { id: 12, nombre: "Torta de Padrinos Chica", descripcion: "Incluye dos tortas grandes, Minimo un dia de anticipación.", precio: 180.00, categoria: "tortas_tradicionales", catNombre: "Tortas Tradicionales", imagen: "img_2/Torta_Par.jpeg" },
    { id: 13, nombre: "Torta de Padrinos Mediana", descripcion: "Incluye dos tortas grandes, Minimo un dia de anticipación.", precio: 200.00, categoria: "tortas_tradicionales", catNombre: "Tortas Tradicionales", imagen: "img_2/Torta_Sol.jpeg" },
    { id: 14, nombre: "Torta de Padrinos Grande", descripcion: "Incluye dos tortas grandes, Minimo un dia de anticipación..", precio: 220.00, categoria: "tortas_tradicionales", catNombre: "Tortas Tradicionales", imagen: "img_2/Torta_Grande.jpeg" },
    { id: 15, nombre: "Torta de Huevo", descripcion: "Solo una torta de huevo con figuras de pasta blanca.", precio: 160.00, categoria: "panes_especiales", catNombre: "Panes Especiales", imagen: "img_2/Torta_Huevo.jpeg" },
   { id: 16, nombre: "Postre", descripcion: "Postre hecho con pan de huevo y manjar de leche con vainilla.", precio: 280.00, categoria: "panes_especiales", catNombre: "Panes Especiales", imagen: "img_2/Postre_3.jpeg" },

    { id: 17, nombre: "Campechana", descripcion: "Pan de holjadre con azucar.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Campechana_1.jpg" },
    { id: 18, nombre: "Cuadro de Leche", descripcion: "Los famosos cuadros de azucar y leche.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/CuadroLeche_1.jpg" },
    { id: 19, nombre: "Empanada", descripcion: "Pan de forma de empanda rellena con queso.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Empanada_1.jpg" },
    { id: 20, nombre: "Estropajo", descripcion: "Pan rellena con pasta blanca.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Estropajo_1.jpg" },
    { id: 21, nombre: "Granillo", descripcion: "Pan sin dulce con ajojolín.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Granillo_1.jpg" },
    { id: 22, nombre: "Larguito de Pasta", descripcion: "Pasta blanca con azucar.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Larguito_1.jpg" },
    { id: 23, nombre: "Laurel", descripcion: "Pan cubierta con azucar derritido.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Laurel_1.jpg" },
    { id: 24, nombre: "Mantecadas", descripcion: "Mantecadas con reseta con huevos y leche.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Mantecadas_1.jpg" },
    { id: 25, nombre: "Mostachon", descripcion: "Pan con relleno de queso y pasta.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Mostachon_1.jpg" },
    { id: 26, nombre: "Muñon", descripcion: "Pan con reseta hojaldre con azcuar.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Muñon_1.jpg" },
    { id: 27, nombre: "Pan de Torta (Teleras)", descripcion: "Pan sin azucar, para hacer tortas.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Torta_1.jpg" },
    { id: 28, nombre: "Rosca", descripcion: "Rosca sin azucar y crujiente.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Rosca_1.jpg" },
    { id: 29, nombre: "Taco", descripcion: "Pan largo con cubierto con pasta blanca.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Taco_1.jpg" },
    { id: 30, nombre: "Tacon", descripcion: "Pan rellena con azucar.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Tacon_1.jpg" },
    { id: 31, nombre: "Tortita", descripcion: "Pan sin azucar, con figura de cruces.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Tortita_1.jpg" },
    { id: 32, nombre: "Cuadro de Azucar", descripcion: "Los famosos cuadros de azucar y leche.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/CuadroAzucar_1.jpg" },
    { id: 33, nombre: "Recortado (Niño Envuelto)", descripcion: "Pan recortado en forma de niño envuelto con relleno de queso.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Recortada_1.jpg" },
    { id: 34, nombre: "Disco 1 pieza", descripcion: "Pan recortado en cuatro y rellen con queso.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Disco.jpeg" },
    { id: 35, nombre: "Pambaso", descripcion: "Pan sin azucar, con harina encima.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Pambaso.jpeg" },
    { id: 36, nombre: "Gloria", descripcion: "Pan hecha con mantca vegetal y azucar.", precio: 4.00, categoria: "pan_dulce", catNombre: "Pan Dulce", imagen: "img_2/Panes/Gloria.jpeg" }

];

// ===================== ESTADO GLOBAL =====================
let cart = [];
let activeCategory = "todos";
let searchTerm = "";
let ubicacionDetectada = null;
let direccionGlobal = "";

// ===================== DOM ELEMENTS =====================
const productsGrid = document.getElementById("productsGrid");
const cartItemsContainer = document.getElementById("cartItemsList");
const cartTotalSpan = document.getElementById("cartTotal");
const cartFloatBadge = document.getElementById("cartFloatBadge");
const searchInput = document.getElementById("searchInput");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const catPills = document.querySelectorAll(".cat-pill");
const cartFloatBtn = document.getElementById("cartFloatBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtn = document.getElementById("closeCartBtn");
const clearCartDrawerBtn = document.getElementById("clearCartDrawerBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// ===================== FUNCIONES DE UTILIDAD =====================
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

function mostrarMensaje(texto, tipo = "success") {
    const msg = document.getElementById("mensaje");
    if (!msg) return;
    
    msg.className = "toast-msg";
    if (tipo === "success") msg.classList.add("toast-success");
    if (tipo === "error") msg.classList.add("toast-error");
    if (tipo === "delete") msg.classList.add("toast-delete");
    
    msg.textContent = texto;
    msg.classList.add("show");
    
    setTimeout(() => msg.classList.remove("show"), 2000);
}

function calcularTotalCarrito() {
    return cart.reduce((total, cartItem) => {
        const producto = productosDB.find(p => p.id === cartItem.id);
        return total + (producto ? producto.precio * cartItem.cantidad : 0);
    }, 0);
}

// ===================== GEOLOCALIZACIÓN =====================
const obtenerDireccionDesdeCoordenadas = async (lat, lon) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1&accept-language=es`);
        const data = await response.json();
        return data.display_name || null;
    } catch (error) {
        console.error("Error obteniendo dirección:", error);
        return null;
    }
};

// ===================== CARRITO =====================
function saveCart() {
    localStorage.setItem("panaderiaCartDeslizable", JSON.stringify(cart));
}

function loadCart() {
    const stored = localStorage.getItem("panaderiaCartDeslizable");
    cart = stored ? JSON.parse(stored) : [];
    renderCart();
}

function addToCart(productId) {
    const existing = cart.find(item => item.id === productId);
    if(existing) {
        existing.cantidad += 1;
    } else {
        cart.push({ id: productId, cantidad: 1 });
    }
    saveCart();
    renderCart();
    cartFloatBtn.style.transform = "scale(1.15)";
    setTimeout(() => cartFloatBtn.style.transform = "", 200);
    mostrarMensaje(" Agregado al carrito", "success");
}

function updateQuantity(productId, newQty) {
    if(newQty <= 0) {
        cart = cart.filter(item => item.id !== productId);
        mostrarMensaje("✗ Eliminado del carrito", "delete");
    } else {
        const item = cart.find(i => i.id === productId);
        if(item) item.cantidad = newQty;
    }
    saveCart();
    renderCart();
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    mostrarMensaje("✗ Eliminado del carrito", "delete");
}

function clearCart() {
    if(cart.length === 0) return;
    cart = [];
    saveCart();
    renderCart();
    mostrarMensaje("Carrito vaciado", "delete");
}

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function renderCart() {
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    cartFloatBadge.innerText = totalItems;

    if(cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart">🛒 Tu carrito está vacío<br>Agrega productos deliciosos</div>`;
        cartTotalSpan.innerText = "$0";
        return;
    }

    let totalPrice = 0;
    let itemsHtml = "";
    
    cart.forEach(cartItem => {
        const producto = productosDB.find(p => p.id === cartItem.id);
        if(!producto) return;
        const subtotal = producto.precio * cartItem.cantidad;
        totalPrice += subtotal;
        itemsHtml += `
            <div class="cart-item">
                <div class="cart-item-img" style="background-image: url('${producto.imagen}');"></div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${escapeHtml(producto.nombre)}</div>
                    <div class="cart-item-price">$${producto.precio.toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" data-id="${producto.id}" data-delta="-1">−</button>
                        <span class="item-qty">${cartItem.cantidad}</span>
                        <button class="qty-btn" data-id="${producto.id}" data-delta="1">+</button>
                        <button class="remove-item" data-id="${producto.id}"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = itemsHtml;
    cartTotalSpan.innerText = `$${totalPrice.toFixed(2)}`;

    document.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const prodId = parseInt(btn.dataset.id);
            const delta = parseInt(btn.dataset.delta);
            const item = cart.find(i => i.id === prodId);
            if(item) updateQuantity(prodId, item.cantidad + delta);
        });
    });
    
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const prodId = parseInt(btn.dataset.id);
            removeItem(prodId);
        });
    });
}

// ===================== PRODUCTOS Y FILTROS =====================
function getFilteredProducts() {
    let filtered = [...productosDB];
    if(activeCategory !== "todos") {
        filtered = filtered.filter(p => p.categoria === activeCategory);
    }
    if(searchTerm.trim() !== "") {
        const term = searchTerm.trim().toLowerCase();
        filtered = filtered.filter(p => p.nombre.toLowerCase().includes(term) || p.descripcion.toLowerCase().includes(term));
    }
    return filtered;
}

function renderProducts() {
    const filtered = getFilteredProducts();
    if(filtered.length === 0) {
        productsGrid.innerHTML = `<div class="no-results"><i class="fas fa-bread-slice"></i><h3>No hay productos</h3><p>Prueba con otra categoría o búsqueda.</p></div>`;
        return;
    }
    
    let html = "";
    filtered.forEach(prod => {
        html += `
            <div class="product-card">
                <div class="product-img" style="background-image: url('${prod.imagen}');">
                    <span class="product-badge">${prod.catNombre}</span>
                </div>
                <div class="product-info">
                    <div class="product-title">${escapeHtml(prod.nombre)}</div>
                    <div class="product-desc">${escapeHtml(prod.descripcion)}</div>
                    <div class="price-add">
                        <span class="product-price">$${prod.precio.toFixed(2)}</span>
                        <button class="add-to-cart" data-id="${prod.id}">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>

        `;
    });
    
    productsGrid.innerHTML = html;
    
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const prodId = parseInt(btn.dataset.id);
            addToCart(prodId);
            btn.style.transform = "scale(0.9)";
            setTimeout(() => btn.style.transform = "", 150);
        });
    });
}

function updateActiveCategoryUI() {
    catPills.forEach(pill => {
        const catVal = pill.dataset.cat;
        if(catVal === activeCategory) pill.classList.add("active");
        else pill.classList.remove("active");
    });
}


// ===================== MODALES =====================
function mostrarModalUbicacion() {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.className = 'modal-confirmacion';
        modal.innerHTML = `
    <script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY"></script>

            <div class="modal-contenido">
                <h3> Información de envío</h3>
                <div class="form-ubicacion">
                                    <div style=" margin-top: 15px;">

                    <label for="ubicacion">Datos del remitente</label>


                    <div style="font-size: 11px; color: #999; margin-top: 5px;">
                        📌 Ingresa tu nombre completo y número de teléfono para el envío
                    <input style="width: 100%; padding: 10px; margin-top: 8px;" type="text" id="remitente" class="direccion-input" placeholder="Nombre completo">
                    <br>
                    <input style="width: 100%; padding: 10px; margin-top: 8px;" type="tel" id="telefono" class="direccion-input" placeholder="Número de teléfono">

                    </div>
                </div>
                    <label style = "margin-top: 8px;" for="ubicacion">¿Dónde recibirás tu pedido?</label>
                    <select id="ubicacion" class="ubicacion-select">
                        <option value="">Seleccionar ubicación</option>
                        <option value="otra">Miahuatlán </option>
                        <option value="otra">Otra ubicación (Fuera de Miahuatlán)</option>
                    </select>
                    
                    <button type="button" id="btn-usar-ubicacion" class="btn-ubicacion " style="font-size: 14px; margin-top: 8px; background: #e58d11; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer;">
                        <i class="fas fa-location-dot" ></i> Usar mi ubicación actual
                    </button>
                    <p style="font-size: 9px; color: #999; margin: 2px 2px;">Preciona el botón para usar tu ubicación actual o selecciona llenar manualmente</p>

                    <p id="ubicacion-texto" style="font-size: 12px; margin-top: 5px; color: #666;"></p>

                    <div id="direccion-container" style="display: none; margin-top: 12px;">
                        <label for="direccion">Dirección completa:</label>
                        <input type="text" id="direccion" class="direccion-input" placeholder="Calle, número, colonia, ciudad">
                        <p style="font-size: 9px; color: #999; margin: 2px 2px;"> Ejemplo: C. Ignacio de la Llave #17, C. 5 de Mayo, San Antonio, 91410</p>
                        <input style = "margin-top: 8px;" type="text" id="referencia" class="direccion-input" placeholder="Referencias adicionales cercanas a tu domicilio" > 

                    </div>

                <div style = "margin-top: 10px;" class="modal-botones">
                    <button class="btn-cancelar"><i class="fas fa-times"></i> Cancelar</button>
                    <button class="btn-confirmar"><i class="fas fa-check"></i> Continuar</button>
                </div>
            </div>
        `;
        // Y en el JavaScript:

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
        
        const selectUbicacion = modal.querySelector('#ubicacion');
        
        const remitenteInput = modal.querySelector('#remitente');
        const telefonoInput = modal.querySelector('#telefono');

        const direccionContainer = modal.querySelector('#direccion-container');
        const direccionInput = modal.querySelector('#direccion');
        const referenciaInput = modal.querySelector('#referencia');
        const btnUsarUbicacion = modal.querySelector('#btn-usar-ubicacion');
        const ubicacionTexto = modal.querySelector('#ubicacion-texto');
        const btnConfirmar = modal.querySelector('.btn-confirmar');
        const btnCancelar = modal.querySelector('.btn-cancelar');

        const obtenerUbicacion = () => {
            if (!navigator.geolocation) {
                ubicacionTexto.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: red;"></i> Tu navegador no soporta geolocalización';
                return;
            }
            
            ubicacionTexto.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Obteniendo ubicación...';
            
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    ubicacionDetectada = { lat, lon };
                    
                    const direccion = await obtenerDireccionDesdeCoordenadas(lat, lon);
                    
                    if (direccion) {
                        direccionGlobal = direccion;
                        direccionContainer.style.display = 'block';
                        direccionInput.value = direccion;
                        ubicacionTexto.innerHTML = `<i class="fas fa-check-circle" style="color: green;"></i> Ubicación detectada correctamente`;
                        selectUbicacion.value = 'otra';
                    } else {
                        ubicacionTexto.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: red;"></i> No se pudo obtener la dirección`;
                        alert('Por favor ingresa tu dirección o usa el botón de ubicación');
                    }
                },
                (error) => {
                    let mensajeError = "Error al obtener ubicación";
                    if(error.code === 1) mensajeError = "Permiso denegado. Activa la ubicación.";
                    if(error.code === 2) mensajeError = "Información no disponible.";
                    if(error.code === 3) mensajeError = "Tiempo de espera agotado.";
                    ubicacionTexto.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: red;"></i> ${mensajeError}`;
 
                },
                { enableHighAccuracy: true, timeout: 10000 }
            );
        };
        
        btnUsarUbicacion.onclick = obtenerUbicacion;
        
        selectUbicacion.addEventListener('change', (e) => {
            if (e.target.value === 'otra') {
                direccionContainer.style.display = 'block';
            } else {
                direccionContainer.style.display = 'none';
                direccionInput.value = '';
            }
        });
        
        const cerrarModal = (resultado) => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
            resolve(resultado);
        };
        
        btnConfirmar.onclick = () => {
            const ubicacion = selectUbicacion.value;
            let direccion = '';
            let costoEnvio = '';
            let mensajeEnvio = '';

            const remitente = remitenteInput.value.trim();
            const telefono = telefonoInput.value.trim();
            const referencia = referenciaInput.value.trim();

            if (!remitente || !telefono) {
             mostrarMensaje("Ingresa nombre y teléfono", "error");
             return;
             }
            
            if (ubicacion === 'miahuatlan') {
                direccion = 'Miahuatlán y alrededores';
                costoEnvio = 0;
                mensajeEnvio = '¡Envío gratis por pedido mayor a $40!';
            } else {
                if (!direccionInput.value.trim()) {
                    mostrarMensaje("Por favor, ingresa tu dirección completa", "error");
                    return;
                }
                direccion = direccionInput.value.trim();
                costoEnvio = 0;
                mensajeEnvio = 'El costo dependera de la ubicación exacta, y toma consideracion el tiempo de entrega.';
            }
            
            cerrarModal({ ubicacion, direccion, costoEnvio, mensajeEnvio, remitente, telefono, referencia });
        };
        
        btnCancelar.onclick = () => cerrarModal(null);
        modal.onclick = (e) => { if (e.target === modal) cerrarModal(null); };
        
        const onEsc = (e) => {
            if (e.key === 'Escape') {
                cerrarModal(null);
                document.removeEventListener('keydown', onEsc);
            }
        };
        document.addEventListener('keydown', onEsc);
    });
}

function mostrarModalConfirmacion(carrito, ubicacionInfo) {
    return new Promise((resolve) => {
        let itemsConDetalles = [];
        let subtotal = 0;
        
        carrito.forEach(cartItem => {
            const producto = productosDB.find(p => p.id === cartItem.id);
            if (producto) {
                const itemSubtotal = producto.precio * cartItem.cantidad;
                subtotal += itemSubtotal;
                itemsConDetalles.push({
                    nombre: producto.nombre,
                    cantidad: cartItem.cantidad,
                    precio: producto.precio,
                    subtotal: itemSubtotal,
                    imagen: producto.imagen
                });
            }
        });
        
        const totalConEnvio = subtotal + ubicacionInfo.costoEnvio;
        const envioGratis = ubicacionInfo.costoEnvio === 0 && ubicacionInfo.ubicacion === 'miahuatlan' && subtotal >= 40;
        
        const modal = document.createElement('div');
        modal.className = 'modal-confirmacion';
        modal.innerHTML = `
            <div class="modal-contenido">
            
                <h3 style="font-family: system-ui, -apple-system, sans-serif;">✅ Confirmar pedido</h3>
                
                <div class="info-envio" style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-bottom: 15px; font-size: 13px;">
<div style="line-height: 1.6; font-size: 14px;">
    <strong style="display: block; margin-bottom: 8px;">📦 Información de envío</strong>

<div style="background-color: #f8f9fa; border-radius: 12px; padding: 1rem; margin: 1rem 0; font-family: system-ui, -apple-system, sans-serif;">
    
    <!-- Nombre -->
    <div style="display: flex; align-items: flex-start; gap: 6px; margin-bottom: 8px;">
        <div style="min-width: 100px; display: flex; align-items: flex-start; gap: 6px; color: #2c3e2f;">
            <i class="bi bi-person" style=" -webkit-text-stroke: 1px currentColor; color: #22602c; font-size: .8rem;"></i>
            <strong>Nombre:</strong>
        </div>
        <span style="color: #1e2a1c; word-break: break-word;">${escapeHtml(ubicacionInfo.remitente)}</span>
    </div>

    <!-- Teléfono -->
    <div style="display: flex; align-items: flex-start; gap: 6px; margin-bottom: 8px;">
        <div style="min-width: 100px; display: flex; align-items: flex-start; gap: 6px; color: #2c3e2f;">
            <i class="bi bi-telephone" style=" -webkit-text-stroke: 1px currentColor; color: #22602c; font-size: .8rem;"></i>
            <strong>Teléfono:</strong>
        </div>
        <span style="color: #1e2a1c;">${escapeHtml(ubicacionInfo.telefono)}</span>
    </div>

    <!-- Dirección (con mejor manejo de texto largo) -->
    <div style="display: flex; align-items: flex-start; gap: 6px; margin-bottom: 8px;">
        <div style="min-width: 100px; display: flex; align-items: flex-start; gap: 6px; color: #2c3e2f;">
            <i class="bi bi-house" style=" -webkit-text-stroke: 1px currentColor; color: #22602c; font-size: .8rem; margin-top: 2px;"></i>
            <strong>Dirección:</strong>
        </div>
        <span style="color: #1e2a1c; flex: 1; word-break: break-word; line-height: 1.2;">${escapeHtml(ubicacionInfo.direccion)}</span>
    </div>

    <!-- Referencia -->
    <div style="display: flex; align-items: flex-start; gap: 6px; margin-bottom: 8px;">
        <div style="min-width: 100px; display: flex; align-items: flex-start; gap: 6px; color: #2c3e2f;">
            <i class="bi bi-info-circle" style="-webkit-text-stroke: 1px currentColor; color: #22602c; font-size: .8rem;"></i>
            <strong>Referencia:</strong>
        </div>
        <span style="color: #1e2a1c; word-break: break-word;">${escapeHtml(ubicacionInfo.referencia)}</span>
    </div>
</div>
    
</div>
<span> Costo de envío: <span style="color: #a57d18;">${ubicacionInfo.mensajeEnvio || 'Se calculará al momento de la entrega'}</span></span>
                </div>
                
                <div class="resumen-carrito" style="max-height: 300px; overflow-y: auto;">
                    ${itemsConDetalles.map(item => `
                        <div class="item-resumen" style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 5px 0; border-bottom: 1px solid #eee;">
                            <span><strong>${item.cantidad}x ${escapeHtml(item.nombre)}</strong></span>
                            <span>$${item.subtotal.toFixed(2)}</span> 
                        </div>
                    `).join('')}
                    
                    <div style="margin-top: 15px; padding-top: 10px; border-top: 2px solid #ddd;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <strong>Subtotal:</strong>
                            <span>$${subtotal.toFixed(2)}</span>
                        </div>
<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
    <strong>Envío:</strong>
<span style="color: #ac1313; font-weight: 500; font-size: 14px;">
Pendiente de cotización
        </span></div>
                        <div style="display: flex; justify-content: space-between; margin-top: 10px; padding-top: 10px; border-top: 2px solid #a57d18;">
                            <strong style="font-size: 1.1em;">Total:</strong>
                            <strong style="font-size: 1.1em; color: #a57d18;">$${totalConEnvio.toFixed(2)}</strong>
                        </div>
                    </div>
                </div>
                
                <div class="modal-botones">
                    <button class="btn-cancelar"><i class="fas fa-times"></i> Cancelar</button>
                    <button class="btn-confirmar"><i class="fas fa-check"></i> Confirmar compra</button>
                            <div id="mensaje" class="toast-msg"></div>
        <div id="alerta" class="custom-alert"></div>  
                    </div>
            </div>
                    <!-- Mensajes de toast y alertas personalizadas -->

        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
        
        const btnConfirmar = modal.querySelector('.btn-confirmar');
        const btnCancelar = modal.querySelector('.btn-cancelar');
        
        const cerrarModal = (resultado) => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
            resolve(resultado);
        };
        
        btnConfirmar.onclick = () => cerrarModal(true);
        btnCancelar.onclick = () => cerrarModal(false);
        modal.onclick = (e) => { if (e.target === modal) cerrarModal(false); };
        
        const onEsc = (e) => {
            if (e.key === 'Escape') {
                cerrarModal(false);
                document.removeEventListener('keydown', onEsc);
            }
        };
        document.addEventListener('keydown', onEsc);
    });
}

function enviarWhatsApp(carrito, ubicacionInfo, numeroPedido) {
    let subtotal = 0;
    let listaProductos = "";
    
    carrito.forEach(cartItem => {
        const producto = productosDB.find(p => p.id === cartItem.id);
        if (producto) {
            const itemSubtotal = producto.precio * cartItem.cantidad;
            subtotal += itemSubtotal;
            listaProductos += `✅ *${cartItem.cantidad}x* ${producto.nombre} - $${itemSubtotal.toFixed(2)}\n`;
        }
    });

    const total = subtotal + (ubicacionInfo.costoEnvio || 0);

    const mensaje = `*🎫 NUEVO PEDIDO: ${numeroPedido}*\n\n` +
                    `*👤 Cliente:* ${ubicacionInfo.remitente}\n` +
                    `*📞 Tel:* ${ubicacionInfo.telefono}\n` +
                    `*📍 Dirección:* ${ubicacionInfo.direccion}\n` +
                    `*🏠 Ref:* ${ubicacionInfo.referencia}\n\n` +
                    `*📦 Productos:*\n${listaProductos}\n` +
                    `*Subtotal:* $${subtotal.toFixed(2)}\n` +
                    `*Envío:* ${ubicacionInfo.costoEnvio === 0 ? 'Gratis' : '$' + ubicacionInfo.costoEnvio.toFixed(2)}\n` +
                    `*💰 TOTAL A PAGAR: $${total.toFixed(2)}*`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    // USAR EL NÚMERO DEL DUEÑO DIRECTAMENTE
    // Esto asegura que el mensaje se pegue solo en el cuadro de texto
    const numeroDueño = "5212281188693"; 
    const urlWhatsApp = `https://wa.me/${numeroDueño}?text=${mensajeCodificado}`;

    // Abrir WhatsApp con el mensaje ya escrito para el dueño
    window.location.href = urlWhatsApp; 
}




function generarTicket(carrito, ubicacionInfo) {
    const fecha = new Date();
    const numeroPedido = 'PED-' + fecha.getTime();
    
    let itemsConDetalles = [];
    let subtotal = 0;
    
    carrito.forEach(cartItem => {
        const producto = productosDB.find(p => p.id === cartItem.id);
        if (producto) {
            const itemSubtotal = producto.precio * cartItem.cantidad;
            subtotal += itemSubtotal;
            itemsConDetalles.push({
                nombre: producto.nombre,
                cantidad: cartItem.cantidad,
                precio: producto.precio,
                subtotal: itemSubtotal
            });
        }
    });
    
    const totalConEnvio = subtotal + ubicacionInfo.costoEnvio;
    
    const ticketHTML = `
        <div style="font-family: monospace; max-width: 400px; margin: 0 auto; padding: 20px; border: 2px solid #a57d18; border-radius: 10px; background: white;">
            
<div style="text-align: center; font-family: monospace; line-height: 1.2;">
                <h2 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #a57d18; margin: 0;">🎫 TICKET DE COMPRA</h2>
                <p style="margin: 5px 0; font-size: 12px;"><strong>Número:</strong> ${numeroPedido}</p>
                <p style="margin: 5px 0; font-size: 12px;"><strong>Fecha:</strong> ${fecha.toLocaleString()}</p>
                <div style="border-top: 1px dashed #ccc; margin-top: 10px; padding-top: 10px;">
                    <h4 style="margin: 2px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #000000;">📍 Datos de envío:</h4>
                    <p style= "margin: 2px 0; font-size: 12px;"><strong>Cliente:</strong> ${escapeHtml(ubicacionInfo.remitente)}</p>
                    <p style="margin: 2px 0; font-size: 12px;"><strong>Tel:</strong> ${escapeHtml(ubicacionInfo.telefono)}</p>

                    <p style="margin: 2px 0; font-size: 12px;"><strong>Dirección:</strong> ${escapeHtml(ubicacionInfo.direccion)}</p>
                    <p style="margin: 2px 0; font-size: 12px;"><strong>Referencia:</strong> ${escapeHtml(ubicacionInfo.referencia)}</p>

                </div>
           
                </div>
            
            <div style="border-top: 1px dashed #ccc; border-bottom: 1px dashed #ccc; margin: 10px 0; padding: 10px 0;">
                <h4 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #000000;"">📦 Productos:</h4>
                ${itemsConDetalles.map(item => `
                    <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px;">
                        <span>${item.cantidad}x ${escapeHtml(item.nombre)}</span>
                        <span>$${item.subtotal.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin: 10px 0;">
                <div style="display: flex; justify-content: space-between;">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Envío:</span>
                    <span>${ubicacionInfo.costoEnvio === 0 ? 'Gratis' : `$${ubicacionInfo.costoEnvio.toFixed(2)}`}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px; padding-top: 10px; border-top: 1px solid #ccc;">
                    <span>TOTAL:</span>
                    <span style="color: #a57d18;">$${totalConEnvio.toFixed(2)}</span>
                </div>
            </div>
            

            
            <div style="text-align: center; margin-top: 20px; font-size: 11px; color: #666;">
                <p>¡Gracias por tu compra!</p>
            </div>
        </div>
    `;
    
    const modalTicket = document.createElement('div');
    modalTicket.className = 'modal-confirmacion';
    modalTicket.innerHTML = `
        <div class="modal-contenido" style="max-width: 450px;">
            <div style="max-height: 80vh; overflow-y: auto;">
                ${ticketHTML}
            </div>
            <div class="modal-botones" style="margin-top: 20px;">
                <button class="btn-cerrar-ticket" style="background: #a57d18; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modalTicket);
    setTimeout(() => modalTicket.classList.add('show'), 10);
    
    const btnCerrar = modalTicket.querySelector('.btn-cerrar-ticket');
    btnCerrar.onclick = () => {
        modalTicket.classList.remove('show');
        setTimeout(() => modalTicket.remove(), 300);
    };
}

// ===================== EVENT LISTENERS =====================
searchInput?.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderProducts();
});

resetSearchBtn?.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    renderProducts();
});

catPills.forEach(pill => {
    pill.addEventListener("click", () => {
        activeCategory = pill.dataset.cat;
        updateActiveCategoryUI();
        renderProducts();
    });
});

cartFloatBtn?.addEventListener("click", openCart);
closeCartBtn?.addEventListener("click", closeCart);
cartOverlay?.addEventListener("click", closeCart);
clearCartDrawerBtn?.addEventListener("click", clearCart);

checkoutBtn?.addEventListener("click", async () => {
    if(cart.length === 0) {
        mostrarMensaje("Tu carrito está vacío", "error");
        return;
    }
    
    const ubicacionInfo = await mostrarModalUbicacion();
    if (!ubicacionInfo) {
        mostrarMensaje("Compra cancelada", "delete");
        return;
    }
    
    const ok = await mostrarModalConfirmacion(cart, ubicacionInfo);
    
    if (ok) {
        const fecha = new Date();
        const numeroPedido = 'PED-' + fecha.getTime(); // Generamos el ID aquí para enviarlo
        mostrarMensaje("🎉 ¡Pedido realizado con éxito!", "success");

        // --- AQUÍ ENVIAMOS LOS WHATSAPP ---
        enviarWhatsApp(cart, ubicacionInfo, numeroPedido);
        generarTicket(cart, ubicacionInfo);
        cart = [];
        saveCart();
        renderCart();
        closeCart();
    } else {
        mostrarMensaje("Compra cancelada", "delete");
    }
});

// ===================== INICIALIZACIÓN =====================
loadCart();
renderProducts();
updateActiveCategoryUI();
        // Inicializar
        loadCart();
        renderProducts();
        updateActiveCategoryUI();