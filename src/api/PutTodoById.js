import { useState, useEffect } from "react";
import axios from 'axios';

function PutTodoById(id, title) {

    const updateData = async () => {
      try {
        
        await axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`,
        {
            title: title,
        });
      } catch (error) {
        
      }
    };
    updateData();

}

export { PutTodoById };