$(function() {
    var $promo = $("#promo").offset().top;
    $(document).one("scroll", function() {
        var $window = $(window);
        var $y = $window.height() + $(this).scrollTop();
        if (($y = $promo)) {
            $(".animated").each(function() {
                var $this = $(this);
                $this
                    .css({
                        position: "relative",
                        top: $this.height()
                    })
                    .delay(500)
                    .animate(
                        {
                            opacity: 1,
                            top: 0
                        },
                        "normal"
                    );
            });
        }
    });
});
