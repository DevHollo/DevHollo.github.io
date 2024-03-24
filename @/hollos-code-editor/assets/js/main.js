// This file was made by @_.hollo._ on Discord
const indent = 4;
const indent_str = '    ';
const languages = [
    'plain_text', // 0
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
    'lua', // 11
    'markdown', // 12
    'fsharp', // 13
    'php', // 14
    'json', // 15
    'go', // 16
    'ruby', // 17
    'swift', // 18
    'rust', // 19
    'xml', // 20
    'r', // 21
    'powershell', // 22
    'dart', // 23
    'bat', // 24
    'kotlin', // 25
    'yaml', // 26
    'scala', // 27
    'perl', // 28
    'objective-c', // 29
    'sql' // 30
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
    'Lua',
    'Markdown',
    'F#',
    'PHP',
    'Json',
    'Go',
    'Ruby',
    'Swift',
    'Rust',
    'XML',
    'R',
    'PowerShell (Windows)',
    'Dart',
    'Batch (Windows)',
    'Kotlin',
    'YAML',
    'Scala',
    'Perl',
    'Objective-C',
    'SQL'
];
var languages_index = 0; // do not change this!
const language_default_values = [
    'This is example text.',
    `// Example Code\n\nclass Say {\n${indent_str}constructor(to_say) {\n${indent_str}${indent_str}this.ts = String(to_say);\n${indent_str}}\n${indent_str}talk() {\n${indent_str}${indent_str}console.log(this.ts);\n${indent_str}}\n}\n\nconst talker = new Say("Hello World!");\n\ntalker.talk();\n\n\n// Example 2\n\nfor (let i = 0; i < 10; i++) {\n${indent_str}console.log(i);\n}`,
    `# Example Code\n\nclass Say:\n${indent_str}def __init__(self, to_say: str):\n${indent_str}${indent_str}self.ts = to_say\n\n${indent_str}def talk(self):\n${indent_str}${indent_str}print(self.ts)\n\ntalker = Say("Hello World!")\n\ntalker.talk()`,
    `// Example Code\n\nclass Say {\n${indent_str}private ts: String;\n\n${indent_str}constructor(to_say: any) {\n${indent_str}${indent_str}this.ts = String(to_say);\n${indent_str}}\n\n${indent_str}talk(): void {\n${indent_str}${indent_str}console.log(this.ts);\n${indent_str}}\n}\n\nconst talker = new Say("Hello World!");\n\ntalker.talk();`,
    `<!-- Example Code -->\n\n<!DOCTYPE html>\n<html lang=\"en\">\n${indent_str}<head>\n${indent_str}${indent_str}<meta charset="utf-8">\n${indent_str}${indent_str}<title>Hello!</title>\n${indent_str}</head>\n${indent_str}<body>\n${indent_str}${indent_str}<p>Hello World! (&lt;/&gt;)</p>\n${indent_str}</body>\n</html>`,
    `/* Example Code */\n\n@import url("https://fonts.googleapis.com/css?family=Playpen+Sans");\n\nhtml {\n${indent_str}width: 100%;\n${indent_str}height: 100%;\n}\n\nbody {\n${indent_str}font-family: 'Playpen Sans';\n${indent_str}color: #000;\n}`,
    `// Example Code\n\n$primary-btn-color: #3498db;\n$secondary-btn-color: #2ecc71;\n\n.btn-primary {\n${indent_str}background-color: $primary-btn-color;\n${indent_str}color: white;\n}\n.btn-secondary {\n${indent_str}background-color: $secondary-btn-color;\n${indent_str}color: white;\n}\n\nbutton {\n${indent_str}a {\n${indent_str}${indent_str}color: black;\n${indent_str}${indent_str}&:hover {\n${indent_str}${indent_str}${indent_str}color: white;\n${indent_str}${indent_str}}\n${indent_str}}\n${indent_str}&:hover {\n${indent_str}${indent_str}color: white;\n${indent_str}}\n}`,
    `// Example Code\n\npublic class example {\n${indent_str}public static void main(String[] args) {\n${indent_str}${indent_str}System.out.println("Hello, world!");\n${indent_str}}\n}`,
    `// Example Code\n\n#include <iostream>\n\nint main() {\n${indent_str}std::cout << "Hello World!";\n${indent_str}return 0;\n}`,
    `// Example Code\n\n#include <stdio.h>\n\nint main() {\n${indent_str}printf("Hello World!");\n${indent_str}return 0;\n}`,
    `// Example Code\n\nusing System;\n\nclass Program\n{\n${indent_str}static void Main(string[] args)\n${indent_str}{\n${indent_str}${indent_str}Console.WriteLine("Hello World!");\n${indent_str}}\n}`,
    `-- Example Code\n\nSay = {}\nSay.__index = Say\n\nfunction Say:new(to_say)\n${indent_str}local self = setmetatable({}, Say)\n${indent_str}self.ts = to_say\n${indent_str}return self\nend\n\nfunction Say:talk()\n${indent_str}print(self.ts)\nend\n\ntalker = Say:new("Hello World!")\ntalker:talk()`,
    `# Example Code\n| PowerShell (.ps1)                       | Batch (.bat)                            |\n|:---------------------------------------:|:---------------------------------------:|\n| \`Write-Host "Hello!"\`                   | \`echo Hello\`                            |\n| \`Read-Host "prompt"\`                    | \`set /p userInput=Enter your input: \`   |\n| \`Start-Process -FilePath "program.exe"\` | \`start "" "program.exe"\`                |`,
    `// Example Code\n\ntype Program() =\n${indent_str}class\n${indent_str}${indent_str}do printfn "Hello World"\n${indent_str}end\n\nnew Program()`,
    `<?php\n/* Example Code */\nfor ($i = 0; $i < 10; $i++) {\n${indent_str}echo "Hello World! [$i]\\n";\n}\n?>`,
    `{\n${indent_str}"Example": "Code",\n${indent_str}"list": [\n${indent_str}${indent_str}"Hello",\n${indent_str}${indent_str}"World"\n${indent_str}],\n${indent_str}"fullscreen": false,\n${indent_str}"nothing": null\n}`,
    `// Example Code\n\npackage main\n\nimport "fmt"\n\nfunc main() {\n${indent_str}for i := 0; i < 10; i++ {\n${indent_str}${indent_str}fmt.Printf("Hello World! [%d]\\n", i)\n${indent_str}}\n}`,
    `# Example Code\n\n10.times do |i|\n${indent_str}puts "Hello World! [#{i}]"\nend`,
    `// Example Code\n\nfor i in 0..<10 {\n${indent_str}print("Hello World! [\\(i)]")\n}`,
    `// Example Code\n\nfn main() {\n${indent_str}for i in 0..10 {\n${indent_str}${indent_str}println!("Hello World! [{}]", i);\n${indent_str}}\n}`,
    `<!-- Example Code -->\n\n<?xml version="1.0" encoding="UTF-8"?>\n<app>\n${indent_str}<name>Epic XML</name>\n${indent_str}<version>1</version>\n</app>`,
    `# Example Code\n\nfor (i in 0:9) {\n${indent_str}cat("Hello World! [", i, "]\\n")\n}`,
    `# Example Code\n\nfor ($i = 0; $i -lt 10; $i++) {\n${indent_str}Write-Host "Hello World! [$i]"\n}`,
    `// Example Code\n\nvoid main() {\n${indent_str}for (int i = 0; i < 10; i++) {\n${indent_str}${indent_str}print('Hello World! [$i]');\n${indent_str}}\n}`,
    `@echo off\nrem Example Code\n\nfor /L %%i in (0,1,9) do (\n${indent_str}echo Hello World! [%%i]\n)`,
    `// Example Code\n\nfun main() {\n${indent_str}for (i in 0 until 10) {\n${indent_str}${indent_str}println("Hello World! [$i]")\n${indent_str}}\n}`,
    `# Example Code\n\na:\n${indent_str}b:\n${indent_str}${indent_str}c:\n${indent_str}${indent_str}${indent_str}d: "Hello World!"`,
    `// Example Code\n\nobject Main extends App {\n${indent_str}for (i <- 0 until 10) {\n${indent_str}${indent_str}println(s"Hello World! [$i]")\n${indent_str}}\n}`,
    `# Example Code\n\nfor my $i (0..9) {\n${indent_str}print "Hello World! [$i]\\n";\n}`,
    `// Example Code\n\n#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n${indent_str}@autoreleasepool {\n${indent_str}${indent_str}for (int i = 0; i < 10; i++) {\n${indent_str}${indent_str}${indent_str}NSLog(@"Hello World! [%d]", i);\n${indent_str}${indent_str}}\n${indent_str}}\n${indent_str}return 0;\n}`,
    `-- Example Code\n\nUPDATE employees\nSET salary = 50000, department = 'HR'\nWHERE employee_id = 101;`
];

const editor_version = 'v0.0.2';

const editor_width = '100%';
const editor_height = window.innerHeight + "px";

const default_value = `Welcome to Hollo\'s Code Editor!\n\nEditor version: ${editor_version}\n\nPowered by: Monaco Code Editor`;

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
<button onclick="readFile()">Load File</button> <b>|</b>
<button onclick="saveFile()">Save File</button> <b>|</b>
<button onclick="clearEditor()">Clear Editor</button> <b>|</b>
<b style="font-family: Consolas;">Language:</b> <select id="languageSelect" onchange="changeLanguage(this.value)">
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