javascript:(
    void(
        function () {
            var fileRef;

            fileRef = document.createElement('link');
            fileRef.rel = 'stylesheet';
            fileRef.type = 'text/css';
            fileRef.href = '../styles/wcag.css';
            document.getElementsByTagName('head')[0].appendChild(fileRef);

            fileRef = document.createElement('script');
            fileRef.src = 'logic.js';
            fileRef.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(fileRef);
        }()
    )
)