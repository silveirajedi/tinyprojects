document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    const expandAllButton = document.getElementById('expandAll');
    const collapseAllButton = document.getElementById('collapseAll');

    // Função para expandir/recolher um painel específico
    function togglePanel(accordion) {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    // Adiciona o evento de clique a cada botão de laticínio
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            togglePanel(accordion);
        });
    });

    // Evento para o botão "Expandir Todos"
    expandAllButton.addEventListener('click', () => {
        accordions.forEach(accordion => {
            if (!accordion.classList.contains('active')) {
                togglePanel(accordion);
            }
        });
    });

    // Evento para o botão "Recolher Todos"
    collapseAllButton.addEventListener('click', () => {
        accordions.forEach(accordion => {
            if (accordion.classList.contains('active')) {
                togglePanel(accordion);
            }
        });
    });
});