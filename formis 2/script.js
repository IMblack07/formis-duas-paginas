function botaoLog(){
    let NomeLog = document.getElementById('nome_login').value
    let senhaLog =  document.getElementById('senha_login').value

    alert('Seu nome é: '+ NomeLog + '\n' + 'sua senha é: ' + senhaLog )
}

function botaoCad(){
    let nome_cad = document.getElementById('nome_cad').value
    let email_cad = document.getElementById('email_cad').value
    let senha_cad = document.getElementById('senha_cad').value
    let estado_civil = document.querySelector("input[name='estado_civil']:checked").value 

    alert('Seu nome é: ' + nome_cad + '\n' + 'seu email é: ' + email_cad + '\n' + 'estado civil: ' + estado_civil)
}