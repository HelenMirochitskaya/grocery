import './App.css';
import image from './grocery.jpg';
import GroceryList from './GroceryList';
import GroceryImage from './GroceryImage';
import Button from './Button';


function App() {
  return (
    <div>
           
        <img src={image} className="App-logo" alt="grocery" width="300px"/>
        <GroceryList/>
        <GroceryImage/>
        <Button/>

       

        
      
    </div>
  );
}

export default App;
