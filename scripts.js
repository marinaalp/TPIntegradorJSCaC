// valor del ticket
const ticket = 200;

// descuentos

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

// obtenemos los elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const nombre = document.getElementById('nombre');
const ape = document.getElementById('apellido');
const btnBorrar = document.getElementById('borrar');
const formulario = document.getElementById('formulario');

// console.log(cantidad);
// funcion para calcular
function calcularPago(){
    let total = cantidad.value * ticket
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descJunior);
            break;
        default:
            break;
    } 
    
    totalPagar.textContent = `Total a Pagar: $ ${total}`
    alert(`${nombre.value} ${ape.value} Realizaste una compra.
    Total a Pagar: $ ${total}`);
}

//btnResumen.addEventListener('click',calcularPago);
btnResumen.addEventListener('click',(evento)=>{
    evento.preventDefault();
    calcularPago();
});
btnBorrar.addEventListener('click',(evento)=>{
    formulario.reset();
})

