import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrl: './content-text.component.css',
  standalone: false
})
export class ContentTextComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() article_text!: SafeHtml;
}
