fetch('data.json')
.then(response => response.json())
.then(data => {
    const extensionGrid = document.getElementById('extension-grid');

    // Render the initial extension cards
    data.forEach(extension => {
        const card = document.createElement('div');
        card.classList.add('extension-card');
        
        // Tag the card element with its status for real-time filtering
        card.setAttribute('data-status', extension.isActive ? 'active' : 'inactive');

        card.innerHTML = `
            <div class="card-header">
                <img src="${extension.logo}" alt="${extension.name} logo" class="extension-logo">
                <div class="title-area">
                    <h3>${extension.name}</h3>
                </div>
            </div>
            <p class="card-description">${extension.description}</p>
            
            <div class="card-footer">
                <button class="remove-btn">Remove</button>
                
                <label class="switch">
                    <input type="checkbox" class="toggle-status" ${extension.isActive ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
        `;

        // Action 1: Remove Card Functional Element
        const removeBtn = card.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            card.remove();
        });

        // Action 2: Checkbox Slider Toggle Tracker
        const toggleInput = card.querySelector('.toggle-status');
        toggleInput.addEventListener('change', () => {
            const isNowActive = toggleInput.checked;
            card.setAttribute('data-status', isNowActive ? 'active' : 'inactive');
            
            // Re-run the active filter so state changes apply immediately
            runCurrentFilter();
        });

        extensionGrid.appendChild(card);
    });

    // ==========================================================================
    // TAB FILTER CONTROLS SYSTEM
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset active styles across filter group
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            currentFilter = button.getAttribute('data-filter');
            runCurrentFilter();
        });
    });

    function runCurrentFilter() {
        const allCards = document.querySelectorAll('.extension-card');
        
        allCards.forEach(card => {
            const cardStatus = card.getAttribute('data-status');
            
            if (currentFilter === 'all') {
                card.style.display = 'flex';
            } else if (cardStatus === currentFilter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// ==========================================================================
// NAVIGATION INTERFACE INTERACTION (THEME SWAP)
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const themeIconImg = themeToggleBtn.querySelector('img');
    
    if (document.body.classList.contains('light-theme')) {
        themeIconImg.src = 'assets/images/icon-moon.svg';
    } else {
        themeIconImg.src = 'assets/images/icon-sun.svg';
    }
});