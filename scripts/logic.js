var checkDocumentAA = function () {

    function checkColors( tag ) {
        var children;
        var i;

        if ( tag.nodeType === Node.TEXT_NODE ) {
            console.log( 'text: ' + tag.nodeValue );
        }
        // we are interested in the text of text nodes as well as the 
        // label of element nodes....  these are the types of nodes 
        // we need to check the contrast of

        if ( tag.nodeType === Node.ELEMENT_NODE && tag.label !== undefined ) {
            console.log( 'label: ' + tag.label );
        }

        children = tag.childNodes;
        for ( i = 0; i < children.length; i++ ) {
            checkColors( children[i] );
        }
    }

    return function checkDocument() {

        checkColors( document );
    }

}();


checkDocumentAA();



