<template>
  <div>
    <HeroBanner
      title="ABOUT"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_About.webp"
    />
    <div class="body">
      <div class="container mx-auto py-14 md:py-28">
        <div class="flex flex-col gap-6 pb-14 md:pb-28">
          <h2 class="text-5xl xcond font-bold">THE BATTLE IS COMING HOME</h2>
          <div class="flex flex-col gap-4">
            <p>
              Roses is an annual sporting varsity between the University of York
              and Lancaster University, although it wasn't always a sports
              contest. It began way back in medieval times as a war for the
              throne of England, between the Houses of York and Lancaster. When
              that war was fought and won, a new one began... Now, our
              battlefield is the playing field. Each year, we take turns to host
              this epic battle and this year, Roses is back on home soil!
            </p>
            <p>
              This year is the 60th anniversary of the competition, so it’s a
              special one for everyone. We’ll be hosting 140 fixtures between
              Friday 2 and Sunday 4 May, from American Football and Cheerleading
              to Debating and Octopush!
            </p>
            <p>
              But it won’t just be sports fixtures; across the weekend, there
              will be a range of events to attend across campus and in our
              venues. So if you aren’t a massive sports fan, you can still get
              involved in the Roses buzz!
            </p>
          </div>
          <NuxtImg
            width="100%"
            height="fit-content"
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Battleiscominghome_Image.png"
            class="w-full"
            alt="About Roses"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col gap-6 pb-14 md:pb-28">
          <h2 class="text-5xl xcond font-bold">
            SHOW US HOW YOU’RE CELEBRATING
          </h2>
          <div class="flex flex-col gap-4">
            <p>
              We want to hear from you! Across the weekend, there will be a
              range of events to attend across campus and in our venues. Whether
              you’re celebrating a win, cheering on Team York from the
              sidelines, or enjoying a well-earned pizza at The Courtyard, let
              us know! Tag
              <a
                href="https://go.yorksu.org/vbmh9v6"
                target="_blank"
                class="text-roses-red hover:underline"
                >@yorkunisu</a
              >
              in your Instagram posts and we’ll reshare some of our favourite
              moments throughout Roses.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-6 pb-14 md:pb-28">
          <h2 class="text-5xl xcond font-bold">SUSTAINABILITY AT ROSES</h2>
          <div class="flex flex-col gap-4">
            <p>
              Roses gets bigger every year - but we don’t want that to have a
              negative impact on its sustainability! So we are implementing lots
              of measures to keep our carbon footprint as low as possible. None
              of our vendors will be selling beef in line with our participation
              in the
              <a
                href="https://go.yorksu.org/Ey0rZcl"
                target="_blank"
                class="text-roses-red hover:underline"
                >Sustainable SUs charter</a
              >. This year also sees the return of the reusable Roses Cup: when
              you purchase a drink at any Roses outlet, you’ll be asked to pay a
              £2 deposit for a cup which you can reuse throughout the weekend.
              When you’re done, return your cup to get your deposit back..
            </p>
            <p>
              There’s more sustainability information to come, so keep your eyes
              peeled for updates.
            </p>
            <!-- <p>
              Don’t worry, merch isn’t exempt from our sustainability work
              either. This year, all of our Roses merchandise will be made from
              <a
                href="https://go.yorksu.org/9xrp6cB"
                target="_blank"
                class="text-roses-red hover:underline"
                >Tiger Cotton</a
              >, a growing scheme which makes it financially viable for farmers
              to transition to organic cotton growing.
            </p> -->
            <!-- <p>
              <a
                href="https://go.yorksu.org/tLee0cc"
                target="_blank"
                class="text-roses-red hover:underline"
                >Read all about sustainability at Roses 2025</a
              >.
            </p> -->
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">ROSES IN MIND</h2>
          <div class="flex flex-col gap-4">
            <p>
              Each year, we partner with a different charity, chosen by the York
              Sport Committee. Across Roses weekend, we raise awareness and
              money for the charity, highlighting an important cause. This year,
              we are partnering with
              <a
                href="https://go.yorksu.org/TjTnAgh"
                target="_blank"
                class="text-roses-red hover:underline"
                >York Mind</a
              >, while Lancaster fundraises for Lancashire Mind. They are an
              independent local mental health charity which empowers individuals
              experiencing mental ill health to start on the pathway to
              recovery, supported by one simple belief: the condition should
              never define the person.
            </p>
            <p>
              To mark the announcement of our partnership, our Sports Officer,
              TJ, shared her story of how sport helped her to overcome her own
              mental health challenges.
              <a
                href="https://go.yorksu.org/jeuA8pb"
                target="_blank"
                class="text-roses-red hover:underline"
                >Read TJ’s story: Sport and my mental health.</a
              >.
            </p>
            <p>
              In the build up to Roses, we will be sharing information from York
              Mind, such as links to resources and services, as well as
              interesting information like the connection between mental and
              physical health. But we also want to connect with our students on
              the importance of looking after mental health. So we'll also be
              sharing what you've been telling us about how sport and physical
              activity impact your mental health - and we can't wait to hear how
              you feel after the Run to Roses 60km Challenge!
            </p>
            <p>Did you know that…</p>
            <ul class="list-disc pl-6">
              <li>
                £5 could pay travel expenses for a York Mind volunteer to
                support in a group
              </li>
              <li>
                £20 could support a young person through a 1:1 mentoring session
              </li>
              <li>£30 could pay for someone to attend a counselling session</li>
              <li>
                £240 could support a young person to access twelve 1:1 mentoring
                sessions
              </li>
              <li>
                £480 could provide someone with a confidential safe space to
                talk to a trained counsellor, through sixteen 1:1 counselling
                sessions.
              </li>
            </ul>
            <div class="flex">
              <RosesButton
                href="https://go.yorksu.org/UxA3oQP"
                target="_blank"
                title="Donate Now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import RosesButton from "~/components/button.vue";
export default {
  components: {
    HeroBanner,
    RosesButton,
  },
};
useHead({
  title: "About",
});
</script>
