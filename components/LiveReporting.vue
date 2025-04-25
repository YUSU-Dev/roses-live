<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex flex-col md:flex-row gap-5">
    <div class="flex flex-col bg-light-gray p-8 md:w-3/10 gap-10 h-fit">
      <div class="flex flex-col gap-6 order-2 md:order-1">
        <h2 class="text-4xl xcond font-bold">
          <span v-if="!catchup">LIVE </span>STREAMS
        </h2>
        <div class="flex flex-wrap md:flex-col gap-2 w-fit">
          <button
            v-for="stream in streams"
            :key="stream.id"
            :class="[
              'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer flex flex-row gap-1 md:gap-0 md:flex-col',
              { '!bg-black !text-white': activeStream.id === stream.id },
            ]"
            @click="((activeStream = stream), (accordionOpen = true))"
          >
            <p>{{ stream.fixture.sport }}</p>
            <p v-if="stream.fixture.name">{{ stream.fixture.name }}</p>
          </button>
        </div>
      </div>
      <!-- <div v-if="!catchup" class="flex flex-col gap-6 order-1 md:order-2">
        <h2 class="text-4xl xcond font-bold">MISSED THE ACTION?</h2>
        <p>Find all of our past streams on the catch up page!</p>
        <div class="flex">
          <RosesButton href="/" target="_blank" title="Catch Up" />
        </div>
      </div> -->
    </div>
    <div class="flex flex-col gap-5 flex-grow md:w-7/10">
      <div class="flex flex-col bg-light-gray p-8 gap-4">
        <div class="flex justify-between items-center">
          <h2 v-if="!catchup" class="text-5xl xcond font-bold">LIVE STREAM</h2>
          <h2 v-else class="text-5xl xcond font-bold">CATCH UP</h2>
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
            v-if="
              activeStream.coverage === 'TVCoverage' && activeStream.content
            "
            class="aspect-video w-full"
          >
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
              credentialless
            ></iframe>
          </div>
          <div
            v-if="activeStream.coverage === 'RadioCoverage'"
            class="h-50 w-full"
          >
            <iframe
              width="100%"
              height="100%"
              :src="'https://radio.roses.media/embed/stream/' + activeStream.id"
              title="Live Radio Stream"
              frameborder="0"
              credentialless
            ></iframe>
          </div>
        </div>
      </div>
      <div v-if="!catchup" class="flex flex-col bg-light-gray p-8 gap-10">
        <div class="flex justify-between items-center">
          <h2 class="text-5xl xcond font-bold">LIVE REPORTING</h2>
          <button
            aria-label="Refresh"
            class="hover:cursor-pointer p-2"
            @click="refreshCoverage"
          >
            <i class="fa-solid fa-arrows-rotate text-2xl"></i>
          </button>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-wrap gap-2">
            <button
              class="bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer"
              :class="{
                '!bg-black !text-white': activeReporting === 'all',
              }"
              @click="[getAllCoverage(), (allCoveragePage = 1)]"
            >
              All
            </button>
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
              @click="[getScores(), (scoresPage = 1)]"
            >
              Results
            </button>
            <!-- <button
              class="bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer"
              :class="{
                '!bg-black !text-white': activeReporting === 'scores',
              }"
              @click="activeReporting = 'scores'"
            >
              Scores
            </button> -->
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
                    <NuxtImg
                      provider="cloudflare"
                      :src="photo.fileName"
                      class=""
                      :alt="photo.altText"
                      loading="lazy"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No photos available</p>
            </div>
          </div>
          <div v-if="activeReporting === 'all'" class="flex flex-col">
            <div v-if="allCoverage.length !== 0">
              <div
                v-for="(coverage, index) in allCoverage"
                :key="index"
                class="not-last:border-b-2"
              >
                <a
                  v-if="coverage.type === 'blog'"
                  :href="'/activities/' + coverage.fixture.sportSlug"
                  class="flex py-6 gap-6"
                >
                  <div class="flex flex-col">
                    <p class="text-4xl xcond font-bold text-roses-red">
                      {{ formatTime(coverage.publishedAt) }}
                    </p>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h3 class="text-xl font-bold">
                      {{ coverage.fixture.sport }} - {{ coverage.fixture.name }}
                    </h3>
                    <div v-html="coverage.content"></div>
                  </div>
                </a>
                <a
                  v-if="coverage.type === 'photo'"
                  :href="'/activities/' + coverage.fixture.sportSlug"
                  class="flex py-6 gap-6"
                >
                  <div class="flex flex-col gap-4 w-full">
                    <div class="flex gap-4 items-center">
                      <p class="text-4xl xcond font-bold text-roses-red">
                        {{ formatTime(coverage.publishedAt) }}
                      </p>
                      <div class="flex flex-col">
                        <h3 class="text-xl font-bold">
                          {{ coverage.fixture.sport }} -
                          {{ coverage.fixture.name }}
                        </h3>
                        <p>{{ coverage.caption }}</p>
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <NuxtImg
                        provider="cloudflare"
                        :src="coverage.fileName"
                        class=""
                        :alt="coverage.altText"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </a>
                <a
                  v-if="coverage.competitionPoints"
                  :href="'/activities/' + coverage.sport.slug"
                  class="flex py-6 gap-6"
                >
                  <div class="flex flex-col">
                    <p class="text-4xl xcond font-bold text-roses-red">
                      {{ formatTime(coverage.competitionPoints[0].createdAt) }}
                    </p>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h3 class="text-xl font-bold">
                      {{ coverage.sport.name }} -
                      {{ coverage.teams[0].team.name }}
                    </h3>
                    <p
                      v-if="coverage.teams[0].outcome === 'Win'"
                      class="xcond font-bold text-3xl"
                    >
                      York Win
                    </p>
                    <p
                      v-if="coverage.teams[1].outcome === 'Win'"
                      class="xcond font-bold text-3xl text-roses-red"
                    >
                      Lancaster Win
                    </p>
                    <div
                      class="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full"
                    >
                      <div class="flex gap-4 items-center">
                        <p
                          class="font-semibold text-lg lg:text-2xl order-2 sm:order-1"
                        >
                          YORK
                        </p>
                        <div class="scoreTile scoreTileYork order-1 sm:order-2">
                          <p class="text-xl lg:text-2xl">
                            {{ formatScore(coverage.teams[0].result.score) }}
                          </p>
                        </div>
                      </div>
                      <div class="flex gap-4 items-center">
                        <p
                          class="font-semibold text-lg lg:text-2xl order-2 sm:order-1"
                        >
                          LANCASTER
                        </p>
                        <div
                          class="scoreTile scoreTileLancaster order-1 sm:order-2"
                        >
                          <p class="text-xl lg:text-2xl">
                            {{ formatScore(coverage.teams[1].result.score) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No blogs or photos available</p>
            </div>
          </div>
          <div v-if="activeReporting === 'scores'" class="flex flex-col">
            <div v-if="scores.length !== 0">
              <a
                v-for="(score, index) in scores"
                :key="index"
                :href="'/activities/' + score.sport.slug"
                class="flex py-6 gap-6 not-last:border-b-2"
              >
                <div class="flex flex-col">
                  <p class="text-4xl xcond font-bold text-roses-red">
                    {{ formatTime(score.competitionPoints[0].createdAt) }}
                  </p>
                </div>
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl font-bold">
                    {{ score.sport.name }} -
                    {{ score.teams[0].team.name }}
                  </h3>
                  <p
                    v-if="score.teams[0].outcome === 'Win'"
                    class="xcond font-bold text-3xl"
                  >
                    York Win
                  </p>
                  <p
                    v-if="score.teams[1].outcome === 'Win'"
                    class="xcond font-bold text-3xl text-roses-red"
                  >
                    Lancaster Win
                  </p>
                  <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full">
                    <div class="flex gap-4 items-center">
                      <p
                        class="font-semibold text-lg lg:text-2xl order-2 sm:order-1"
                      >
                        YORK
                      </p>
                      <div class="scoreTile scoreTileYork order-1 sm:order-2">
                        <p class="text-xl lg:text-2xl">
                          {{ formatScore(score.teams[0].result.score) }}
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-4 items-center">
                      <p
                        class="font-semibold text-lg lg:text-2xl order-2 sm:order-1"
                      >
                        LANCASTER
                      </p>
                      <div
                        class="scoreTile scoreTileLancaster order-1 sm:order-2"
                      >
                        <p class="text-xl lg:text-2xl">
                          {{ formatScore(score.teams[1].result.score) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
        <div v-if="activeReporting === 'all'" class="flex gap-1">
          <button
            v-if="allCoveragePage > 3"
            aria-label="Go back to the first page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="allCoveragePage = 1"
          >
            <i class="fa-solid fa-angles-left"></i>
          </button>
          <button
            v-if="allCoveragePage > 1"
            aria-label="Go back one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="allCoveragePage--"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            v-for="i in paginationRange('all')"
            :key="i"
            :class="{ '!bg-roses-red text-white': i === allCoveragePage }"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="allCoveragePage = i"
          >
            {{ i }}
          </button>
          <button
            v-if="allCoveragePage < totalAllCoveragePages"
            aria-label="Go forward one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="allCoveragePage++"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button
            v-if="
              totalAllCoveragePages > 3 &&
              allCoveragePage < totalAllCoveragePages - 2
            "
            aria-label="Go to the last page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="allCoveragePage = totalAllCoveragePages"
          >
            <i class="fa-solid fa-angles-right"></i>
          </button>
        </div>
        <div v-if="activeReporting === 'scores'" class="flex gap-1">
          <button
            v-if="scoresPage > 3"
            aria-label="Go back to the first page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="scoresPage = 1"
          >
            <i class="fa-solid fa-angles-left"></i>
          </button>
          <button
            v-if="scoresPage > 1"
            aria-label="Go back one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="scoresPage--"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            v-for="i in paginationRange('scores')"
            :key="i"
            :class="{ '!bg-roses-red text-white': i === scoresPage }"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="scoresPage = i"
          >
            {{ i }}
          </button>
          <button
            v-if="scoresPage < totalScoresPages"
            aria-label="Go forward one page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="scoresPage++"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button
            v-if="totalScoresPages > 3 && scoresPage < totalScoresPages - 2"
            aria-label="Go to the last page"
            class="bg-white border-2 w-8 h-8 hover:cursor-pointer"
            @click="scoresPage = totalScoresPages"
          >
            <i class="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RosesButton from "~/components/button.vue";
export default {
  components: {
    // RosesButton,
  },
  props: {
    catchup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      blogs: [],
      streams: [],
      mainStreams: [],
      photos: [],
      scores: [],
      allCoverage: [],
      pageSize: 10,
      page: 1,
      photosPage: 1,
      photosPageSize: 10,
      scoresPage: 1,
      scoresPageSize: 10,
      allCoveragePage: 1,
      allCoveragePageSize: 10,
      totalPages: 1,
      totalPhotoPages: 1,
      totalScoresPages: 1,
      totalAllCoveragePages: 1,
      accordionOpen: true,
      activeStream: {},
      activeReporting: "all",
    };
  },
  watch: {
    page() {
      this.getBlogs();
    },
    photosPage() {
      this.getPhotos();
    },
    allCoveragePage() {
      this.getAllCoverage();
    },
    scoresPage() {
      this.getScores();
    },
  },
  mounted() {
    this.getStreams();
    this.getAllCoverage();
  },
  methods: {
    async getStreams() {
      const response = await $fetch(
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/coverage",
      );
      const mainStreamsResponse = await $fetch(
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx60d1008ho9017ua4vw1b/coverage",
      );
      this.mainStreams = mainStreamsResponse.map((stream) => ({
        id: stream.id,
        fixture: stream.fixture,
        content: this.extractVideoId(stream.content),
        coverage: stream.coverage,
      }));

      this.streams = response.map((stream) => ({
        id: stream.id,
        fixture: stream.fixture,
        content: this.extractVideoId(stream.content),
        coverage: stream.coverage,
      }));

      // Add main streams to the beginning of the streams array
      this.streams = [
        ...this.mainStreams,
        ...this.streams.filter(
          (stream) =>
            !this.mainStreams.some((mainStream) => mainStream.id === stream.id),
        ),
      ];

      const rosesTrailer = {
        id: "roseTrailer",
        fixture: {
          sport: "Roses Trailer",
        },
        content: "S_F-QjAy2Rg",
        coverage: "TVCoverage",
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
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/blogs" +
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
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/photos" +
          parameters,
      );
      this.photos = response.data;
      this.totalPhotoPages = response.pageInfo.totalPages;
    },
    async getScores() {
      this.activeReporting = "scores";
      let parameters = "";
      if (this.scoresPageSize) {
        parameters += `?pageSize=${this.scoresPageSize}`;
      }
      if (this.scoresPage) {
        parameters += `&page=${this.scoresPage}`;
      }
      const response = await $fetch(
        "https://sports-admin-staging.yorksu.org/api/clsbxap510000gv60in0ijvp1/seasons/clt8ogzi9000km29p876hqgvh/fixtures/results" +
          parameters,
      );
      this.scores = response.data;
      this.totalScoresPages = response.pageInfo.totalPages;
    },
    async getAllCoverage() {
      this.activeReporting = "all";
      let parameters = "";
      if (this.allCoveragePageSize) {
        parameters += `?pageSize=${this.allCoveragePageSize}`;
      }
      if (this.allCoveragePage) {
        parameters += `&page=${this.allCoveragePage}`;
      }
      const response = await $fetch(
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/print-coverage" +
          parameters,
      );
      this.allCoverage = response.data;
      if (this.allCoveragePage === 1) {
        const scoresResponse = await $fetch(
          "https://sports-admin-staging.yorksu.org/api/clsbxap510000gv60in0ijvp1/seasons/clt8ogzi9000km29p876hqgvh/fixtures/results?pageSize=5",
        );
        if (this.allCoverage.length > 0) {
          const lastPublishedAt = new Date(
            this.allCoverage[this.allCoverage.length - 1].publishedAt,
          );
          const filteredScores = scoresResponse.data.filter((score) => {
            const createdAt = new Date(score.competitionPoints[0]?.createdAt);
            return createdAt > lastPublishedAt;
          });
          this.allCoverage = [...this.allCoverage, ...filteredScores];
          this.allCoverage.sort((a, b) => {
            const dateA = new Date(
              a.publishedAt || a.competitionPoints[0]?.createdAt,
            );
            const dateB = new Date(
              b.publishedAt || b.competitionPoints[0]?.createdAt,
            );
            return dateB - dateA;
          });
        }
      }
      this.totalAllCoveragePages = response.pageInfo.totalPages;
    },
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
      } else if (reportingType === "all") {
        page = this.allCoveragePage;
        totalPages = this.totalAllCoveragePages;
      } else if (reportingType === "scores") {
        page = this.scoresPage;
        totalPages = this.totalScoresPages;
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
    refreshCoverage() {
      if (this.activeReporting === "blogs") {
        this.page = 1;
        this.getBlogs();
      } else if (this.activeReporting === "photos") {
        this.photosPage = 1;
        this.getPhotos();
      } else if (this.activeReporting === "all") {
        this.allCoveragePage = 1;
        this.getAllCoverage();
      } else if (this.activeReporting === "scores") {
        this.scoresPage = 1;
        this.getScores();
      }
    },
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
    extractVideoId(content) {
      if (!content) return null;
      if (content.includes("embed")) {
        // Extract video ID from embed URL
        return content.replace(/.*\/embed\/([\w-]+)(?:\?.*)?$/, "$1");
      } else {
        // Extract video ID from other YouTube URL formats
        return content.replace(/.*[/=]([\w-]+)(?:\?.*)?$/, "$1");
      }
    },
  },
};
</script>
