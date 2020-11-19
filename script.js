const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

console.log(currencies)

const convertDiv = document.createElement('div')
document.querySelector('body').appendChild(convertDiv)

const apiUrl = "https://api.exchangeratesapi.io/latest"

fetch(apiUrl).then(function(response) {
  return response.json()
})
.then(function(data) {
  const targetCurrencies = Object.keys(data.rates)
  const dropDown2 = document.createElement('select')
dropDown2.innerHTML = `<option>${targetCurrencies[0]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[1]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[2]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[3]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[4]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[5]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[5]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[6]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[7]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[8]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[9]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[10]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[11]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[12]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[13]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[14]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[15]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[16]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[17]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[18]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[19]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[20]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[21]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[22]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[23]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[24]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[25]}<option>`
dropDown2.innerHTML += `<option>${targetCurrencies[26]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[27]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[28]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[29]}<option>`
dropDown2.innerHTML += `<option>${targetCurrencies[30]}</option>`
dropDown2.innerHTML += `<option>${targetCurrencies[31]}<option>`
dropDown2.innerHTML += `<option>${targetCurrencies[32]}<option>`

document.querySelector('div').appendChild(dropDown2)
})

const dropDown1 = document.createElement('select')
dropDown1.innerHTML = `<option>${currencies[0]}</option>`
dropDown1.innerHTML = `<option>${currencies[1]}</option>`
dropDown1.innerHTML = `<option>${currencies[2]}</option>`
dropDown1.innerHTML = `<option>${currencies[3]}</option>`
dropDown1.innerHTML = `<option>${currencies[4]}</option>`
dropDown1.innerHTML = `<option>${currencies[5]}</option>`
dropDown1.innerHTML = `<option>${currencies[6]}</option>`
dropDown1.innerHTML = `<option>${currencies[7]}</option>`
dropDown1.innerHTML = `<option>${currencies[8]}</option>`
dropDown1.innerHTML = `<option>${currencies[9]}</option>`
dropDown1.innerHTML = `<option>${currencies[10]}</option>`
dropDown1.innerHTML = `<option>${currencies[11]}</option>`
dropDown1.innerHTML = `<option>${currencies[12]}</option>`
dropDown1.innerHTML = `<option>${currencies[13]}</option>`
dropDown1.innerHTML = `<option>${currencies[14]}</option>`
dropDown1.innerHTML = `<option>${currencies[15]}</option>`
dropDown1.innerHTML = `<option>${currencies[16]}</option>`
dropDown1.innerHTML = `<option>${currencies[17]}</option>`
dropDown1.innerHTML = `<option>${currencies[18]}</option>`
dropDown1.innerHTML = `<option>${currencies[19]}</option>`
dropDown1.innerHTML = `<option>${currencies[20]}</option>`
dropDown1.innerHTML = `<option>${currencies[21]}</option>`
dropDown1.innerHTML = `<option>${currencies[22]}</option>`
dropDown1.innerHTML = `<option>${currencies[23]}</option>`
dropDown1.innerHTML = `<option>${currencies[24]}</option>`
dropDown1.innerHTML = `<option>${currencies[25]}</option>`
dropDown1.innerHTML = `<option>${currencies[26]}</option>`
dropDown1.innerHTML = `<option>${currencies[27]}</option>`
dropDown1.innerHTML = `<option>${currencies[28]}</option>`
dropDown1.innerHTML = `<option>${currencies[29]}</option>`
dropDown1.innerHTML = `<option>${currencies[30]}</option>`
dropDown1.innerHTML = `<option>${currencies[31]}</option>`
dropDown1.innerHTML = `<option>${currencies[32]}</option>`

document.querySelector('div').appendChild(dropDown1)

form.addEventListener('submit', function(event) {
  event.preventDefault()
  let foreignCurrency = dropDown2.value
  let newAmountinEUR = input.value*dropDown2.value
  const final = document.querySelector('#final')
  final.innerHTML = newAmountinEUR
})