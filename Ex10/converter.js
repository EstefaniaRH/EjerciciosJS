import { LitElement, html } from "lit";

export default class MyConverter extends LitElement{
    constructor(){
        super();
        this.myProp = 'myProp';
        this.theProp = 'theProp';
    }

    static get properties(){
        return{
            myProp:{
                reflect: true, 
                converter:{
                    toAttribute(value){
                        console.log('myProp\'s toAttribute.');
                        console.log('Processing: ', value, typeof(value));
                        let retVal = String(value);
                        console.log('Returning: ', retVal, typeof(retVal));
                        return retVal;
                    }, 

                    fromAttribute(value){
                        console.log('myProp\'s fromAttribute.');
                        console.log('Processing: ', value, typeof(value));
                        let retVal = Number(value);
                        console.log('Returning: ', retVal, typeof(retVal));
                        return retVal;
                    }
                }
            },

            theProp:{
                reflect: true, 
                converter(value){
                    console.log('myProp\'s converter.');
                    console.log('Processing: ', value, typeof(value));

                    let retVal = Number(value);
                    console.log('Returning: ', retVal, typeof(retVal));
                    return retVal;
                }
            },
        };
    }

    attributeChangedCallback(name, oldVal, newVal){
        super.attributeChangedCallback(name,oldVal,newVal);
    }

    changeAttributes(){
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myprop', 'myprop' + randomString);
        this.setAttribute('theprop', 'theprop' + randomString);
        this.requestUpdate();
    }

    changeProperties(){
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myprop', 'myprop' + randomString);
        this.setAttribute('theprop', 'theprop' + randomString);
    }

    render(){
        return html`
            <p>myProp: ${this.myProp} tipo: ${typeof(this.myProp)}</p>
            <p>thePropProp: ${this.theProp} tipo: ${typeof(this.theProp)}</p>

            <button @click="${this.changeProperties}">changeProperties</button>
            <button @click="${this.changeAttributes}">changeAttributes</button>

        `;
        
    }
}

customElements.define('my-converter', MyConverter);