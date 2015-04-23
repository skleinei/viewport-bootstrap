;(function ($) {

    $(document).ready(function () {
        prettyPrint();

        $('.sp-slideshow').cycle();

        $('.sp-tree').scrollTree({
            'contextPath': '/confluence'
        });
    });

}(jQuery));
