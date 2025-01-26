


function fa(){ 
    if(a.value=="" || b.value==""){ 
    f() 
    document.getElementById("a").style.border="3px solid red" 
    document.getElementById("b").style.border="3px solid red" 
    bt.value="please fill the space" 
    } 
    else{ 
    document.getElementById("a").style.border="3px solid green" 
    document.getElementById("b").style.border="3px solid green" 
    bt.value=" Now it`s ready" 
    bt.style.left="120px"; 
    } 
    }

    flag=1 
    function f(){ 
    if(flag==1){ 
    bt.style.left="210px" //on the submit part.
    flag=2 
    } 
    else if(flag==2){ 
    bt.style.left="80px" 
    flag=1 
    } 
    } 
   alert('Welcome to our channel')
 
   
