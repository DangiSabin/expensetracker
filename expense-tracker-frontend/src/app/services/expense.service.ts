import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl:string="http://localhost:8085/api/v1/expenses";
  constructor( private httpClient:HttpClient) { }

  getExpenses():Observable<Expense[]>{
    return this.httpClient.get<Expense[]>(this.baseUrl).pipe(
      map(response=>response)
    )
  }

  saveExpense(expense: Expense):Observable<Expense>{
    return this.httpClient.post<Expense>(this.baseUrl,expense);
  }
  
  getExpense(id:number):Observable<Expense>{
    return this.httpClient.get<Expense>(`${this.baseUrl}/${id}`).pipe(
      map(response=>response)
    )
  }

  deleteExpense(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }





























}
