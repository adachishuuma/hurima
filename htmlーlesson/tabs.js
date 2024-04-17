document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            document.getElementById(targetTab).style.display = 'block';
        });
    });
});
