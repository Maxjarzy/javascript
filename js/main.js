//alert("Hola")

let cuotas;
let operacion;
let gasto;
let montoTotalDeGastos = 0;
let montoUnaCuota = 0;
let montoDosCuotas = 0;
let montoTresCuotas = 0;
let montoSeisCuotas = 0;
let montoDoceCuotas = 0;
let montoErroneo = 0;

let montoCuota = function(gasto, cuotas){
    return gasto / cuotas;

}


do{
    gasto = Number(prompt("Ingrese monto del gasto"));
    if(gasto === ""){
        gasto = 0;
    }
    cuotas = Number(prompt("Ingrese la opción correspondiente: \n 1 --> 1 Cuota \n 2 --> 2 Cuotas \n 3 --> 3 Cuotas \n 6 --> 6 Cuotas \n 12 --> 12 Cuotas"));

    if(cuotas === 0){
        cuotas = Number(prompt("La opción seleccionada no es correcta. Ingrese nuevamente: \n 1 --> 1 Cuota \n 2 --> 2 Cuotas \n 3 --> 3 Cuotas \n 6 --> 6 Cuotas \n 12 --> 12 Cuotas"));
    }

    //document.write('<p style=" color: red; font-size: 40px;">' + cuotas + "</p>")
    operacion = prompt('Para ingresar mas datos presione "+", para terminar la carga ingrese "="');

        

    switch (cuotas) {
        case 1:
            document.write("$" + Number(gasto.toFixed(2)) + " ");
            document.write("<br>")
            montoUnaCuota += gasto;
            break;
        case 2:
            document.write("<br>")
            for(let i = 1; i <= 2; i += 1){
                document.write("$" + montoCuota(gasto, cuotas).toFixed(2) + " ");
                if(i == 1){
                    montoUnaCuota += montoCuota(gasto, cuotas);
            }else{
                montoDosCuotas += montoCuota(gasto, cuotas)
            }
        }   
            document.write("<br>")
            break;
        case 3:
            document.write("<br>")
            for(let i = 1; i <= 3; i += 1){
                document.write("$" + montoCuota(gasto, cuotas).toFixed(2) + " ");
                if(i == 1){
                    montoUnaCuota += montoCuota(gasto, cuotas);
            }else if(i == 2){
                montoDosCuotas += montoCuota(gasto, cuotas)
            }else{
                montoTresCuotas += montoCuota(gasto, cuotas);
            }
            }
            document.write("<br>")
            break;
        case 6:
            document.write("<br>")
            for(let i = 1; i <= 6; i += 1){
                document.write("$" + montoCuota(gasto, cuotas).toFixed(2) + " ");
                switch(i){
                    case 1:
                        montoUnaCuota += montoCuota(gasto, cuotas);
                        break;
                    case 2:
                        montoDosCuotas += montoCuota(gasto, cuotas);
                        break;
                    case 3:
                        montoTresCuotas += montoCuota(gasto, cuotas);
                        break;
                    case 6:
                        montoSeisCuotas += montoCuota(gasto, cuotas);
                        break;
                }
            }
            document.write("<br>")
            break;
        case 12:
            document.write("<br>")
            for(let i = 1; i <= 12; i += 1){
                document.write("$" + montoCuota(gasto, cuotas).toFixed(2) + " ");
                switch(i){
                    case 1:
                        montoUnaCuota += montoCuota(gasto, cuotas);
                        break;
                    case 2:
                        montoDosCuotas += montoCuota(gasto, cuotas);
                        break;
                    case 3:
                        montoTresCuotas += montoCuota(gasto, cuotas);
                        break;
                    case 6:
                        montoSeisCuotas += montoCuota(gasto, cuotas);
                        break;
                    case 12:
                        montoDoceCuotas += montoCuota(gasto, cuotas);
                        break;
                }
            }
            document.write("<br>")
            break;
        default:
            alert('Error al cargar el número de cuotas. Ingrese el monto nuevamente .');
            document.write("Error de carga del importe: $" + gasto);
            break;          
    }

    document.write("<hr>")
    
}while(operacion != "=" )

    document.write("En la primer cuota vas pagar : $" + montoUnaCuota.toFixed(2) + "<br>");
    document.write("En la segunda cuota vas a pagar: $" + montoDosCuotas.toFixed(2) + "<br>");
    document.write("En la tercera cuota vas a pagar: $" + montoTresCuotas.toFixed(2) + "<br>");
    document.write("Desde la cuarta hasta la sexta cuota vas a pagar: $" + montoSeisCuotas.toFixed(2) + "<br>");
    document.write("Desde la séptima hasta deuodécima cuota vas a pagar: $" + montoDoceCuotas.toFixed(2) + "<br>");
