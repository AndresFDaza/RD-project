document.querySelector('h2').addEventListener("click" ,()=> {
    console.log("entro por acá")
    let styleH2 = document.getElementsByTagName("h2")[0]
    if (styleH2.style.color == "blue"){
    styleH2.style.color = "red";
}
else {
 setTimeout(() =>{
    styleH2.style.color = "blue";
       
 },200)
}
})