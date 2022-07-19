import { Component, OnInit } from '@angular/core';
import { AuthorsListService } from '../authors-list.service';

@Component({
  selector: 'app-authors',
  template: `
            <h2>{{ title }}</h2>
            <ul>
              <li *ngFor='let author of authors'>
                {{author}}
              </li>
            </ul>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title;
  authors;
  constructor(service: AuthorsListService) { 
    this.authors = service.getAuthors();
    this.title = this.authors.length + ' Authors';
  }
    
  ngOnInit(): void {
  }

}
