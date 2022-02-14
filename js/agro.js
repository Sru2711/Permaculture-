function Add(cart){
    if (cart=="Cheese"){
 var i= parseInt(document.getElementById("change").innerHTML);
 i++;
 document.getElementById("change").innerHTML=i;
    }
    else if (cart=="fruit"){
        var i= parseInt(document.getElementById("change-fruit").innerHTML);
        i++;
        document.getElementById("change-fruit").innerHTML=i;  
    }
    else (cart=="veggie");{

        var i= parseInt(document.getElementById("change-veg").innerHTML);
        i++;
        document.getElementById("change-veg").innerHTML=i; 
    }
}
function Sub(cart){
    if(cart==Cheese){  
    var i= parseInt(document.getElementById("change").innerHTML);
    if (i>1)
    i--;
    document.getElementById("change").innerHTML=i;
    
}
   else if(cart=="fruit"){
    var i= parseInt(document.getElementById("change-fruit").innerHTML);
    if(i>1)
    
    i--;
    document.getElementById("change-fruit").innerHTML=i;  
   
}
   else if(cart=="veggie")
   {
    var i= parseInt(document.getElementById("change-veg").innerHTML);
    if(1>1)
    
    i--;
    document.getElementById("change-veg").innerHTML=i;  
    
   
}
}