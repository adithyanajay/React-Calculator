
import "./styles/Buttons.css"
function Buttons ({updateText, updateSym, clear, result, symbol}) {

        


        return(
                <div className="button-cont">
                
                        <button className="light-grey-button" onClick={clear}>C</button>
                        <button className="light-grey-button" onClick={symbol}>+/-</button>
                        <button className="light-grey-button" onClick={updateSym} value="">%</button>
                        <button className="orange-button"     onClick={updateSym} value="/">÷</button>
                
                
                        <button className="dark-grey-button" onClick={updateText}>7</button>
                        <button className="dark-grey-button" onClick={updateText}>8</button>
                        <button className="dark-grey-button" onClick={updateText}>9</button>
                        <button className="orange-button"    onClick={updateSym} value="*">×</button>
                
                        <button className="dark-grey-button" onClick={updateText}>4</button>
                        <button className="dark-grey-button" onClick={updateText}>5</button>
                        <button className="dark-grey-button" onClick={updateText}>6</button>
                        <button className="orange-button"    onClick={updateSym} value="-">-</button>
                
                        <button className="dark-grey-button" onClick={updateText}>1</button>
                        <button className="dark-grey-button" onClick={updateText}>2</button>
                        <button className="dark-grey-button" onClick={updateText}>3</button>
                        <button className="orange-button"    onClick={updateSym} value="+">+</button>
                
                        <button className="dark-grey-button zero-btn" onClick={updateText}>0</button>
                        <button className="dark-grey-button"          onClick={updateText}>.</button>
                        <button className="orange-button"             onClick={result}>=</button>
                
                </div>    
        );
}

export default Buttons