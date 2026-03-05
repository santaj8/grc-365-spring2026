document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var thumbnail = document.getElementById('thumbnail');
    var largeImage = document.getElementById('largeImage');
    var closeBtn = document.getElementById('close');

    thumbnail.onclick = function() {
        modal.style.display = 'block';
        largeImage.src = 'large-image.svg'; // Replace with the path to your large image
    }

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
});