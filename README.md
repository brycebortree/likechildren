![Opening frame of Simmer](./assets/simmer.jpg?raw=true "Opening frame")

# Simmer

A poem that's interactive through click or your keyboard arrow keys.

## Website
[Simmer](http://brytree.github.io/likechildren)


### Installing

Clone down this repo, then right click index.html and open in browser.


### Code sample
Working out the code for the left arrow key which pulls up the last line of the poem and highlights it. 

This section keeps track of which array within storyline the poem is on, in case the user wants to go back from the first line of a verse array. It then clears the words div, and establishes which lines should be faded to enable the most recent one to not be given the dimming "inactive" class.

```
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        words.innerHTML = '';
        $("span").removeClass();
        $("span").addClass("inactive");
        if(j === 1) {
          i--; 

          if(!storyline[i]){
            $('#fader').show();
          } else {
            j = storyline[i].length;
          }

          for(var l = 0; l <= storyline[i].length; l++){
            words.innerHTML = '';
            words.innerHTML = words.innerHTML + storyline[i][l];
          }
        };

        words.innerHTML = '';
        for(var k = 0; k < j - 1; k++){
          $("span").addClass("inactive");
          words.innerHTML = words.innerHTML + storyline[i][k];
        }
        j--;
        break;
```


## Acknowledgments
* 
* Profile image and banner image for Twitter using [Unsplash](https://unsplash.com) images

