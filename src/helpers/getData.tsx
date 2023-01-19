import axios from "axios";

export const getData = async (method:string) => {

    const resp = await axios.post('http://cotizador-backend.test/'+method)
    .then(function (response) {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    const { data }:any = await resp

    return data;

}