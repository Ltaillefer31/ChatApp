import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InfoFriendComponent } from "./info-friend.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[InfoFriendComponent],
    declarations:[InfoFriendComponent],
    providers:[]    
})

export class InfoFriendModule{}