// const jsonData='http://forklift-advantage.com/json/especificaciones.json';
//const json='https://webdeveloperintraining.github.io/Forklift-Website/json/especificaciones.json';
const json = 'json/especificaciones.json';
async function waitForData (json){
    const getJsondata = await fetch(json);
    if (getJsondata.ok) {
        const jsonToData= await getJsondata.json();
        gatheringData(jsonToData);
    }
}

function gatheringData(data){
    const paletAzul=data['palletAzul'];
    insertingDataTables(paletAzul,document.getElementById('pallet'))
}

function insertingDataTables(data,place){
    let caracteristicas =data.caracteristicas;
    let propiedades= data.propiedades;
    let datosPropiedades= [];
    for (var key of Object.keys(propiedades)){
    datosPropiedades.push(propiedades[key])
    }
for (var i=0; i < caracteristicas.length; i++){
    let table_row=document.createElement("tr");
    table_row.innerHTML=`<td>${caracteristicas[i]}</td>`;
    table_row.innerHTML+=`<td>${datosPropiedades[i]}</td>`;
    place.appendChild(table_row);
}
clearArray(datosPropiedades)
}

function clearArray(array) {
    while (array.length > 0) {
      array.pop();
    }
  }

waitForData(json);