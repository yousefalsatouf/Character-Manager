import axios from "axios";

axios('https://character-database.becode.xyz/characters').then(response =>{
    console.log(response.data);
});