var template = function () {
    var me = {};

    me.header             = '<header class="article-header">\n' + 
                            '    <span class="common-name">{{common}}</span> (<span class="binomial-name">{{binomial}}</span>)\n' +
                            '</header>\n' +
                            '<section id="main-content" class="content-area">{{main}}\n' +
                            '</section>\n';

    me.speciesDescription = '<details class="section-head" id="section-description" open>\n' + 
                            '    <summary>Description</summary>\n' +
                            '    <figure id="type-image" class="section-image"><img src="{{image}}">\n' +
                            '        <figcaption>{{caption}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    {{content}}' +
                            '</details>\n';

    me.speciesSection     = '<details class="section-head" id="section-{{section}}">\n' + 
                            '    <summary>{{sectionHead}}</summary>\n' +
                            '    <figure class="section-image"><img src="{{image}}">\n' + //data.images[section]? '"': '" style="display:none;"'
                            '        <figcaption>{{caption}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    {{content}}' +
                            '</details>\n';

    me.articleContent     = '    <p>{{paragraph}}</p>\n\n';

/*
    me.articleFragment    = '<section>\n' +
                            '    <div>\n' +
                            '        <h3 id="section-header">{{header}}</h3>\n' +
                            '    </div>\n' +
                            '    {{content}}' +
                            '</section>\n';
*/

    me.similarSpecies     = '<aside id="side-bar">\n' +
                            '    <div id="side-bar-tab" class="tab"><i class="fa fa-chevron-left"></i></div>\n' +
                            '    <header class="side-bar-header">Similar Species</header>\n' +
                            '    <section class="similar-species">\n' +
                            '        <figure id="similar-image"><img src="{{typeImage}}">\n' +
                            '            <figcaption>{{name}}</figcaption>\n' +
                            '        </figure>\n' +
                            '        <p>{{information}}</p>\n' +
                            '    </section>\n' +
                            '</aside>';

    return me;
}();