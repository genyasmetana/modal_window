$(document).ready(function(){

    // Show modal
    $('.call-modal').on('click', function() {
        $('.modalAccept-wrapper').fadeIn();
        $('#modalAccept').delay(100).fadeIn();
    });

    // Dismiss modal / Cancel click event
    $('.modal-window__dismiss, .modal-window__footer__button-cancel').on('click', function() {
        closeModal();
    });

    // Dismiss modal by wrapper click
    $('.modalAccept-wrapper').on('click', function(e) {
        if( e.target.className == 'modalAccept-wrapper' ) {
            closeModal();
        }
    });

    $('.modal-window__footer__button-uninstall').on('click', function() {
        closeModal(function(){
           alert('DONE');
        });
    });

    // Close modal function
    function closeModal(callback) {
        $('#modalAccept').fadeOut();
        $('.modalAccept-wrapper').delay(100).fadeOut(function(){
            if( callback !== undefined ) {
                callback();
            }
        });
    }
});