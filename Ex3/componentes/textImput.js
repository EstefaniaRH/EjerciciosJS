import { LitElement, html } from "lit";

export class TextInput extends LitElement{
    constructor(){
        super();
    }

    static get properties(){
        return{
            value: {type: String}
        };
    }

    inputChange(e){
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: this.value,
            bubbles:true,
            composed:true
        }));
    }

    render(){
        return html`
            <p>
                <input type="text" .value="${this.value}" @input="${this.inputChange}">
            </p>
        `;
    }

    
}
