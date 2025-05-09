<template>
  <div
    v-if="!(catchup && streams.length === 0 && allCoverage.length === 0)"
    class="flex flex-col md:flex-row gap-5"
  >
    <div
      v-if="!(catchup && streams.length === 0)"
      class="flex flex-col bg-light-gray p-8 md:w-3/10 gap-10 h-fit"
    >
      <div class="flex flex-col gap-6 order-2 md:order-1">
        <h2 class="text-4xl xcond font-bold">
          <span v-if="!catchup">LIVE </span>STREAMS
        </h2>
        <div v-if="mainStreams.length > 0">
          <h3 class="font-bold xcond text-2xl">Main Streams</h3>
          <div class="flex flex-wrap md:flex-col gap-2 w-fit">
            <button
              v-for="stream in mainStreams"
              :key="stream.id"
              :class="[
                'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer flex flex-row gap-1 md:gap-0 md:flex-col',
                { '!bg-black !text-white': activeStream.id === stream.id },
              ]"
              @click="((activeStream = stream), (accordionOpen = true))"
            >
              <p v-if="stream.fixture.sport || stream.fixture.name">
                <span v-if="stream.fixture.sport"
                  >{{ stream.fixture.sport }}
                </span>
                <span v-if="stream.fixture.sport && stream.fixture.name">
                  -
                </span>
                <span v-if="stream.fixture.name">{{
                  stream.fixture.name
                }}</span>
                <span v-if="stream.coverage === 'TVCoverage'"> (TV) </span>
                <span v-if="stream.coverage === 'RadioCoverage'">
                  (Radio)
                </span>
              </p>
            </button>
          </div>
        </div>
        <div v-if="video.length > 0">
          <h3 class="font-bold xcond text-2xl">Video Streams</h3>
          <div class="flex flex-wrap md:flex-col gap-2 w-fit">
            <button
              v-for="stream in video"
              :key="stream.id"
              :class="[
                'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer flex flex-row gap-1 md:gap-0 md:flex-col',
                { '!bg-black !text-white': activeStream.id === stream.id },
              ]"
              @click="((activeStream = stream), (accordionOpen = true))"
            >
              <p v-if="stream.fixture.sport || stream.fixture.name">
                <span v-if="stream.fixture.sport"
                  >{{ stream.fixture.sport }}
                </span>
                <span v-if="stream.fixture.sport && stream.fixture.name">
                  -
                </span>
                <span v-if="stream.fixture.name">{{
                  stream.fixture.name
                }}</span>
              </p>
            </button>
          </div>
        </div>
        <div v-if="radio.length > 0">
          <h3 class="font-bold xcond text-2xl">Radio Streams</h3>
          <div class="flex flex-wrap md:flex-col gap-2 w-fit">
            <button
              v-for="stream in radio"
              :key="stream.id"
              :class="[
                'bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center hover:cursor-pointer flex flex-row gap-1 md:gap-0 md:flex-col',
                { '!bg-black !text-white': activeStream.id === stream.id },
              ]"
              @click="((activeStream = stream), (accordionOpen = true))"
            >
              <p v-if="stream.fixture.sport || stream.fixture.name">
                <span v-if="stream.fixture.sport"
                  >{{ stream.fixture.sport }}
                </span>
                <span v-if="stream.fixture.sport && stream.fixture.name">
                  -
                </span>
                <span v-if="stream.fixture.name">{{
                  stream.fixture.name
                }}</span>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div v-if="!catchup" class="flex flex-col gap-6 order-1 md:order-2">
        <h2 class="text-4xl xcond font-bold">MISSED THE ACTION?</h2>
        <p>Catch up on an activities past streams directly on their page!</p>
        <div class="flex">
          <RosesButton href="/fixtures?activities=true" title="Activities" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 flex-grow md:w-7/10">
      <div
        v-if="!(catchup && streams.length === 0)"
        class="flex flex-col bg-light-gray p-8 gap-4"
      >
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
            v-if="
              activeStream.coverage === 'RadioCoverage' &&
              activeStream.fixture.id
            "
            class="h-65 sm:h-50 w-full"
          >
            <iframe
              width="100%"
              height="100%"
              :src="
                'https://radio.roses.media/embed/stream/' +
                activeStream.fixture.id
              "
              title="Live Radio Stream"
              frameborder="0"
              credentialless
            ></iframe>
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-light-gray p-8 gap-10">
        <div class="flex justify-between items-center">
          <h2 class="text-5xl xcond font-bold">
            <span v-if="!catchup">LIVE </span> REPORTING
          </h2>
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
          </div>
          <div v-if="activeReporting === 'blogs'" class="flex flex-col">
            <div v-if="blogs.length !== 0">
              <div
                v-for="(blog, index) in blogs"
                :key="index"
                class="not-last:border-b-2"
              >
                <a :href="'/activities/' + blog.fixture.sportSlug">
                  <live-reporting-blog-tile :coverage="blog" />
                </a>
              </div>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No blogs available</p>
            </div>
          </div>
          <div v-if="activeReporting === 'photos'" class="flex flex-col">
            <div v-if="photos.length !== 0">
              <div
                v-for="(photo, index) in photos"
                :key="index"
                class="not-last:border-b-2"
              >
                <a :href="'/activities/' + photo.fixture.sportSlug">
                  <live-reporting-photo-tile :coverage="photo" />
                </a>
              </div>
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
                >
                  <live-reporting-blog-tile :coverage="coverage" />
                </a>
                <a
                  v-if="coverage.type === 'photo'"
                  :href="'/activities/' + coverage.fixture.sportSlug"
                >
                  <live-reporting-photo-tile :coverage="coverage" />
                </a>
                <a
                  v-if="coverage.competitionPoints"
                  :href="'/activities/' + coverage.sport.slug"
                >
                  <live-reporting-result-tile :coverage="coverage" />
                </a>
              </div>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No blogs or photos available</p>
            </div>
          </div>
          <div v-if="activeReporting === 'scores'" class="flex flex-col">
            <div v-if="scores.length !== 0">
              <div
                v-for="(score, index) in scores"
                :key="index"
                class="not-last:border-b-2"
              >
                <a :href="'/activities/' + score.sport.slug">
                  <live-reporting-result-tile :coverage="score" />
                </a>
              </div>
            </div>
            <div v-else class="flex items-center pt-8 pb-6">
              <p class="text-2xl font-bold">No score updates available</p>
            </div>
          </div>
        </div>
        <div v-if="activeReporting === 'blogs'" class="flex gap-1">
          <roses-pagination
            :page="page"
            :total-pages="totalPages"
            @update:page="(newValue) => (page = newValue)"
          />
        </div>
        <div v-if="activeReporting === 'photos'" class="flex gap-1">
          <roses-pagination
            :page="photosPage"
            :total-pages="totalPhotoPages"
            @update:page="(newValue) => (photosPage = newValue)"
          />
        </div>
        <div v-if="activeReporting === 'all'" class="flex gap-1">
          <roses-pagination
            :page="allCoveragePage"
            :total-pages="totalAllCoveragePages"
            @update:page="(newValue) => (allCoveragePage = newValue)"
          />
        </div>
        <div v-if="activeReporting === 'scores'" class="flex gap-1">
          <roses-pagination
            :page="scoresPage"
            :total-pages="totalScoresPages"
            @update:page="(newValue) => (scoresPage = newValue)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RosesButton from "~/components/button.vue";
import LiveReportingBlogTile from "./LiveReportingBlogTile.vue";
import LiveReportingPhotoTile from "./LiveReportingPhotoTile.vue";
import LiveReportingResultTile from "./LiveReportingResultTile.vue";
import RosesPagination from "./RosesPagination.vue";
export default {
  components: {
    RosesButton,
    LiveReportingResultTile,
    LiveReportingPhotoTile,
    LiveReportingBlogTile,
    RosesPagination,
  },
  props: {
    catchup: {
      type: Boolean,
      default: false,
    },
    sportSlug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      blogs: [],
      streams: [],
      video: [],
      radio: [],
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
      let parameters = "?pageSize=50";
      if (this.catchup) {
        parameters += "&catchup=true";
        if (this.sportSlug) {
          parameters += `&sport=${this.sportSlug}`;
        }
      }
      const response = await $fetch(
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/coverage" +
          parameters,
      );
      this.streams = response.map((stream) => ({
        id: stream.id,
        fixture: stream.fixture,
        content: this.extractVideoId(stream.content),
        coverage: stream.coverage,
      }));
      this.video = this.streams.filter(
        (stream) => stream.coverage === "TVCoverage",
      );
      this.radio = this.streams.filter(
        (stream) => stream.coverage === "RadioCoverage",
      );
      if (this.video.length > 0 && this.catchup) {
        this.activeStream = this.video[0];
      } else if (this.radio.length > 0 && this.catchup) {
        this.activeStream = this.radio[0];
      }
      if (!this.catchup) {
        const mainStreamsResponse = await $fetch(
          "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx60d1008ho9017ua4vw1b/coverage",
        );
        this.mainStreams = mainStreamsResponse.map((stream) => ({
          id: stream.id,
          fixture: {
            id: stream.fixture.id,
            sport: null,
            name: stream.fixture.name,
            sportSlug: stream.fixture.sportSlug,
          },
          content: this.extractVideoId(stream.content),
          coverage: stream.coverage,
        }));

        const rosesTrailer = {
          id: "roseTrailer",
          fixture: {
            sport: "Roses Trailer",
          },
          content: "S_F-QjAy2Rg",
          coverage: "TVCoverage",
        };
        if (this.mainStreams.length === 0) {
          this.video.unshift(rosesTrailer);
        }
        if (this.mainStreams.length > 0) {
          this.activeStream = this.mainStreams[0];
        } else {
          this.activeStream = rosesTrailer;
        }
      }
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
      if (this.sportSlug && this.catchup) {
        parameters += `&sport=${this.sportSlug}`;
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
      if (this.sportSlug && this.catchup) {
        parameters += `&sport=${this.sportSlug}`;
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
      if (this.sportSlug && this.catchup) {
        parameters += `&sport=${this.sportSlug}`;
      }
      const response = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures/results" +
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
      if (this.sportSlug && this.catchup) {
        parameters += `&sport=${this.sportSlug}`;
      }
      const response = await $fetch(
        "https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/print-coverage" +
          parameters,
      );
      this.allCoverage = response.data;
      if (this.allCoveragePage === 1 && !this.catchup) {
        const scoresResponse = await $fetch(
          "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures/results?pageSize=5",
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
