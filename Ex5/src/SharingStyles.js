import {html, css, LitElement} from 'lit';
import { buttonStyles } from './_module-styles.js';

export default class SharingStyles extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return[
            buttonStyles, 
            css`
                :host{
                    display:block;
                    border: 1px, solid black; 
                }
            `
        ]
    }

    render(){
        return html`
            <button class="blue-button">Click</button>
            <button class="blue-button" disabled>No click</button>
        `;
    }
}