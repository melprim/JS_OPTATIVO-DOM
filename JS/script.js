
//OBJETO CORTINAS
class Cortina{
    constructor(tipoCortina=" ", tipoTela=" ", color=" ", mecanismo=" ", ancho=1, alto=1){
        this.tipoCortina=tipoCortina
        this.tipoTela=tipoTela
        this.color=color
        this.mecanismo=mecanismo
        this.ancho=ancho
        this.alto=alto
        this.superficie=((this.ancho*this.alto)/10000) //pasa cm2 a m2 (ya que el costo se calcula con un valor por m2)
        this.presupuesto=((this.superficie*costoMetro)*iva)
    }
}

//VARIABLES
let tipoCortina, tipoTela, color, mecanismo, ancho, alto, continua, superficie, presupuesto, eliminCortina
const costoMetro = 17500
const iva = 1.21

//ARRAY
const arrayCortinas = [];

//SOLICITUD DE DATOS
do{
    //VALIDACION TIPO CORTINA
    do {
        tipoCortina=prompt("Ingrese el tipo de cortina que desea: Roller / Bandas verticales / Duo").toLocaleLowerCase()
    }while(tipoCortina.length==0 || (tipoCortina != "roller" && tipoCortina != "bandas verticales" && tipoCortina !="duo"))    
    //VALIDACION TIPO TELA
    do{
        tipoTela=prompt("Ingrese el tipo de tela que desea: Screen, Decorativa, Black Out").toLocaleLowerCase()
    }while(tipoTela.length==0 || (tipoTela != "screen" && tipoTela != "decorativa" && tipoTela !="black out"))
    //VALIDACION COLOR
    do{
        color=prompt("ingrese color deseado: Blanco / Negro / Gris / Beige").toLocaleLowerCase()
    }while(color.length==0 || (color != "blanco" && color != "negro" && color !="gris" && color != "beige"))
    //VALIDACION MECANISMO
    do{    
        mecanismo=prompt("Ingrese tipo de mecanismo: Manual / Motorizado").toLocaleLowerCase()
    }while(mecanismo.length==0 ||(mecanismo != "manual" && mecanismo != "motorizado"))
    //VALIDACION ALTO/ANCHO
    do{
        ancho=parseInt(prompt("Ingresa el ancho de tu cortina en cm"))
        alto=parseInt(prompt("Ingresa el alto de tu cortina en cm"))
        if (ancho<50 || ancho>300 || alto<50 || alto>300){
            alert("Las medidas deben tener un mínimo de 50cm y un máximo de 300cm. Por favor ingrese nuevamemte los valores")
        }else if(isNaN(ancho) || isNaN(alto)){
            alert("Por favor ingrese un valor válido")
        }
    }while((ancho<50 || alto<50 || ancho>300 || alto>300)||(isNaN(ancho) || isNaN(alto)))

    arrayCortinas.push(new Cortina(tipoCortina, tipoTela, color, mecanismo, ancho, alto))

    continua=prompt("¿Desea cotizar otra cortina? Si/No").toLowerCase()

}while(continua != "no" || continua.length==0)

//CONSULTO
const divProductoCortina = document.getElementById("productoCortina")

//RECORRO EL ARRAY CON UN FOREACH Y CREO MI PLANTILLA DE PRODUCTO
arrayCortinas.forEach(cortinasArray=>{
    divProductoCortina.innerHTML += `
        <div id="producto" class="productos">
            <h2>Tipo de Cortina: ${cortinasArray.tipoCortina}</h2>
            <p>Tipo de Tela: ${cortinasArray.tipoTela}</p>
            <p>Color: ${cortinasArray.color}</p>
            <p>Mecanismo: ${cortinasArray.mecanismo}</p>
            <p>Ancho: ${cortinasArray.ancho}cm</p>
            <p>Alto: ${cortinasArray.alto}cm</p>
            <h3>Presupuesto: $${cortinasArray.presupuesto}</h3>
        </div>
    `
})

