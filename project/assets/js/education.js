document.addEventListener("DOMContentLoaded", function () {
            var sidebarLinks = document.querySelectorAll('.sidebar-links ul li a');
            var details = document.querySelector('.details');

            sidebarLinks.forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    
                    // Hide the sidebar
                    document.querySelector('.sidebar').style.display = 'none';
                    
                    // Show the details
                    details.style.display = 'block';
                });
            });
        });
  