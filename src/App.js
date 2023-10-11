import { AppRoutes } from "./Components/routes";


function App() {
  window.localStorage.setItem('user', 'df');
  return (
    <AppRoutes user={window.localStorage.getItem('df')}  />
  );
}

export default App;
