<template>
  <div>
    <HeroBanner
      title="TERMS & CONDITIONS"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Homepage.png"
    />
    <div class="container mx-auto py-28 flex flex-col">
      <div class="pb-2">
        <h2 class="text-2xl font-bold">Disclaimer</h2>
        <p>
          To the extent permitted by law, the Union provides this website and
          its contents on an "as is" basis and makes no representation or
          warranty of any kind regarding this website or any information,
          content, products or services on it. The Union does not represent or
          warrant that the information accessible via this website is accurate,
          complete or current. In no circumstances, to the extent permitted by
          law, shall the Union or or any of its officers or employees be liable
          for any loss, additional costs or damage (howsoever arising) suffered
          as a result of any use of this website or its contents.
        </p>
      </div>
      <div class="pb-2">
        <h2 class="text-2xl font-bold">Accessibility</h2>
        <p>
          The University of York Students' Union is committed to making this
          website accessible as possible to all in accordance with W3C
          recommendations. Any problems encountered with accessing material on
          this site should be reported to
          <a class="text-roses-red hover:underline" href="mailto:it@yorksu.org"
            >it@yorksu.org</a
          >.
        </p>
      </div>
      <div class="pb-2">
        <h2 class="text-2xl font-bold">Copyright</h2>
        <p>
          All the content of this website (including images), unless explicitly
          stated otherwise, is copyright of the University of York Students'
          Union and may not be reproduced without prior permission. By accessing
          these web pages, you agree that any downloading of content is for
          personal, non-commercial reference only. No part of this website may
          be reproduced or transmitted in any form or by any means without the
          prior consent of the Union. For any queries about re-use of content
          from the website, please contact
          <a
            class="text-roses-red hover:underline"
            href="mailto:enquiries@yorksu.org"
            >enquiries@yorksu.org</a
          >.
        </p>
      </div>
      <div>
        <h2 class="text-2xl font-bold">Cookies</h2>
        <h3 className="text-xl pt-4 font-bold">What Are Cookies?</h3>
        <p>
          A cookie is a small text file which helps your web browser navigate
          through a particular website. The cookie can then be read back later
          by the web browser as required. The use of cookies is a convenient way
          of allowing a computer to remember specific information relating to a
          website which has been visited.
        </p>
        <h3 className="text-xl pt-4 font-bold">How We Use Cookies</h3>
        <p>
          We use cookies for a variety of reasons which are detailed below.
          Unfortunately in most cases there are no industry standard options for
          disabling cookies without completely disabling the functionality and
          features they add to this site. It is recommended that you leave on
          all cookies if you are not sure whether you need them or not in case
          they are used to provide a service that you use.
        </p>
        <h3 className="text-xl pt-4 font-bold">Disabling Cookies</h3>
        <p>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser documentation for how to do this). Be
          aware that disabling cookies will affect the functionality of this and
          many other websites that you visit.
          <b>It is recommended that you do not disable cookies.</b>
        </p>
        <h3 className="text-xl pt-4 font-bold">The Cookies We Set</h3>
        <h4 className="pt-4 font-bold">Third Party Cookies</h4>
        <p>This website will track your engagement using PostHog, including:</p>

        <ul class="list-disc pl-8">
          <li>Page and content views</li>
          <li>Behaviours on the page such as scrolling or clicking</li>
          <li>Date and time of your visit</li>
          <li>Location you are visiting from</li>
          <li>Browser you are using including version</li>
          <li>Device model and operating system you are using</li>
        </ul>
        <p>
          We do not collect or store any of your personal information, so this
          information can’t be used to identify who you are.
          <a
            href="https://posthog.com/privacy"
            target="_blank"
            class="text-roses-red hover:underline"
          >
            Posthog's privacy policy can be viewed here</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import HeroBanner from "~/components/HeroBanner.vue";

export default { name: "CookiePolicyPage", components: { HeroBanner } };
useHead({
  title: "Terms and Conditions | Roses Live",
});
</script>
