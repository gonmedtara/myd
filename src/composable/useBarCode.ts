
import { ref } from "vue";

export function useBarCode(){
    const result = ref({});
    const loading = ref(false);

    async function lookForBarCode(barCode:string){
        const url = `https://barcode-lookup.p.rapidapi.com/v3/products?barcode=${barCode}` ;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4f7d5bfed8msh1bd12473dfb4af5p18f9c4jsn1e9837e3cd9c',
                'X-RapidAPI-Host': 'barcode-lookup.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            result.value = await response.text();
            loading.value = false;
        } catch (error) {
            loading.value = false;
        }
    }

    return {
        result,
        loading,
        lookForBarCode
    }
}