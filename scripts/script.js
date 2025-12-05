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