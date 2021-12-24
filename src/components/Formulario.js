import React, { useState } from 'react';
import Error from './Error';
import PropTypes from "prop-types"

const Formulario = ({ search, setSearch, setQuery }) => {

    const [error, setError] = useState(false);

    const { ciudad, pais } = search

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setQuery(true)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error message="All fields are required"/>}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">City: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=""> -- Seleccione un país -- </option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">Spain</option>
                </select>
                <label htmlFor="pais">Country: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired
}

export default Formulario;