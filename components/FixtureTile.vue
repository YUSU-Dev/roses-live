<template>
  <div class="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row fixtureTile">
    <div class="lg:pl-24 lg:pr-16 lg:border-r border-slate-300">
      <div class="w-25 flex lg:flex-col gap-2 lg:justify-center items-center">
        <p class="font-semibold text-xl lg:text-2xl">{{ formattedTime }}</p>
        <p v-if="fixture.highlighted">
          <Star class="h-12" />
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2 lg:gap-0 flex-grow fixtureDetails">
      <div class="flex flex-wrap gap-2 text-xl lg:text-2xl">
        <h3 class="font-bold">{{ fixture.sport.name }}</h3>
        <p v-if="York.team" class="">{{ York.team.name }}</p>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <p v-if="fixture.location">{{ locationName }}</p>
          <p v-if="fixture.highlighted" class="text-sm text-roses-red">
            Women in Sport Highlighted Fixture
          </p>
          <p
            v-if="fixture.status === 'Cancelled'"
            class="text-sm text-roses-red"
          >
            {{ fixture.status }}
          </p>
        </div>
        <div class="hidden sm:flex lg:hidden flex-grow justify-end">
          <div
            v-if="York && York.outcome === 'Win'"
            class="flex pr-10 md:pr-58"
          >
            <p class="font-bold text-xl">YORK WIN</p>
          </div>
          <div
            v-else-if="Lancaster && Lancaster.outcome === 'Win'"
            class="flex pr-10"
          >
            <p class="font-bold text-xl xl:pl-19 text-roses-red">
              LANCASTER WIN
            </p>
          </div>
          <div
            v-else-if="York && York.outcome === 'Draw'"
            class="flex pr-10 md:pr-58"
          >
            <p class="font-bold text-xl">DRAW</p>
          </div>
        </div>
        <p
          v-if="fixture.scoringRules[0].pointsValue !== 0"
          class="block lg:hidden whitespace-nowrap pl-1"
        >
          {{ fixture.scoringRules[0].pointsValue }} POINTS
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2 lg:pr-24 lg:pl-16">
      <div
        class="flex flex-row lg:flex-col xl:flex-row items-start justify-start sm:justify-end gap-6 sm:gap-8"
      >
        <div class="flex flex-col xs:flex-row sm:flex-col gap-2 xs:w-full">
          <div class="flex gap-6 sm:gap-8 w-full sm:justify-end">
            <div class="flex gap-4 items-center">
              <p class="font-semibold text-lg lg:text-2xl">YORK</p>
              <div class="scoreTile scoreTileYork">
                <p v-if="York && York.result" class="text-xl lg:text-2xl">
                  {{ formatScore(York.result.score) }}
                </p>
                <p v-else class="">
                  <i class="fa-regular fa-clock"></i>
                </p>
              </div>
            </div>
            <div class="flex gap-4 items-center">
              <p class="font-semibold text-lg lg:text-2xl">LANCASTER</p>
              <div class="scoreTile scoreTileLancaster">
                <p
                  v-if="Lancaster && Lancaster.result"
                  class="text-xl lg:text-2xl"
                >
                  {{ formatScore(Lancaster.result.score) }}
                </p>
                <p v-else class="">
                  <i class="fa-regular fa-clock"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="flex md:hidden flex-grow justify-end gap-2 items-center">
            <div class="flex xs:hidden flex-grow">
              <div v-if="York && York.outcome === 'Win'" class="flex flex-grow">
                <p class="font-bold text-xl">YORK WIN</p>
              </div>
              <div
                v-else-if="Lancaster && Lancaster.outcome === 'Win'"
                class="flex flex-grow xl:justify-center"
              >
                <p class="font-bold text-xl text-roses-red">LANCASTER WIN</p>
              </div>
              <div
                v-else-if="York && York.outcome === 'Draw'"
                class="flex flex-grow"
              >
                <p class="font-bold text-xl">DRAW</p>
              </div>
            </div>
            <div v-if="fixture.startsAt" class="">
              <add-to-calendar
                :start-date="fixture.startsAt"
                :end-date="fixture.endsAt"
                :title="fixture.sport.name + ' - ' + teamName"
                :description="
                  'Follow all the action live on roseslive.co.uk! Brought to you by York SU (yorksu.org). Fixture Details: https://roseslive.co.uk/activities/' +
                  fixture.sport.slug
                "
                :location="locationName"
              />
            </div>
            <div class="flex items-center">
              <a
                class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out scoreTile"
                alt="See on map"
                :href="'/map?location=' + fixture.location.id"
                ><i class="fa-solid fa-location-dot text-2xl"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="hidden md:flex gap-2 lg:w-full justify-end">
          <div v-if="fixture.startsAt" class="flex items-center">
            <add-to-calendar
              :start-date="fixture.startsAt"
              :end-date="fixture.endsAt"
              :title="fixture.sport.name + ' - ' + teamName"
              :description="
                'Follow all the action live on roseslive.co.uk! Brought to you by York SU (yorksu.org). Fixture Details: https://roseslive.co.uk/activities/' +
                fixture.sport.slug
              "
              :location="locationName"
            />
          </div>
          <div class="flex items-center">
            <a
              class="flex gap-2 bg-roses-red text-white px-6 md:px-3 py-2 text-center hover:bg-roses-red-dark transition duration-200 ease-in-out scoreTile"
              alt="See on map"
              :href="'/map?location=' + fixture.location.id"
              ><i class="fa-solid fa-location-dot text-2xl"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="hidden xs:flex sm:hidden lg:flex items-center justify-end">
        <div v-if="York && York.outcome === 'Win'" class="flex flex-grow">
          <p class="font-bold text-xl">YORK WIN</p>
        </div>
        <div
          v-else-if="Lancaster && Lancaster.outcome === 'Win'"
          class="flex flex-grow xl:justify-center"
        >
          <p class="font-bold text-xl xl:pl-19 text-roses-red">LANCASTER WIN</p>
        </div>
        <div v-else-if="York && York.outcome === 'Draw'" class="flex flex-grow">
          <p class="font-bold text-xl">DRAW</p>
        </div>
        <p
          v-if="fixture.scoringRules[0].pointsValue !== 0"
          class="whitespace-nowrap hidden lg:block"
        >
          {{ fixture.scoringRules[0].pointsValue }} POINTS
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Star } from "lucide-vue-next";
import addToCalendar from "~/components/addToCalendar.vue";
export default {
  name: "FixtureTile",
  components: {
    addToCalendar,
    Star,
  },
  props: {
    fixture: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      yorkCollectionId: "clt4mx9jb0005rtqtslh1o6id",
      lancasterCollectionId: "clt4mxczy0007rtqtmz2ljm2t",
      York: {},
      Lancaster: {},
    };
  },
  computed: {
    formattedTime() {
      const date = new Date(this.fixture.startsAt);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    teamName() {
      const team = this.fixture.teams.find(
        (team) => team.team.collectionId === this.yorkCollectionId,
      );
      return team ? team.team.name : null;
    },
    locationName() {
      return `${this.fixture.location.name}${
        this.fixture.location.parent
          ? ", " + this.fixture.location.parent.name
          : ""
      }`;
    },
  },
  mounted() {
    this.formatTeams();
  },
  methods: {
    formatTeams() {
      this.York = this.fixture.teams.find(
        (team) => team.team.collectionId === this.yorkCollectionId,
      );
      this.Lancaster = this.fixture.teams.find(
        (team) => team.team.collectionId === this.lancasterCollectionId,
      );
    },
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
  },
};
</script>
