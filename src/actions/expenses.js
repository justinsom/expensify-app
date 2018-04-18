import uuid from 'uuid';
import database from '../firebase/firebase';


// Actions Process for Redux Only
// ------------------------------
// Component calls action generator
// Action generator returns an object
// Component takes the object and passes it to dispatch (uses redux-thunk)
// Redux store runs the reducer and changes


// Actions Process for Redux and Firebase
// --------------------------------------
// Component calls action generator
// Action generator returns a function
// Component takes the function and passes it to dispatch
// Functions runs (has the ability to dispatch other actions and do whatever it wants)


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0     
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database.ref('expenses')   // return for test purposes
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key, 
          ...expense
        }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
