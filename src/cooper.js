function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;

Person.prototype.description = function(meters){
  // function description(distance){
    if(attr.gender == 'female'){
      if(attr.age >= 13 && attr.age <= 14){
        if(attr.distance < 2100){
          return "Poor";
        } else if(attr.distance < 2200){
          return 'Below Average';
        } else if(attr.distance < 2400){
          return 'Average';
        } else if(attr.distance < 2700){
          return 'Above Average';
        } else {
          return 'Excellent';
        }
      }
    }
  }
}
