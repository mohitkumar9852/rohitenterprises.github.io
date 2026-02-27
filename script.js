// Inventory data (for table only - indicative prices)
const inventory = [
    // Mobile Phones
    { category: "Mobile Phone", name: "Galaxy S23", brand: "Samsung", price: 74999 },
    { category: "Mobile Phone", name: "iPhone 15", brand: "Apple", price: 79999 },
    { category: "Mobile Phone", name: "Redmi Note 13", brand: "Xiaomi", price: 14999 },
    { category: "Mobile Phone", name: "Vivo V29", brand: "Vivo", price: 28999 },
    { category: "Mobile Phone", name: "Realme Narzo 60", brand: "Realme", price: 16999 },
    // Air Conditioners
    { category: "Air Conditioner", name: "1.5 Ton Inverter AC", brand: "LG", price: 42999 },
    { category: "Air Conditioner", name: "1 Ton Split AC", brand: "Voltas", price: 34999 },
    // Refrigerators
    { category: "Refrigerator", name: "Double Door 260L", brand: "Whirlpool", price: 27999 },
    { category: "Refrigerator", name: "Single Door 190L", brand: "Godrej", price: 15999 },
    // Washing Machines
    { category: "Washing Machine", name: "Front Load 7kg", brand: "Bosch", price: 32999 },
    { category: "Washing Machine", name: "Top Load 6.5kg", brand: "Samsung", price: 18999 },
    // Air Coolers
    { category: "Air Cooler", name: "Desert Cooler 55L", brand: "Symphony", price: 10999 },
    { category: "Air Cooler", name: "Tower Cooler", brand: "Bajaj", price: 7999 },
    // TVs
    { category: "Smart TV", name: "43 inch 4K TV", brand: "Sony", price: 45999 },
    { category: "Smart TV", name: "32 inch HD TV", brand: "Mi", price: 14999 }
];

document.addEventListener('DOMContentLoaded', function() {
    
    // Hide loader
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 500);

    // Populate inventory table
    const tableBody = document.querySelector("#inventoryTable tbody");
    
    if (tableBody) {
        tableBody.innerHTML = '';
        
        inventory.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.category}</td>
                <td>${item.name}</td>
                <td>${item.brand}</td>
                <td>${item.price.toLocaleString('en-IN')}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Active navigation highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});