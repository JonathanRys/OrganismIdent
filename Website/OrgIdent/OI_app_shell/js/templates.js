var template = function () {
    var me = {};

    me.header             = '<header class="article-header">\n' + 
                            '    <span class="common-name">{{common}}</span> (<span class="binomial-name">{{binomial}}</span>)\n' +
                            '</header>\n' +
                            '<section id="main-content" class="content-area">{{main}}\n' +
                            '</section>\n';

    me.speciesDescription = '<details class="section-head" id="section-description" open>\n' + 
                            '    <summary>Description</summary>\n' +
                            '    <figure id="type-image" class="section-image"><a href="{{image}}"><img src="{{image}}"></a>\n' +
                            '        <figcaption>{{caption}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    {{content}}' +
                            '</details>\n';

    me.speciesSection     = '<details class="section-head" id="section-{{section}}">\n' + 
                            '    <summary>{{sectionHead}}</summary>\n' +
                            '    <figure class="section-image"><a href="{{image}}"><img src="{{image}}"></a>\n' + //data.images[section]? '"': '" style="display:none;"'
                            '        <figcaption>{{caption}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    {{content}}' +
                            '</details>\n';

    me.articleContent     = '    <p>{{paragraph}}</p>\n\n';


    me.similarSpecies     = '<section class="similar-species">\n' +
                            '    <figure id="similar-image"><a href="{{typeImage}}"><img src="{{typeImage}}"></a>\n' +
                            '        <figcaption>{{name}}</figcaption>\n' +
                            '    </figure>\n' +
                            '    <p>{{information}}</p>\n' +
                            '</section>';

    me.sideBar            = '<aside id="side-bar">\n' +
                            '    <div id="side-bar-tab" class="tab"><i class="fa fa-chevron-left"></i></div>\n' +
                            '    <header class="side-bar-header">Similar Species</header>\n' +
                            '    <div class="scroller">\n' +
                            '        {{species}}\n' +
                            '    </div>\n' +
                            '</aside>';

    return me;
}();