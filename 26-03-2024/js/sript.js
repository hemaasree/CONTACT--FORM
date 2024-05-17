const form = document.getElementById("form");
const username = document.getElementById("username");
const conatct_no= document.getElementById("conatct_no");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conformpass = document.getElementById("conformpass");
 
form.addEventListener("submit",e=>{
    e.preventDefault();
    checkinput();
    length(username,5,15);


    

 });
      function  checkinput(){
            const usernamevalue        = username.value.trim();
            const conatct_novalue      = conatct_no.value.trim();
            const emailvalue           = email.value.trim();
            const passwordvalue        = password.value.trim();
            const conformpassvalue     = conformpass.value.trim();
           
      if(usernamevalue === ""){
          setError(username ,"user name cannot be blank");
         }
          else{
                   setSuccess(username );

                        }


                        
//contact
         
           function checkinput (phone_no){
             
             var re =/^\d{3} \d{3} \d{4}$/;
             return re.test(phone_no);
           }


           if( conatct_novalue  === ""){
            setError ( conatct_no ," contact no cannot be blank");
           }
            
           else if(!checkinput(conatct_novalue)){
            setError ( conatct_no ,"please enter the valid phone number");

           }

           else{
            setSuccess(conatct_no);

        }

       

        function checkinput(email_str) {
         
         
          var pattern =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
         
            return email_str.match(pattern);    
        
        }
        
        if( emailvalue  === ""){
          setError (email ," email cannot be blank");
         }
          
         else if(!checkinput(emailvalue )){
          setError (email ,"please enter the valid email");

         }

         else{
          setSuccess(email);


         }








//password 
  

          if(passwordvalue ===""){
            setError (password,"password cannot be blank");
          }
          else{
            setSuccess(password);
          }
      //conform password

      if(conformpassvalue  ===""){
        setError(conformpass,"password cannot be blank");
      }
      else if(passwordvalue!=conformpassvalue)
      {
        setError(conformpass,"password dones not match");
      }

      else{
        setSuccess(conformpass);
      }



                        
       function  setError(input,message){
         const group_form = input.parentElement;
         const p = group_form.querySelector('p');
         group_form.className = 'group_form error';
         p.innerText = message;
 
     }
     function   setSuccess(input){
         const group_form = input.parentElement;
         group_form.className = 'group_form success';
     
     }
 
 }
      function length(){
        const usernamevalue = username.value.trim().length;

          ///length
          function length(input,min,max){

            if( usernamevalue.length<min ){
              setError(username ,"user name must be greater than  charater");
            }
           else if( usernamevalue.length>max ){
            setError(username ,"user name max value");
            }
            else{
              setSuccess(username );
  
            }
          }
          
      }
      




 