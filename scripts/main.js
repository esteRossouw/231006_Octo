
 const arrTrips = [
    {
      name: "Naomi",
      price: 10000,
      description: "Embark on a romantic odyssey aboard a luxury yacht, sailing from the enchanting Portofino, Italy, to the captivating Cinque Terre, Italy, where opulent comfort and intimate moments unite in a journey of pure romance.",
      image: "",
      addedDate: "2023-02-14",
      restrict: "adult",
      departure: "Portofino, Italy",
      arrival: "Cinque Terre, Italy",
    },
      
    {
      name: "Imaad",
      price: 12000,
      description: "Embark on a culinary odyssey as you sail from the captivating shores of Santorini, Greece, to the vibrant gastronomic haven of Mykonos, where every stop along the way offers a tantalizing feast for the senses.",
      image: "",
      addedDate: "2023-01-01",
      restrict: "adult",
      departure: "Santorini, Greece",
      arrival: "Mykonos, Greece",
    },
    {
      name: "Este",
      price: 8000,
      description: "Embark on a wellness-focused yacht journey from Nassau to the Exuma Cays in the Bahamas, where azure waters and secluded shores set the stage for rejuvenating yoga, spa pampering, and holistic relaxation.",
      image: "",
      addedDate: "2023-02-20",
      restrict: "kid",
      departure: "Nassau, Bahamas",
      arrival: "Exuma Cays, Bahamas",
    },
    {
      name: "Elvis",
      price: 7000,
      description: "Experience the ultimate musical escape on a yacht journey from Ibiza to Formentera, where the rhythm of the waves harmonizes with live music performances, themed parties, and an electrifying fusion of entertainment.",
      image: "",
      addedDate: "2023-03-03",
      restrict: "adult",
      departure: "Ibiza, Spain",
      arrival: "Formentera, Spain",
    },
    {
      name: "Sirus",
      price: 6500,
      description: "Embark on a celestial odyssey from Dubrovnik to Korčula, where the enchanting Adriatic night sky transforms your yacht into a stargazing haven, revealing the wonders of the cosmos in all their brilliance.",
      image: "",
      addedDate: "2023-03-13",
      restrict: "kid",
      departure: "Dubrovnik, Croatia",
      arrival: "Korčula, Croatia",
    },
    {
      name: "Gatsby",
      price: 6500,
      description: "Step back in time to an era of opulence and glamour on a Gatsby-themed yacht journey from Hamilton to St. George's in Bermuda, where the allure of the Roaring Twenties comes to life against a backdrop of azure waters and timeless elegance.",
      addedDate: "2023-03-20",
      restrict: "kid",
      departure: "Hamilton, Bermuda",
      arrival: "St. George's, Bermuda",
    },
    {
      name: "Sarah",
      price: 6000,
      description: "Embark on a kid-friendly adventure from Sydney to Pittwater in Australia, where young explorers can revel in playful activities, captivating wildlife encounters, and seafaring tales amidst the stunning coastal beauty.",
      addedDate: "2023-04-04",
      restrict: "kid",
      departure: "Sydney, Australia",
      arrival: "Pittwater, Australia",
    }
  ];
  
  let appliedFilter = "";
  let appliedSort = "date added";

  
  function generateCard(destination) {
    return `
      <div class="col-3">
        <div class="card">
          <img src="${destination.image}" class="card-img-top" alt="">
          <div class="card-body">
            <h4 class="card-title">${destination.title}</h4>
            <p class="card-text">${destination.price}</p>
            <p class="card-text mt-4">${destination.description}</p>
          </div>
        </div>
      </div>
    `;
  }
  const container = document.querySelector(".row.pt-5"); 
destinations.forEach(destination => {
  const cardHTML = generateCard(destination);
  container.insertAdjacentHTML("beforeend", cardHTML);
});
