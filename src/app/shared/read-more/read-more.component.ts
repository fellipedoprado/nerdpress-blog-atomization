import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.css',
  standalone: false,
})
export class ReadMoreComponent {
  @Input()
  id!: string;
}
