import "../styles/ShoppingList.css"
import { plantList } from  "../datas/plantList"
import PlantItem from "./PlantItem"


function ShoppingList () {

    let categories = [];
    plantList.forEach(e => (
        categories.includes(e.category) ? categories : categories.push(e.category)
    ))

    return (
        <div>
            <ul>
                {categories.map(plant => (
                    <li key={plant}>{plant}</li>
                ))}
            </ul>
            <ul>
                {plantList.map(({id, cover, name, water, light}) => (
                    <PlantItem key={id}
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;