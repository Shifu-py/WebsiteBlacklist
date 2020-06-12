/*jshint esversion: 6 */
window.onload = () => {

  //functie gaat hij met het betreffende link ernaartoe
  document.getElementById('buttonwatch').onclick = function() {
      location.href = "https://www.netflix.com/nl/title/70281312";
  };

  //Subnavigatie werkend gebeure (:
  const alleLinks = document.querySelectorAll('.subnav');
  const alleSections = document.querySelectorAll('.voorSubnav');

  function veranderState() {
      let index = alleSections.length;

      while (--index && window.scrollY + 50 < alleSections[index].offsetTop) {}
      /*De bovenstaande while loop zorgt ervoor dat de index wordt verlaagt bij elke iteratie. Het loopje stopt wanneer 
      window.scrollY +50 < sections[index].offsetTop] niet waar is Index blijft daarom op het laatst opgeslaagde waarde zodat het hieronder gebruikt kan worden om de links een active class te geven.  
      Dit whileloop is nodig, want anders gaat index op -1 (wordt opgelost door whileloop door laatste waarde te behouden voordat het negatief wordt)
      liggen en dan krijg je als error dat de sections niet bestaan en werken de actives niet meer.*/
      alleLinks.forEach((link) => link.classList.remove('activeSubNav'));
      alleLinks[index].classList.add('activeSubNav');
      /*Wanneer het een bepaalde index raakt, wordt het pas op een active klasse gezet.*/
  }

  veranderState();
  window.addEventListener('scroll', veranderState);

  
};