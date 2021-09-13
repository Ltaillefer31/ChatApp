import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OptionNavComponent } from "./option-nav.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[OptionNavComponent],
    declarations:[OptionNavComponent],
    providers:[]    
})

export class OptionNavModule{}