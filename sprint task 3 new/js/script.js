        let current = document.getElementById("current");

        current.addEventListener("keydown", function(){
            if(current.value < 0){
                alert("Введите положительное число");
                current.value = 0;
            }else{
                convert();
            }
        })


        var type = document.getElementById("type");

        type.addEventListener("change", function(){
            convert();
        })

        let USD = document.getElementById("USD");
        let KZT = document.getElementById("KZT");
        let EUR = document.getElementById("EUR");

        let KZTval = [429, '-', 507];
        let USDval =['-', 0.0023201, 1.18647889 ];
        let EURval =[0.00196463,0.850097974,'-']



        function convert(){
            
        switch (type.value){
            case 'USD':
                USD.setAttribute("value", USDval[0]);
                KZT.setAttribute("value", Math.round((current.value/USDval[1])*100)/100);
                EUR.setAttribute("value", Math.round((current.value/USDval[2])*100)/100);
                break;
            case 'KZT':

                USD.setAttribute("value", Math.round((current.value/KZTval[0])*100)/100);
                KZT.setAttribute("value", KZTval[1]);
                EUR.setAttribute("value", Math.round((current.value/KZTval[2])*100)/100);
                break;
            case 'EUR':

                USD.setAttribute("value", Math.round((current.value/EURval[0])*100)/100);
                KZT.setAttribute("value", Math.round((current.value/EURval[1])*100)/100);
                EUR.setAttribute("value", EURval[2]);
            break;
            
        }
        }