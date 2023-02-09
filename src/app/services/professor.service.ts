import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Professor} from "../Model/Professor";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http:HttpClient) { }

  public getProfessor():Observable<Array<Professor>>{
    return this.http.get<Array<Professor>>("http://localhost:8089/professors");
  }

}
