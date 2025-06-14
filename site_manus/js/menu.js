document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');
    
    // Função para abrir/fechar o menu
    function toggleMenu() {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // Adicionar evento de clique ao botão do menu
    menuToggle.addEventListener('click', toggleMenu);
    
    // Fechar o menu ao clicar no overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Fechar o menu ao clicar em um link (opcional)
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Apenas fecha o menu em telas pequenas (mobile)
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Ajustar o menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});
