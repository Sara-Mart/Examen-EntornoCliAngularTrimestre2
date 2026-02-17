import { Component } from '@angular/core';
import { Serie } from '../../models/serie';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostsService } from '../../services/series.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {

  form = new FormGroup({
    _id: new FormControl('',{nonNullable: true}),
    id: new FormControl('',{nonNullable: true}),
    title: new FormControl('',{nonNullable: true}),
    creator: new FormControl('',{nonNullable: true}),
    rating: new FormControl('',{nonNullable: true}),
    dater: new FormControl('',{nonNullable: true}),
    image: new FormControl('',{nonNullable: true}),
    channel: new FormControl('', {nonNullable: true}),
  })
constructor(
    private postsService: PostsService,
    private router: Router
  ) {}

  save() {
    const payload: Serie = {
      _id: this.form.controls._id.value,
      id: this.form.controls.id.value,
      title: this.form.controls.title.value,
      creator: this.form.controls.creator.value,
      rating: this.form.controls.rating.value,
      dater: this.form.controls.dater.value,
      image: this.form.controls.image.value,
      channel: this.form.controls.channel.value,
    };

    this.postsService.create(payload).subscribe({
      next: (created) => this.router.navigate(['/posts', created.id ?? 1]),
      error: (e) => console.error('Error creando:', e),
    });


}

}
