<template>
  <div class="bg-light-gray w-full">
    <div
      class="container mx-auto py-14 md:py-28 flex flex-col gap-10 justify-center items-center"
    >
      <h2 class="font-bold xcond text-5xl text-center">
        A WEEKEND OF SPORTING RIVALRY
      </h2>
      <div class="grid sm:grid-cols-2 lg:flex lg:flex-row text-white gap-4">
        <a
          href="/fixtures"
          class="relative flex flex-col justify-end overflow-hidden bg-black"
        >
          <div
            class="absolute flex w-full justify-between items-center px-6 pb-8 z-10"
          >
            <h3 class="font-bold xcond text-4xl">FIXTURES</h3>
            <i class="fa-solid fa-arrow-right text-roses-red text-2xl"></i>
          </div>
          <NuxtImg
            class="hover:scale-105 transition-all"
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Shop_Tile.png"
            alt="Fixtures"
            width="230px"
            height="fit-content"
          />
        </a>
        <a
          href="/get-involved"
          class="relative flex flex-col justify-end overflow-hidden bg-black"
        >
          <div
            class="absolute flex w-full justify-between items-center px-6 pb-8 z-10"
          >
            <h3 class="font-bold xcond text-4xl">GET INVOLVED</h3>
            <i class="fa-solid fa-arrow-right text-roses-red text-2xl"></i>
          </div>
          <NuxtImg
            class="hover:scale-105 transition-all"
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Get_Involved_Tile.png"
            alt="Get Involved"
            width="230px"
            height="fit-content"
          />
        </a>
        <a
          href="/food-and-drink"
          class="relative flex flex-col justify-end overflow-hidden bg-black"
        >
          <div
            class="absolute flex w-full justify-between items-center px-6 pb-8 z-10"
          >
            <h3 class="font-bold xcond text-4xl">FOOD & DRINK</h3>
            <i class="fa-solid fa-arrow-right text-roses-red text-2xl"></i>
          </div>
          <NuxtImg
            class="hover:scale-105 transition-all"
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Food_Drink_Tile.png"
            alt="Food & Drink"
            width="230px"
            height="fit-content"
          />
        </a>
        <a
          class="relative flex flex-col justify-end overflow-hidden bg-black"
          href="https://go.yorksu.org/pQ16Z8l"
          target="_blank"
        >
          <div
            class="absolute flex w-full justify-between items-center px-6 pb-8 z-10"
          >
            <h3 class="font-bold xcond text-4xl">SHOP</h3>
            <i class="fa-solid fa-arrow-right text-roses-red text-2xl"></i>
          </div>
          <NuxtImg
            class="hover:scale-105 transition-all"
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Fixtures_Tile.png"
            alt="Shop"
            width="230px"
            height="fit-content"
          />
        </a>
      </div>
    </div>
  </div>
</template>
