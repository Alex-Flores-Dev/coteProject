import CardContact from "../card/cardContact";
import './cardContainer.css'

const eslm = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

function CardContainer() {

return (
        <div className="information-card">
            {eslm.map((element,i) =>{
                return <div className="size"><CardContact key={i}></CardContact></div>
            })}
        </div>
    )
}

export default CardContainer;