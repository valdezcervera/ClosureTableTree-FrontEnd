import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeControllerComponentComponent } from './components/tree-controller-component/tree-controller-component.component';
import { TreeAddNodeComponent } from './components/tree-add-node/tree-add-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeControllerComponentComponent,
    TreeAddNodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
