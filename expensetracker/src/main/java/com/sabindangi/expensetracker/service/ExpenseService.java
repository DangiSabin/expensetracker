package com.sabindangi.expensetracker.service;

import java.util.List;

import com.sabindangi.expensetracker.model.Expense;

public interface ExpenseService {
	
	public List<Expense> findAll();
	
	Expense save(Expense expense);
	
	Expense findbyId(Long id);
	
	void delete(Long id);

}
