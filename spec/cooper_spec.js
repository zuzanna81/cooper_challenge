describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({gender: 'female', age: 36, distance: 1199});
  })
  it('gets an assessment based on gender', function() {
    expect(person.gender).toEqual('female');
  })
  it('gets an assessment based on age', function() {
    expect(person.age).toEqual(36);
  })
  it('gets an assessment based on completed distance', function() {
    expect(person.distance).toEqual(1199);
  })
})
describe("CooperFemale", function() {
  it('makes the calculation and returns "Poor" according to the normative data table', function(){
    expect(cooper({gender: 'female', age: 14, distance: 1400})).toEqual('Poor');
  })
  it('makes the calculation and returns "Below Average" according to the normative data table', function(){
    expect(cooper({gender: 'female', age: 14, distance: 1500})).toEqual('Below Average');
  })
  it('makes the calculation and returns "Average" according to the normative data table', function(){
    expect(cooper({gender: 'female', age: 14, distance: 1800})).toEqual('Average');
  })
  it('makes the calculation and returns "Above Average" according to the normative data table', function(){
    expect(cooper({gender: 'female', age: 14, distance: 1900})).toEqual('Above Average');
  })
  it('makes the calculation and returns "Excellent" according to the normative data table', function(){
    expect(cooper({gender: 'female', age: 14, distance: 2100})).toEqual('Excellent');
  })
})
describe("CooperMale", function() {
  it('makes the calculation and returns "Poor" according to the normative data table', function(){
    expect(cooper({gender: 'male', age: 13, distance: 2000})).toEqual('Poor');
  })
  it('makes the calculation and returns "Below Average" according to the normative data table', function(){
    expect(cooper({gender: 'male', age: 13, distance: 2100})).toEqual('Below Average');
  })
  it('makes the calculation and returns "Average" according to the normative data table', function(){
    expect(cooper({gender: 'male', age: 13, distance: 2300})).toEqual('Average');
  })
  it('makes the calculation and returns "Above Average" according to the normative data table', function(){
    expect(cooper({gender: 'male', age: 13, distance: 2600})).toEqual('Above Average');
  })
  it('makes the calculation and returns "Excellent" according to the normative data table', function(){
    expect(cooper({gender: 'male', age: 13, distance: 2800})).toEqual('Excellent');
  })
})
