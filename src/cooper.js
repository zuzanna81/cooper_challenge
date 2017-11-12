function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
  }
function cooper(attr){
  if(attr.gender == 'female'){
    if(attr.age >= 13 && attr.age <= 14){
      if(attr.distance < 1500){
        return "Poor";
      } else if(attr.distance < 1600){
        return 'Below Average';
      } else if(attr.distance < 1900){
        return 'Average';
      } else if(attr.distance < 2000){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 15 && attr.age <= 16){
      if(attr.distance < 1600){
        return "Poor";
      } else if(attr.distance < 1700){
        return 'Below Average';
      } else if(attr.distance < 2000){
        return 'Average';
      } else if(attr.distance < 2100){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 17 && attr.age <= 19){
      if(attr.distance < 1700){
        return "Poor";
      } else if(attr.distance < 1800){
        return 'Below Average';
      } else if(attr.distance < 2100){
        return 'Average';
      } else if(attr.distance < 2300){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 20 && attr.age <= 29){
      if(attr.distance < 1500){
        return "Poor";
      } else if(attr.distance < 1800){
        return 'Below Average';
      } else if(attr.distance < 2200){
        return 'Average';
      } else if(attr.distance < 2700){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 30 && attr.age <= 39){
      if(attr.distance < 1400){
        return "Poor";
      } else if(attr.distance < 1700){
        return 'Below Average';
      } else if(attr.distance < 2000){
        return 'Average';
      } else if(attr.distance < 2500){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 40 && attr.age <= 49){
      if(attr.distance < 1200){
        return "Poor";
      } else if(attr.distance < 1500){
        return 'Below Average';
      } else if(attr.distance < 1900){
        return 'Average';
      } else if(attr.distance < 2300){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age > 50){
      if(attr.distance < 1100){
        return "Poor";
      } else if(attr.distance < 1400){
        return 'Below Average';
      } else if(attr.distance < 1700){
        return 'Average';
      } else if(attr.distance < 2200){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
  }
  if(attr.gender == 'male'){
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
    if(attr.age >= 15 && attr.age <= 16){
      if(attr.distance < 2200){
        return "Poor";
      } else if(attr.distance < 2300){
        return 'Below Average';
      } else if(attr.distance < 2500){
        return 'Average';
      } else if(attr.distance < 2800){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 17 && attr.age <= 19){
      if(attr.distance < 2300){
        return "Poor";
      } else if(attr.distance < 2500){
        return 'Below Average';
      } else if(attr.distance < 2700){
        return 'Average';
      } else if(attr.distance < 3000){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 20 && attr.age <= 29){
      if(attr.distance < 1600){
        return "Poor";
      } else if(attr.distance < 2200){
        return 'Below Average';
      } else if(attr.distance < 2400){
        return 'Average';
      } else if(attr.distance < 2800){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 30 && attr.age <= 39){
      if(attr.distance < 1500){
        return "Poor";
      } else if(attr.distance < 2000){
        return 'Below Average';
      } else if(attr.distance < 2300){
        return 'Average';
      } else if(attr.distance < 2700){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age >= 40 && attr.age <= 49){
      if(attr.distance < 1400){
        return "Poor";
      } else if(attr.distance < 1700){
        return 'Below Average';
      } else if(attr.distance < 2100){
        return 'Average';
      } else if(attr.distance < 2500){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
    if(attr.age > 50){
      if(attr.distance < 1300){
        return "Poor";
      } else if(attr.distance < 1600){
        return 'Below Average';
      } else if(attr.distance < 2000){
        return 'Average';
      } else if(attr.distance < 2400){
        return 'Above Average';
      } else {
        return 'Excellent';
      }
    }
  }
}
