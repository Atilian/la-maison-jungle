import CareScale from "./CareScale"
import "../styles/PlantItem.css"


function handleClick (plantName) {

    alert(`Vous voulez achete ${plantName} ?`)

}


function PlantItem ({ id, cover, name, water, light }) {
    return (
        <li onClick={() => handleClick(name)} className="lmj-plant-item">
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType="water" scaleValue={water}/>
                <CareScale careType="light" scaleValue={light}/>
            </div>
        </li>
    )
}

export default PlantItem