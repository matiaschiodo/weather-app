import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

	const [search, setSearch] = useState({
        ciudad: '',
        pais: '',
    })
	const [query, setQuery] = useState(false)
	const [result, setResult] = useState({})
	const [error, setError] = useState(false)

    const { ciudad, pais } = search

	useEffect(() => {
		const queryAPI = async () => {
			if(query) {
				const appId = '4a6ed392ff69313225431b78760fcd7a'
				const url= `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

				const res = await fetch(url)
				const result = await res.json()

				setResult(result);
				setQuery(false);

				if(result.cod === '404') {
					setError(true)
				} else {
					setError(false)
				}
			}
		}
		queryAPI();
		// eslint-disable-next-line
	}, [query])

	let component
	if(error) {
		component = <Error message="City not found"/>
	} else {
		component = <Clima
						result={result}
					/>
	}

    return (
        <>
			<Header
				title='Weather React App'
			/>

			<div className='contenedor-form'>
				<div className='container'>
					<div className='row'>
						<div className='col m6 s12'>
							<Formulario
								search={search}
								setSearch={setSearch}
								setQuery={setQuery}
							/>
						</div>
						<div className='col m6 s12'>
							{component}
						</div>
					</div>
				</div>
			</div>
		</>
    );
}

export default App;
