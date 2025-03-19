import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgIf, NgTemplateOutlet],
  template: `
    <ng-container *ngIf="small(); else largerTemplate">
      <ng-container>
        <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="messageTemplate"></ng-container>
      </ng-container>
    </ng-container>

    <ng-template #largerTemplate>
      <div class="p-4">
        <div class="text-2xl">
          <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
        </div>
        <ng-container *ngTemplateOutlet="messageTemplate"></ng-container>
      </div>
    </ng-template>

    <ng-template #titleTemplate>
      <div title>Your Title Here</div>
    </ng-template>

    <ng-template #messageTemplate>
      <div message>Your Message Here</div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {
  small = input<boolean>(false);
}
