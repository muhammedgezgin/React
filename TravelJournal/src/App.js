import Navbar from "./components/Navbar";
import Content from "./components/Content";
import dataSet from './data';


function App() {
  const travel = dataSet.map(x => {
    return (
      <Content 
      head = {x.title} 
      country = {x.location} 
      map = {x.googleMapsUrl} 
      start = {x.startDate} 
      end = {x.endDate} 
      text = {x.description} 
      image = {x.imageUrl}
       />
    )
  })

  return (
    <div id="app">
      <Navbar />
      {travel}    
    </div>


  );
}

export default App;
