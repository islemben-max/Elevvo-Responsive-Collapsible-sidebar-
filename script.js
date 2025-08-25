const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const links = sidebar.querySelectorAll('li');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    content.classList.toggle('shift');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        content.classList.remove('shift');
    });
});