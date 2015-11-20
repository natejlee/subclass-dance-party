var johnnyDancer = function(top, left, timeBetweenRotation) {
  //Set johnny dancer a sub class by calling dancer
  makeDancer.call(this, top, left, timeBetweenRotation);
  this.$node.addClass('johnnyDancer');


}

johnnyDancer.prototype = Object.create(makeDancer.prototype);
johnnyDancer.prototype.constructor = johnnyDancer;

johnnyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

}
