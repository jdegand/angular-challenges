import {
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { takeUntil } from 'rxjs';
import { Role } from './src/app/user.model';
import { UserStore } from './src/app/user.store';

import {
  injectDestroyService,
  provideDestroyService,
} from '../../../libs/shared/utils/src/lib/destroy-service.service';

@Directive({
  selector: '[hasRole], [hasRoleIsAdmin]',
  standalone: true,
  providers: [provideDestroyService()],
})
export class HasRoleDirective implements OnInit {
  private destroy$ = injectDestroyService();

  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);

  private store = inject(UserStore);

  @Input('hasRole') role: Role | Role[] | undefined = undefined;

  @Input('hasRoleIsAdmin') isAdmin = false;

  ngOnInit(): void {
    if (this.isAdmin) {
      this.store.isAdmin$
        .pipe(takeUntil(this.destroy$))
        .subscribe((isAdmin) =>
          isAdmin ? this.addTemplate() : this.clearTemplate(),
        );
    } else if (this.role) {
      this.store
        .hasAnyRole(this.role)
        .pipe(takeUntil(this.destroy$))
        .subscribe((hasPermission) =>
          hasPermission ? this.addTemplate() : this.clearTemplate(),
        );
    } else {
      this.addTemplate();
    }
  }

  private addTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  private clearTemplate() {
    this.viewContainer.clear();
  }
}
