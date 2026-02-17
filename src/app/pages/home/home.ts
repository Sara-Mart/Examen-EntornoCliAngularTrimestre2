import { Component } from '@angular/core';
import { Serie } from '../../models/serie';
import { PostsService } from '../../services/series.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  posts$: Observable<Serie[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAll();
  }

}
