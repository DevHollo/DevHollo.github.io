const navData = [
    /*{
        label: "Home",
        href: "/index.html",
        className: "cat"
    },
    {
        label: "About Me",
        href: "/pages/aboutme/index.html",
        className: "cat",
        items: [
            {label: "Interests", href: "/pages/aboutme/p/interests.html", className: "nbiitem"},
            {label: "My links", href: "/pages/aboutme/p/mylinks.html", className: "nbiitem"}
        ]
    },
    {
        label: "Projects",
        href: "/pages/projects/index.html",
        className: "cat",
        items: [
            {label: "Python", href: "/pages/projects/python/index.html", className: "nbiitem"},
            {label: "HTML", href: "/pages/projects/html/index.html", className: "nbiitem"}
        ]
    },
    {
        label: "Guides",
        href: "/pages/guides/index.html",
        className: "cat"
    }*/
];

let marqueeMessages = [
    "Welcome to my website!",
    "HTML is a pain in the ass to use",
    "I use arch btw",
    "SGFoYSB3YXN0ZWQgdXIgdGltZQ==", // "Haha wasted ur time" in base64
    "That freakin' snipers a spy!"
];

function getCurrentPage() {
    return window.location.pathname || "/index.html";
}

function findCurrentLabel(navItems, currentPage) {
    for (let cat of navItems) {
        if (cat.href === currentPage) {
            return cat.label;
        }
        if (cat.items) {
            for (let item of cat.items) {
                if (item.href === currentPage) {
                    return cat.label;
                }
            }
        }
    }
    return "Home";
}

function buildNav(navItems) {
    const currentPage = getCurrentPage();
    const ul = document.createElement("ul");
    navItems.forEach(cat => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        let isCurrent = cat.href === currentPage;
        let isInCategory = cat.items && cat.items.some(item => item.href === currentPage);
        if (isCurrent) {
            a.className = "curcat";
        } else if (isInCategory) {
            a.className = "curparent";
        } else {
            a.className = cat.className || "";
        }
        a.textContent = cat.label;
        a.href = cat.href || "#";
        li.appendChild(a);
        if (cat.items && cat.items.length > 0) {
            const subUl = document.createElement("ul");
            cat.items.forEach(item => {
                const subLi = document.createElement("li");
                const subA = document.createElement("a");
                subA.textContent = item.label;
                subA.href = item.href || "#";
                subA.className = (item.href === currentPage) ? "curcat" : (item.className || "");
                subLi.appendChild(subA);
                subUl.appendChild(subLi);
            });
            li.appendChild(subUl);
        }
        ul.appendChild(li);
    });
    return ul.outerHTML;
}

function pickRandomMessage() {
    return marqueeMessages[Math.floor(Math.random() * marqueeMessages.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    const currentLabel = findCurrentLabel(navData, currentPage);

    const headercode = `
        <h1 class="header-title">${currentLabel}.html</h1>
        <div class="marquee-container">
            <div class="marquee-text" id="marquee">
                ${pickRandomMessage()}
            </div>
        </div>
        <nav>
            ${buildNav(navData)}
        </nav>
    `;
    document.getElementById('header.insert').innerHTML = headercode;
    document.getElementById('header.insert').removeAttribute('id');
    console.log('<header> sync complete!');
    const marqueeDiv = document.getElementById("marquee");
    marqueeDiv.addEventListener("animationiteration", () => {
        marqueeDiv.textContent = pickRandomMessage();
    });
});