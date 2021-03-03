

// $ is the jQuery prefix
// then we open parentheses, and put the selector
// for what we want to attach our event listener to.
// .ready is the listener that we're attaching to the document
// and within the parentheses of the .ready() listener, we use an
// anonymous callback function
$(document).ready(function(){

    $("#fixH1").click(function(){
        $("h1").addClass("fixHideousness");
        $("h1").text("Thank god, that was terrible!") //using .text() as a SETTER
    })

    // we can also use some of our jQuery effects to retrieve data
    $("#alertThing").click(function(){
        var value = $("#getValue").val(); //using .val() as a GETTER

        alert(value);

        $("header").append("<h2>Woah, I'm new!</h2>")

        // $("h2").click(function(){ 
        //     $(this).remove();
        // })
    })

    $(document).on("click", "h2", function(){
        $(this).remove();
    })
    

})
