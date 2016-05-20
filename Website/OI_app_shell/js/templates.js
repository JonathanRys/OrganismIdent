var templates = function (){
    var me = {};

    me.similarSpecies = '<div class="similar-species">' +
                        '    <figure><img src="{{imagePath}}">' + 
                        '        <figcaption>{{caption}}</figcaption>' + 
                        '    </figure>' + 
                        '</div>';

    me.articleFragment = '<section>' +
                         '    <div>' +
                         '        <h3 id="section-title">{{}}</h3>' +
                         '    </div>' +
                         '</section>';

    return me;
}();