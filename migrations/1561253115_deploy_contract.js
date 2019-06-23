const Adoption = artifacts.require('Adoption');
module.exports = function(deployer) {
  deployer.deploy(Adoption);
  // Use deployer to state migration tasks.
};
