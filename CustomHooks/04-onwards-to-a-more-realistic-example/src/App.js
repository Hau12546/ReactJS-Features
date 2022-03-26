import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { DefaultAPI } from './components/Share/API';
import useHttps from './Hooks/use-https';
function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const TransformData = useCallback((taskObj)=>{
    const loadedTasks = [];
    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  },[]);


  const httpData  = useHttps(TransformData);
  const {isLoading, error, sendRequest:fetchTasks} = httpData;

  useEffect(() => {
    fetchTasks({url:DefaultAPI.get});
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
