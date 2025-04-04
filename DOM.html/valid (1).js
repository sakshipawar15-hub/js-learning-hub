

function valid(){
    let name=document.getElementById("name").value;

      if(name==""){
         document.getElementById("n_error").innerText="please enter name";
         return false;
      }else{
         document.getElementById("n_error").innerText="";
      }

    let email=document.getElementById("email").value;

    if(email==""){
        document.getElementById("e_error").innerText="please enter name";
        return false;
     }else if(!email.includes("@") || !email.includes("gmail.com")){
        document.getElementById("e_error").innerText="please enter valid emailid";
        return false;
     }else{
        document.getElementById("e_error").innerText="";
     }

    let age=document.getElementById("age").value;

      if(age==""){
        document.getElementById("a_error").innerText="please enter age";
        return false;
      }else if(age>30 || age<18){
        document.getElementById("a_error").innerText="age should be in between 18 to 30 only";
        return false;
      }
      else{
        document.getElementById("a_error").innerText="";
      }

    let dob=document.getElementById("dob").value;

     if(dob==""){
        document.getElementById("d_error").innerText="please select date";
        return false;
      }else{
        document.getElementById("d_error").innerText="";
      }

    let contact=document.getElementById("contact").value;

     if(contact==""){
        document.getElementById("c_error").innerText="please enter contact";
        return false;
      }else if(contact.length!=10){
        document.getElementById("c_error").innerText="please enter valid contact";
        return false;
      }else{
         document.getElementById("c_error").innerText="";
      }

    let female=document.getElementById("female");
    let male=document.getElementById("male");
    let other=document.getElementById("other");

     if(!female.checked && !male.checked && !other.checked){
        document.getElementById("g_error").innerText="please select gender";
        return false;
     }else{
        document.getElementById("g_error").innerText="";
     }

    let science=document.getElementById("science");
    let arts=document.getElementById("arts");
    let commerce=document.getElementById("commerce");
    
     if(!science.checked && !arts.checked && !commerce.checked){
        document.getElementById("b_error").innerText="please select branch";
        return false;
     }else{
        document.getElementById("b_error").innerText="";
     } 

    let address=document.getElementById("adr").value;
     
     if(address==""){
        document.getElementById("adr_error").innerText="please enter address";
        return false;
     }else{
        document.getElementById("adr_error").innerText="";
     }

    let city=document.getElementById("city");

     if(city.selectedIndex==0){
        document.getElementById("ct_error").innerText="please select city";
        return false;
     }else{
        document.getElementById("ct_error").innerText="";
     }

    let state=document.getElementById("state");
      
     if(state.selectedIndex==0){
        document.getElementById("s_error").innerText="please select state";
        return false;
     }else{
        document.getElementById("s_error").innerText="";
     }

    let con=document.getElementById("con");

     if(con.selectedIndex==0){
        document.getElementById("cn_error").innerText="please select country";
        return false;
     }else{
        document.getElementById("cn_error").innerText="";
     }
  return true;
}
