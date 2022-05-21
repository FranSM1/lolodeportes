const abrirCarrito = $("#boton-carrito");

const modalContenedor = $(".modal-contenedor");

const cerrarCarrito = $("#cerrar-carrito");

const modalCarrito = $(".modal-carrito");

abrirCarrito.on("click", () => {
  modalContenedor.fadeIn(500).css({
    position: "fixed",
    top: "0",
    width: "100%",
    height: "100vh",
    "background-color": "rgba(0, 0, 0, 0.3)",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    transition: "all .5s",
  });
});

cerrarCarrito.on("click", () => {
  modalContenedor.fadeOut(800);
});

modalContenedor.on("click", () => {
  modalContenedor.slideUp(1000);
});

modalCarrito.on("click", (event) => {
  event.stopPropagation();
});
