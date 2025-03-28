import * as Sentry from "@sentry/nuxt";
Sentry.init({
  dsn: "https://e6600512df57797f4fd551f8f8adf187@o4506869614903296.ingest.us.sentry.io/4508098677374976",
  // Tracing
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    "localhost",
    "roseslive.co.uk",
    "staging.roseslive.co.uk",
  ],
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.5 : 0,
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  beforeSend(event) {
    // Filter out errors on localhost
    if (process.env.NODE_ENV !== "production") {
      return null;
    }
    return event;
  },
});
