package com.sabindangi.expensetracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sabindangi.expensetracker.model.Expense;
import com.sabindangi.expensetracker.repository.ExpenseRepository;

@Service
public class ExpenseServiceImpl implements ExpenseService{
	
	@Autowired
	ExpenseRepository expenseRepository;
	
	@Override
	public List<Expense> findAll() {
		return expenseRepository.findAll();
	}

	@Override
	public Expense save(Expense expense) {
		 expenseRepository.save(expense);
		 return expense;
	}

	@Override
	public Expense findbyId(Long id) {
		if(expenseRepository.findById(id).isPresent()){
			return expenseRepository.findById(id).get();
		}
		else{
			return null;
		}
		
	}

	@Override
	public void delete(Long id) {
		Expense expense=findbyId(id);
		expenseRepository.delete(expense);
		
	}

}
