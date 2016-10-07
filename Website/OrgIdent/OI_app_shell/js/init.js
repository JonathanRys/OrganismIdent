window.onload = function() {
    view.load();

    //Code to hide the image container in sections without images
    var hiddenImages = document.querySelectorAll('.hide-parent');
    for (var x in hiddenImages) {
        if (hiddenImages.hasOwnProperty(x)) {
            hiddenImages[x].parentNode.style.display = 'none';
        }
    };
    /**********************************
     **********************************
     ********* EVENT HANDLERS *********
     **********************************
     **********************************/

    // Menu Handlers
    //    Menu expanders
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

    //    Menu click events
    var menuList = document.getElementById('menu-list');

    menuList.addEventListener('click', function(e){
        if (e.target.className.match('menu-item')) {
            switch(e.target.id) {
                case "search":
                    console.log("Oh, so now you want my help?");
                    break;
                case "submit":
                    console.log("Give in to the rise of the machines");
                    break;
                case "options":
                    console.log("No, no you're doing it wrong");
                    break;
            }
            menuIcon.click();
        }
    });

    var historyList = document.getElementById('history-list');
    
    historyList.addEventListener('click', function(e){
        if (e.target.className.match('menu-item')) {
            switch(e.target.id) {
                case "history":
                    console.log("A long time ago in a galaxy far, far away...");
                    break;
            }
            historyIcon.click();
        }
    });

    //Menu mouseleave events
    menuList.addEventListener('mouseleave', function(e){
        e.target.style.display = 'none';
    });

    historyList.addEventListener('mouseleave', function(e){
        e.target.style.display = 'none';
    });

    // Side-bar events
    //    Side-bar slide event
    var sideBarTab = document.getElementById('side-bar-tab');

    sideBarTab.addEventListener('click', function(e){
        var sideBar = document.getElementById('side-bar'),
            tab = document.getElementById('side-bar-tab'),
            content = document.getElementById('main-content');

        if (sideBar.style.right === '-20%') {
            sideBar.style.right = '0';
            content.style.width = '80%';
            //tab.style.right = '20%';
            tab.childNodes[0].className = 'fa fa-chevron-left';
        }
        else {
            sideBar.style.right = '-20%';
            content.style.width = '100%';
            //tab.style.right = '0';
            tab.childNodes[0].className = 'fa fa-chevron-right';

        }
    });
};