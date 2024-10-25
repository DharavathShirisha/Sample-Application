import {Component} from "@angular/core";
import { first } from "rxjs";

@Component({
    selector: 'product-c',
    template:`<h1>{{title}}</h1>`,
    
})
export class ProductComponent{
    title="Product Component";

}