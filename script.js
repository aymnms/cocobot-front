$(document).ready(function() {
    $('#get-joke-button').click(function() {
        $.ajax({
            url: 'http://api.cocobot.aymnms.fr:60080/joke',
            type: 'GET',
            success: function(response) {
                $('#joke').text(response.content);
            },
            error: function() {
                $('#joke').text('Failed to fetch a joke. Please try again.');
            }
        });
    });
});