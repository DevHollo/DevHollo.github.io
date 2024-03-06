window.onload = function(){
    var codes = document.querySelectorAll('kt-code');
    for (var i = 0; i < codes.length; i++) {
        var codeElement = codes[i];
        var code = codeElement.innerText;
        codeElement.innerHTML = "";
        var codeMirror = CodeMirror(
            codeElement,
            {
                value: code,
                mode: "text/x-squirrel",
                theme: "default",
                lineNumbers: true,
                readOnly: true
            }
        );
    }
};