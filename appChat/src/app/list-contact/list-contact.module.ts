import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContactModule } from "../contact/contact.module";
import { ListContactComponent } from "./list-Contact.component";


@NgModule({
    imports:[FormsModule, CommonModule,ContactModule],
    exports:[ListContactComponent],
    declarations:[ListContactComponent],
    providers:[]    
})

export class ListContactModule{}