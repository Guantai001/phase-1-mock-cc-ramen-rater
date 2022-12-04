// write your code here

let addRamen = false;

document.addEventListener("DOMContentLoaded", () => {

    const ramenMenu =document.querySelector("#ramen-menu");
    const ramenDetail = document.querySelector("#ramen-detail");
    const ramenRating = document.querySelector("#ramen-rating");
    const ramenForm = document.querySelector("#new-ramen");

    fetch("http://localhost:3000/ramens")
    .then(response => response.json()
    .then(ramens => {
        ramens.forEach(ramen => {
            const ramenImg = document.createElement("img");
            ramenImg.src = ramen.image;
            ramenImg.dataset.id = ramen.id;
            ramenMenu.append(ramenImg);

            ramenImg.addEventListener("click", () => {

                ramenDetail.innerHTML = `
                <img class= "detail-image" src = ${ramen.image} alt = ${ramen.name} />
                <h2 class = "name">${
                    ramen.name
                }</h2>
                <h3 class = "restaurant">${ramen.restaurant}</h3>
                `;
                });

                ramenRating.innerHTML = `
                <h3>${ramen.name}</h3>
                <img src = ${ramen.image} alt = ${ramen.name} />
                <h3>${ramen.restaurant}</h3>
                <p>${ramen.rating}</p>
                <p>${ramen.comment}</p>
                
                `;
            });

            ramenForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const newRamen = {
                    name: event.target.name.value,
                    restaurant: event.target.restaurant.value,
                    image:event.target.image.value,
                    rating:event.target.rating.value,
                    comment:event.target.comment.value,
                };

                fetch("http://localhost:3000/ramens", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",

              },
                body:json.stringify(newRamen)
                
                })
                .then(response => response.json())
                .then(newRamen => {
                    const ramenImg = document.createElement("img");
                    ramenImg.src = newRamen.image;
                    ramenImg.dataset.id = newRamen.id;
                    ramenMenu.append(ramenImg);
                })
                },

           
                 )
                }
                  ) ) 
                })


