// $('#mydiv').mouseenter(function () {
//     $(this).css('background-color', 'red');
//     $(this).css('border-radius', '20px');
// });

// $('#mydiv').mouseleave(function () {
//     $(this).css('background-color', 'peru');
//     $(this).css('border-radius', '0px');
// });

// $('#mydiv').dblclick(function () {
//     $(this).css('background-color', 'green');
//     $(this).css('color','black');
// });

// $('#mydiv').contextmenu(function () {
//     $(this).css('background-color', 'yellow');
   
// });

// $('body').keydown(function () {
//     $(this).css('background-color', 'black');
// });


// $('body').keyup(function () {
//     $(this).css('background-color', 'blue');
// });

// $('#fname').focus(function () {
    
//     $(this).css({
//         'border': '2px solid red',
//         'width': '500px',
//         'height':'30px',
// //     });
// });

// $('#fname').blur(function () {

//     $(this).css({
//         'border': '2px solid green',
//         'border-radius':'10px',
//         'width': '500px',
//         'height': '30px',
//     });
// });

// $('#country').change(function () {
//     $(this).css('background-color', 'yellow');
// })


// $('#fname').select(function () {

//     $(this).css('background-color','red');
// });

// $('#myform').submit(function () {
//     console.log("my form is submited");
//});

$('#addClass').on({
    "click": function () {
        $('#testbox').addClass("green");
    },
    "mouseenter": function () {
        $(this).css({
            'background-color': 'yellow',
            'color': 'black',
        });
    },
});

$('#removeClass').click(function () {
    $('#testbox').removeClass('green');
});

$('#toggleClass').click(function () {
    $('#testbox').toggleClass('green');
});

$('#append').on("click", function () {
    $('#testbox').append("<h1>hello nepal</h1>");
});

$('#prepend').on("click", function () {
    $('#testbox').prepend("<h1>hello nepal</h1>");
});


$('#after').on("click", function () {
    $('#testbox').after("<h1>hello nepal</h1>");
});

$('#before').on("click", function () {
    $('#testbox').before("<h1>hello nepal</h1>");
});