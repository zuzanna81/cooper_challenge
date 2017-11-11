describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({gender: 'female', age: 13, distance: 2000});
  })
  it('gets an assessment based on gender', function() {
    expect(person.gender).toEqual('female');
  })
  it('gets an assessment based on age', function() {
    expect(person.age).toEqual(13);
  })
  it('gets an assessment based on completed distance', function() {
    expect(person.distance).toEqual(2000);
  })
  it('gets an assessment description "Poor" if distance is less than 2100 meters', function(){
    expect(person.description).toEqual('Poor');
  })
  // it('returns "Below Average" if distance is less than 2200 meters', function(){
  //   expect(person.description).toEqual('Below Average');
  // });
  // it('returns "Average" if distance is less than 2400 meters', function(){
  //   expect(person.description).toEqual('Average');
  // });
  // it('returns "Above Average" if distance is less than 2700 meters', function(){
  //   expect(person.description).toEqual('Above Average');
  // });
  // it('returns "Excellent" if distance is greater than 2700 meters', function(){
  //   expect(person.description).toEqual('Excellent');
  // });
})
