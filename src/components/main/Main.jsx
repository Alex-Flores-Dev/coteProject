import Navbar from "../Navbar/Navbar";
import Seeker from "../Seeker/Seeker";
import Options from "../Options/Options";
import CardContainer from "../cardContainer/cardContainer";
import './Main.css'

function Main() {
    return ( 
        <div>
            <Navbar></Navbar>
            <Seeker></Seeker>
            <div className="main-results">
                <div className="options">
                <Options />
                </div>
                <div className="card-container">
                <CardContainer />
                </div>
            </div>
        </div>
     );
}

export default Main;