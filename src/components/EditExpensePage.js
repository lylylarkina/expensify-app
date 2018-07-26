import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = (id) => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  openModal() {
    this.setState(() => ({ modalIsOpen: true }));
  }
  closeModal() {
    this.setState(() => ({ modalIsOpen: false }));
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.openModal}>Remove Expense</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Remove expense"
            className="modal"
          >
          <div>
            <h3 className="modal__title">Do you want to delete the expense?</h3>
            <button className="button modal__button" onClick={this.onRemove}>Yes</button>
            <button className="button modal__button" onClick={this.closeModal}>No</button>
          </div>  
          </Modal>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
