/*jshint esversion: 6 */
window.onload = () => {
  //Hij pakt de ID orderpage en wanneer er wordt geklikt gaat hij vervolgens naar order.html
  //Dit moet ik 6x opniew doen, omdat er voor een rede maar 1 button werkt.

  document.getElementById('orderpage').onclick = function() {
      location.href = "order.html";
  };

  document.getElementById('orderpage2').onclick = function() {
      location.href = "order.html";
  };

  document.getElementById('orderpage3').onclick = function() {
      location.href = "order.html";
  };

  document.getElementById('orderpage4').onclick = function() {
      location.href = "order.html";
  };

  document.getElementById('orderpage5').onclick = function() {
      location.href = "order.html";
  };

  document.getElementById('orderpage6').onclick = function() {
      location.href = "order.html";
  };

  document.getElementById('orderpage7').onclick = function() {
    location.href = "order.html";
};
};


function productDeatils(){
  return [

        {
          id: "whiteshirt",
          title: "White Shirt" ,
          img: "webshopimg/shirt/kast.jpg",
          detail:"A nice white shirt of the BlackList, If you like Raymond Red Reddington you will certainly like this" ,
          prijs: "$11.00",


        },

        {
          id: "blackshirt" ,
          title: "Black Shirt",
          img: "webshopimg/shirt/black.jpg",
          detail:"Red is not perfect Fitted Scoop T-Shirt. If you are a quirky a Raymond, you will like this" ,
          prijs: "$11.00",


        },



        {
          id:  "redshirt",
          title:  "Red Shirt",
          img: "webshopimg/shirt/red.jpg",
          detail:"I Speak Only With Lizzie Slim Fit T-Shirt. If you would like to talk to liz, this is a perfect shirt for you!" ,
          prijs: "$11.00",



        },



        {
          id:   "spiralnotebook" ,
          title:  "Spiral Notebook",
          img: "webshopimg/shirt/notebook.jpg",
          detail: "The BlackList spiral notebook, this cheap notebook will fit right into your backpack to take it anywhere",
          prijs: "$7.00",



        },


        {
          id:  "showercurtain" ,
          title: "Shower Curtain" ,
          img: "webshopimg/shirt/showercurtain.jpg",
          detail:"Red Shower Curtain, a perfect showercurtain to show your mistress!" ,
          prijs: "$60.00",



        },


        {
          id: "mug"  ,
          title:  "Mug",
          img: "webshopimg/shirt/mug.jpg",
          detail: "The BlackList Classic Mug, Perfect to start your morning routine.",
          prijs: "$10.00",



        },


       


  ]
}
//Hierbeneden wordt de functie die in informatie.js wordt beschreven in een varabele gestopt, en de modalID wordt ook opgeslagen in een variabele
let productDeatils1 = productDeatils()
let modelId = "modal"


function haalModalTevoorschijn() {
  document.getElementById(modelId).className = "modal modal-aan"
}
function laatModalVerdwijnen(){
document.getElementById(modelId).className = "modal modal-uit"
}

//De functie hierbeneden kan je oproepen in je html, en je doet er een ID bij (de id kan je terugvinden in informatie.js)
//Verder wordt de functie laatmodalzien opgeroepen en gaat de "foreach" statement alles 1 voor 1 dat bij de ID hoort returnen in je modal.
//je kan hier een if statement zien, als de productid hetzelfde is als de item id dus (als whiteshirt als id wordt meegegeven en ze vinden whiteshirt weer terug in informatie.js)
//pakken ze vervolgens de titel, image, details en prijs.
function laatProductZien(productId){
  haalModalTevoorschijn()
  productDeatils1.forEach((iD) => {
    if(iD.id == productId){
      document.getElementById("modal-titel").innerText = iD.title
      document.getElementById("modal-image").src= iD.img
      document.getElementById("modal-details").innerText = iD.detail
      document.getElementById("prijs").innerText= iD.prijs


    }
  });
}
