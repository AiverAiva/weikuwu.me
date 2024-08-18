<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
      <p class="mt-4 text-lg text-gray-700">We're sorry, but an error has occurred. Please try again later.</p>
      <button @click="goBack" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go Back</button>
    </div>
  </div>
</template>

<script setup>
function goBack() {
  window.history.back();
}
</script>