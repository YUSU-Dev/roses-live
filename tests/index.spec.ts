import { test, expect } from "./common";

test("index page has no accessibility issues", async ({
  goto,
  makeAxeBuilder,
}, testInfo) => {
  await goto("/", { waitUntil: "hydration" });
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: "application/json",
  });

  expect(accessibilityScanResults.violations).toEqual([]);
});
