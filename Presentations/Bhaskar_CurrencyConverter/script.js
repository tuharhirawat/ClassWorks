const conversionRates = {  
    USD: { EUR: 0.95, GBP: 0.78, INR: 84.69, AUD: 1.56 ,THB:34.00 },  
    EUR: { USD: 1.18, GBP: 0.83, INR: 89.61, AUD: 1.65, THB:36.00 },  
    GBP: { USD: 1.28, EUR: 1.21, INR: 108.07, AUD: 1.99, THB:43.42 },  
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0093, AUD: 0.018,THB:0.40 },  
    AUD: { USD: 0.64, EUR: 0.61, GBP: 0.50, INR: 54.36,THB:21.38 } ,
    THB: { USD: 0.029, EUR: 0.028, GBP: 0.023, INR: 2.48, AUD:0.046} 
};  

document.getElementById('convertButton').addEventListener('click', function() {  
    const fromCurrency = document.getElementById('from-currency').value;  
    const toCurrency = document.getElementById('to-currency').value;  
    const amount = parseFloat(document.getElementById('amount').value);   

    if (!amount || isNaN(amount)) {  
        alert('Please enter a valid amount');  
        return;  
    }  

    const conversionRate = conversionRates[fromCurrency][toCurrency];  
    const convertedAmount = amount * conversionRate;  
    
    document.getElementById('result').innerText =   
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(3)} ${toCurrency}`;  
});
