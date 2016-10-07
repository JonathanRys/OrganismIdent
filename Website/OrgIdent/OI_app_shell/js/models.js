var model = function() {
    var me = {};

    var  data = {},
        elems = {};

    // Setters and Getters
    me.getData = function(index){
        return data[index] || undefined;
    }

    me.setData = function(index, value){
        data[index] = value;
        me.update(index);
    }

    //pub-sub stuff
    me.subscribe = function(key) {
        elems[key] = document.getElementById(key);
        me.update(key);
    }

    me.unsubscribe = function(key) {
        elems[key] = undefined;
    }

    me.update = function(key) {
        elems[key] = elems[key] || document.getElementById(key);
        if (elems[key].className.match(/ ?fa ?/))
            elems[key].title = data[key];
        else
            elems[key].innerHTML = data[key];
    }
    me.refresh = function() {
        for (var x in elems) {
            if (elems.hasOwnProperty(x)) {
                me.update(x);
            }
        }
    }
    // populate/repopulate the data model
    me.populate = function(jsonData) {
        for (var x in jsonData) {
            if ( jsonData.hasOwnProperty(x)) {
                data[x] = jsonData[x];
            }
        }
    }

    return me;
}();

/*
data {
    "common":"",
    "binomial":"",

    "edible":"",
    "warnings":"",
    "impact":"",
    
    "typeImage":"",
    "caption":"",
    "content":"",
    "images":""
}
*/

/*
function htmlEscape(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#47;');
}

function htmlUnescape(value){
    return String(value)
        .replace(/&#34;/g, '"')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&#60;/g, "<")
        .replace(/&lt;/g, '<')
        .replace(/&#62;/g, ">")
        .replace(/&gt;/g, '>')
        .replace(/&#38;/g, "&")
        .replace(/&amp;/g, '&')
        .replace(/&#47;;/g, '/');
        .replace(/&#x2F;/g, '/');
}
*/