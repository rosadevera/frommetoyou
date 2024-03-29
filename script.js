// $(document).ready(function() {
//     $('#scattered figure').draggable();
// });

function toggleLayout() {
    console.log('button clicked');  
    var landingDiv = document.querySelector('.container');
    
    // Toggle between scattered and masonry layout
    landingDiv.id = (landingDiv.id === 'scattered') ? 'masonry' : 'scattered';
}

// function randomizeImages() {
//     var figures = document.querySelectorAll('#scattered figure');

//     figures.forEach(function(figure) {
//         // Generate random position for the figure
//         var randomX = Math.floor(Math.random() * (window.innerWidth - figure.offsetWidth));
//         var randomY = Math.floor(Math.random() * (document.body.scrollHeight - figure.offsetHeight));
        
//         // Generate random rotation for the figure
//         var randomRotation = Math.floor(Math.random() * 360); // Rotate between 0 and 359 degrees

//         // Apply random position and rotation to the figure
//         figure.style.position = 'absolute';
//         figure.style.left = randomX + 'px';
//         figure.style.top = randomY + 'px';
//         figure.style.transform = 'rotate(' + randomRotation + 'deg)';
//     });
// }

// window.addEventListener('load', randomizeImages);