import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InfoUserComponent } from "./info-user.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[InfoUserComponent],
    declarations:[InfoUserComponent],
    providers:[]    
})

export class InfoUserModule{}