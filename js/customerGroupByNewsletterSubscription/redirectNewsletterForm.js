(function($) {
    $(function() {
        var loggedIn = false;
        try {
            loggedIn = dataLayer[0]['visitorLoginState'] === "Logged in";
        } catch (e) { }

        if (!loggedIn) {
            $newsletterForms = $('.newsletter-subscribe form');
            $newsletterForms.click(function(e) {
                e.preventDefault();
                doRedirect();
            });
            $newsletterForms.submit(function(e){
                doRedirect();
                return false;
            });

            var doRedirect = function() {
                var currentLangSelector = window.location.pathname.substr(0, window.location.pathname.indexOf('/'));
                window.location = currentLangSelector + 'customer/account/create/';
            };
        }
    });
})(jQuery);