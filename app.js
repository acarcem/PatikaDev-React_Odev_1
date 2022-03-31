import axios from "axios";

const getData = async (number) => {
    const {data:user} = await axios (`https://jsonplaceholder.typicode.com/users/${number}`)

    const {data:post} = await axios (`https://jsonplaceholder.typicode.com/users/${number}`)

    console.log("User =", user, "Post =", post)
}


export default getData




