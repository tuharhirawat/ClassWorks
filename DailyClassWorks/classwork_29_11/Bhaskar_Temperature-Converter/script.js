function convertToFahrenheit() 
{
    const celsius = document.getElementById("celsius").value;
    if (celsius !== "") 
    {
       const fahrenheit = (celsius * 9/5) + 32;
       document.getElementById("fahrenheit").value = fahrenheit.toFixed(3);
    } 
    else 
    {
       document.getElementById("fahrenheit").value = "";
    }
}

function convertToCelsius() 
{
    const fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit !== "") 
    {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsius.toFixed(3);
    } 
    else 
    {
        document.getElementById("celsius").value = "";
    }
}