
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";

const routes: Routes = [
  {path: 'displayhelloworld', component: DisplayhelloworldComponent },
  {path: 'showhellobutton', component: ShowhellobuttonComponent },


]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations:[
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
