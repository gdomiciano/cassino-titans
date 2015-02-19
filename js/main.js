$(function(){
    $("#confirm").validate({
        rules: {
            name: {
                required: true
                },
            email: {
                required: true
                }
        }
    });
});