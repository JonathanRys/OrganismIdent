var templates = function (){
    var me = {};

    me.similarSpecies =     '<div class="similar-species">\n' +
                            '    <figure><img src="{{imagePath}}">\n' + 
                            '        <figcaption>{{caption}}</figcaption>\n' + 
                            '    </figure>\n' + 
                            '</div>\n';

    me.speciesDescription = '<details class="section-head" id="description" open>\n' + 
                            '    <summary>Description</summary>\n' +
                            '    <figure id="type-image"><img src="{{imagePath}}">\n' +
                            '        <figcaption>{{binomial}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    {{content}}' +
                            '</details>';

    me.speciesSection     = '<details class="section-head" id="{{section}}">\n' + 
                            '    <summary>{{sectionHead}}</summary>\n' +
                            '    <figure id="type-image"><img src="{{imagePath}}">\n' +
                            '        <figcaption>{{binomial}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    {{content}}' +
                            '</details>';                            

    me.articleContent     = '<p>{{paragraph}}</p>\n\n';

    me.articleFragment    = '<section>\n' +
                            '    <div>\n' +
                            '        <h3 id="section-title">{{}}</h3>\n' +
                            '    </div>\n' +
                            '</section>\n';

    return me;
}();