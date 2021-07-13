import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from "./contact.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[ContactComponent],
    declarations:[ContactComponent],
    providers:[]    
})

export class ContactModule{}