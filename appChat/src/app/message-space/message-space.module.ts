import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContactModule } from "../contact/contact.module";
import { MessageSpaceComponent } from "./message-space.component";


@NgModule({
    imports:[FormsModule, CommonModule,ContactModule],
    exports:[MessageSpaceComponent],
    declarations:[MessageSpaceComponent],
    providers:[]    
})

export class MessageSpaceModule{}