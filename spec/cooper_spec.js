describe("person", function() {
  it('returns "Poor" if distance is less than 2100 meters', function(){
    expect(person({age: 13, gender: 'female', distance: 2000})).toEqual('Poor');
  });
  it('returns "Below Average" if distance is less than 2200 meters', function(){
    expect(person({age: 14, gender: 'female', distance: 2100})).toEqual('Below Average');
  });
  it('returns "Average" if distance is less than 2400 meters', function(){
    expect(person({age: 13, gender: 'female', distance: 2200})).toEqual('Average');
  });
  it('returns "Above Average" if distance is less than 2700 meters', function(){
    expect(person({age: 13, gender: 'female', distance: 2400})).toEqual('Above Average');
  });
  it('returns "Excellent" if distance is greater than 2700 meters', function(){
    expect(person({age: 13, gender: 'female', distance: 2700})).toEqual('Excellent');
  });
});
