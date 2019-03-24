workflow "Test and Deploy on release" {
  on = "release"
  resolves = ["Alias deployment"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "test"
}

action "Deploy to ZEIT" {
  needs = "Test"
  uses = "actions/zeit-now@666edee2f3632660e9829cb6801ee5b7d47b303d"
  secrets = ["ZEIT_TOKEN"]
}

action "Alias deployment" {
  uses = "actions/zeit-now@666edee2f3632660e9829cb6801ee5b7d47b303d"
  needs = ["Deploy to ZEIT"]
  args = "alias"
  secrets = ["ZEIT_TOKEN"]
}
