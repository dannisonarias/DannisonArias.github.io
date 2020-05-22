//Contact
$('#working_form').submit(function() {
    var action = $(this).attr('action');

    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
        );
        document.getElementById("alert-contact").classList.remove("hidden");
    });

    return false;

});
