const celsius = document.querySelector('#celsius')
            const fahrenheit = document.querySelector('#fahrenheit')
            
            const kg = document.querySelector('#kg')
            const pounds = document.querySelector('#pounds')

            const btnTemp = document.querySelector('#clearTemp')
            btnTemp.onclick = clearTempInput;

            const btnWeight = document.querySelector('#clearWeight')
            btnWeight.onclick = clearWeightInput;

            

            function celsiusToFahrenheit(){


                let result = (parseFloat(celsius.value) * 9/5) + 32;
                fahrenheit.value = result.toFixed(1);
                
            }

            function FahrenheitoCelsius(){
                let result = (parseFloat(fahrenheit.value) - 32)* 5/9;
                celsius.value = result.toFixed(1);
                
            }

            function KgtoPounds(){

                let result = kg.value / 0.4536;

                pounds.value = result.toFixed(4);
            }

            function PoundsToKg(){
                let result = pounds.value * 0.4536;
                kg.value = result.toFixed(4);
            }

                function clearTempInput() {
                celsius.value = '';
                fahrenheit.value = '';
    } 
                function clearWeightInput() {
                kg.value = '';
                pounds.value = '';}