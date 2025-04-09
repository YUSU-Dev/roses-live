<template>
  <div>
    <HeroBanner
      title="FOOD & DRINK"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Food_Drink.png"
    />
    <div class="body">
      <div class="py-28">
        <TextImageSection
          image="https://assets-cdn.sums.su/YU/website/img/Roses/Roses_cafe_Image.png"
          alt=""
          sub-title="FOOD & DRINK"
        >
          <template #text>
            <p>
              Supporting Team York is hard work - but we’ve got you covered!
              We’ll have a range of food and drink across campus to keep you
              full and hydrated across the weekend. From bagels and pizza to
              coffee and puddings, there will be plenty of tasty treats on
              offer. Each venue will be telling you all the details of what’s on
              offer on their socials, so make sure to give them a follow to stay
              in the loop!
            </p>
            <p>
              As well as some of your favourite on-campus venues open across the
              weekend, we’ll have our brand new Fan Zone, a temporary setup of
              food and drink stalls. It will be located just outside the York
              Sport Centre, so right at the heart of the action. Find out what’s
              on offer and stay up to date with the details on our
              <a
                href="https://go.yorksu.org/E1GKtb1"
                target="_blank"
                class="text-roses-red hover:underline"
                >Fan Zone page</a
              >!
            </p>
          </template>
        </TextImageSection>
      </div>
      <div class="container mx-auto pb-28 flex flex-col gap-14">
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">THE COURTYARD</h2>
          <div class="flex flex-col gap-4">
            <p>
              Open across all three days of Roses Weekend, The Courtyard is at
              the heart of Campus West. Get a breakfast deal on Saturday and
              Sunday, or a WeirDough Pizza when you’re in need of a bite to eat
              between fixtures.
            </p>
          </div>
          <div class="flex">
            <RosesButton
              href="https://go.yorksu.org/0ozKisB"
              target="_blank"
              title="Courtyard"
            />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">THE VANBRUGH ARMS</h2>
          <div class="flex flex-col gap-4">
            <p>
              Our answer to a pub! Vanbrugh Arms is located on Campus West and
              will be hosting the Roses Fringe Festival, where you can watch
              student group performances for the whole of Saturday afternoon,
              alongside a drink.
            </p>
          </div>
          <div class="flex">
            <RosesButton
              href="https://go.yorksu.org/U905BIt"
              target="_blank"
              title="Vanbrugh Arms"
            />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">THE GLASSHOUSE</h2>
          <div class="flex flex-col gap-4">
            <p>
              You can head to The Glasshouse on Campus East to watch the pool
              fixtures and a bite to eat from YUZU.
            </p>
          </div>
          <div class="flex">
            <RosesButton
              href="https://go.yorksu.org/ikbq4O3"
              target="_blank"
              title="Glasshouse"
            />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">THE KITCHEN</h2>
          <div class="flex flex-col gap-4">
            <p>
              Only open on the Friday of Roses Weekend, you can head to The
              Kitchen on Campus West for a break from the action. Grab a coffee
              and a bagel and relax in our cosy cafe.
            </p>
          </div>
          <div class="flex">
            <RosesButton
              href="https://go.yorksu.org/0ozKisB"
              target="_blank"
              title="Kitchen"
            />
          </div>
        </div>
      </div>
      <div class="container mx-auto pb-28">
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">OPENING TIMES</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            <div
              v-for="venue in venueOpeningTimes"
              :key="venue.name"
              class="flex flex-col gap-3"
            >
              <h3 class="text-2xl font-bold">{{ venue.name }}</h3>
              <div class="flex flex-col gap-1">
                <div v-for="time in venue.openingTimes" :key="time.day">
                  <h4 class="font-semibold">{{ time.day }}</h4>
                  <p>{{ time.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import TextImageSection from "~/components/TextImageSection.vue";
import RosesButton from "~/components/button.vue";
export default {
  name: "FoodAndDrinkPage",
  components: {
    HeroBanner,
    TextImageSection,
    RosesButton,
  },
  data() {
    return {
      venueOpeningTimes: [
        {
          name: "The Fan Zone",
          openingTimes: [
            { day: "Friday", time: "11:30 - 20:00" },
            { day: "Saturday", time: "10:00 - 20:00" },
            { day: "Sunday", time: "09:00 - 17:00" },
          ],
        },
        {
          name: "The Courtyard",
          openingTimes: [
            { day: "Friday", time: "09:00 - 23:00" },
            { day: "Saturday", time: "08:00 - 01:00" },
            { day: "Sunday", time: "08:00 - 22:00" },
          ],
        },
        {
          name: "The Vanbrugh Arms",
          openingTimes: [
            { day: "Friday", time: "18:00 - 23:00" },
            { day: "Saturday", time: "13:00 - 00:00" },
            { day: "Sunday", time: "CLOSED" },
          ],
        },
        {
          name: "The Glasshouse",
          openingTimes: [
            { day: "Friday", time: "12:00 - 00:00" },
            { day: "Saturday", time: "12:00 - 22:00" },
            { day: "Sunday", time: "CLOSED" },
          ],
        },
        {
          name: "The Kitchen",
          openingTimes: [
            { day: "Friday", time: "08:30 - 16:00" },
            { day: "Saturday", time: "CLOSED" },
            { day: "Sunday", time: "CLOSED" },
          ],
        },
      ],
    };
  },
};
</script>
