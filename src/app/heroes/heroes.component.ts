import { Component } from '@angular/core';

/**
 @Component is a decorator function that specifies the Angular metadata for the component (such as styles, templates, and selector).
 */
@Component({
  selector: 'app-heroes', /** The component's CSS element selector */
  templateUrl: './heroes.component.html', /** The location of the component's template file */
  styleUrls: ['./heroes.component.scss'], /** The location of the component's private CSS styles */
})
export class HeroesComponent {
  /**
   * A component is a Typescript class that has a template (HTML) to render
   * Optionally, a component can have a CSS file to style the template
   */
}
