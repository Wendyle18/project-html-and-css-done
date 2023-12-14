$(document).ready(function () {
    var currentSection = "#personalDetails";
    var isAnimating = false;

    function showSection(section) {
        if (!isAnimating && currentSection !== section) {
            isAnimating = true;
            $(currentSection).fadeOut(500, function () {
                $(section).fadeIn(500, function () {
                    $(this).css('display', 'block');
                    $(this).css('opacity', '1');
                    isAnimating = false;
                    currentSection = section;

                    // Show/hide the appropriate buttons based on the current section
                    if (currentSection === "#educationBackground") {
                        $("#lastFieldsetButtons .btn-next").hide();
                        $("#lastFieldsetButtons .btn-submit").show().prop("disabled", true);
                    } else {
                        $("#lastFieldsetButtons .btn-next").show();
                        $("#lastFieldsetButtons .btn-submit").hide().prop("disabled", false);
                    }
                });
            });
        }
    }

    $("#familyBackground, #educationBackground").hide();

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

    // Click mobile back button (visible only on mobile and tablet devices)
    $(".btn-back").click(function () {
        var prevSection;
        if (currentSection === "#familyBackground") {
            prevSection = "#personalDetails";
        } else if (currentSection === "#educationBackground") {
            prevSection = "#familyBackground";
        } else {
            prevSection = "#personalDetails";
        }
        showSection(prevSection);
    });

    // Click mobile next/submit button (visible only on mobile and tablet devices)
    $(".btn-next, .btn-submit").click(function () {
        var nextSection;
        if (currentSection === "#personalDetails") {
            nextSection = "#familyBackground";
        } else if (currentSection === "#familyBackground") {
            nextSection = "#educationBackground";
        } else {
            nextSection = "#personalDetails";
        }
        showSection(nextSection);
    });

    // Apply functionality only for mobile and tablet devices (screen width <= 768px)
    if (window.innerWidth <= 768) {
        // Show the mobile buttons
        $("#lastFieldsetButtons").css("display", "inline-blocks");
    }
});