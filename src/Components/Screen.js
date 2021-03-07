import "./styles/Screen.css"
function Screen({screenVal, oldCalc}) {


    return(
        <div className="screen">
            <p className="old-calc">{oldCalc}</p>
            <h2 className="result">{screenVal}</h2>
        </div>
    );
}

export default Screen;