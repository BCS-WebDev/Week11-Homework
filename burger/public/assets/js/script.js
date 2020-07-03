
// on document ready
$(document).ready(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
      
        const newBurger = $("#burgerInput").val().trim();
        $.post(`/${newBurger}`, function(response) {
            console.log(response);
            window.location.reload();
        });
    });

    $("#devour").on("click", function(event) {
        event.preventDefault();
        
        const burgerId = event.target.dataset.burgerid;
      
        $.ajax({
            url: `/${burgerId}`,
            type: 'PUT',
        }).then(function(response){
            console.log(response);
            window.location.reload();
        });
    });
});