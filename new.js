function sendMail(e){
    event.preventDefault();
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('msg').value)
    console.log(document.getElementById('subject').value)
    let loading=document.querySelector('.loading');


var params={
        
    from_name:document.getElementById('name').value,
    email: document.getElementById('email').value,
    msg: document.getElementById('msg').value,
    subject:document.getElementById('subject').value
    
    
}
emailjs.send("service_rhse5im","template_p9dezfl",params).then(function(res){
alert("sucsess"+res.status)})

}

