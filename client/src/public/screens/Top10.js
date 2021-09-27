import { useEffect, useState } from "react"

export default function TopRestaurants(){
    const [topRes, setTopRes] = useState('')

    useEffect(()=>{
        fetch("/toprestaurants")
        .then(res => res.json())
        .then(data => setTopRes(data))
    }, [])
    
    return(<>
        top Restaurants 
    </>)
}