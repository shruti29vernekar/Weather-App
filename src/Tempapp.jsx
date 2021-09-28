import React, {useState, useEffect} from "react";

const Tempapp =() =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect( () => {

        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b696fffcddcbdcc6abe731c96c34e9a6`;
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        };
       fetchApi();

    }, [search] )
    return(
        <>
            <div className="box">
                <div>
                    <input type="search"value={search} onChange={ (event) =>{
                            setSearch(event.target.value)
                        }}>

                    </input>
                </div>

        {!city ? (
            <p>No data Found</p>
        ) :(
            <div>
               <div className="info">
                    <h2 className="location">
                        {search}
                    </h2>
                    <h1>{city.temp} °Cel</h1>
               </div>
            </div>
        )}
        </div>
    </>
    );
}
export default Tempapp;