const destinations = [
    {
      image: "/assets/4.png",
      title: "Maldives - Male",
      price: "R10 000",
      description: "A stunning tropical paradise..."
    },
  ];

  
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