import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  platform: any;
  app: string;

  constructor(private heroService: HeroService, @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string) {
    this.app = this.appId;
    this.platform = this.platformId.toString();
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
