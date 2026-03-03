<template>
  <div class="min-h-[80vh] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        League Not Found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link to="/"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
          Go back home
        </router-link>
        <a href="mailto:support@sportygroup.com" class="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
</template>