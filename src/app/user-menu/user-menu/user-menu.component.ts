import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'content 1',
      
      children: [
        {
          title: 'First',
        },
        {
          title: 'Second',
        },
        {
          title: 'Third',
        },
      ],
    },
    
    {
      title: 'content 2',
      
      children: [
        {
          title: 'First',
        },
        {
          title: 'Second',
        },
        {
          title: 'Third',
        },
      ],
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
