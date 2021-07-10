function calcularImc() {
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value

    const imc = peso / (altura ** 2)


    if(Number.isNaN(imc) || peso < 0 || altura < 0) {
        document.querySelector('#resultado').innerHTML = `Digite um peso e uma altura valida`
    } else {
        document.querySelector('#resultado').innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
    }
}

const calcular = document.querySelector('#calcular')

calcular.addEventListener('click', () => {
    calcularImc()
})