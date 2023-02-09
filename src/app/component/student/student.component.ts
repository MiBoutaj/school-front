import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../../Model/Student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

    student!: Observable<Array<Student>>
    constructor(private s : StudentService) { }

    ngOnInit(): void {
        this.student = this.s.getStudent();
    }

}
