import CreateWallet from "./components/CreateWallet"
import SendCoins from "./components/SendCoins"
import './App.css';





function App() {
  return (
    <div className="App">
      {/* <CreateWallet/> */}
      <SendCoins/>
    {/* <Form
    schema={schema}
    validator={validator}
    onChange={log('changed')}
    onSubmit={log('submitted')}
    onError={log('errors')}
  /> */}
  </div>
  );
}

export default App;
