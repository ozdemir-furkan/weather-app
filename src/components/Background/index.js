import TakePicture from "./TakePicture";
function index ({ background }) {
    return(
        <div className="background">
            <div className="overlay"></div>
            <TakePicture situation={background}/>
        </div>       
    );
}
export default index;