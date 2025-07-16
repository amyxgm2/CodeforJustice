
const get_involved = document.getElementById("email-signup");
const sub_btn = document.getElementById("submit-btn");
let input_value;
const email_extentions =[".org",".edu", ".co", ".gov", ".edu",".com",".net"];
const email_domains = ["@gmail", "@yahoo", "@outlook", "@aol", "@icloud", "@hotmail" ];

sub_btn.addEventListener("click", function(e){

    input_value = get_involved.value;
    e.preventDefault();

    
    for(let i =0; i< email_extentions.length && i< email_domains.length; i++){
        if(input_value.endsWith(email_domains[i] && email_extentions[i])){
        
            document.getElementById("status-check").textContent = "Verified ✅";
            
        }
        else{
            document.getElementById("status-check").textContent = "Invalid Email Adress";
        }

    }
    



});