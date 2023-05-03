import React from 'react';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route index element={<SignUp/>} />
  <Route path='login'element={<SignIn/>}/>
</Routes>
</BrowserRouter>
</>   

      


  );
}

export default App;
