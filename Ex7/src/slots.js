import {html, css, LitElement} from 'lit';

export default class SlotsElements extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css`
        ::slotted(*) {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
        ::slotted(p) {color: red}
        div ::slotted(*) {color: red; }

    `;

    }
    

    render(){
        return html `
            <slot></slot>
            <div>
                <slot name="hi"></slot>
            </div>
        `;
    }
}