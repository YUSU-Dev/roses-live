<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex flex-col md:flex-row gap-5">
    <div class="flex flex-col bg-light-gray p-8 md:w-3/10 gap-10 h-fit">
      <div class="flex flex-col gap-6 order-2 md:order-1">
        <h2 class="text-4xl xcond font-bold">LIVE STREAMS</h2>
        <div class="flex flex-wrap md:flex-col gap-2 w-fit">
          <button
            v-for="stream in streams"
            :key="stream.id"
            :class="[
              'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer',
              { '!bg-black !text-white': activeStream.id === stream.id },
            ]"
            @click="((activeStream = stream), (accordionOpen = true))"
          >
            <p>{{ stream.fixture.sport }}</p>
            <p v-if="stream.fixture.name">{{ stream.fixture.name }}</p>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-6 order-1 md:order-2">
        <h2 class="text-4xl xcond font-bold">MISSED THE ACTION?</h2>
        <p>Find all of our past streams on the catch up page!</p>
        <div class="flex">
          <RosesButton href="/" target="_blank" title="Catch Up" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 flex-grow md:max-w-7/10">
      <div class="flex flex-col bg-light-gray p-8 gap-4">
        <div class="flex justify-between items-center">
          <h2 class="text-5xl xcond font-bold">LIVE STREAM</h2>
          <button
            aria-label="Toggle livestream"
            class="hover:cursor-pointer p-2"
            @click="accordionOpen = !accordionOpen"
          >
            <i
              v-if="accordionOpen === false"
              class="fa-solid fa-chevron-down text-2xl"
            ></i>
            <i v-else class="fa-solid fa-chevron-up text-2xl"></i>
          </button>
        </div>
        <div v-if="accordionOpen" class="flex flex-col gap-6">
          <div v-if="activeStream.content" class="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              :src="
                'https://www.youtube-nocookie.com/embed/' + activeStream.content
              "
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <!-- <div class="flex flex-col gap-2">
            <p class="text-2xl font-bold">
              {{ activeStream.fixture.sport }}
            </p>
            <p class="text-xl font-semibold">
              Listen to the live radio stream here!
            </p>
            <iframe
              controls
              title="Live Radio Stream"
              src="https://radio.roses.media/embed/stream/test-stream-01"
            ></iframe>
          </div> -->
        </div>
      </div>
      <div class="flex flex-col bg-light-gray p-8 gap-10">
        <div class="flex justify-between items-center">
          <h2 class="text-5xl xcond font-bold">LIVE REPORTING</h2>
          <button
            aria-label="Refresh"
            class="hover:cursor-pointer p-2"
            @click="page = 1"
          >
            <i class="fa-solid fa-arrows-rotate text-2xl"></i>
          </button>
        </div>
        <div class="flex flex-col">
          <a
            v-for="(blog, index) in blogs"
            :key="index"
            :href="'/activities/' + blog.fixture.sportSlug"
            class="flex not-last:border-b-2 py-6 gap-6"
          >
            <div class="flex flex-col">
              <!-- <p class="xcond font-semibold text-2xl">
              {{ formatDay(blog.publishedAt) }}
            </p> -->
              <p class="text-4xl xcond font-bold text-roses-red">
                {{ formatTime(blog.publishedAt) }}
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-bold">
                {{ blog.fixture.sport }} - {{ blog.fixture.name }}
              </h3>
              <div v-html="blog.content"></div>
            </div>
          </a>
        </div>
        <div class="flex gap-1">
          <button
            v-if="page > 3"
            aria-label="Go back to the first page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="page = 1"
          >
            <i class="fa-solid fa-angles-left"></i>
          </button>
          <button
            v-if="page > 1"
            aria-label="Go back one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="page--"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            v-for="i in paginationRange"
            :key="i"
            :class="{ '!bg-roses-red text-white': i === page }"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="page = i"
          >
            {{ i }}
          </button>
          <button
            v-if="page < totalPages"
            aria-label="Go forward one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="page++"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button
            v-if="totalPages > 3 && page < totalPages - 2"
            aria-label="Go to the last page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="page = totalPages"
          >
            <i class="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RosesButton from "~/components/button.vue";
export default {
  components: {
    RosesButton,
  },
  data() {
    return {
      blogs: [],
      streams: [],
      pageSize: 8,
      page: 1,
      totalPages: 1,
      accordionOpen: true,
      activeStream: {},
    };
  },
  computed: {
    paginationRange() {
      const range = [];
      if (this.totalPages <= 3) {
        for (let i = 1; i <= this.totalPages; i++) {
          range.push(i);
        }
      } else if (this.page === 1) {
        range.push(1, 2, 3);
      } else if (this.page === this.totalPages) {
        range.push(this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        range.push(this.page - 1, this.page, this.page + 1);
      }
      return range.filter((i) => i > 0 && i <= this.totalPages);
    },
  },
  watch: {
    page() {
      this.getBlogs();
    },
  },
  mounted() {
    this.getStreams();
    this.getBlogs();
  },
  methods: {
    async getStreams() {
      const response = await $fetch(
        "https://media-dashboard-staging.yorksu.org/api/cm5pijvl80000ltigazjog2kg/seasons/cm7w42e0x0001nr01mlt1ptmi/coverage",
      );

      // Check if the content contains "embed" and extract the video ID accordingly
      this.streams = response.map((stream) => {
        let videoId = null;
        if (stream.content) {
          if (stream.content.includes("embed")) {
            // Extract video ID from embed URL
            videoId = stream.content.replace(
              /.*\/embed\/([\w-]+)(?:\?.*)?$/,
              "$1",
            );
          } else {
            // Extract video ID from other YouTube URL formats
            videoId = stream.content.replace(/.*[/=]([\w-]+)(?:\?.*)?$/, "$1");
          }
        }
        return {
          id: stream.id,
          fixture: stream.fixture,
          content: videoId,
        };
      });

      const rosesTrailer = {
        id: "roseTrailer",
        fixture: {
          sport: "Roses Trailer",
        },
        content: "S_F-QjAy2Rg",
      };
      this.streams.unshift(rosesTrailer);
      this.activeStream = rosesTrailer;
    },
    async getBlogs() {
      let parameters = "";
      if (this.pageSize) {
        parameters += `?pageSize=${this.pageSize}`;
      }
      if (this.page) {
        parameters += `&page=${this.page}`;
      }
      const response = await $fetch(
        "https://media-dashboard-staging.yorksu.org/api/cm5pijvl80000ltigazjog2kg/seasons/cm7w42e0x0001nr01mlt1ptmi/blogs" +
          parameters,
      );
      this.blogs = response.data;
      this.totalPages = response.pageInfo.totalPages;
    },
    formatTime(isoString) {
      const date = new Date(isoString);
      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    formatDay(isoString) {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-GB", {
        weekday: "long",
      });
    },
  },
};
</script>
