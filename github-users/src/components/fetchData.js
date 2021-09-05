import axios from "axios";

const fetchData = (name) => {
    return (
        axios.get(`https://api.github.com/users/${name}`)
            .then(res => res)
            .catch(err => {
                console.log(err)
            })
    );
}
 
export default fetchData;