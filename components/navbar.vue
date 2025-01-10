<template>
  <div class="w-full bg-roses-dark h-28">
    <div
      class="mx-4 lg:container h-full lg:mx-auto flex gap-10 justify-between"
    >
      <a href="/">
        <div class="relative w-32 h-32 lg:w-36 lg:h-36">
          <div class="absolute w-full h-full p-3 bg-roses-dark">
            <img
              src="https://assets-cdn.sums.su/YU/website/img/Roses/Roses_mark_Navigation.png"
              class="w-full h-full aspect-square"
              alt="Roses Live"
            />
          </div>
        </div>
      </a>
      <div
        class="hidden lg:flex flex-grow max-w-3xl items-center justify-between text-white font-semibold"
      >
        <template v-for="link in links" :key="link.name">
          <a v-if="!link.hidden" :href="link.href">{{ link.name }}</a>
        </template>
      </div>
      <div class="hidden lg:flex w-48 items-center">
        <a href="https://yorksu.org/">
          <img
            src="https://assets-cdn.sums.su/YU/website/img/yorksu-logo-white-full.png"
            class="w-full h-fit"
            alt="University of York Students' Union"
          />
        </a>
      </div>
      <div class="lg:hidden flex items-center">
        <button
          class="text-white"
          aria-label="Open navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i class="fa-solid fa-bars text-4xl"></i>
        </button>
      </div>
    </div>
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-28 w-full bg-roses-dark"
    >
      <hr class="border-zinc-600 mt-6 mx-6" />
      <div class="container mx-auto flex flex-col gap-10">
        <div class="flex flex-col items-center gap-4 pt-6 text-white">
          <template v-for="link in links" :key="link.name">
            <a v-if="!link.hidden" :href="link.href">{{ link.name }}</a>
          </template>
        </div>
        <div class="flex justify-center items-center pb-8">
          <img
            src="https://assets-cdn.sums.su/YU/website/img/yorksu-logo-white-full.png"
            class="w-full max-w-40"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
      links: [
        { name: "Roses Live", href: "/", hidden: true },
        { name: "Fixtures", href: "/", hidden: true },
        { name: "Get Involved", href: "/", hidden: false },
        { name: "About", href: "/", hidden: false },
        { name: "Food & Drink", href: "/", hidden: false },
        { name: "Shop", href: "/", hidden: false },
        { name: "Map", href: "/", hidden: false },
      ],
    };
  },
};
</script>
