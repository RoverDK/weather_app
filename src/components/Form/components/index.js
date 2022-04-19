import "../styles/index.css"

export function FormLayout({city, handleChange, getWeather}) {
    return (
        <>
            <div className="input">
                <input type="text" value={city} onChange={handleChange} />
                <button onClick={getWeather}>Search</button>
            </div>
        </>
    )
}