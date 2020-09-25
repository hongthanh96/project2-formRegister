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