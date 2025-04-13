import { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expenseName || !amount || Number(amount) <= 0) {
      alert("Please enter a valid expense name and amount!");
      return;
    }

    const newExpenses = [...expenses, { expenseName, amount }];
    setExpenses(newExpenses);
    setExpenseName("");
    setAmount("");
  };

  const calculateTotal = () => {
    return expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Expense Tracker</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px", textAlign: "center" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            style={{
              padding: "10px",
              width: "70%",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              padding: "10px",
              width: "70%",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#32a873",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Expense
        </button>
      </form>

      {expenses.length > 0 && (
        <table
          style={{
            width: "400px",
            borderCollapse: "collapse",
            marginTop: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  fontSize: "16px",
                  width:200,
                }}
              >
                Expense Name
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "right",
                  width:200,
                }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                <td style={{ padding: "10px", border: "1px solid #ddd", width:200,  textAlign: "left", }}>{exp.expenseName}</td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "right",
                    width:200,
                  }}
                >
                  {exp.amount}
                </td>
              </tr>
            ))}
            <tr style={{ backgroundColor: "#f4f4f4", fontWeight: "bold" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd", width:200, textAlign: "left", }}>Total</td>
              <td
                style={{
                  padding: "10px",
                  width:200,
                  border: "1px solid #ddd",
                  textAlign: "right",
                }}
              >
                {calculateTotal()}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTracker;
