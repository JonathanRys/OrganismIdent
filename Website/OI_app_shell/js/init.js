window.onload = function() {
    views.load();


    /**********************************
     **********************************
     ********* EVENT HANDLERS *********
     **********************************
     **********************************/

    // Menu handlers
    var menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', function(){
        var menuList = document.getElementById('menu-list');

        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
        }
        else {
            menuList.style.display = 'block';
        }
    });

    var historyIcon = document.getElementById('history-icon');

    historyIcon.addEventListener('click', function(){
        var historyList = document.getElementById('history-list');

        if (historyList.style.display === 'block') {
            historyList.style.display = 'none';
        }
        else {
            historyList.style.display = 'block';
        }
    });

    var sideBarTab = document.getElementById('side-bar-tab');

    sideBarTab.addEventListener('click', function(){
        var sideBar = document.getElementById('side-bar'),
            tab = document.getElementById('side-bar-tab'),
            content = document.getElementById('main-content');

        if (sideBar.style.right === '-25%') {
            sideBar.style.right = '0';
            content.style.width = '75%';
            tab.childNodes[0].className = 'fa fa-chevron-left';
        }
        else {
            sideBar.style.right = '-25%';
            content.style.width = '100%';
            tab.childNodes[0].className = 'fa fa-chevron-right';

        }
    });
};