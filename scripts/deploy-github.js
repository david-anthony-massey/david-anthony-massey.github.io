const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo:
      "https://github.com/david-anthony-massey/david-anthony-massey.github.io.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
