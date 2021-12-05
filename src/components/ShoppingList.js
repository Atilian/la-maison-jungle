import { plantList } from  "../datas/plantList"

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
                        {plant.isBestSale ? <span> 🔥</span> : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;