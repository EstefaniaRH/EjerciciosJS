import { LitElement, html } from "lit";

export default class Lit extends LitElement{
    constructor(){
        super();

        this.title = 'Hey there';
        this.counter = 5;

        this.myString = 'Hello world';
        this.myArray = ['an', 'array', 'of', 'test', 'data'];
        this.myBool = true;

    }

    static get properties(){
        return{
            title: {type: String},
            counter: {type: Number},

            myString: {type: String},
            myArray: {type: Array},
            myBool: {type: Boolean},
        };
    }


    render(){
        return html`
            <h2>${this.title} Nr. ${this.counter}</h2>
            <button @click=${this.__increment}>Increment</button>
            <hr>
            <p>Array loops and conditionale </p>
            <p>${this.myString}</p>
            <ul>
                ${this.myArray.map(i => html`<li>${i}</li>`)}
            </ul>
            ${this.myBool?
                html`<p>Render some HTML if myBool is tue</p>`: 
                html`<p>Render some other HTML if myBool is false</p>`}
        `;
    }

}