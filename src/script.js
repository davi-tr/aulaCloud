const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");

const acao = async () => {
    let qrValue = qrInput.value;
    qrValue = qrValue.replace(/\s/g, '');
    const response = await fetch(`https://imdb-api.com/API/Search/k_q5mkdmkt/${qrValue}`);
    const myJson = await response.json();
    var resultadoJson = myJson.results['0'];
    var imagem = resultadoJson.image;
    qrImg.src = imagem;
}

generateBtn.addEventListener("click", acao);

generateBtn.addEventListener("click", () =>{

     generateBtn.innerText = "Buscando Filme..."
    qrImg.addEventListener("load",() => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Buscar Filme";
    })
});

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});
