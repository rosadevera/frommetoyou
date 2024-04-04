const postcards = [
    {
        "title": "Yoshitomo Nara 1",
        "images": '01front.png',
        "year": 2021,
        "category": "art, seasonal"
    },
    {
        "title": "Yoshitomo Nara 2",
        "images": '02front.png',
        "year": 2021,
        "category": "art, special"
    },
    {
        "title": "Yoshitomo Nara 3",
        "images": '03front.png',
        "year": 2021,
        "category": "art"
    },
    {
        "title": "Yoshitomo Nara 4",
        "images": '04front.png',
        "year": 2021,
        "category": "art"
    },
    {
        "title": "Yoshitomo Nara 5",
        "images": '05front.png',
        "year": 2021,
        "category": "art"
    },
    {
        "title": "Levain Bakery",
        "images": '06front.png',
        "year": 2022,
        "category": "restaurants, places"
    },
    {
        "title": "The Morgan Library",
        "images": '07front.png',
        "year": 2022,
        "category": "places"
    },
    {
        "title": "826LA",
        "images": '08front.png',
        "year": 2023,
        "category": "art, places"
    },
    {
        "title": "Rothko from Guggenheim",
        "images": '09front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "Guggenheim",
        "images": '10front.png',
        "year": 2023,
        "category": "art, places"
    },
    {
        "title": "Alice Neel from the Whitney",
        "images": '11front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "Joshua Tree 1",
        "images": '12front.png',
        "year": 2023,
        "category": "places, vintage/kitsch"
    },
    {
        "title": "Joshua Tree 2",
        "images": '13front.png',
        "year": 2023,
        "category": "places, vintage/kitsch"
    },
    {
        "title": "Getty",
        "images": '14front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "from Giant Robot",
        "images": '15front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "On Vacation... Missing You",
        "images": '16front.png',
        "year": 2023,
        "category": "vintage/kitsch, special"
    },
    {
        "title": "Year of the Rabbit 2023",
        "images": '17front.png',
        "year": 2023,
        "category": "seasonal"
    },
    {
        "title": "Sisters",
        "images": '18front.png',
        "year": 2023,
        "category": "restaurants"
    },
    {
        "title": "SEVENTEEN Boys Be",
        "images": '19front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "niconeco fall",
        "images": '20front.png',
        "year": 2023,
        "category": "places, seasonal"
    },
    {
        "title": "Vintage Philly",
        "images": '21front.png',
        "year": 2023,
        "category": "vintage/kitsch"
    },
    {
        "title": "Central Park in Fall",
        "images": '22front.png',
        "year": 2023,
        "category": "places"
    },
    {
        "title": "With Maya",
        "images": '23front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "Bonnes Fetes!",
        "images": '24front.png',
        "year": 2023,
        "category": "places, seasonal"
    },
    {
        "title": "Cows from Orsay",
        "images": '25front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "Monet 1 from Orsay",
        "images": '26front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "Monet 2 from Orsay",
        "images": '27front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "Monet from l'Orangerie",
        "images": '28front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "from the Louvre",
        "images": '29front.png',
        "year": 2023,
        "category": "art"
    },
    {
        "title": "SALT CAMP",
        "images": '30front.png',
        "year": 2024,
        "category": "restaurants"
    },
    {
        "title": "Dia Beacon 1",
        "images": '31front.png',
        "year": 2024,
        "category": "art"
    },
    {
        "title": "Dia Beacon 2",
        "images": '32front.png',
        "year": 2024,
        "category": "art"
    }
];

function renderPostcards() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const selectedCategory = document.getElementById('category-filter').value;
    const selectedYear = document.getElementById('year-filter').value;

    const filteredPostcards = postcards.filter(function(postcard) {
        const categories = postcard.category.split(',').map(function(cat) {
            return cat.trim(); 
        });
    
        const categoryMatch = selectedCategory === 'all' || categories.includes(selectedCategory);
    
        const yearMatch = selectedYear === 'all' || postcard.year.toString() === selectedYear;
    
        return categoryMatch && yearMatch;
    });

    console.log('Filtered Postcards:', filteredPostcards);

    filteredPostcards.forEach(function(postcard) {
        const postcardElement = document.createElement('div');
        postcardElement.className = 'postcard';

        const img = document.createElement('img');
        img.src = 'images/' + postcard.images;
        img.alt = postcard.title;

        postcardElement.appendChild(img);
        container.appendChild(postcardElement);
    });
}

renderPostcards();


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

// Function to clear transformations and random placement
function clearTransformations() {
    var figures = document.querySelectorAll('.scattered img');
    figures.forEach(function(figure) {
        figure.style.position = 'static'; // Reset position to default
        figure.style.left = ''; // Clear left property
        figure.style.top = ''; // Clear top property
        figure.style.transform = 'none'; // Clear transformations
    });
}

window.addEventListener('load', randomizeImages);

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

    var button = document.querySelector('.organize');
    if (button.value === 'organize') {
        button.value = 'scatter';
    } else {
        button.value = 'organize';
    }
}


// $(document).ready(function() {
//     $('.scattered img').draggable();
// });


 
let expandBtn = document.getElementById("expand");
let sidebar = document.getElementById("sidebar");
    
expandBtn.addEventListener("click", function (event) {
    expandBtn.classList.toggle("opened");
    
    sidebar.classList.toggle("expanded");
});    