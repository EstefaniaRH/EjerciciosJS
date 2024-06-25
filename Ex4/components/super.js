import {html, css, LitElement} from 'lit';

export default class SuperElemento extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css`
        button{
            width: 300px; 
            font-style: italic;
        }`;
    }

    render(){
        return html`
            <button>Click</button>
        `;
    }
}
