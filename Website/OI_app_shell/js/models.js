var model = function(){
    var me = {},
        elems = {};

    me.subscribe = function(key){
        elems[key] = document.getElementById(key);
        me.update(key, elems[key]);
    }

    me.unsubscribe = function(key){
        elems[key] = undefined;
    }

    me.update = function(key, elem){
        if (elems[key].className.match(/ ?fa ?/))
            elems[key].title = data[key];
        else
            elems[key].innerHTML = data[key];
    }

    return me;
}();