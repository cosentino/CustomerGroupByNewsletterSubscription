$(function() {
    $newsletterForms = $('.newsletter-subscribe form');
    $newsletterForms.click(function(e) {
        e.preventDefault();
        doRedirect();
    });
    $newsletterForms.
    $("#cpa-form").submit(function(e){
        doRedirect();
        return false;
    });

    var doRedirect = function() {
        console.log('doRedirect');
    };
})