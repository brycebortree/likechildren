  $(document).ready(function(){
    console.log('lock/load');

    var div = document.getElementById('main');
    var i = 0;
    var j = 0;

    var storyline = [
      ['<span>In this moment, fear is having nothing to say </span>',
      '<span>and you’re right you have nothing to say / </span>',
      '<span>so instead, let’s imagine us at the bottom of the ocean </span>',
      '<span>and let’s imagine the clay underneath the soles of our feet, </span>',
      '<span>how it doesn’t shove back, just puffs up and settles into the air, </span>',
      '<span>which is water we can breathe in and in, and </span>'],

      ['<span>we cannot breathe and we both know it  </span>',
      '<span>but we love it and it is why we are there, </span>',
      '<span>there is no pressure down there, </span>',
      '<span>this is fool’s gold, </span>',
      '<span>there is actually all the pressure in the world weighing down, </span>',
      '<span>you are tectonic and self-contradicting, </span>',
      '<span>and if all you ever say breaks something you’ve already said  </span>',
      '<span>then you’ve gone ahead and said </span>',
      '<span>nothing at all: </span>',
      '<span>this is imagining someone else hearing this: </span>',
      '<span>what would they think / what would they think /what would they  </span>',
      '<span>this is foolish / the way sounds come back </span>',
      '<span>and the way you steal from yourself more than anyone should be allowed to </span>',
      '<span>and you’d think that would make you consistent but instead / </span>',
      '<span>you are back </span>',
      '<span>imagining the gray of car-sized stones under the ocean,  </span>',
      '<span>imagining the shadows on top of them, </span>',
      '<span>pushing car-sized boulders together like children </span>',
      '<span>or inflatable stones into a dining room table set </span>',
      '<span>imagining their nooks and notches imagining all of the things each of them could hold and hold onto </span>',
      '<span>I bet they could hold quarters or dimes or our hands just perfect. </span>'],

      ['<span>Can you forget what you’ve known for years in a matter of days,  </span>',
      '<span>could you slip and fit yourself through these cracks </span>',
      '<span>when you thought for so long you were the mortar and the heaving oak, </span>',
      '<span>I guess this is how things go if you let them, </span>',
      '<span>so I guess let’s imagine ourselves at the bottom of the ocean </span>',
      '<span>flipping stones bigger than we, darling, bigger than we, </span> ',
      '<span>with you and I on the same side,  </span>',
      '<span>lets push those boulders and watch them flip,/ flip like children / can’t you see them flipping / like children / flipping, </span> ',
      '<span>you see you’ve made them this way, / we are now flipping them, / children,  </span>',
      '<span>like we under the way under deep down / no boots or boats or associated bodies / just broken light / and children </span>',
      '<span>they’re flipping keep them flipping and push, / darling,/ no, I don’t know where to, </span>',
      '<span>but we will call them Ann or Georgy or Sisyph or Aristophanes, / call them Samuel and Sammy and make them  </span>',
      '<span>pigtailed and bonnets and saddle shoes / let’s imagine pushing them. </span>'],
      
      ['<span>You, are a playbox lost in a coffin. </span>',
      '<span>I’ve lost it, I wonder if they see us. </span> <span> If they ever did. </span>',
      '<span>Be honest, he said, / be honest with every last detail and nook and cranny he said he said </span>'],
      
      ['<span>I don’t remember what he said </span>',
      '<span>I’ve since gone blank and blanket, </span>',
      '<span>have you ever been so aware of yourself that you want only one other </span>',
      '<span>so let’s be aware of / and wear each other tonight  </span>',
      '<span>can we do that, / I want only your hands in mine and mind, </span>',
      '<span>let’s pretend we know how to fill these spaces / let’s bumper-boat these two cities and collide </span>',
      '<span>let’s build a boy and build a girl and let’s throw them like broken glass to the pile of leaves out back / let’s go out back no, </span>',
      '<span>let’s sink ourselves like children / like bodies / like coughed-up throats </span>',
      '<span>let’s push together these boulders and flip / let’s flip / and flipping and you get one side </span>'],
      
      ['<span>and I will get the other / and we will push until our ankles are solid ground </span>',
      '<span>and let’s push until we dig down deep / and sink into the kitchen/ into the kitchen sink </span>',
      '<span>let’s go sinking into the ocean / or the lake / it’s where the boulders are, </span> ',
      '<span>yes that’s where we will go, </span>',
      '<span>let’s push until we are pushing up / and let’s push until we are wrists and bloodied fingers  </span>',
      '<span>and the sun is blacked out above us / and let’s push ourselves down until we are gone </span>',
      '<span>and then we will be children, darling, / and we will be like children </span>',
      '<span>and Georgy and Ann and Sis / and we will rise down like a leaf thrown </span>',
      '<span>and we will melt and our colors will gray </span>',
      '<span>and we will puff up like boulders down there, darling, </span>',
      '<span>we will hole ourselves like children / digging down deep to the bottom: </span>',
      '<span>watch them, kids, / watch them do their dance and watch them, </span>',
      '<span>the way the sunken, heaving oak stays in the dark and deep water / for years and years and watch them, these babies </span>',
      '<span>and watch for someone to press their fingers / into our busting holes </span>',
      '<span>and the compulsive hollows that pepper our own bodies, </span>',
      '<span>and watch them, watch everyone, pushing. </span>']
      ]

    $('#main').click(function(){
      $('#fader').hide();
    });

    div.addEventListener('click', function(event){
      var words = document.getElementById('words');
      words.innerHTML= words.innerHTML + storyline[i][j];
      j++;

      if(j === storyline[i].length) {i++};
    });


    $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $('#words').html(storyline[i--])
        break;

        case 38: // up
        break;

        case 39: // right
        $('#words').html(storyline[i++])
        break;

        case 40: // down
        break;

        default: return; 
    }
    e.preventDefault(); 
  });

  // for video background

  var vid = document.getElementById("bgvid");
  var pauseButton = document.querySelector("#main button");

  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function()
  {
  // only functional if "loop" is removed 
  vid.pause();
  // to capture IE10
  vidFade();
  }); 

  pauseButton.addEventListener("click", function() {
    // vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "Pause";
    } else {
      vid.pause();
      pauseButton.innerHTML = "Paused";
    }
})

  // window height for vertical centering
  $(function(){
      var windowH = $(window).height();
      var wrapperH = $('.container').height();
      if(windowH > wrapperH) {                            
          $('.container').css({'height':($(window).height())+'px'});
      }                                                                               
      $(window).resize(function(){
          var windowH = $(window).height();
          var wrapperH = $('.container').height();
          var differenceH = windowH - wrapperH;
          var newH = wrapperH + differenceH;
          var mainH = $('#main').height();
          if(windowH > mainH) {
              $('.container').css('height', (newH)+'px');
          }

      })          
  });


});







