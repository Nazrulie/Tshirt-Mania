import { useEffect, useState } from "react"

const useTshirt = () => {
    const [tshirts, setTshirt] = useState([])
    useEffect(() => {
        fetch('tshirt.json')
            .then(res => res.json())
            .then(data => setTshirt(data))
    }, []);
    return [tshirts, setTshirt]
}

export default useTshirt;