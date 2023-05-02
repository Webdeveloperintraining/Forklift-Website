// const jsonData='http://forklift-advantage.com/json/especificaciones.json';
const json='https://webdeveloperintraining.github.io/Forklift-Website/json/especificaciones.json';
//const json='./json/especificaciones.json';
async function waitForData (json){
    const getJsondata = await fetch(json);
    if (getJsondata.ok) {
        const jsonToData= await getJsondata.json();
        gatheringData(jsonToData);
    }
}

function gatheringData(data){
    const paletAzul=data['propiedades'];
    //insertingDataTables(paletAzul,document.getElementById('pallet'))

}
/*
function insertingDataTables(data,place){
    let table_row=document.createElement("tr");
    //let table_data1=document.createElement("td");
    //let table_data2=document.createElement("td");
    table_row.innerHTML=`<td>${gettipoDeControl}</td><td>${data.tipoDeTranspaleta}</td>`;
    //table_row.table_data2.innerHTML='Prueba2';
    place.appendChild(table_row);
    //place.appendChild(table_data1);
    //place.appendChild(table_data2);
}
*/
waitForData(json);






// const arraySparse = [1, 3, /* empty */, 7];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });

// console.log({ numCallbackRuns });

// // { element: 1 }
// // { element: 3 }
// // { element: 7 }
// // { numCallbackRuns: 3 }
