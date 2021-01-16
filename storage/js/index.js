var nom=sessionStorage.getItem("nombre")
console.log("----"+nom);
if(nom!=null){
  document.getElementById("n1").innerHTML=nom;
}

