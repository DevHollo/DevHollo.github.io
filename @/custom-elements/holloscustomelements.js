class MacWinElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const title = this.getAttribute('title') || '';
        const width = this.getAttribute('width') || '800';
        const height = this.getAttribute('height') || '500';
        const bg_img = this.getAttribute('bg-img') || '';
        const bg_clr = this.getAttribute('bg-clr') || '#ffffff';
        const text_clr = this.getAttribute('txt-clr') || '#000000';
        const text_font = this.getAttribute('font') || 'Arial, Consolas, sans-serif';
        const style = document.createElement('style');
        style.textContent = `
            .window {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;
                border: 1px solid #333;
                border-radius: 5px;
                box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
                width: ${width}px;
                height: ${height}px;
                background-image: url("${bg_img}");
                background-color: ${bg_clr};
                color: ${text_clr};
                font-family: ${text_font};
            }

            .title-bar {
                background-color: #2d2d2d;
                color: #fff;
                padding: 10px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                display: flex;
                justify-content: space-between;
                font-family: Consolas;
            }

            .title-bar-controls button {
                width: 12px;
                height: 12px;
                margin-left: 5px;
                border-radius: 50%;
                border: none;
                cursor: pointer;
            }

            .title-bar-controls button:nth-child(1) {
                background-color: #ff5f56; /* Red */
            }

            .title-bar-controls button:nth-child(2) {
                background-color: #ffbd2e; /* Yellow */
            }

            .title-bar-controls button:nth-child(3) {
                background-color: #27c93f; /* Green */
            }

            .window-body {
                padding: 20px;
                color: #333;
            }
        `;
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="window">
                <div class="title-bar">
                    <div class="title-bar-text"><b>${title}</b></div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <slot></slot>
                </div>
            </div>
        `;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('mac-win', MacWinElement);
//-----------------------------------------------------------\\