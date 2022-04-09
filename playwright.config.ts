/* eslint-disable sort-vars */
import { type PlaywrightTestConfig, devices } from "@playwright/test";
import ms from "ms";

const isCI = (process.env["CI"] ?? "false") === "true",
  config: PlaywrightTestConfig = {
    expect: {
      timeout: 5000,
      toMatchSnapshot: {
        maxDiffPixelRatio: 0.0,
        maxDiffPixels: 0.0,
        threshold: 0.0,
      },
    },
    forbidOnly: isCI,
    globalTimeout: isCI ? ms("1h") : 0,
    outputDir: "./coverage/e2e/",
    projects: [
      {
        name: "Desktop Chrome",
        use: {
          ...devices["Desktop Chrome"],
        },
      },
      // {
      //   name: "Desktop Firefox",
      //   use: {
      //     ...devices["Desktop Firefox"],
      //   },
      // },
      // {
      //   name: "Desktop Safari",
      //   use: {
      //     ...devices["Desktop Safari"],
      //   },
      // },
      // {
      //   name: "Mobile Chrome",
      //   use: {
      //     ...devices["Pixel 5"],
      //   },
      // },
      // {
      //   name: "Mobile Safari",
      //   use: {
      //     ...devices["iPhone 13"],
      //   },
      // },
    ],
    reporter: [
      ["html", { open: "never", outputFolder: "./coverage/e2e/" }],
      ["json", { outputFile: "./coverage/e2e/report.json" }],
      [
        "junit",
        {
          outputFile: "./coverage/e2e/junit.xml",
          stripANSIControlSequences: false,
        },
      ],
      ["list"],
    ],
    retries: isCI ? 2 : 0,
    testMatch: "*.spec.{js,ts}",
    timeout: ms("1m"),
    use: {
      contextOptions: {
        ignoreHTTPSErrors: true,
      },
      trace: "retry-with-trace",
    },
    // webServer: {
    //   command: "NEXT_PUBLIC_API_MOCKING=true yarn build && yarn start",
    //   port: 3000,
    //   reuseExistingServer: !isCI,
    //   timeout: ms("2m"),
    // },
  };

export default config;
