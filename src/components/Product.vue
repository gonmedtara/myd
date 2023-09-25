<template>
    <div class="card w-96 bg-base-100 shadow-xl mt-4">
        <figure><img :src="product.image" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ product.title }}
                <div class="badge badge-secondary">{{ product.category }}</div>
            </h2>
            <p>{{ product.description }}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    {{ product.price }}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types";
import { toRefs } from "vue";

const props = defineProps<{
    product: Product,
}>()

const { product } = toRefs(props)

</script>

<style lang="scss" scoped></style>