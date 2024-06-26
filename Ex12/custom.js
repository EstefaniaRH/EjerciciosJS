import {LitElement, html} from 'lit';


export default class CustomHasChanged extends LitElement{
    constructor(){
        super();
        this.myProp = 1; 
    }

    static get properties(){
        return{
            myProp: {
                type: Number, 

                hasChanged(newVal, oldVal){
                    if(newVal> oldVal){
                        console.log(`${newVal} > ${oldVal}. hasChange: true.`);
                        return true;
                    }
                    else{
                        console.log(`${newVal} <= ${oldVal}. hasChange: false.`);
                        return false;
                    }
                }            
            }
        }
    }

    updated(){
        console.log('updated');
    }

    getNewVal(){
        let newVal = Math.floor(Math.random()*10);
        this.myProp = newVal;
    }

    render(){
        return html`
            <p>myProp: ${this.myProp}</p>
            <button @click="${this.getNewVal}">getNewVal</button>
        `;
    }
}

customElements.define('custom-has-changed', CustomHasChanged);