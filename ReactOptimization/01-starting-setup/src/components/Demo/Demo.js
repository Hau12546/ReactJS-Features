import React from 'react';
import styles from './Demo.module.css';

const Demo = ((props)=>{
	console.log('Re executed');
	return (
		<p>{(props.show && 'This is Re-executed') ||'Not Re-executed'}</p>
	);
});


export default React.memo(Demo);