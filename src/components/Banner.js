import logo from "../assets/leaf.png"
import "../styles/Banner.css"

function t () {
    alert("test")
}

function Banner () {

    const title = "La maison jungle";

    return (
        <div className="lmj-banner">
            <img src={ logo } alt={ title } className="lmj-logo"/>
            <h1 className="lmj-title">La maison jungle</h1>
        </div>
    )
}

export default Banner;