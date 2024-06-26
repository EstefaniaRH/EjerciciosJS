import { LitElement, html} from "./node_modules/lit/development";

export default class ObservedAttribute extends LitElement{
    constructor(){
        super();
        this.myProp = 'myProp';
        this.theProp = 'theProp';
        this.otherProp = 'otherProp';
    }

    static get properties(){
        return{
            myProp: {attribute: true},
            theProp: {attribute: false},
            otherProp: {attribute: 'otherProp'},
        }
    }

    attributeChangedCallback(name, oldVal, newVal){
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name,oldVal,newVal);

    }

    changeAttributes(){
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myprop','myProp'+ randomString);
        this.setAttribute('theprop','theProp'+ randomString);
        this.setAttribute('otherprop','otherProp'+ randomString);
        this.requestUpdate();
    }

    updated(changedProperties){
        changedProperties.forEach((oldValue, propName) => {
            console.log(`${propName} changed, oldvalue: ${oldValue}`);
        });
    }

    render(){
        return html `
            <p>myProp: ${this.myProp}</p>
            <p>theProp: ${this.theProp}</p>
            <p>otherProp: ${this.otherProp}</p>

            <button @click="${this.changeAttributes}">changeAttributes</button>
        `;
    }
}

customElements.define('observed-attribute', ObservedAttribute);