import './styles/index.scss';


const elvenShiledRecipe = {
	leatherStrips: 2,
	ironIngot:1,
	refineMoonstone:4
}

const test = {
	...elvenShiledRecipe,
	leathger: 1,
	refineMoonstone: 4
}

console.log(elvenShiledRecipe);
console.log(test)