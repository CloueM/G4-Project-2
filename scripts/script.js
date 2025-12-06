
//VALUES SECTION

document.addEventListener("DOMContentLoaded", function() {
    console.log("accordion is working!");

    const containers = document.querySelectorAll("#expect-section .container");
    console.log("Containers are working!", containers.length);

    containers.forEach(function (container) {
   const expectHeader = container.querySelector(".expect-header");

   expectHeader.addEventListener("click", function() {

    containers.forEach(function(otherContainer) {
        otherContainer.classList.remove("is-open");   
    });
        container.classList.add("is-open");
        console.log("You clicked a container!", container);

        });
    });
}); 


//REVIEWS SECTION


document.addEventListener("DOMContentLoaded", function() {

    const reviews = [
        {
            quote: "Super responsive, quick and easy delivery, and reasonable pricing. I had a great experience with Alto Pharmacy!",

            client:"Jodi, Alto customer"
        },
        {
            quote: "Very easy ordering process. Very quick responses to questions from customer service. Prompt and friendly delivery. Highly recommend!",

            client:"Wendy, Alto customer"

        },
        {
            quote: "I was extremely impressed with the ease of using the app, how quickly they processed my order, and the wonderful customer service. The caramel with my order was definitely an added bonus.!",

            client:"Camille, Alto customer"
        }
    ];

    const quoteText = document.querySelector(".reviews-quote");
    const clientText = document.querySelector(".reviews-client");
    const prevButton = document.querySelector(".reviews-btn--prev");
    const nextButton = document.querySelector(".reviews-btn--next");

console.log(quoteText, clientText, prevButton, nextButton);
    
});
