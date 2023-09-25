<template>
  <div class="private-container">
    <div class="private-container__header  items-center flex justify-between"><img class="logo"
        src="../../assets/logo.png" /> <button class="btn glass btn-outline btn-success btn-sm"
        @click="goSignUp">Signup</button></div>
    <div class="h-screen flex items-center justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="font-bold text-center">Login</h2>
          <p class="text-center	font-light">Merci de mettre votre e-mail et password</p>
          <div class="form-control w-full max-w-xs">
            <input :class="{ 'input-error': errors.email !== undefined }" ype="text" placeholder="E-mail"
              class="input input-bordered w-full input-sm max-w-xs" v-model="email" v-bind="emailAttrs" />
            <label class="label" v-show="errors.email !== undefined">
              <span class="label-text-alt text-error">{{ errors.email }}</span>
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <input :class="{ 'input-error': errors.password !== undefined }" type="password" placeholder="Password"
              class="input input-bordered w-full input-sm max-w-xs" v-model="password" v-bind="passwordAttrs" />
            <label class="label" v-show="errors.password !== undefined">
              <span class="label-text-alt text-error">{{ errors.password }}</span>
            </label>
          </div>
          <div class="flex items-center justify-center">
            <div class="card-actions flex items-center justify-center">
              <button :disabled="!validForm" class="btn btn-outline btn-success btn-sm"
                @click="handleSubmit">Login</button>
            </div>
          </div>
          <button class="btn btn-link">Reset password</button>
          <div class="divider">ou</div>
          <div v-if="signInError" class="text-error">{{ signInError }}</div>
          <div class="flex items-center justify-center">
            <button class="btn btn-square" @click="googleAuth">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SignInForm {
  email: string,
  password: string,
}
import { computed, ref, watch } from 'vue';
import { useForm } from '@vorms/core';
import { useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword, type Auth, type UserCredential } from 'firebase/auth';
import { useGoogleAuth } from "@/composable/useGoogleAuth.ts"
import { useRouter } from 'vue-router';

const auth = useFirebaseAuth() as Auth
const signInError = ref<string>()
const router = useRouter()

const { register, errors, handleSubmit, validateField } = useForm({
  initialValues: {
    email: '',
    password: '',
  } as SignInForm,
  onSubmit() {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        router.push('/')
        console.log(user)
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        signInError.value = error.message;
      });
  },
});

const { value: email, attrs: emailAttrs } = register('email', {
  validate(value: string) {
    if (!value.length) return 'Email is required!';
    if (!String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) return 'Bad email';
  },
});
const { value: password, attrs: passwordAttrs } = register('password', {
  validate(value: string) {
    if (!value.length) return 'Password is required!';
    if (value.length < 8) return 'Password minimun length is 8!';
  },
});

const validForm = computed(() => { return errors.email === undefined && errors.password === undefined && email.value.length && password.value.length })

watch(email, () => {
  validateField('email');
});

watch(password, () => {
  validateField('password');
});

async function googleAuth() {
  const { user, error } = await useGoogleAuth();
  if (user.value) {
    router.push('/')
  }
  if (error.value) {
    signInError.value = error.value
  }
}

function goSignUp() {
  router.push('/signup')
}

</script>

<style scoped></style>