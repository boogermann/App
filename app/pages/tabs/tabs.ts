import { NewsPage } from '../news/news';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { ListPlaces } from '../listPlaces/listPlaces';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {

    public tab1Root: any;
    public tab2Root: any;
    public tab3Root: any;

    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = ListPlaces;
        this.tab3Root = NewsPage;
    }
}
