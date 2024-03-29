import { Component, HostBinding, Input } from '@angular/core';

import { view, TcView, View } from '@ngx-tc/base';
import { BadgeArrow, badgeArrow, BadgeSize, badgeSize } from './badge';

@Component({
  selector: 'tc-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements TcView {
  @HostBinding('class') get class() {
    return 'tc-badge';
  };
  @HostBinding('class.badge-xs') get xs() { return this.tcSize === badgeSize.xs };
  @HostBinding('class.badge-sm') get sm() { return this.tcSize === badgeSize.sm};
  @HostBinding('class.badge-lg') get lg() { return this.tcSize === badgeSize.lg};
  @HostBinding('class.badge-primary') get typePrimary() { return this.tcView === view.primary};
  @HostBinding('class.badge-accent') get typeAccent() { return this.tcView === view.accent};
  @HostBinding('class.badge-success') get typeSuccess() { return this.tcView === view.success};
  @HostBinding('class.badge-info') get typeInfo() { return this.tcView === view.info};
  @HostBinding('class.badge-warning') get typeWarning() { return this.tcView === view.warning};
  @HostBinding('class.badge-error') get typeError() { return this.tcView === view.error};
  @HostBinding('class.badge-outline') @Input() outline: boolean;
  @HostBinding('class.arrow-top') get arrowTop() { return this.arrow === badgeArrow.top};
  @HostBinding('class.arrow-end') get arrowRight() { return this.arrow === badgeArrow.end};
  @HostBinding('class.arrow-bottom') get arrowBottom() { return this.arrow === badgeArrow.bottom};
  @HostBinding('class.arrow-start') get arrowLeft() { return this.arrow === badgeArrow.start};

  @Input('view') tcView: View = view.primary;
  @Input('size') tcSize: BadgeSize = badgeSize.default;
  @Input() arrow: BadgeArrow;
}
