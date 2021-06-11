import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  expense:Expense=new Expense();
  constructor(private expenseService:ExpenseService,
    private router:Router, private activateRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const idPresent = this.activateRoute.snapshot.paramMap.has('id');
    if(idPresent){
      const id=+this.activateRoute.snapshot.paramMap.get('id');
      this.expenseService.getExpense(id).subscribe(
        data=>this.expense=data
      )
    }
  }

  saveExpense(){
    this.expenseService.saveExpense(this.expense).subscribe(
      data=>{
        console.log('response',data);
        this.router.navigateByUrl("/expenses");
      }
    )
  }

  deleteExpense(id:number){
    this.expenseService.deleteExpense(id).subscribe(
      data=>{
        console.log("deleted expense",data);
        this.router.navigateByUrl("/expenses");
      }
    )
  }

}
