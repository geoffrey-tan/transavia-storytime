$.pressureConfig({
  polyfill: false
});

var block = {
  start: function(event){
    console.log('start', event);
  },

  change: function(force, event){
    // event.preventDefault();
    this.style.opacity = Pressure.map(force, 0, 1, 1, 0);
    this.innerHTML = force;
    console.log('change', force);
  },

  end: function(){
    console.log('end');
    this.style.opacity = '1';
    this.innerHTML = 0;
  },

  unsupported: function(){
    console.log(this);
    this.innerHTML = 'Your device / browser does not support this :(';
  }
}

Pressure.set(document.querySelectorAll('#el1'), block);
Pressure.set($('#el2'), block, {only: 'desktop', polyfill: true, polyfillSpeed: 5000});
Pressure.set('#el3', block, {only: 'mobile'});

$('#el1-jquery').pressure(block);
$('#el2-jquery').pressure(block, {only: 'desktop'});
$('#el3-jquery').pressure(block, {only: 'mobile'});

$('img').pressure({
  change: function(force, event){
    console.log(force);
  }
});
