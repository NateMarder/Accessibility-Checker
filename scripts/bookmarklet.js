javascript: (
    void (
        function () {
            var fileRef;
            var loaded = false;
            try {
                loaded = checkDocumentAA;
            } 
            catch ( err ) {

            }
            if ( !loaded ) {
                fileRef = document.createElement( 'link' );
                fileRef.rel = 'stylesheet';
                fileRef.type = 'text/css';
                fileRef.href = 'file:///C:/NateProjects/AccessibilityProject/styles/tool.css';
                document.getElementsByTagName( 'head' )[0].appendChild( fileRef );
                fileRef = document.createElement( 'script' );
                fileRef.src = 'file:///C:/NateProjects/AccessibilityProject/scripts/logic.js';
                fileRef.type = 'text/javascript';
                document.getElementsByTagName( 'head' )[0].appendChild( fileRef );
            }
        }()
    )
)