<template>
  <div class="private-container">
    <div class="private-container__header  items-center flex justify-between"><img class="logo"
        src="../../assets/logo.png" /> <button class="btn glass btn-outline btn-success btn-sm">Login</button></div>
    <div class="h-screen flex items-center justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="font-bold text-center">Reset password</h2>
          <p class="text-center	font-light">Merci de mettre votre e-mail</p>
          <input type="text" placeholder="E-mail" class="input input-bordered w-full input-sm max-w-xs" />
          <div class="flex items-center justify-center">
            <div class="card-actions flex items-center justify-center">
              <button class="btn btn-outline btn-success btn-sm">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>