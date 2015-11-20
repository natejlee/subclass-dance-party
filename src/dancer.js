// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  // this.noCollision();

};

  makeDancer.prototype.step = function(){
    // var currCall = this;

    // setTimeout(function(){
    //   currCall.step();
    // }, this.timeBetweenSteps);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    var styleSettings = {
      top: top,
      left: left
    };
     this.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function(top, left) {

    var styleSettings = {
      top: top,
      left: 0,
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.noCollision = function(top, left) {


    // var styleSettings = {
    //   top: top,
    //   left: left
    // }
    // this.$node.css(styleSettings);

    return Math.sqrt(Math.pow(this.top, 2) + Math.pow(this.left, 2));

  };

