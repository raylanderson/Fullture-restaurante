
function submitMessage() {
    let nome = document.getElementById('name').value
    let telefone = document.getElementById('telephone').value
    let assunto = document.getElementById('subject').value
    let msg = document.getElementById('msg').value

    sendEmail(nome, telefone, assunto, msg)

    alert(nome + ' Sua mensagem foi enviada com sucesso!')
}

function sendEmail(nome, telefone, assunto, msg) {

    var params = {
        nome: nome,
        telefone: telefone,
        assunto: assunto,
        msg: msg
    }

    emailjs.send('service_italian_bistro', 'template_w1cbyne', params)
        .then(function(response){
            console.log('SECCESS!!', response.status, response.text);
        }, function(error){
            console.log('ERROR!!!', error);
        })

}
