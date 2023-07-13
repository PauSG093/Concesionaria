function generarCotizacion() {
    var ci = document.getElementById('ci').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var direccion = document.getElementById('direccion').value;
    var vehiculo = document.getElementById('vehiculo').value;
    var precio = parseFloat(document.getElementById('precio').value);

    var descuento = 0;
    if (vehiculo === 'Fiesta') {
      descuento = precio * 0.05;
    } else if (vehiculo === 'Focus') {
      descuento = precio * 0.1;
    }  
    var precioFinal = precio - descuento; 
    // Aquí puedes hacer algo con los datos, como mostrar una cotización en pantalla o enviarlos a un servidor
    console.log("Cotización generada:");
    console.log("CI: " + ci);
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Dirección: " + direccion);
    console.log("Vehículo: " + vehiculo);
    console.log("Precio: " + precioFinal);
}
function generarRolPagos() {
    var empleado = document.getElementById('empleado').value;
    var cargo = document.getElementById('cargo').value;
    var sueldo = parseFloat(document.getElementById('sueldo').value);
    var horasExtras = parseFloat(document.getElementById('horas-extras').value);
    var sueldoRecibir = sueldo + (horasExtras * 10);
    // Aquí puedes hacer algo con los datos, como mostrar un rol de pagos en pantalla o enviarlos a un servidor
    console.log("Rol de pagos generado:");
    console.log("Empleado: " + empleado);
    console.log("Cargo: " + cargo);
    console.log("Sueldo a recibir: " + sueldoRecibir);
}