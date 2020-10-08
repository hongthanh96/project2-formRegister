function validate() {
    console.log('123');
    $formData = $('#myform');
    $formData.valid();
}

$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Please check your email."
);

// $(document).ready(function() {
// $("#name").keyup(function() {
// var value_name = $('#name');
// if (value_name != '') {
//     console.log(value_name);
//     $("#label1").css("display", "block");
// } else {
//     console.log(value_name);
//     $("#label1").css("display", "none");
// }
// });

// $('#name').bind('keyup', uploadValue);

// function uploadValue() {
//     $("#label1").css("display", "block");
// }

// $("#email").keyup(function() {
//     $("#label2").css("display", "block");
// });
// $("#phone").keyup(function() {
//     $("#label3").css("display", "block");
// });
// $("#address").keyup(function() {
//     $("#label4").css("display", "block");
// });
// $("#pass1").keyup(function() {
//     $("#label5").css("display", "block");
// });
// $("#comfirmpass").keyup(function() {
//     $("#label6").css("display", "block");
// });
// });

// function name() {
//     var value_name = $('#name');
//     if (value_name.val() != '') {
//         $("#label1").css("display", "block");
//     } else {
//         $("#label1").css("display", "none");
//     }
// }

// function move(evt) {
//     switch (evt.keyCode) {
//         case 8:
//             break;
//         default:
//             name();

//     }
// }


// window.addEventListener('keydown', move);

function checkName(e) {
    if (e == '') {
        $("#label1").html('');
    } else {
        $("#label1").html('User Name');
    }
}

function checkEmail(e) {
    if (e == '') {
        $("#label2").html('');
    } else {
        $("#label2").html('Email');
    }
}

function checkPhone(e) {
    if (e == '') {
        $("#label3").html('');
    } else {
        $("#label3").html('Phone');
    }
}

function checkAddress(e) {
    if (e == '') {
        $("#label4").html('');
    } else {
        $("#label4").html('Address');
    }
}

function checkPass1(e) {
    if (e == '') {
        $("#label5").html('');
    } else {
        $("#label5").html('Password');
    }
}

function checkComfirmPass(e) {
    if (e == '') {
        $("#label6").html('');
    } else {
        $("#label6").html('Confirm Password');
    }
}