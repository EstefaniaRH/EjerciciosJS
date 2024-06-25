import {LitElement, html, css} from 'lit';
import { TextInput } from './textImput.js';

export default class InputSample extends LitElement{
    constructor(){
        super();
        this.miDato = 'Valor de inicialización';
    }

    static get properties(){
        return {
            miDato: {type:String}
        }; 
    }

    static get styles(){
        return css`
        :host{
            display: block;
            padding: 25px; 
            color: var(--input-sample-text-color, #000); 
        }
        `;
    }

    render(){
        return html `
            <p>Soy my Element</p>
            <my-text-input .value=${this.miDato}
                @change="${this.inputCambiado}"></my-text-input>
            
            <p>El dato escrito es: ${this.miDato}</p>
            <button @click=${this.resetTexto}>Borrar texto</button>
            
        `;
    }

    inputCambiado(e){
        this.miDato = e.detail;
    }

    resetTexto(){
        this.miDato = '';
    }
}