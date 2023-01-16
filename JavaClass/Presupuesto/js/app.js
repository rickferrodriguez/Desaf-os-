let $pre_val = document.getElementById('pre-val')
let $ingre_val = document.getElementById('ingre-val')
let $egre_val = document.getElementById('egre-val')
let $percent_val = document.getElementById('percent-val')
const $add_btn = document.getElementById('add-btn')
const $inner_ing = document.getElementById('inner-ing')
const $inner_egre = document.getElementById('inner-egre')

const ingre_colors = 'teal-text text-lighten-2'
const egre_colors = 'red-text text-lighten-1'
const rmv_colors = 'red lighten-1'

let contadori = 0
let contadore = 0

const formatoNumero = (num) => {
    return parseFloat(num).toFixed(2)
}

const cargarCabezero = () => {
    let presupuesto = totalIngresos() + totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()
    $ingre_val.innerHTML = formatoNumero(totalIngresos())
    $egre_val.innerHTML = formatoNumero(totalEgresos())
    $pre_val.innerHTML = formatoNumero(presupuesto)
    $percent_val.innerHTML = formatoNumero(porcentajeEgreso)
    render(ingresos, "INGRESOS", $inner_ing, ingre_colors)
    render(egresos, "EGRESOS",$inner_egre, egre_colors)
}

const ingresos = []
const egresos = []



$add_btn.addEventListener('click', () => {
    const $input_selector = document.getElementById('selector').selectedIndex
    const $input_desc = document.getElementById('desc-el').value
    const $input_valor = document.getElementById('valor-el').value
    if($input_selector === 0 && $input_desc != '' && $input_valor != ''){
        contadori ++
        let ing_val = { id:contadori, desc: $input_desc, valor: $input_valor }
        ingresos.push(ing_val)
    } else if ($input_selector === 1 && $input_desc != '' && $input_valor != '') {
        contadore ++
        let egre_val = { id:contadore, desc: $input_desc, valor: $input_valor}
        egresos.push(egre_val)
    } else {
    alert('Por favor diligencie los campos')
    }
    cargarCabezero()
})

const totalIngresos = () => {
    let sumIngresos = 0
    ingresos.map( ingreso =>{
        sumIngresos += parseInt(ingreso.valor)    
    })
    return sumIngresos
}

const totalEgresos = () => {
    let sumEgresos = 0
    egresos.map( egreso =>{
        sumEgresos += parseInt(egreso.valor)    
    })
    return sumEgresos
}


const render = (arr, h3, inner, color) => {
    let text = `<li class="collection-header"><h3 class="${color}">${h3}</h3></li>`
    arr.map( value  =>{
        text += `
        <li class="collection-item row valign-wrapper">
            <div class="col s5">${value.desc}
            </div>
            <div class="col s4">
                <a href="#!" class="secondary-content">
                    ${formatoNumero(value.valor)}
                </a>
            </div>
            <div class="col s1">
                <a id="remove-btn" class="btn-remove btn-floating btn-small waves-effect waves-light ${rmv_colors}">
                    <i class="material-icons">close</i>
                </a>
            </div>
            <div class="col s1"></div>
        </li>
    `
    })
    inner.innerHTML = text
}


