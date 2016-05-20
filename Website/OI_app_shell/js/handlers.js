window.onload = function () {
    // Menu handlers
    var menu = document.getElementById('menu-icon');

    menu.addEventListener("click", function(){
        var menu = document.getElementById('menu-list');

        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "block";
        }
    });

    var history = document.getElementById('history-icon');

    history.addEventListener("click", function(){
        var menu = document.getElementById('history-list');

        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "block";
        }
    });

}