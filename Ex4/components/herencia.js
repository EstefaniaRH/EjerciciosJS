import {css} from 'lit';
import SuperElemento from './super.js';

export default class HerenciaElemento extends SuperElemento{
    constructor(){
        super();
    }

    static get styles(){
        return[
            super.styles,
            css`button{color:red}`
        ];
    }

}