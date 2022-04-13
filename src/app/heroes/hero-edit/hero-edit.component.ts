import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../models/hero.model';
import { FormControl, Validators } from '@angular/forms';
import { HeroesApiService } from '../heroes-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss'],
})
export class HeroEditComponent {
  hero: Hero;
  name: FormControl;
  city: FormControl;
  website = new FormControl('', [Validators.required]);
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private heroesApiService: HeroesApiService, private router: Router) {
    this.hero = this.route.snapshot.data['hero'];
    /**
     * Use the constructor of FormControl to set its initial value, which in this case sets hero's values.
     * By creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input.
     */
    this.name = new FormControl(this.hero.name);
    this.city = new FormControl(this.hero.city);
    this.website.setValue(this.hero.website);

    this.subscription = this.name.valueChanges.subscribe(value => {
      this.hero.name = value;
    });
  }

  get isValid() {
    return this.name.valid && this.city.valid && this.website.valid;
  }

  save() {
    this.hero.name = this.name.value;
    this.hero.city = this.city.value;
    this.hero.website = this.website.value;
    this.heroesApiService.updateHero(this.hero);
    this.subscription.unsubscribe();
    return this.router.navigate(['/heroes']);
  }
}
