import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddFriendComponent } from "./add-friend.component";


@NgModule({
    imports:[FormsModule, CommonModule],
    exports:[AddFriendComponent],
    declarations:[AddFriendComponent],
    providers:[]    
})

export class AddFriendModule{}