import '../styles/index.scss';
import Recipes  from './Recipes';
import sword from '../images/swc-sword.png';
import swordSvg from '../images/sword.svg';


function App() {
	return (
		<>
			<section className="hero"></section>
			<main>
				<section>
					<h1>SIKTIGMIN KOR MERTI VE FARE EGESI</h1>
				</section>
			</main>
			<img src={sword} alt="sword" width="250" height=""/>
			<img src={swordSvg} alt="sword" width="250" height=""/>
			<Recipes />
		</>
	)
}

export default App
