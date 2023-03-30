
let divCard = document.querySelector('.card');

var fragment = document.createDocumentFragment();

fetch('./db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);


    const vehiculos = data.vehiculos;

    let marca = 'Ferrari';
    
    let coches = buscarPorMarca(marca, vehiculos);

    coches.forEach(vehiculo => {

        let addDiv = document.createElement('div');
        addDiv.className = 'vehiculo';
        addDiv.innerHTML=`Vehiculo: ${vehiculo.modelo},  marca: ${vehiculo.marca}, Velocidad: ${vehiculo.velocidad}`;
        fragment.appendChild(addDiv);
        console.log(vehiculo)
    })

    divCard.appendChild(fragment);


  });


const buscarPorMarca = (marca, vehiculos) =>{
    return vehiculos.filter(vehiculos => vehiculos.marca === marca);
}



