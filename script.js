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

console.log(postcards);

function renderPostcards() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    // Get the selected category and year from the dropdowns
    const selectedCategory = document.getElementById('category-filter').value;
    const selectedYear = document.getElementById('year-filter').value;

    console.log('Selected Category:', selectedCategory);
    console.log('Selected Year:', selectedYear);

    // Filter postcards based on the selected category and year
    const filteredPostcards = postcards.filter(function(postcard) {
        // Split the category string into an array of categories
        const categories = postcard.category.split(',').map(function(cat) {
            return cat.trim(); // Remove whitespace
        });
    
        console.log('Postcard:', postcard.title);
        console.log('Postcard Categories:', categories);
    
        // Check if the postcard's categories include the selected category
        const categoryMatch = selectedCategory === 'all' || categories.includes(selectedCategory);
    
        // Check if the postcard's year matches the selected year
        const yearMatch = selectedYear === 'all' || postcard.year.toString() === selectedYear;
    
        console.log('Category Match:', categoryMatch);
        console.log('Year Match:', yearMatch);
    
        return categoryMatch && yearMatch;
    });

    console.log('Filtered Postcards:', filteredPostcards);

    // Create postcard elements for filtered postcards
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

// Call renderPostcards initially to render all postcards
renderPostcards();

// Event listener for category filter
document.getElementById('category-filter').addEventListener('change', function() {
    renderPostcards();
});

// Event listener for year filter
document.getElementById('year-filter').addEventListener('change', function() {
    renderPostcards();
});


function toggleLayout() {
    console.log('button clicked');  
    let myContainer = document.getElementById ("container")
    
    // myContainer.classList.remove("scattered")
    myContainer.classList.toggle("masonry")

    var button = document.querySelector('.organize');
    if (button.value === 'organize') {
        button.value = 'scatter';
    } else {
        button.value = 'organize';
    }
}


$(document).ready(function() {
        $('.scattered img').draggable();
    });


let expandBtn = document.getElementById("expand");
let sidebar = document.getElementById("sidebar");
    
expandBtn.addEventListener("click", function (event) {
    // Toggle the "opened" class on the expand button
    expandBtn.classList.toggle("opened");
    
    // Toggle the "expanded" class on the sidebar
    sidebar.classList.toggle("expanded");
});    