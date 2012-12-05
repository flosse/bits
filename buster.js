var config = module.exports;

config["bit"] = {
  environment: "node",
  specs: ["*.spec.coffee"],
  extensions: [require("buster-coffee")]
};
