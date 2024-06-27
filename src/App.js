import logo from './logo.svg';
import './App.css';
import CodeEditor from './component/CodeEditor';

function App() {
  return (
    <div className="App">
     <header className='app-header'>
      <h1 >Simple Code Editor with Syntax Highliting</h1>
     </header>
     <CodeEditor />
    </div>
  );
}

export default App;
