<template>
  <div class="navbar bg-base-100 shadow-xl rounded-box">
    <div class="flex-1">
      <label class="btn btn-ghost btn-circle avatar" for="my-drawer">
        <div class="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
    </div>
    <div class="flex-none">
      <div class="dropdown">
        <label class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
      </div>
    </div>
  </div>

  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-white text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li @click="$emit('logout')"><a>Logout</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>