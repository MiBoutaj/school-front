import { Component,OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../../Model/Student";
import {Professor} from "../../Model/Professor";
import {ProfessorService} from "../../services/professor.service";

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent implements OnInit {

  professor!: Observable<Array<Professor>>


  constructor(private  p : ProfessorService) { }

  ngOnInit(): void {
    this.professor = this.p.getProfessor();
  }


}
