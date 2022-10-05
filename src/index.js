import './styles/index.css';

export default class ButtonLink {

    /**
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(){
        return {
            title:"Button",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><path d="m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z"/></svg>'
        }
    }

    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @return {boolean}
     */
    static get isReadOnlySupported() {
        return true;
    }
    /**
     *
     * @returns {boolean}
     */
    static get enableLineBreaks() {
        return false;
    }


    /**
     *
     * @returns {{EDIT: number, VIEW: number}}
     * @constructor
     */
    static get STATE() {
        return {
            EDIT:0,
            VIEW:1
        };
    }
    /**
     *
     * @param data
     */
    set data(data) {
        this._data = Object.assign({}, {
            link: this.api.sanitizer.clean(data.link || "", ButtonLink.sanitize),
            text: this.api.sanitizer.clean(data.text || "", ButtonLink.sanitize)
        });
    }
    /**
     *
     * @returns {{text: string, link: string}}
     */
    get data() {
        return this._data;
    }

    /**
     * @param savedData
     * @returns {boolean}
     */
    validate(savedData){
        if(this._data.link === "" || this._data.text === ""){
            return false;
        }

        return true;
    }
    /**
     *
     * @param block
     * @returns {{caption: string, text: string, alignment: string}}
     */
    save(block){
        return this._data;
    }

    /**
     * @returns {{link: boolean, text: boolean}}
     */
    static get sanitize(){
        return {
            text: false,
            link: false
        }
    }

    /**
     *
     * @param data
     * @param config
     * @param api
     * @param readOnly
     */
    constructor({ data, config, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;

        this.nodes = {
            wrapper: null,
            container: null,
            inputHolder: null,
            toggleHolder: null,
            buttonLinkHolder: null,
            textInput: null,
            linkInput: null,
            registButton: null,
            buttonLink: null,
        }
        //css overwrite
        const _CSS = {
            baseClass: this.api.styles.block,
            hide: "hide",
            btn: "cdx-btn",
            container: "buttonLinkContainer",
            input: "buttonLinkContainer__input",

            inputHolder: "buttonLinkContainer__inputHolder",
            inputText: "buttonLinkContainer__input--text",
            inputLink: "buttonLinkContainer__input--link",
            registButton: "buttonLinkContainer__registerButton",
            buttonLinkHolder: "buttonLinkContainer__buttonLinkHolder",
            btnColor: "btn--default",
            toggleSwitch: "toggle-switch",
            toggleInput: "toggle-input",
            toggleLabel: "toggle-label",
        }

        this.CSS = Object.assign(_CSS, config.css)

        this.data = {
            link: "",
            text: ""
        };
        this.data = data;

    }

    render(){
        this.nodes.wrapper = this.make('div', this.CSS.baseClass);
        this.nodes.container = this.make('div', this.CSS.container); //twitter-embed-tool

        this.nodes.inputHolder = this.makeInputHolder();
        //toggle
        if (!this.readOnly) {
            this.nodes.toggleHolder = this.makeToggle();
        }
        //display button
        this.nodes.buttonLinkHolder = this.makeButtonLinkHolder();

        if (!this.readOnly) {
            this.nodes.container.appendChild(this.nodes.toggleHolder);
        }
        this.nodes.container.appendChild(this.nodes.inputHolder);
        this.nodes.container.appendChild(this.nodes.buttonLinkHolder);

        if (this._data.link !== "") {
            this.init()
            this.show(ButtonLink.STATE.VIEW)
        }

        this.nodes.wrapper.appendChild(this.nodes.container);

        return this.nodes.wrapper;
    }


    makeInputHolder() {
        const inputHolder = this.make('div', [this.CSS.inputHolder]);
        this.nodes.textInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputText], {
            contentEditable: !this.readOnly,
        });
        this.nodes.textInput.dataset.placeholder = this.api.i18n.t('Button Text');

        this.nodes.linkInput = this.make('div', [this.api.styles.input, this.CSS.input,  this.CSS.inputLink], {
            contentEditable: !this.readOnly,
        })
        this.nodes.linkInput.dataset.placeholder = this.api.i18n.t('Link Url');

        this.nodes.registButton = this.make('button',[this.api.styles.button, this.CSS.registButton]);
        this.nodes.registButton.type = 'button';
        this.nodes.registButton.textContent = this.api.i18n.t('Set');


        this.nodes.registButton.addEventListener('click', (event) => {
            this.data = {
                "link": this.nodes.linkInput.textContent,
                "text": this.nodes.textInput.textContent
            }
            this.show(ButtonLink.STATE.VIEW);
        });

        inputHolder.appendChild(this.nodes.textInput);
        inputHolder.appendChild(this.nodes.linkInput);
        inputHolder.appendChild(this.nodes.registButton);

        return inputHolder;
    }

    init(){
        this.nodes.textInput.textContent = this._data.text;
        this.nodes.linkInput.textContent = this._data.link;
    }

    show(state){
        this.nodes.buttonLink.textContent = this._data.text;
        this.nodes.buttonLink.setAttribute("href", this._data.link);
        this.changeState(state);
    }

    makeButtonLinkHolder(){
        const buttonLinkHolder = this.make('div', [this.CSS.hide, this.CSS.buttonLinkHolder]);
        this.nodes.buttonLink = this.make('a',[this.CSS.btn, this.CSS.btnColor],{
            target: '_blank',
            rel: 'nofollow noindex noreferrer',
        });
        this.nodes.buttonLink.textContent = this.api.i18n.t("Default Button");
        buttonLinkHolder.appendChild(this.nodes.buttonLink);
        return buttonLinkHolder;
    }

    changeState(state){
        switch (state) {
            case ButtonLink.STATE.EDIT:
                this.nodes.inputHolder.classList.remove(this.CSS.hide);
                this.nodes.buttonLinkHolder.classList.add(this.CSS.hide);
                if (!this.readOnly) {
                    this.nodes.toggleInput.checked = 0;
                }

                break;
            case ButtonLink.STATE.VIEW:
                this.nodes.inputHolder.classList.add(this.CSS.hide);
                this.nodes.buttonLinkHolder.classList.remove(this.CSS.hide);
                if (!this.readOnly) {
                    this.nodes.toggleInput.checked = 1;
                }
                break;
        }
    }

    makeToggle(){
        /**
         * <div class="toggle-switch">
         <input id="toggle" class="toggle-input" type='checkbox' />
         <label for="toggle" class="toggle-label"/>
         </div>
         */
        const toggleHolder = this.make('div', [this.CSS.toggleSwitch]);
        this.nodes.toggleInput = this.make('input', [this.CSS.toggleInput],
            {
                "type":"checkbox",
                "id":"toggle"
            });
        const label = this.make('label', [this.CSS.toggleLabel],{"for":"toggle"});

        this.nodes.toggleInput.addEventListener("change", (event) => {
            this.data = {
                "link": this.nodes.linkInput.textContent,
                "text": this.nodes.textInput.textContent
            }
            this.show(Number(this.nodes.toggleInput.checked))
        })
        toggleHolder.appendChild(this.nodes.toggleInput);
        toggleHolder.appendChild(label);

        return toggleHolder;
    }

    /**
     * @param tagName
     * @param classNames
     * @param attributes
     * @returns {*}
     */
    make(tagName, classNames = null, attributes = {}) {
        const el = document.createElement(tagName);

        if (Array.isArray(classNames)) {
            el.classList.add(...classNames);
        } else if (classNames) {
            el.classList.add(classNames);
        }

        for (const attrName in attributes) {
            el[attrName] = attributes[attrName];
        }

        return el;
    }
}