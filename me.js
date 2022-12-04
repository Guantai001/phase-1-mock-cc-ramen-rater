

let addRamen = false;
document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.querySelector("#new-ramen");
    const ramenMenu =document.querySelector("#ramen-menu");
    const ramenDetail = document.querySelector("#ramen-detail");
    const ramenRating = document.querySelector("#ramen-rating");
    const ramenForm = document.querySelector("#new-ramen");

    addBtn.addEventListener("click", () => {
        addRamen = !addRamen;
        if (addRamen) {
            ramenForm.style.display = "block";
        }else {
            ramenForm.style.display = "none";

        }
        });


        fetch("http://localhost:3000/ramens")
        .then(response => response.jsom()
        .then(ramens => {
            ramens.forEach(ramen => {
                const ramenImg = document.createElement("img");
                ramenImg.src = ramen.image;
                ramenImg.dataset.id = ramen.id;
                ramenMenu.append(ramenImg);

                ramenImg.addEventListener("click", () => {

                    ramenDetail.innerHTML = `
                    <img class= "detail-image" src = ${ramen.image} alt = ${ramen.name} />
                    <h2 class = "name">${ramen.name}</h2>
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

        }  
        )
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

        ramenImg.addEventListener("click", () => {
            ramenDetail.innerHTML = `
            <img class = "detail-image" src = ${newRamen.image} alt = ${newRamen.name} />
            <h2 class = "name">${newRamen.name}</h2>
            <h3 class = "restaurant">${newRamen.restaurant}</h3>
            `;
        }
        )
        ramenRating.innerHTML = `
        <h3>${newRamen.name}</h3>
        <img src = ${newRamen.image} alt = ${newRamen.name} />
        <h3>${newRamen.restaurant}</h3>
        <p>${newRamen.rating}<p>
        <p>${newRamen.comment}</p>
        `;

        ramenForm.reset();
        ramenForm.style.display = "none";
        addRamen = false;

        
    }


    
    )
    
}


),

 function deleteRamen(ramen) {
    fetch(`https://localhost:3000/ramens/${ramen.id}`, {
        method: "DETELE",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(ramen),

    }
    )
    .then(response => response.json()
    .then(ramen => {
        ramen.remove();

    
    })



    )
 },


 //update
function updateRamen(ramen) {
    fetch(`https://localhost:3000/ramens/${ramen.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        
        },
        body: JSON.stringify(ramen),
    })

    .then(response => response.json()
    .then(ramen => {
        const ramenImg = document.querySelector(`img[data-id = "${ramen.id}"]`);
        ramenImg.src = ramen.image;
        ramenImg.alt = ramen.name;
   
    })
    )
    } 

  
        )






}

)

