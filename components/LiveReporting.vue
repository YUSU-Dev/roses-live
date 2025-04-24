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
            {{ stream.fixture.sport }}
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
    <div class="flex flex-col gap-5 flex-grow md:w-7/10">
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
          <div
            v-if="activeStream.content === 'youtube'"
            class="aspect-video w-full"
          >
            <iframe
              width="100%"
              height="100%"
              :src="'https://www.youtube.com/embed/' + activeStream.id"
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
            @click="
              activeReporting === 'blogs'
                ? [getBlogs(), (page = 1)]
                : [getPhotos(), (photosPage = 1)]
            "
          >
            <i class="fa-solid fa-arrows-rotate text-2xl"></i>
          </button>
        </div>
        <div class="flex flex-col">
          <div class="flex gap-2">
            <button
              class="bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer"
              :class="{
                '!bg-black !text-white': activeReporting === 'blogs',
              }"
              @click="[getBlogs(), (page = 1)]"
            >
              Blogs
            </button>
            <button
              class="bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer"
              :class="{
                '!bg-black !text-white': activeReporting === 'photos',
              }"
              @click="[getPhotos(), (photosPage = 1)]"
            >
              Photos
            </button>
            <button
              class="bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer"
              :class="{
                '!bg-black !text-white': activeReporting === 'scores',
              }"
              @click="activeReporting = 'scores'"
            >
              Scores
            </button>
          </div>
          <div v-if="activeReporting === 'blogs'" class="flex flex-col">
            <div v-if="blogs.length !== 0">
              <a
                v-for="(blog, index) in blogs"
                :key="index"
                :href="'/activities/' + blog.fixture.sportSlug"
                class="flex not-last:border-b-2 py-6 gap-6"
              >
                <div class="flex flex-col">
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
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No blogs available</p>
            </div>
          </div>
          <div v-if="activeReporting === 'photos'" class="flex flex-col">
            <div v-if="photos.length !== 0">
              <a
                v-for="(photo, index) in photos"
                :key="index"
                :href="'/activities/' + photo.fixture.sportSlug"
                class="flex not-last:border-b-2 py-6 gap-6"
              >
                <div class="flex flex-col gap-4 w-full">
                  <div class="flex gap-4 items-center">
                    <p class="text-4xl xcond font-bold text-roses-red">
                      {{ formatTime(photo.publishedAt) }}
                    </p>
                    <div class="flex flex-col">
                      <h3 class="text-xl font-bold">
                        {{ photo.fixture.sport }} - {{ photo.fixture.name }}
                      </h3>
                      <p>{{ photo.caption }}</p>
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <img
                      :src="
                        'https://roses-media-assets-staging.yorksu.org/' +
                        photo.fileName
                      "
                      class=""
                      :alt="photo.altText"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No photos available</p>
            </div>
          </div>
          <div v-if="activeReporting === 'scores'" class="flex flex-col">
            <div v-if="scores.length !== 0">
              <a
                v-for="(score, index) in scores"
                :key="index"
                :href="'/activities/' + score.fixture.sportSlug"
                class="flex not-last:border-b-2 py-6 gap-6"
              >
                <div class="flex flex-col"></div>
              </a>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No score updates available</p>
            </div>
          </div>
        </div>
        <div v-if="activeReporting === 'blogs'" class="flex gap-1">
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
            v-for="i in paginationRange('blogs')"
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
        <div v-if="activeReporting === 'photos'" class="flex gap-1">
          <button
            v-if="photosPage > 3"
            aria-label="Go back to the first page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="photosPage = 1"
          >
            <i class="fa-solid fa-angles-left"></i>
          </button>
          <button
            v-if="photosPage > 1"
            aria-label="Go back one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="photosPage--"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            v-for="i in paginationRange('photos')"
            :key="i"
            :class="{ '!bg-roses-red text-white': i === photosPage }"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="photosPage = i"
          >
            {{ i }}
          </button>
          <button
            v-if="photosPage < totalPhotoPages"
            aria-label="Go forward one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="photosPage++"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button
            v-if="totalPhotoPages > 3 && photosPage < totalPhotoPages - 2"
            aria-label="Go to the last page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="photosPage = totalPages"
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
      photos: [],
      scores: [],
      pageSize: 8,
      page: 1,
      photosPage: 1,
      photosPageSize: 8,
      scoresPage: 1,
      scoresPageSize: 8,
      totalPages: 1,
      totalPhotoPages: 1,
      totalScoresPages: 1,
      accordionOpen: true,
      activeStream: {},
      activeReporting: "blogs",
    };
  },
  watch: {
    page() {
      this.getBlogs();
    },
    photosPage() {
      this.getPhotos();
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
      this.streams = response;
      const rosesTrailer = {
        id: "S_F-QjAy2Rg",
        fixture: {
          sport: "Roses Trailer",
          name: "Roses Trailer",
        },
        content: "youtube",
      };
      this.streams.unshift(rosesTrailer);
      this.activeStream = rosesTrailer;
    },
    async getBlogs() {
      this.activeReporting = "blogs";
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
    async getPhotos() {
      this.activeReporting = "photos";
      let parameters = "";
      if (this.photosPageSize) {
        parameters += `?pageSize=${this.photosPageSize}`;
      }
      if (this.photosPage) {
        parameters += `&page=${this.photosPage}`;
      }
      const response = await $fetch(
        "https://media-dashboard-staging.yorksu.org/api/cm5pijvl80000ltigazjog2kg/seasons/cm7w42e0x0001nr01mlt1ptmi/photos" +
          parameters,
      );
      this.photos = response.data;
      this.totalPhotoPages = response.pageInfo.totalPages;
    },
    // async getScores() {
    //   const response = await $fetch(
    //     "https://media-dashboard-staging.yorksu.org/api/cm5pijvl80000ltigazjog2kg/seasons/cm7w42e0x0001nr01mlt1ptmi/scores",
    //   );
    //   this.scores = response.data;
    // },
    formatTime(isoString) {
      const date = new Date(isoString);
      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    paginationRange(reportingType) {
      const range = [];
      let page;
      let totalPages;
      if (reportingType === "blogs") {
        page = this.page;
        totalPages = this.totalPages;
      } else if (reportingType === "photos") {
        page = this.photosPage;
        totalPages = this.totalPhotoPages;
      }
      if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) {
          range.push(i);
        }
      } else if (page === 1) {
        range.push(1, 2, 3);
      } else if (page === totalPages) {
        range.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(page - 1, page, page + 1);
      }
      return range.filter((i) => i > 0 && i <= totalPages);
    },
  },
};
</script>
