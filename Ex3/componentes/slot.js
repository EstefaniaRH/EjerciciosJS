import { LitElement, html } from "lit";

export default class Slots extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html`
            <div>
                <slot name="one"></slot>
                <slot name="two"></slot>
            </div>
        `;
    }
}