// This file was made by @_.hollo._ on Discord
const indent = 4;
const indent_str = '    ';
const languages = [
    'plain text', // 0
    'javascript', // 1
    'python', // 2
    'typescript', // 3
    'html', // 4
    'css', // 5
    'scss', // 6
    'java', // 7
    'cpp', // 8
    'c', // 9
    'csharp', // 10
    'lua' // 11
];
const lang_list_display = [
    'Plain Text',
    'JavaScript',
    'Python',
    'TypeScript',
    'HTML',
    'CSS',
    'SCSS (Sassy CSS)',
    'Java',
    'C++',
    'C',
    'C#',
    'Lua'
];
var languages_index = 0; // do not change this!
const language_default_values = [
    'This is example text.',
    `// Example Code\n\nclass Say {\n${indent_str}constructor(to_say) {\n${indent_str}${indent_str}this.ts = String(to_say);\n${indent_str}}\n${indent_str}talk() {\n${indent_str}${indent_str}console.log(this.ts);\n${indent_str}}\n}\n\nconst talker = new Say("Hello World!");\n\ntalker.talk();`,
    `# Example Code\n\nclass Say:\n${indent_str}def __init__(self, to_say: str):\n${indent_str}${indent_str}self.ts = to_say\n\n${indent_str}def talk(self):\n${indent_str}${indent_str}print(self.ts)\n\ntalker = Say("Hello World!")\n\ntalker.talk()`,
    `// Example Code\n\nclass Say {\n${indent_str}private ts: String;\n\n${indent_str}constructor(to_say: any) {\n${indent_str}${indent_str}this.ts = String(to_say);\n${indent_str}}\n\n${indent_str}talk(): void {\n${indent_str}${indent_str}console.log(this.ts);\n${indent_str}}\n}\n\nconst talker = new Say("Hello World!");\n\ntalker.talk();`,
    `<!-- Example Code -->\n\n<!DOCTYPE html>\n<html lang=\"en\">\n${indent_str}<head>\n${indent_str}${indent_str}<meta charset="utf-8">\n${indent_str}${indent_str}<title>Hello!</title>\n${indent_str}</head>\n${indent_str}<body>\n${indent_str}${indent_str}<p>Hello World! (&lt;/&gt;)</p>\n${indent_str}</body>\n</html>`,
    `/* Example Code */\n\n@import url("https://fonts.googleapis.com/css?family=Playpen+Sans");\n\nhtml {\n${indent_str}width: 100%;\n${indent_str}height: 100%;\n}\n\nbody {\n${indent_str}font-family: 'Playpen Sans';\n${indent_str}color: #000;\n}`,
    `// Example Code\n\n$primary-btn-color: #3498db;\n$secondary-btn-color: #2ecc71;\n\n.btn-primary {\n${indent_str}background-color: $primary-btn-color;\n${indent_str}color: white;\n}\n.btn-secondary {\n${indent_str}background-color: $secondary-btn-color;\n${indent_str}color: white;\n}\n\nbutton {\n${indent_str}a {\n${indent_str}${indent_str}color: black;\n${indent_str}${indent_str}&:hover {\n${indent_str}${indent_str}${indent_str}color: white;\n${indent_str}${indent_str}}\n${indent_str}}\n${indent_str}&:hover {\n${indent_str}${indent_str}color: white;\n${indent_str}}\n}`,
    `// Example Code\n\npublic class example {\n${indent_str}public static void main(String[] args) {\n${indent_str}${indent_str}System.out.println("Hello, world!");\n${indent_str}}\n}`,
    `// Example Code\n\n#include <iostream>\n\nint main() {\n${indent_str}std::cout << "Hello World!";\n${indent_str}return 0;\n}`,
    `// Example Code\n\n#include <stdio.h>\n\nint main() {\n${indent_str}printf("Hello World!");\n${indent_str}return 0;\n}`,
    `// Example Code\n\nusing System;\n\nclass Program\n{\n${indent_str}static void Main(string[] args)\n${indent_str}{\n${indent_str}${indent_str}Console.WriteLine("Hello World!");\n${indent_str}}\n}`,
    `-- Example Code\n\nSay = {}\nSay.__index = Say\n\nfunction Say:new(to_say)\n${indent_str}local self = setmetatable({}, Say)\n${indent_str}self.ts = to_say\n${indent_str}return self\nend\n\nfunction Say:talk()\n${indent_str}print(self.ts)\nend\n\ntalker = Say:new("Hello World!")\ntalker:talk()`
];

const editor_version = 'v0.0.1';

const editor_width = '100%';
const editor_height = window.innerHeight + "px";

const default_value = `Welcome to Hollo\'s Code Editor!\nEditor version: ${editor_version}\nPowered by: Monaco Code Editor`;

let fileContents;
let editor;

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.25.2/min/vs' }});

function readFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            fileContents = event.target.result;
            console.log(`File contents:\n${fileContents}`);
            editor.setValue(fileContents);
        };

        reader.readAsText(file);
    } else {
        console.error('No file selected.');
        alert("No file selected.");
    }
}

function clearEditor() {
    if (editor) {
        editor.setValue('');
    } else {
        console.error('Editor not initialized.');
    }
}

function saveFile() {
    if (fileContents && editor) {
        const languageIndex = languages.indexOf(editor.getModel().getLanguageIdentifier().language);
        const fileExtension = languageIndex !== -1 ? languages[languageIndex] : 'txt';
        const blob = new Blob([fileContents], { type: `text/${fileExtension}` });
        const anchor = document.createElement('a');
        anchor.download = `file.${fileExtension}`;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.click();
    } else {
        console.error('No file contents to save or editor not initialized.');
        alert("No file contents to save or editor not initialized.");
    }
}

function changeLanguage(index) {
    languages_index = parseInt(index);
    if (editor) {
        editor.getModel().dispose();
        editor.dispose();
    }
    setTimeout(function() {
        require(['vs/editor/editor.main'], function () {
            editor = monaco.editor.create(document.getElementById('editor'), {
                value: language_default_values[languages_index],
                language: languages[languages_index],
                tabSize: indent,
                theme: 'vs-dark',
                wordWrap: 'off'
            });
        });
    }, 250);
}

function h1_clicked() {
    alert("Ur Mom");
    window.open('');
}

document.addEventListener('DOMContentLoaded', function() {
    const timeout_time = 1300; // default is 1200
    setTimeout(function() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam !== null && !isNaN(langParam)) {
            languages_index = parseInt(langParam);
        }
        document.body.innerHTML = `
<a href="/@/"><button class="backbutton">Back</button></a><br/>
<input type="file" id="fileInput">
<button onclick="readFile()">Load File</button> |
<button onclick="saveFile()">Save File (Broken)</button> |
<button onclick="clearEditor()">Clear Editor</button> |
<select id="languageSelect" onchange="changeLanguage(this.value)">
    ${languages.map((lang, index) => `<option value="${index}" ${index === languages_index ? 'selected' : ''}>${lang_list_display[index]}</option>`).join('')}
</select>
<div id="editor" style="width:${editor_width};height:${editor_height};"></div>
`;
        const title = document.getElementById('title');
        title.textContent = `Hollo's Code Editor \\\\ ${editor_version}`;

        require(['vs/editor/editor.main'], function () {
            editor = monaco.editor.create(document.getElementById('editor'), {
                value: default_value,
                language: languages[languages_index],
                tabSize: indent,
                theme: 'vs-dark',
                wordWrap: 'off'
            });
            editor.getModel().onDidChangeContent(() => {
                fileContents = editor.getValue();
            });
            //changeLanguage(languages_index);
        });
    }, timeout_time);
});
