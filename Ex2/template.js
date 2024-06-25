import { LitElement, html } from "lit";

export default class TemplateBind extends LitElement{
    constructor(){
        super();
        this.prop1 = 'text binding';
        this.prop2 = 'mydiv';
        this.prop3 = true;
        this.prop4 = 'pie';
        this.activo = true;
    }

    static get properties (){
        return{
            prop1: {type: String},
            prop2: {type: String},
            prop3: {type: Boolean},
            prop4: {type: String},
            activo: {type: Boolean}
        }
    }

    render(){
        return html`
            <div>${this.prop1}</div>

            <div id="${this.prop2}">attribute binding</div>

            <div>
                Boolean attribute binding
                <input type="text" ?disabled="${this.prop3}"/>
            </div>

            <div>
                property binding
                <input type="text" .value="${this.prop4}"/>
            </div>

            <div>
                event handler binding
                <button @click="${this.clickHandler}">Click</button>
            </div>

            <p>
                <input type="checkbox" ?checked="${this.activo}" @change="${this.doChange}"/> Chek ??
            </p>

        `;
    }

    clickHandler(e){
        console.log(e.target);
    }

    doChange(e){
        this.activo = e.target.checked;
        console.log("Estado: "+ this.activo);
    }
}

customElements.define('template-bind', TemplateBind);