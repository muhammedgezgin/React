import locationLogo from '../styles/images/location.svg';


const Content = (props) => {

    return (
        <div id='content'>
            <img id='content-img' src={props.image} />
            <div id='content-info' >
                <div id='content-title'>
                    <img src={locationLogo}/>
                    <h3>{props.country}</h3>
                    <a href={props.map} >View on Google Maps</a>
                </div>
                <h1>{props.head}</h1> 
                <div id='content-text' >
                    <h3>{props.start} - {props.end}</h3>
                    <p>{props.text}</p>
                </div>
            </div>       
        </div>
    )
}

export default Content;