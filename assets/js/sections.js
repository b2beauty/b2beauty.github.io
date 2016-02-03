$(document).ready(function() {
    var intro = $('section:nth-of-type(1)').offset();
    var sobre = $('section:nth-of-type(2)').offset();
    var portfolio = $('section:nth-of-type(3)').offset();
    var investidores = $('section:nth-of-type(4)').offset();
    var $window = $(window);
    
    $window.scroll(function() {
        if ( $window.scrollTop() >= intro.top) {
            //Logo
            $("#logo").removeClass("maior");

            //Active menu
            $("#navIntro").addClass("active");
            $("#navSobre").removeClass("active");
            $("#navPortfolio").removeClass("active");
            $("#navInvestidores").removeClass("active");
        }
        if ( $window.scrollTop() >= sobre.top ) {
            //Logo
            $("#logo").addClass("maior show").removeClass("hide");
            $("#logoBranca").removeClass("show");
            
            //Texto menu
            $("#header").removeClass("escuro").addClass("claro");

            //Active menu
            $("#navIntro").removeClass("active");
            $("#navSobre").addClass("active");
            $("#navPortfolio").removeClass("active");
            $("#navInvestidores").removeClass("active");
        }
        if ( $window.scrollTop() >= portfolio.top ) {
            //Logo
            $("#logo").addClass("hide");
            $("#logoBranca").addClass("show");
            $("#logoPreta").removeClass("show");

            //Texto menu
            $("#header").removeClass("claro").addClass("escuro");

            //Scroll
            // $("body").addClass("overflow");

            //Active menu
            $("#navIntro").removeClass("active");
            $("#navSobre").removeClass("active");
            $("#navPortfolio").addClass("active");
            $("#navInvestidores").removeClass("active");
        }
        if ( $window.scrollTop() >= investidores.top ) {
             //Logo
            $("#logoBranca").removeClass("show");
            $("#logoPreta").addClass("show");

            //Scroll
            // $("body").removeClass("overflow");

            //Active menu
            $("#navIntro").removeClass("active");
            $("#navSobre").removeClass("active");
            $("#navPortfolio").removeClass("active");
            $("#navInvestidores").addClass("active");
        }
    });     
});
