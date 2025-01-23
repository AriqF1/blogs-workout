document.addEventListener('DOMContentLoaded', function() {
    fetch('views/layouts/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });

    fetch('views/layouts/info.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('info').innerHTML = data;
        });

    fetch('views/carousel/carousel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('carousel').innerHTML = data;
        });
});