var view = function () {
    var me = {};

    me.load = function() {
        model.subscribe("edible");
        model.subscribe("warnings");
        model.subscribe("impact");
        //...
    }


    // make private?
    me.render = function() {
        var index,
            pageContent

        pageContent = buildHeader().replace('{{main}}', buildSection());
        pageContent += buildSidebar();
        return pageContent
    }


    function buildHeader() {
        var headerTemplate = template.header,
            replacements    = headerTemplate.match(/\{\{[A-z0-9\-]*\}\}/g);

        replacements.forEach(function(value) {
            headerTemplate = headerTemplate.replace(value, model.getData(value.replace(/[{}]/g, '')) || value);
        });
        return headerTemplate;
    }

    function buildSection() {
        var imageData        = model.getData('image'),
            contentData      = model.getData('content'),
            sectionTemplate  = template.speciesSection,
            completeTemplate = '';

        for (var x in contentData) {
            if (x === 'description') {
                sectionTemplate = template.speciesDescription;
            } else {
                sectionTemplate = template.speciesSection;
                sectionTemplate = sectionTemplate.replace('{{section}}', x);
                sectionTemplate = sectionTemplate.replace('{{sectionHead}}', x.charAt(0).toUpperCase() + x.replace(/([A-Z])/g, ' $1').slice(1));
            }

            //Insert the image if it exists, or hide it
            if (imageData[x]) {
                sectionTemplate = sectionTemplate.replace('{{image}}', imageData[x]);
                //Insert the caption
                sectionTemplate = sectionTemplate.replace('{{caption}}', model.getData('caption'));
            } else {
                sectionTemplate = sectionTemplate.replace('{{image}}', '" style="display:none;');
                //Remove the caption
                sectionTemplate = sectionTemplate.replace('{{caption}}', '');
            }
            
            //Insert the content
            completeTemplate += sectionTemplate.replace('{{content}}', buildContent(contentData[x]));
        }
        return completeTemplate;
    }

    function buildContent(content) {
        var completeContent = '',
            paragraph = template.articleContent;
        
        content.forEach(function(value) {
            completeContent += paragraph.replace('{{paragraph}}', value);
        });
        return completeContent;
    }

    function buildSidebar(){
        var sidebarTemplate = template.similarSpecies,
            replacements    = sidebarTemplate.match(/\{\{[A-z0-9\-]*\}\}/g),
            speciesData     = model.getData('similarSpecies');

        replacements.forEach(function(value) {
            sidebarTemplate = sidebarTemplate.replace(value, speciesData[value.replace(/[{}]/g, '')] || value);
        });
        return sidebarTemplate;
    }

    return me;
}();


