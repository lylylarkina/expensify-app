export default (allExpenses, visibleExpenses) => {
    return allExpenses.filter((expense) => {
        return !visibleExpenses.includes(expense);
      });
};