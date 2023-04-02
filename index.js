const menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener("click", ()=>{
    const menuNav = document.querySelector('.menu-nav');
    menuNav.classList.toggle('hidden')
});

const options = {
    threshold: 0.1,
}

const callback = function(entries,observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active')
        }
    })
};

const observer = new IntersectionObserver(callback,options);

const targets = document.querySelectorAll('.anim');
targets.forEach((target)=>{
    observer.observe(target);
});
