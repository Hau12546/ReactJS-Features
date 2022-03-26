import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css'
const MainNavigation = (()=>{
	return (<>
		<header className={styles['header']}>
			<div className={styles['logo']}>Great Logo</div>
				<nav className={styles['nav']}>
					<ul>
						<li><NavLink to='/qoute-list' className={styles['active']}>All Qoutes</NavLink></li>
						<li><NavLink to='/qoute-comment' className={styles['active']}>New Qoute</NavLink></li>
					</ul>
				</nav>
		</header>
	</>)
});

export default MainNavigation;