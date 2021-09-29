import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NotificationPageComponent } from "./notification-page.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[NotificationPageComponent],
    declarations:[NotificationPageComponent],
    providers:[]    
})

export class NotificationPageModule{}