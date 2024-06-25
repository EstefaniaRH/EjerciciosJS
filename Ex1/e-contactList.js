import { html, css, LitElement } from "lit";
import Econtact from "./e-contact.js";

export default class EcontactList extends LitElement{
    constructor(){
        super();
        this.contactos = [
            {
                nombre: 'Lucho Godinez',
                email: 'user1_some_email@mail.com'
            },
            {
                nombre: 'Hugo Sanchez',
                email: 'user2_some_email@mail.com'
            },
            {
                nombre: 'Jhon Doe',
                email: 'user3_some_email@mail.com'
            },
        ];
    }


    render(){
        return html `
            <div>
                ${this.contactos.map(contact => 
                    html `<my-contact
                    nombre="${contact.nombre}"
                    email="${contact.email}"></my-contact>
                `)}

            </div>
        `;
    }
}

customElements.define('e-contact', EcontactList);