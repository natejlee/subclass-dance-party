var catDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('catDancer');

  // console.log("top", top);
  // console.log('left', left);
  // console.log("Distance", distance);
  this.closest = [];
   for(var i = 0; i < window.dancers.length; i++){
     var top = window.dancers[i].top;
     var left = window.dancers[i].left;
     var distance = this.noCollision(top, left);
     console.log("What is this distance", distance);
     if(distance < this.closest[0]) {
       this.closest.push(distance, top, left);
     }
     // closest.push()
  }

}

catDancer.prototype = Object.create(makeDancer.prototype);
catDancer.prototype.constructor = catDancer;

catDancer.prototype.step = function(){
  makeDancer.prototype.step.apply(this);

};
