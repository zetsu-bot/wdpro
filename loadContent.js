// loadContent.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    fetch('/download.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('download-placeholder').innerHTML = data;
        });
});
