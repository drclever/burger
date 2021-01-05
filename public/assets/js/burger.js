$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
    
        var devouredBurger = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: devouredBurger
        }).then(
          function () {
            console.log("changed devoured to true");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".burgerInput").on("submit", function(event) {
    event.preventDefault();
    var orderBurger = {
        burger_name: $("#orderBurger").val().trim()
    };
    
    $.ajax("/api/burger", {
        type: "POST",
        data: orderBurger
    }).then(function() {
        console.log("Burger Created");
        location.reload();
    })
    })

})