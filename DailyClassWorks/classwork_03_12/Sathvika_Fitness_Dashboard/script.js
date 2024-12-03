const exerciseData = [
    {
        id: 1,
        title: "Push-Up",
        category: "Strength",
        description: "A basic upper body exercise that targets the chest, shoulders, and triceps.",
        image: "https://th.bing.com/th/id/OIP.SglZbUTvRRvXqd11JiD3zgHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    },
    {
        id: 2,
        title: "Squat",
        category: "Strength",
        description: "A lower body exercise that targets the quads, hamstrings, and glutes.",
        image: "http://ts2.mm.bing.net/th?id=OIP.bO-IhqcmemFIJ_-OgrXjhQHaGm&pid=15.1"
    },
    {
        id: 3,
        title: "Running",
        category: "Cardio",
        description: "A cardio exercise that helps with endurance and cardiovascular health.",
        image: "https://th.bing.com/th/id/OIP.Ntta06TSt1Pr-NAXNP8fOwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    },
    {
        id: 4,
        title: "Jumping Jacks",
        category: "Cardio",
        description: "A full-body cardio workout that engages the arms, legs, and core.",
        image: "https://th.bing.com/th/id/OIP.IVdqgOXl7cVCeQOkCARmBwAAAA?w=223&h=176&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    }
];

// Elements
const exerciseGrid = document.getElementById('exerciseGrid');
const searchBar = document.getElementById('searchBar');
const categorySelect = document.getElementById('categorySelect');

// Function to render exercise cards
const renderExercises = (exercises) => {
    exerciseGrid.innerHTML = '';
    exercises.map(exercise => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${exercise.image}" alt="${exercise.title}">
            <div class="card-body">
                <h3>${exercise.title}</h3>
                <p class="category">${exercise.category}</p>
                <p>${exercise.description}</p>
            </div>
        `;
        
        exerciseGrid.appendChild(card);
    });
};

// Filter and search functionality
const filterExercises = () => {
    const searchQuery = searchBar.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    
    let filteredExercises = exerciseData.filter(exercise => {
        const matchesSearch = exercise.title.toLowerCase().includes(searchQuery) || 
                              exercise.description.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    renderExercises(filteredExercises);
};

// Event Listeners
searchBar.addEventListener('input', filterExercises);
categorySelect.addEventListener('change', filterExercises);

// Initial render
renderExercises(exerciseData);
