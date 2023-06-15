const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Buscando Filme..."
    qrImg.src = `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9Im1IRTkH5oDJ3W9-NKiW8sCIm2Y0bqoBN39sgKH1_pvRBqMD`;
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