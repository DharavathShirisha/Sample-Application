import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from 'src/firstc/first.component';
import { ProductComponent } from 'src/products/products.component';
import { EducationComponent } from 'src/Education/edu.component';
import { SampleApplicationComponent } from './sample-application/sample-application.component';
import { FormsModule } from '@angular/forms';
import { BindemocomponentComponent } from './bindemocomponent/bindemocomponent.component';
import { OnclickdemocomponentComponent } from './onclickdemocomponent/onclickdemocomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildtoparentcomponentComponent } from './childtoparentcomponent/childtoparentcomponent.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { DemohostComponent } from './demohost/demohost.component';
import { MouseeventComponent } from './mouseevent/mouseevent.component';
import { ShowextensionComponent } from './showextension/showextension.component';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { GlobalerrorhandlingService } from './globalerrorhandling.service';
import { LifecycledemocomponentComponent } from './lifecycledemocomponent/lifecycledemocomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    EducationComponent,
    SampleApplicationComponent,
    BindemocomponentComponent,
    OnclickdemocomponentComponent,
    ParentcomponentComponent,
    ChildtoparentcomponentComponent,
    DemodirectivesComponent,
    DemohostComponent,
    MouseeventComponent,
    ShowextensionComponent,
    HostbindingComponent,
    LifecycledemocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //providers: [{provide:ErrorHandler, useExisting:GlobalerrorhandlingService}],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
