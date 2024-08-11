
import { useState } from "react";
import Search from "../search"

export default function Weather(){

    const[search,setSearch] = useState('');
    const[loading,setLoading] = useState(false);
    const[weatherData,setweatherData]= useState(null);

    async function fetchWeatherData(param){
        setLoading(true);
        try{
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f6e8392d478d66e3d7ffcbc63289c58d`
              );

            const data = await response.json();
            console.log(data,'data');
        }
        catch(e){
            console.log(e); 
        }
    }
     
    async function handleSearch(){
       fetchWeatherData(search)
    }
    return <div>
        <Search 
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />
        Weather
    </div>
}