import {Component} from "@angular/core";
import { first } from "rxjs";

@Component({
    selector: 'first-c',
    template:`<button type="button" class="btn btn-primary">Primary</button>`

})
export class FirstComponent{
    title="First Component";

}