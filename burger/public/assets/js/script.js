
// on document ready
$(document).ready(function() {
    $("#submit").on("click", function(event) { // submit new burger button
        event.preventDefault();   // prevent default
      
        const newBurger = $("#burgerInput").val().trim();   // get and trim burger input
        $.post(`/${newBurger}`, function(response) {    // ajax post new burger
            console.log(response);      // log response
            window.location.reload();    // reload webpage
        });
    });

    $("#devour").on("click", function(event) {  // event bubbling - devour burger buttons
        event.preventDefault();   // prevent default
        
        const burgerId = event.target.dataset.burgerid;   //  get burger id stored as data
        $.ajax({       // ajax update
            url: `/${burgerId}`,   // pass burger id as parameter to update
            type: 'PUT',   // update
        }).then(function(response){
            console.log(response);      // log response
            window.location.reload();   // reload webpage
        });   
    });
});