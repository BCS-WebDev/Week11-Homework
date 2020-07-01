
$(document).ready(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
      
        const newBurger = $("#burgerInput").val().trim();
        $.post(`/${newBurger}`, function(response) {
            console.log(response);
        });  
    });

    $("#devour").on("click", function(event) {
        event.preventDefault();
        
        const burgerId = event.target.dataset.burgerid;
      
        $.put(`/${burgerId}`, function(response) {
            console.log(response);
        });
    });
});