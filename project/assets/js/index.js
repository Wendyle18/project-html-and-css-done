 // Add event listeners to the sidebar links to toggle details and hide the sidebar on mobile and tablet devices
 if (window.innerWidth <= 1070) {
    document.getElementById('personalDetails').addEventListener('click', function (e) {
        e.preventDefault();
        toggleDetails('Personal Details');
    });

    document.getElementById('famDetails').addEventListener('click', function (e) {
        e.preventDefault();
        toggleDetails('Family Background');
    });

    document.getElementById('educDetails').addEventListener('click', function (e) {
        e.preventDefault();
        toggleDetails('Educational Background');
    });

  
}

// Function to toggle the visibility of the details section and hide the sidebar
function toggleDetails(section) {
    var detailsSection = document.querySelector('.personalDetails');
    var sidebar = document.querySelector('.sidebar');
    
   
    detailsSection.style.display = 'block';
    sidebar.style.display = 'none';

    
    document.querySelector('.title h1').innerText = section;
}

