var Adoption = artifacts.require('Adoption');

contract('Adoption', function(accounts) {
  describe('First group of tests', () => {
    let instance;
    before(async () => {
      instance = await Adoption.deployed();
    });
    it('User should adopt a pet', async () => {
      await instance.adopt.sendTransaction(8, { from: accounts[0] });
      let adopter = await instance.adopters.call(8);
      assert.equal(adopter, accounts[0], 'incorrect owner address');
    });

    it('should throw an error if invalid pe id is given', async () => {
      try {
        await instance.adopt.sendTransaction(17, { from: accounts[0] });
        assert.fail(true, false, "This function didn't throw");
      } catch (error) {
        assert.include(
          String(error),
          'revert',
          `Expected "revert" but innstead got ${error}`
        );
      }
    });

    // it("should assert true", function(done) {
    //   var adoption = adoption.deployed();
    //   assert.isTrue(true);
    //   done();
    // });
  });
});
