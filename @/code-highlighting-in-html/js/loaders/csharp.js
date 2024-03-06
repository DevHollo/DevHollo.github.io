window.onload = function(){
    var codes = document.querySelectorAll('cs-code');
    for (var i = 0; i < codes.length; i++) {
        var codeElement = codes[i];
        var code = codeElement.innerText;
        codeElement.innerHTML = "";
        var codeMirror = CodeMirror(
            codeElement,
            {
                value: code,
                mode: "text/x-csharp",
                theme: "default",
                lineNumbers: true,
                readOnly: true
            }
        );
    }
};