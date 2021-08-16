import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './context/TransContext';

function App() {
  return (
    <div className="container">
      <TransactionProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </TransactionProvider>
    </div>
  );
}

export default App;
