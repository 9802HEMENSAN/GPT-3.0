import React, { useEffect, useState } from "react";
import "./App.css";
import { Listing } from "./components/Listing";

function App() {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/plan-list");
      const data = await response.json();
      
      // if(data.status == 1 ){
        console.log(data)
        console.log(data.data.electricity)
        setData(data.data.electricity);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {Data.length > 0 && <Listing  Data = {Data}/>}
      {/* <div>{JSON.stringify(Data)}</div> */}
    </div>
  );
}

export default App;
