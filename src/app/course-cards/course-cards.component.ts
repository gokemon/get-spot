import { Component, OnInit }    from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-cards',
  templateUrl: './course-cards.component.html',
  styleUrls: ['./course-cards.component.sass']
})

/* export class */
export class CourseCardsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    // constructor stub
  }
  navigate(path) {
        this.router.navigate([{outlets: {primary: path, sidemenu: path}}], {relativeTo: this.route});
    }

  ngOnInit() {
  }
}// CourseCardsComponent class 
