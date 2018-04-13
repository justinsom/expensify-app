import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


const ExpensesSummary = (props) => (
    <div>
        { props.expenses.length === 0 ? ('No expenses listed.') : 
            (props.expenses.length === 1 ? (<p>Viewing {props.expenses.length} expense totalling {numeral(expensesTotal(props.expenses)/100).format('0,0.00')}.</p>) : 
            (<p>Viewing {props.expenses.length} expenses totalling {numeral(expensesTotal(props.expenses)/100).format('0,0.00')}.</p>) )
        }
    
    </div>
);


const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);