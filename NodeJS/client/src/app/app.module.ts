import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {HttpService} from './shared/http.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AlbumComponent} from './album/album.component';
import {ImageComponent} from './image/image.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'album/:id', component: AlbumComponent},
    {path: 'image/:id', component: ImageComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AlbumComponent,
        ImageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
