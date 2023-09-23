import logo from "./logo.svg";
import "./App.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/Stats";

function App() {
  return (
    <div className="App">
      <Tabs isFitted variant="enclosed" colorScheme='green' >
        <TabList mb="1em">
          <Tab>Dashboard</Tab>
          <Tab>Stats</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
             <Dashboard/>
          </TabPanel>
          <TabPanel>
             <Stats/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
