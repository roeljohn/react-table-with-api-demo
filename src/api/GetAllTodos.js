import { useState, useEffect } from "react";
import axios from 'axios';

function GetAllTodos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(false);
      try {
        const result = await axios.get('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos');
        setData(result.data);
      } catch (error) {
        
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return [data, loading];

}

export { GetAllTodos };