import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import router from './routes/Routes';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> : <RouterProvider router={router}></RouterProvider>}
      <Toaster />
    </div>
  );
}

export default App;
