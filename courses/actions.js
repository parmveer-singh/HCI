document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-link");
    const courses = document.querySelectorAll(".courses-item");

    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            const filter = this.getAttribute("data-filter");

            courses.forEach(course => {
                if (filter === "all") {
                    course.style.display = "block";
                } else {
                    const status = course.getAttribute("data-status");
                    course.style.display = (status === filter) ? "block" : "none";
                }
            });
            filterLinks.forEach(link => link.classList.remove("active-filter"));
            this.classList.add("active-filter");
        });
    });
});

document.querySelectorAll('.filter-link').forEach(link => { 
    link.addEventListener('click', function() { 
    document.querySelectorAll('.filter-link').forEach(link => link.classList.remove('active')); 
    this.classList.add('active'); 
    }); 
});