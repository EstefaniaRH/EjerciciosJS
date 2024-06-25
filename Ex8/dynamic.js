import {html, css, LitElement} from 'lit';
import {classMap} from 'lit-html/directives/class-map.js';
import {styleMap} from 'lit-html/directives/style-map.js';

export default class DynamicStyle extends LitElement{
    constructor(){
        super();
        this.classes = {mydiv: true, someclass: true};
        this.styles = {color:'green', fontFamily: 'Roboto'};
    }

    static get properties (){
        return{
            classes: {type: Object},
            styles: {type: Object}
        }
    }

    static get styles(){
        return css`
            .mydiv {background-color: blue}
            .someclass {border: 1px solid red}
        `;
    }

    render(){
        return html `
            <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
                Some content
            </div>    
        `;    
    }
}

customElements.define('dynamic-style', DynamicStyle);