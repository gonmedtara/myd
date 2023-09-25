<template>
    <van-nav-bar title="New item" left-text="Acceuil" left-arrow @click-left="router.push('/')" />
    <div class="bg-base-300 new-item-container pt-10">
        <div class="">
            <div class="dropdown dropdown-top" h-62>
                <label tabindex="0" class="btn m-1 btn-primary h-62">Picture</label>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Upload picture</a></li>
                    <li><a>Take picture</a></li>
                </ul>
            </div>
            <button class="btn btn-primary h-62" @click="router.push('/new-item')">
                Take picture</button>
            <button class="btn btn-primary h-62" @click="showModal">
                Scan code</button>
        </div>
        <pre>{{
            result }}</pre>
    </div>
    <dialog ref="dialog" class="modal">
        <div class="modal-box">
            <StreamBarcodeReader @result="onResult" @loaded="onLoaded" v-if="dVisible"></StreamBarcodeReader>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn" @click="closeModal">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { StreamBarcodeReader } from "vue-barcode-reader";
import { useBarCode } from '@/composable/useBarCode';

const dialog = ref<HTMLDialogElement>();
const dVisible = ref<boolean>(false);
const name = ref<string>('');
const image = ref<string[]>([]);
const router = useRouter()

const { result, loading: barCodeLoding, lookForBarCode } = useBarCode();

function selectImage() {
    console.log('Select Image');
}

function showModal() {
    dialog.value?.showModal();
    dVisible.value = true;
}

function closeModal() {
    dialog.value?.close();
    dVisible.value = false;
}

function onResult(resultBody: { text: string }) {
    console.log(resultBody)
    lookForBarCode(resultBody.text)
    closeModal()
}

function onLoaded() {
    console.log('onLoaded')
}
</script>

<style scoped>
.new-item-container {
    height: calc(100vh - 46px);
}
</style>