import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  template: `
    <ng-content select="[card-title]"></ng-content>
    <ng-content select="[card-message]">
      <div>Aucun message</div>
    </ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {}
