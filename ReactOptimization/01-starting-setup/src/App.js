import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/Demo/Demo';
import Sort from './components/Sort/Sort';

function App() {
    const [showParagraph, setParagraph] = useState(false);
    const [isAllowed, setTogglePermission]= useState(false);
    const [Title, setTitle]= useState('Default Title');
    const TestList = useMemo(()=>{
        return [1,2,5,3,8,4];
    },[])
    const ToggleParagraphHandler = useCallback(()=>{
        if(isAllowed){
            setParagraph((preState)=>{
                return !preState;
            });

            setTitle('New Title');
        }
    },[showParagraph,isAllowed]);
    const AllowToggleHandler = (()=>{
        setTogglePermission((preState)=>{
            return !preState;
        })
    });
    return ( 
    <>
        <div className="app">
        {showParagraph && <h1> Hi there! </h1> }
        <Sort title={Title} item={TestList}></Sort>
        <Demo show={showParagraph}></Demo>
        <Button onClick={AllowToggleHandler}>Allow Toggle</Button>
        <Button onClick={ToggleParagraphHandler}>Toggle Paragraph</Button>
        </div>
    </>
    );
}

export default App;