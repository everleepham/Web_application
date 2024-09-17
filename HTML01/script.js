const btn = document.getElementById('toggle-btn');
console.log(btn);

btn.addEventListener('click', () => {
    const navBar = document.querySelector(".navBar");
    navBar.classList.toggle('show'); 
});