//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;
var mayor_edad = 18;
var continuar = "si";
//Valores de los recargos 
var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;
//edad del conyuge
var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;
//recargos extras
var hijos_recargo = 0.2;
var propiedades_recargo = 0.35;
var ingresos_recargo = 0.05;

while(continuar != "salir")
{
    //Recargo
    var recargo = 0;
    var recargo_hijos = 0;
    var recargo_propiedades = 0;
    var recargo_ingresos = 0;
    var recargo_total = 0;
    //Precio final
    var precio_final = 0;
    //Mensajes de alerta para ingresar datos
    var nombre = prompt("Ingrese su nombre, por favor");
    var edad = prompt("¿Cuantos años tiene? Ingrese solamente números");
    var edad_numero = parseInt(edad);
    //Comprobamos si es mayor de edad
    if(edad_numero >= mayor_edad)
    {
        var casado = prompt("¿Está casado actualmente?","si/no");
        var edad_conyuge;
        //Comprobamos si esta casado
        if("SI" == casado.toUpperCase())
        {
            edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
        }
        var edad_conyuge_numero = 0;
        if("SI" == casado.toUpperCase())
        {
            edad_conyuge_numero = parseInt(edad_conyuge);
        }
        //Comprobamos si tiene hijos
        var hijos = prompt("¿Tiene hijos o hijas?","si/no");
        var cantidad_hijos;
        var cantidad_hijos_numero = 0;
        if(hijos.toUpperCase() == "SI")
        {
            cantidad_hijos = prompt("¿Cuantos hijos tiene?");

            cantidad_hijos_numero = parseInt(cantidad_hijos);
            recargo_hijos = ((precio_base * cantidad_hijos_numero) * hijos_recargo);
        }
        //Comprobamos si tiene propiedades
        var propiedades = prompt("¿Tiene propiedades?","si/no");
        var cantidad_propiedades;
        var cantidad_propiedades_numero = 0;
        if(propiedades.toUpperCase() == "SI")
        {
            cantidad_propiedades = prompt("¿Cuantas propiedades tiene?");

            cantidad_propiedades_numero = parseInt(cantidad_propiedades);
            recargo_propiedades = ((precio_base * cantidad_propiedades_numero) * propiedades_recargo);
        }
        //Comprobamos si tiene ingresos extras
        var ingresos_extra = prompt("¿Tiene Ingresos Extras?","si/no");
        var cantidad_ingresos;
        var cantidad_ie_numero = 0;
        if(ingresos_extra.toUpperCase() == "SI")
        {
            cantidad_ingresos = prompt("Ingrese el total de Ingresos Extras");
            cantidad_ie_numero = parseFloat(cantidad_ingresos);
            recargo_ingresos = (cantidad_ie_numero * ingresos_recargo);
        }
        //CALCULO PARA EL ASEGURADO
        if(edad_numero >= 18 && edad_numero < 25)
        {
            recargo = precio_base * edad_18;
            recargo_total += recargo + recargo_hijos + recargo_propiedades + recargo_ingresos;
        }else if(edad_numero >= 25 && edad_numero < 50)
        {
            recargo = precio_base * edad_25;
            recargo_total += recargo + recargo_hijos + recargo_propiedades + recargo_ingresos;
        }else
        {
            recargo = precio_base * edad_50;
            recargo_total += recargo + recargo_hijos + recargo_propiedades + recargo_ingresos;
        }

        //CALCULO PARA LA ESPOSA DEL ASEGURADO
        if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25)
        {
            recargo = precio_base * edad_18;
            recargo_total += recargo;
        }else if(edad_conyuge_numero >= 25 && edad_conyuge_numero < 50)
        {
            recargo = precio_base * edad_25;
            recargo_total += recargo;
        }else if(edad_conyuge_numero >= 50)
        {
            recargo = precio_base * edad_50;
            recargo_total += recargo;
        }
        precio_final = precio_base + recargo_total
        //Resultado
        alert("TK-U | RESUMEN DE CARGOS:\n\nPara el asegurado: "+ nombre.toUpperCase() +
        "\nEl Recargo por Hijos: "+ recargo_hijos +
        "\nEl Recargo por Propiedades: "+ recargo_propiedades +
        "\nEl Recargo por Ingresos Extras: "+ recargo_ingresos +
        "\n\nEl Recargo Total Sera de: "+ recargo_total + 
        "\nEl Precio sera de: "+ precio_final);
    }else
    {
        alert(nombre+"\nTiene que se mayor de edad, lo siento");
    }
    continuar = prompt("¿Desea Continuar?\n1. Continuar = 'si'\n2. Salir ='salir'","salir");
}