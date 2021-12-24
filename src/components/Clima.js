import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherShower, TiWeatherStormy, TiWeatherDownpour } from "react-icons/ti"
import { BsCloudHaze, BsPersonFill } from "react-icons/bs"
import PropTypes from "prop-types"

const Clima = ({ result }) => {

    const { name, main, weather } = result

    if(!name) return null

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name}</h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(1) } <span> &#x2103; </span>
                </p>
                <h3>
                    { weather[0].main === 'Clear' && <TiWeatherSunny/> }
                    { weather[0].main === 'Clouds' && <TiWeatherCloudy/> }
                    { weather[0].main === 'Rain' && <TiWeatherDownpour/> }
                    { weather[0].main === 'Drizzle' && <TiWeatherShower/> }
                    { weather[0].main === 'Storm' && <TiWeatherStormy/> }
                    { weather[0].main === 'Haze' && <BsCloudHaze/> }
                    { weather[0].main }
                </h3>
                <div className="flex">
                    <p>
                        <AiOutlineArrowUp/>
                        { parseInt(main.temp_max - kelvin, 10) } <span> &#x2103; </span>
                    </p>
                    <p>
                        <AiOutlineArrowDown/>
                        { parseInt(main.temp_min - kelvin, 10) } <span> &#x2103; </span>
                    </p>
                    <p>
                        <BsPersonFill/>
                        { parseInt(main.feels_like - kelvin, 10) } <span> &#x2103; </span>
                    </p>
                </div>
                <div className="flex">
                    <div className="details">
                        <p>Pressure</p>
                        <span>{ parseFloat(main.pressure, 10) } hPa</span>
                    </div>
                    <div className="details">
                        <p>HUM</p>
                        <span>{ parseInt(main.humidity, 10) }%</span>
                    </div>
                    <div className="details">
                        <p>Visibility</p>
                        <span>{ (main.visibility, 10).toFixed(2) }km</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

Clima.propTypes = {
    result: PropTypes.object.isRequired
}

export default Clima;