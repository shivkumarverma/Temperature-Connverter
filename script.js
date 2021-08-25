const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value; 
    
   const celToFeh = (cel) =>{
     let feh = ((cel * 9/5)+32);
     return feh;
   } 
   
   const FehToCel = (feh) =>{
     let cel = ((feh-32) * 5/9);
     return cel;
   }
  let result;
    if(valueTemp == 'cel'){
      result = celToFeh(numberTemp);
        document.getElementById('ans').innerHTML = `${result}°Fahrenheit` ;
    }
    else{
      result = FehToCel(numberTemp);
      document.getElementById('ans').innerHTML = ` ${result}°Celcius` ;
    }
  }