import './App.css';

function App() {

  function refreshUser(){
    console.log("Message");
  
  }
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <button OnClick={refreshUser}></button>
    </div>
  );
}

export default App;
