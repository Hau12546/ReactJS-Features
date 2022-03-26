import { Component, useReducer, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterActionType, counterAction} from '../redux/counterStore'; 
const Counter = () => {
  const counter = useSelector((state)=>state['counter'].counter);
  const show = useSelector((state)=>state['counter'].showCounter);
  const counterDispatch= useDispatch();
  const [isIncrement, setToggleCounter] = useState(true);
  const toggleCounterHandler = () => {
    setToggleCounter(!isIncrement);
    // counterDispatch({type:counterActionType.toggle,})
    counterDispatch(counterAction.toggle())
  };
  const increaseCounter = (() => {
		// counterDispatch({
		// 	type: counterActionType.increment
		// })
    counterDispatch(counterAction.increment());
	});

  const increaseByFive=  (()=>{
    // counterDispatch({type:counterActionType.increaseByFive, payload:5});
    counterDispatch(counterAction.increaseByFive(5));
  });

  const decreaseCounter = (() => {
		// counterDispatch({
		// 	type: counterActionType.decrement
		// })
    counterDispatch(counterAction.decrement());
	});
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div className={classes['custom-gird']}>
        { <div><button onClick={increaseByFive} >Increase By 5</button></div>}
        { <div><button onClick={increaseCounter} >Increase</button></div>}
        { <div><button onClick={decreaseCounter} >Decrease</button></div>}
      </div>
    </main>
  );
};

// class Counter extends Component{
//   constructor(){
//     this.state = {
//       isIncrement:true
//     };
//   }
//   increaseCounter(){
//     this.props.increase();
//   }

//   decreaseCounter(){
//     this.props.decrease();
//   }

//   toggleCounterHandler(){
//     this.setState({isIncrement:!this.isIncrement});
//   }
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//         <div className={classes['custom-gird']}>
//           {this.isIncrement  && <div><button onClick={this.increaseCounter.bind(this)} >Increase</button></div>}
//           {!this.isIncrement && <div><button onClick={this.decreaseCounter.bind(this)} >Decrease</button></div>}
//         </div>
//       </main>
//     );
//   }
// }
// const mapStateToProps = ((state)=>{
//   return {
//     counter:state.counter
//   }
// });

// const mapActionToProps = (()=>{
//   return {
//     increase: ()=> dispatch({type:counterActionType.increment}),
//     decrease: ()=> dispatch({type:counterActionType.decrement}),
//   }
// });
// export default connect(mapStateToProps, mapActionToProps)(Counter);
export default Counter;
