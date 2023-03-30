/* instalar axios para hacer llamados externos */
import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("success!!")
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("Erroe!!")
    console.log(error);
  });
