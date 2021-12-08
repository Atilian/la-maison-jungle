import "../styles/ShoppingList.css"
import { plantList } from  "../datas/plantList"
import CareScale from "./CareScale";

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
                {plantList.map((plant) => (
                    <li key={`${plant.id}`}>
                        {plant.name}
                        {plant.isSpecialOffer ? <div className="lmj-sales">SOLDE</div> : null}
                        <CareScale careType="light" scaleValue={plant.light}/>
                        <CareScale careType="water" scaleValue={plant.light}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;