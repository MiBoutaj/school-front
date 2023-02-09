import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Professor} from "../Model/Professor";
import {HttpClient} from "@angular/common/http";
import {Student} from "../Model/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  public getStudent():Observable<Array<Student>>{
    return this.http.get<Array<Student>>("http://localhost:8088/etudiants");
  }

}
