describe("Sanity check - Integration Test", () => {
  it("should have DATABASE_URL environment variable available", () => {
    expect(process.env.DATABASE_URL).toBeDefined();
  });
});
