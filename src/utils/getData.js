 import ky from 'ky';

 const fetchData = async () => {
      try {
        const data = await ky.get(
          URL, {
            retry: {
              limit: 10,
              methods: ['get'],
              statusCodes: [413]
            }
          }).json();
            return data
      
      } catch (e) {
        console.log('problemas en la petición de bogotá, ' + e)
      }
    }
export default fetchData