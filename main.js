var formulario = document.querySelector('#buscar');
const articles = document.querySelectorAll('article');
const asides = document.querySelectorAll('aside');
const articlesDiv = document.querySelector('.articles');
const asidesDiv = document.querySelector('.asides');

var total = [];

for(let i=0; i<articles.length; i++){
  total.push(articles[i]);
}
for(let i=0; i<asides.length; i++){
  total.push(asides[i]);
}

var cantidadDeTags = 0;

total.forEach((e) => {
  const tags = e.dataset.tags.split(" ");
  cantidadDeTags += tags.length;
});

/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

function filtrar(){
  document.querySelector('.noencontrado').classList.remove('active');
  var busqueda = formulario.value.toLowerCase();

  if(busqueda == " " || busqueda == ""){
    total.forEach((e) => {
      e.style.display = "block";
    });
    formulario.value = "";
    clearStyle("articles");
    clearStyle("asides");

    total.forEach((e) => {
      e.style.marginRight = "20px";
    });
  }
  else {
    total.forEach((e) => {
      e.style.display = "none";
      const tag = e.dataset.tags.split(" ");

      tag.forEach((etwo) => {
        etwo = etwo.replace("_"," ");
        etwo = etwo.replace("_"," ");
        etwo = etwo.replace("_"," ");
        etwo = etwo.replace("_"," ");

        if(etwo.includes(busqueda)){
          e.style.display = "block";
          e.style.marginRight = "0px";

          articlesDiv.style.width = "100%";
          asidesDiv.style.width = "100%";
        }
      });
    });

    var ninguno = 0;

    total.forEach((e) => {
      if(e.style.display == "block"){
        ninguno++;
      }
    });

    if(ninguno === 0){
      document.querySelector('.noencontrado').classList.add('active');
      articlesDiv.style.width = "100%";
    }
  }
}

formulario.addEventListener('keyup',filtrar);

function clearStyle(id){
  try{
    document.getElementById(id).setAttribute("style","");
    document.getElementById(id).style.cssText="";
  }
  catch {

  }
}
