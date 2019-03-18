const hello = deps.helloSolver;

describe("solver", () => {
    it("should test", () => {
        expect(hello()).toEqual("hello solver");
        expect(hello()).toEqual("hello solver");
    });
});
