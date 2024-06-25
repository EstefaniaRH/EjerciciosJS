import {html, css, LitElement} from 'lit';

export default class HostElements extends LitElement{
    static get styles(){
        return css`
            :host{
                display: block;
                background-color: azure;
            }

            :host([hidden]){
                display: none;
            }

            :host(.blue){
                background-color:aliceblue; 
                color: blue 
            }

            p{
                font-family: fantasy;
            }
        `;
    }

    render(){
        return html`
            <p>Lorem ipsun dolor sit, amet consectetur ...</p>
        `;
    }
}