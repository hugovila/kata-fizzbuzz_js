describe("FizzBuzz", function() {
  var fb;

  beforeEach(function() {
    fb = FIZZBUZZ;
  });

  it("should return 0 for 0 number", function() {
    expect(fb.tellMe(0)).toEqual(0);
  });

  it("should return own number", function() {
    expect(fb.tellMe(1)).toEqual(1);
    expect(fb.tellMe(2)).toEqual(2);
    expect(fb.tellMe(4)).toEqual(4);
  });

  it("should return FIZZ for number 3", function() {
    expect(fb.tellMe(3)).toEqual("FIZZ");
  });

  it("should return BUZZ for number 5", function() {
    expect(fb.tellMe(5)).toEqual("BUZZ");
  });

  it("should return FIZZ for number 6", function() {
    expect(fb.tellMe(6)).toEqual("FIZZ");
  });

  it("should return FIZZ for number 9", function() {
    expect(fb.tellMe(9)).toEqual("FIZZ");
  });

  it("should return BUZZ for number 10", function() {
    expect(fb.tellMe(10)).toEqual("BUZZ");
  });

  it("should return FIZZBUZZ for number 15", function() {
    expect(fb.tellMe(15)).toEqual("FIZZBUZZ");
  });

  it("should return FIZZ for number 18", function() {
    expect(fb.tellMe(18)).toEqual("FIZZ");
  });

  it("should return BUZZ for number 20", function() {
    expect(fb.tellMe(20)).toEqual("BUZZ");
  });

  it("should return FIZZBUZZ for number 30", function() {
    expect(fb.tellMe(30)).toEqual("FIZZBUZZ");
  });

});
