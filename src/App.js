import './App.css';
import ContentView from './Components/ContentView';
import CreatePost from './Components/CreatePost';
import Header from './Components/Header';
import { ContextProvider } from './Context/DataContext';
function App() {
return (
    <ContextProvider>
        <Header/>
        <CreatePost/>
        <ContentView/>
    </ContextProvider>
  );
}

export default App;
