const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let displayPassword=document.getElementById("input-el");
let displayPassword2=document.getElementById("input-el2");

//on click function

function generatePassword() {
    let password = "";
    let password2 = "";
    for (let i = 0; i < 12; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
    password2 += characters[randomIndex2];
    displayPassword.textContent = password;
    displayPassword2.textContent = password2;

  }
}
function resetPassword() {
    let password = ""
    displayPassword.textContent = password;
    displayPassword2.textContent = password;

}