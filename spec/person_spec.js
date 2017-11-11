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
})
