const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));



const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-2');
        } else {
            entry.target.classList.remove('show-2');
        }
    });
});

const slideElement = document.querySelectorAll('.slide');
hiddenElement.forEach((el) => observer.observe(el));