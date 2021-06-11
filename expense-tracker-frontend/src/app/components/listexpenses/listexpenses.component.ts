import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'expenses',
  templateUrl: './listexpenses.component.html',
  styleUrls: ['./listexpenses.component.css']
})
export class ListexpensesComponent implements OnInit {

  expenses:Expense[];

  filters={
    keyword:'',
    sortBy:'Name'
  };

  constructor( private expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.listExpenses();
  }

  deleteExpense(id:number){
    this.expenseService.deleteExpense(id).subscribe(
      data=>{
        console.log("Item deleted",data);
        this.listExpenses();
      }
    )
  }

  listExpenses(){
    this.expenseService.getExpenses().subscribe(
      data=>this.expenses=this.filterExpenses(data)
    )
  }

  filterExpenses(expenses:Expense[]){
    //console.log(this.filters);
    return expenses.filter((e)=>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a,b)=>{
      if(this.filters.sortBy==='Name'){
          return a.expense.toLowerCase()<b.expense.toLowerCase()?-1:1;
      }else if(this.filters.sortBy==='Amount'){
        return a.amount>b.amount?-1:1;
      }
    })
  }

}
