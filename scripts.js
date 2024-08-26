const USD = 4.87
const EUR = 5.39
const GBP = 5.79

// Obtendo o conteudo
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector('form')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')


amount.addEventListener("input", () =>{
    const  hasCharRegex = /\D+/g
    amount.value = amount.value.replace(hasCharRegex, "")
}) 

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")    
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")    
            break
    }
}


function convertCurrency(amount, price, symbol){
    try {
         description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`
         let total = amount * price
         if(isNaN(total)){
            return alert("Por favor digite um valor válido para converter!")
         }
         total = formatCurrencyBRL(total).replace("R$", "")
         result.textContent = `${total} Reais`
         footer.classList.add('show-result')
    } catch (error) {
        footer.classList.remove('show-result')
        alert("Não foi possivel converter. Tente novamente mais tarde!")
    }
}


function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style:"currency",
        currency:"BRL",
    })
}