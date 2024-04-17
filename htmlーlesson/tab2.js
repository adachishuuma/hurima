document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // 全てのタブの表示を非表示に設定
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // クリックされたタブの対応するコンテンツを表示
            document.getElementById(targetTab).style.display = 'block';
        });
    });
});

