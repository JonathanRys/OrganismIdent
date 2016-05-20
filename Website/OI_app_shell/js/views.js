var views = function (){
    var me = {};

    me.load = function() {
        model.subscribe("edible");
        model.subscribe("warnings");
        model.subscribe("impact");
    }

    return me;
}();