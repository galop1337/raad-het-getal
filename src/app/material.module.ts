import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatListModule } from '@angular/material/list'; 

@NgModule({
    imports: [MatButtonModule, MatMenuModule, MatListModule ],
    exports: [MatButtonModule, MatMenuModule, MatListModule ]
})

export class MaterialModule{}
