// Callbackhell.
$.ajax({
    type: "GET",
    url: "data/dogs.json",
    success: function(data){
        console.log(data)
        $.ajax({
            type: "GET",
            url: "data/cats.json",
            success: function(data){
                console.log(data)
                $.ajax({
                    type: "GET",
                    url: "data/fish.json",
                    success: function(data){
                        console.log(data)
                    }
                })
            }
        })
    }
})

// Refactoring the aabove code.
$.ajax({
    type: "GET",
    url: "data/dogs.json",
    success: getDogs,
})

function getDogs(data) {
    console.log(data);
    $.ajax({
        type: "GET",
        url: "data/cats.json",
        success: getCats,
    })
}

function getCats(data) {
    console.log(data);
    $.ajax({
        type: "GET",
        url: "data/fish.json",
        success: getFish,
    })
}

function getFish(data) {
    console.log(data);
}