import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FinderComponent } from "./finder.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[FinderComponent],
    declarations:[FinderComponent],
    providers:[]    
})

export class FinderModule{}