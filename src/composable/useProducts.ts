import type { Product } from "@/types";
import { ref } from "vue";
import { mande } from 'mande'

export function useProducts(){
    const productsApi = mande('https://fakestoreapi.com/products');
    const products = ref<Product[]>([]);
    const error = ref<string>("");
    const loading = ref<boolean>(false);

    const loadProducts = async () => {
        loading.value = true;
        try{
          products.value = (await productsApi.get()) as Product[];
        }catch(err:any){
          error.value = err.message;
        }
        loading.value = false;
    }

    return {
        products,
        loading,
        error,
        loadProducts
    }
}