import useHttps from '../../Hooks/use-https';
import { DefaultAPI } from '../Share/API';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const tranformData = ((taskText,taskData)=>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  });
  let {isLoading, error, sendRequest:sendTaskRequest} = useHttps(tranformData);
  const enterTaskHandler = async (taskText) => {
    // try {
    //   const response = await fetch(
    //     DefaultAPI.post,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

      
      
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);

    sendTaskRequest({url:DefaultAPI.post,
      headers: {'Content-Type': 'application/json',},
      method: 'POST', 
      body: { text: taskText }
    });
    tranformData.bind(null,taskText);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
