const postcards = [
    {
        "title": "Yoshitomo Nara from LACMA",
        "images": '01front.png',
        "year": 2021,
        "category": ["art", "seasonal"]
    },
    {
        "title": "Yoshitomo Nara from LACMA",
        "images": '02front.png',
        "year": 2021,
        "category": ["art", "special"]
    },
    {
        "title": "Yoshitomo Nara from LACMA",
        "images": '03front.png',
        "year": 2021,
        "category": ["art"]
    },
    {
        "title": "Yoshitomo Nara from LACMA",
        "images": '04front.png',
        "year": 2021,
        "category": ["art"]
    },
    {
        "title": "Yoshitomo Nara from LACMA",
        "images": '05front.png',
        "year": 2021,
        "category": ["art"]
    },
    {
        "title": "from Levain Bakery",
        "images": '06front.png',
        "year": 2022,
        "category": ["restaurants", "places"]
    },
    {
        "title": "from The Morgan Library",
        "images": '07front.png',
        "year": 2022,
        "category": ["places"]
    },
    {
        "title": "from 826LA",
        "images": '08front.png',
        "year": 2023,
        "category": ["art", "places"]
    },
    {
        "title": "Rothko from the Guggenheim",
        "images": '09front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "from the Guggenheim",
        "images": '10front.png',
        "year": 2023,
        "category": ["art", "places"]
    },
    {
        "title": "Alice Neel from the Whitney",
        "images": '11front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "from Joshua Tree",
        "images": '12front.png',
        "year": 2023,
        "category": ["places", "vintage/kitsch"]
    },
    {
        "title": "from Joshua Tree",
        "images": '13front.png',
        "year": 2023,
        "category": ["places", "vintage/kitsch"]
    },
    {
        "title": "from the Getty Villa",
        "images": '14front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "from Giant Robot",
        "images": '15front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "On Vacation... Missing You",
        "images": '16front.png',
        "year": 2023,
        "category": ["vintage/kitsch", "special"]
    },
    {
        "title": "Year of the Rabbit from the UN",
        "images": '17front.png',
        "year": 2023,
        "category": ["seasonal"]
    },
    {
        "title": "from Sisters in Brooklyn",
        "images": '18front.png',
        "year": 2023,
        "category": ["restaurants"]
    },
    {
        "title": "from SEVENTEEN 'Boys Be' (HIDE Ver.)",
        "images": '19front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "from niconeco zakkaya (fall edition)",
        "images": '20front.png',
        "year": 2023,
        "category": ["places", "seasonal"]
    },
    {
        "title": "vintage from Philly",
        "images": '21front.png',
        "year": 2023,
        "category": ["vintage/kitsch", "places"]
    },
    {
        "title": "Central Park in the fall",
        "images": '22front.png',
        "year": 2023,
        "category": ["places"]
    },
    {
        "title": "with Maya in NYC!",
        "images": '23front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "Bonnes Fetes! from the Eiffel Tower",
        "images": '24front.png',
        "year": 2023,
        "category": ["places", "seasonal"]
    },
    {
        "title": "Cows from Musée d'Orsay",
        "images": '25front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "Monet from Musée d'Orsay",
        "images": '26front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "Monet from Musée d'Orsay",
        "images": '27front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "Monet from Musée de l'Orangerie",
        "images": '28front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "from Musée du Louvre",
        "images": '29front.png',
        "year": 2023,
        "category": ["art"]
    },
    {
        "title": "SALT CAMP Dubai",
        "images": '30front.png',
        "year": 2024,
        "category": ["restaurants"]
    },
    {
        "title": "from Dia Beacon",
        "images": '31front.png',
        "year": 2024,
        "category": ["art"]
    },
    {
        "title": "from Dia Beacon",
        "images": '32front.png',
        "year": 2024,
        "category": ["art"]
    },
    {
        "title": "from American Bar in West Village",
        "images": '33front.png',
        "year": 2023,
        "category": ["restaurants"]
    },
    {
        "title": "from Sisters in Brooklyn",
        "images": '34front.png',
        "year": 2023,
        "category": ["restaurants"]
    },
    {
        "title": "from Dubai",
        "images": '35front.png',
        "year": 2022,
        "category": ["art", "places"]
    },
    {
        "title": "from Noguchi Museum",
        "images": '36front.png',
        "year": 2024,
        "category": ["art"]
    },
    {
        "title": "from Noguchi Museum",
        "images": '41front.png',
        "year": 2024,
        "category": ["art"]
    },
    {
        "title": "Diptyque",
        "images": '37front.png',
        "year": 2024,
        "category": ["vintage/kitsch"]
    },
    {
        "title": "Diptyque",
        "images": '38front.png',
        "year": 2024,
        "category": ["vintage/kitsch"]
    },
    {
        "title": "from Money Cake in Flushing",
        "images": '39front.png',
        "year": 2024,
        "category": ["restaurants"]
    },
    {
        "title": "from Money Cake in Flushing",
        "images": '40front.png',
        "year": 2024,
        "category": ["restaurants"]
    }
];

// Define an object to store the original positions and rotations of each image
const originalPositions = {};

// Function to store the original positions and rotations of each image
function storeOriginalPositions() {
    const figures = document.querySelectorAll('.scattered img');
    figures.forEach(function(figure) {
        const id = figure.getAttribute('id');
        originalPositions[id] = {
            x: figure.offsetLeft,
            y: figure.offsetTop,
            rotation: parseFloat(figure.style.transform.replace('rotate(', '').replace('deg)', '')) || 0
        };
    });
}

// Function to reapply transformations to filtered images
function reapplyTransformations() {
    const figures = document.querySelectorAll('.scattered img');
    figures.forEach(function(figure) {
        const id = figure.getAttribute('id');
        const originalPosition = originalPositions[id];
        figure.style.position = 'absolute';
        figure.style.left = originalPosition.x + 'px';
        figure.style.top = originalPosition.y + 'px';
        figure.style.transform = 'rotate(' + originalPosition.rotation + 'deg)';
    });
}

function applyDraggable() {
    $('.scattered img').draggable({
        stack: ".scattered img"
    });
}

function renderPostcards() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const selectedCategory = document.getElementById('category-filter').value;
    const selectedYear = document.getElementById('year-filter').value;

    const filteredPostcards = postcards.filter(function(postcard) {
        const categories = postcard.category.map(cat => cat.trim()); // Trim each category string
        const categoryMatch = selectedCategory === 'all' || categories.includes(selectedCategory);
        const yearMatch = selectedYear === 'all' || postcard.year.toString() === selectedYear;
        return categoryMatch && yearMatch;
    });

    filteredPostcards.forEach(function(postcard, index) {
        const postcardElement = document.createElement('div');
        postcardElement.className = 'postcard';
    
        const img = document.createElement('img');
        img.src = 'images/' + postcard.images;
        img.alt = postcard.title;
        img.id = 'postcard_' + index; // Assign a unique ID to the image element
    
        const overlay = document.createElement('div');
        overlay.className = 'postcard-overlay';
        overlay.textContent = `${postcard.title} - ${postcard.year}`;
    
        postcardElement.appendChild(img);
        postcardElement.appendChild(overlay);
        container.appendChild(postcardElement);
    });

    // Apply draggable functionality after rendering postcards
    applyDraggable();
}



document.getElementById('category-filter').addEventListener('change', function() {
    renderPostcards();
});

document.getElementById('year-filter').addEventListener('change', function() {
    renderPostcards();
});


function randomizeImages() {
    var containerHeight = Math.min(300 * window.innerHeight / 100, document.body.scrollHeight);
    var containerWidth = window.innerWidth;
    
    var figures = document.querySelectorAll('.scattered img');

    figures.forEach(function(figure) {
        // Generate random position for the figure within the container boundaries
        var randomX = Math.floor(Math.random() * (containerWidth - figure.offsetWidth));
        var randomY = Math.floor(Math.random() * (containerHeight - figure.offsetHeight));
        
        // Generate random rotation for the figure
        var randomRotation = Math.floor(Math.random() * 360); // Rotate between 0 and 359 degrees

        // Apply random position and rotation to the figure
        figure.style.position = 'absolute';
        figure.style.left = randomX + 'px';
        figure.style.top = randomY + 'px';
        figure.style.transform = 'rotate(' + randomRotation + 'deg)';
    });
}


function clearTransformations() {
    var figures = document.querySelectorAll('.scattered img');
    figures.forEach(function(figure) {
        figure.style.position = 'static'; // Reset position to default
        figure.style.left = ''; // Clear left property
        figure.style.top = ''; // Clear top property
        figure.style.transform = 'none'; // Clear transformations
    });
}

function toggleLayout() {
    console.log('button clicked');
    let myContainer = document.getElementById("container");
    if (myContainer.classList.contains("masonry")) {
        // If switching to scattered layout, randomize images
        randomizeImages();
    } else {
        // If switching to masonry layout, clear transformations
        clearTransformations();
    }
    
    myContainer.classList.toggle("masonry");
    myContainer.classList.toggle("scattered");

    // Check if scattered class is added
    if (myContainer.classList.contains("scattered")) {
        // If scattered class is added, call randomizeImages() again
        randomizeImages();
        applyDraggable(); // Apply draggable functionality
    }

    var button = document.querySelector('.organize');
    if (button.value === 'organize') {
        button.value = 'scatter';
    } else {
        button.value = 'organize';
    }
}

let expandBtn = document.getElementById("expand");
let sidebar = document.getElementById("sidebar");
    
expandBtn.addEventListener("click", function (event) {
    expandBtn.classList.toggle("opened");
    sidebar.classList.toggle("expanded");
});

renderPostcards();

window.addEventListener('load', function() {
    randomizeImages();
    storeOriginalPositions();
});

document.getElementById('category-filter').addEventListener('change', function() {
    renderPostcards();
    reapplyTransformations();
});

document.getElementById('year-filter').addEventListener('change', function() {
    renderPostcards();
    reapplyTransformations();
});