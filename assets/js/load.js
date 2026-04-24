function load(id,file){
fetch("/halim-store/" + file)
.then(res=>res.text())
.then(data=>{
document.getElementById(id).innerHTML=data;
})
.catch(err=>console.log("ERROR:",err));
}

load("navbar","template/navbar.html");
load("footer","template/footer.html");