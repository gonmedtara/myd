<template>
  <div class="home-container">
    <van-tabs v-model:active="activeName" swipeable>
      <van-tab title="home" name="home" class="bg-base-300">
        <Header @logout="logout" :user="user" />
        <van-floating-panel>
          <div class="grid grid-cols-2 gap-4 pr-5 pl-5">
            <button class="btn btn-primary h-62"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Inspiration</button>
            <button class="btn btn-primary h-62" @click="router.push('/new-item')"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Add item</button>
            <button class="btn btn-primary h-62"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Total</button>
            <button class="btn btn-primary h-62"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Rent</button>
          </div>
          <div class="grid grid-cols-16 gap-16 pr-5 pl-5 mt-4">
            <button class="btn btn-primary h-62"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              Show all clothes</button>
          </div>
        </van-floating-panel>
      </van-tab>
      <van-tab title="store" name="store" class="bg-base-300">
        <van-pull-refresh pulling-text=" " loading-text=" " success-text=" " loosing-text=" " v-model="loading"
          @refresh="loadProducts">
          <Product v-for="product in products" :key="product.id" :product="product" />
          <van-back-top />
        </van-pull-refresh></van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import Header from "@/components/Header.vue"
import Product from "@/components/Product.vue"
import { ref } from 'vue';
import { useProducts } from '@/composable/useProducts';

const auth = useFirebaseAuth()!;
const user = useCurrentUser();
const router = useRouter()
const activeName = ref<string>('home');

const { products,
  loading,
  error: productError,
  loadProducts } = useProducts();

loadProducts();

function logout() {
  signOut(auth).then(() => { router.push('/login') }).catch((error: string) => {
    console.error(error)
  });
}

</script>

<style scoped>
.h-62 {
  height: 62px;
}

:deep .van-tabs__content {
  height: 100vh;
}

:deep .van-tabs__wrap {
  display: none;
}

:deep .van-tabs__nav {
  display: none;
}

:deep .van-pull-refresh {
  height: 100vh;
  overflow-y: auto;
}
</style>