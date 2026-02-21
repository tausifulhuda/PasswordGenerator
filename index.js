const passChar=[]

let firstPass=document.getElementById("first_pass")
let secondPass=document.getElementById("second_pass")

for(let i=33; i<126; i++){
    passChar.push(String.fromCharCode(i))
}


function generatePassword(){
    let password=""
    for(let i=0;i<15;i++){
        let index=Math.floor(Math.random()*passChar.length)
        password+=passChar[index]
    }
    return password
}

function generatePasswords(){
    firstPass.textContent=generatePassword()
    secondPass.textContent=generatePassword()
}
