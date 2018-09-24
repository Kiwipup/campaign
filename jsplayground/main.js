function newPokestop(){
// We want to add the name and url from this transform
// to top of the UL of Pokestops

//1. Grab the input name
new_name = document.getElementById("new_stop_name");
console.log(new_name.value);

//2. Grab the input url
new_url = document.getElementById("new_stop_url");
console.log(new_url.value);

//2a Make sure there is a protocol at the beginning of the url. (to DO)

//3. Grab the UL
pokestops = document.getElementById('pokestops');

//4. Create new LI node under the UL

new_li = document.createElement("li");

//create a new anchor tag
new_a = document.createElement("a");

//creat a new text node (what will be displayed in the window)
new_text = document.createTextNode(new_name.value);

// Add the text to the anchor (this is the text between <a></a>)
new_a.appendChild(new_text);

//Add the href attirbute to the anchor
new_a.href = new_url.value;

//Add the anchor to the LI
new_li.appendChild(new_a);

//Add the li to the ul.
pokestops.prependChild(new_stop);

//5. Blank out the name and the url.
new_name.value = '';
new_url.value = '';


//6. Update the alert

}


function newGym() {
  message = document.getElementById('gym-message');
  gyms = document.getElementById('gyms');
  new_name = document.getElementById('new_gym_name');
  new_url = document.getElementById('new_gym_url');

  valid_match = /https?:\/\//iA;
  if
}
