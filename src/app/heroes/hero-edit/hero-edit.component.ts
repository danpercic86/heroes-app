import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../models/hero.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesApiService } from '../heroes-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss'],
})
export class HeroEditComponent {
  hero: Hero;
  form: FormGroup;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private heroesApiService: HeroesApiService, private router: Router, private formBuilder: FormBuilder) {
    this.hero = this.route.snapshot.data['hero'];
    /**
     * Use the constructor of FormControl to set its initial value, which in this case sets hero's values.
     * By creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input.
     */
    this.form = this.formBuilder.group({
      id: [this.hero.id],
      name: [this.hero.name, [Validators.required, Validators.minLength(3)]],
      city: [this.hero.city, [Validators.required, Validators.minLength(3)]],
      website: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.subscription = this.form.valueChanges.subscribe(value => {
      console.log(value);
    });
    this.subscription.add(this.form.get('name')?.valueChanges.subscribe(value => {
      this.hero.name = value;
    }));
  }

  get websiteHasErrors() {
    return this.form.get('website')?.hasError('required') && this.form.get('website')?.touched;
  }

  save() {
    this.heroesApiService.updateHero(this.form.getRawValue() as Hero);
    this.subscription.unsubscribe();
    return this.router.navigate(['/heroes']);
  }
}
