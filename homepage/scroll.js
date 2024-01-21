const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); //grabs all the elements with hidden class
const hiddenElements1 = document.querySelectorAll('.blob-content');
const hiddenElements2 = document.querySelectorAll('.hidden1');
const hiddenElements3 = document.querySelectorAll('.hidden2');

hiddenElements.forEach((el) => observer.observe(el)); //will observe all the hidden elements
hiddenElements1.forEach((el) =>observer.observe(el));
hiddenElements2.forEach((el) =>observer.observe(el));
hiddenElements3.forEach((el) =>observer.observe(el));