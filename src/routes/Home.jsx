import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';
import '../styles/TodoApp.scss';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}
