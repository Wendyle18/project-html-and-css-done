$(document).ready(function () {
                
    var currentSection = "#personalDetails"; //Declare default 
    var isAnimating = false; //tracker of animation

    function showSection(section) {
        if (!isAnimating && currentSection !== section) {
            isAnimating = true;
            $(currentSection).fadeOut(500, function () {
                $(section).fadeIn(500, function () {
                    $(this).css('display', 'block'); 
                    $(this).css('opacity', '1');
                    isAnimating = false; 
                    currentSection = section;
                });
            });
        }
    }


            $("#familyBackground").hide();
            $("#educationBackground").hide();

       

            // Click first link
            $("#first-link").click(function () {
                showSection("#personalDetails");
            });

            // Click second link
            $("#second-link").click(function () {
                showSection("#familyBackground");
            });

            // Click third link
            $("#third-link").click(function () {
                showSection("#educationBackground");
            });
});