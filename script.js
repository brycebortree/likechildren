  $(document).ready(function(){
    console.log('lock/load');
    $('h1#fadein').fadeIn(3000)

    var div = document.getElementById('main');
    var i = 0;

    var storyline = [
      ['<p>In this moment, fear is having nothing to say</p>',
      '<p>and you’re right you have nothing to say,</p>',
      '<p>so instead, let’s imagine us at the bottom of the ocean</p>',
      '<p>and let’s imagine the clay underneath the soles of our feet,</p>',
      '<p>how it doesn’t shove back, just puffs up and settles into the air,</p>',
      '<p>which is water we can breathe in and in, and</p>'],

      ['<p>we cannot breathe and we both know it </p>',
      '<p>but we love it and it is why we are there,</p>',
      '<p>there is no pressure down there,</p>',
      '<p>this is fool’s gold,</p>',
      '<p>there is actually all the pressure in the world weighing down,</p>',
      '<p>you are tectonic and self-contradicting,</p>',
      '<p>and if all you ever say breaks something you’ve already said </p>',
      '<p>then you’ve gone ahead and said</p>',
      '<p>nothing at all:</p>',
      '<p>this is imagining someone else hearing this:</p>',
      '<p>what would they think / what would they think /what would they </p>',
      '<p>this is foolish / the way sounds come back</p>',
      '<p>and the way you steal from yourself more than anyone should be allowed to</p>',
      '<p>and you’d think that would make you consistent but instead /</p>',
      '<p>you are back</p>',
      '<p>imagining the gray of car-sized stones under the ocean, </p>',
      '<p>imagining the shadows on top of them,</p>',
      '<p>pushing car-sized boulders together like children</p>',
      '<p>or inflatable stones into a dining room table set</p>',
      '<p>imagining their nooks and notches imagining all of the things each of them could hold and hold onto</p>',
      '<p>I bet they could hold quarters or dimes or our hands just perfect.</p>'],

      ['<p>Can you forget what you’ve known for years in a matter of days, </p>',
      '<p>could you slip and fit yourself through these cracks</p>',
      '<p>when you thought for so long you were the mortar and the heaving oak,</p>',
      '<p>I guess this is how things go if you let them,</p>',
      '<p>so I guess let’s imagine ourselves at the bottom of the ocean</p>',
      '<p>flipping stones bigger than we, darling, bigger than we,</p> ',
      '<p>with you and I on the same side, </p>',
      '<p>lets push those boulders and watch them flip,/ flip like children / can’t you see them flipping / like children / flipping,</p> ',
      '<p>you see you’ve made them this way, / we are now flipping them, / children, </p>',
      '<p>like we under the way under deep down / no boots or boats or associated bodies / just broken light / and children</p>',
      '<p>they’re flipping keep them flipping and push, / darling,/ no, I don’t know where to,</p>',
      '<p>but we will call them Ann or Georgy or Sisyph or Aristophanes, / call them Samuel and Sammy and make them </p>',
      '<p>pigtailed and bonnets and saddle shoes / let’s imagine pushing them.</p>'],
      
      ['<p>You, are a playbox lost in a coffin.</p>',
      '<p>I’ve lost it, I wonder if they see us.</p> <p> If they ever did.</p>',
      '<p>Be honest, he said, / be honest with every last detail and nook and cranny he said he said</p>'],
      
      ['<p>I don’t remember what he said</p>',
      '<p>I’ve since gone blank and blanket,</p>',
      '<p>have you ever been so aware of yourself that you want only one other</p>',
      '<p>so let’s be aware of / and wear each other tonight </p>',
      '<p>can we do that, / I want only your hands in mine and mind,</p>',
      '<p>let’s pretend we know how to fill these spaces / let’s bumper-boat these two cities and collide</p>',
      '<p>let’s build a boy and build a girl and let’s throw them like broken glass to the pile of leaves out back / let’s go out back no,</p>',
      '<p>let’s sink ourselves like children / like bodies / like coughed-up throats</p>',
      '<p>let’s push together these boulders and flip / let’s flip / and flipping and you get one side</p>'],
      
      ['<p>and I will get the other / and we will push until our ankles are solid ground</p>',
      '<p>and let’s push until we dig down deep / and sink into the kitchen/ into the kitchen sink</p>',
      '<p>let’s go sinking into the ocean / or the lake / it’s where the boulders are,</p> ',
      '<p>yes that’s where we will go,</p>',
      '<p>let’s push until we are pushing up / and let’s push until we are wrists and bloodied fingers </p>',
      '<p>and the sun is blacked out above us / and let’s push ourselves down until we are gone</p>',
      '<p>and then we will be children, darling, / and we will be like children</p>',
      '<p>and Georgy and Ann and Sis / and we will rise down like a leaf thrown</p>',
      '<p>and we will melt and our colors will gray</p>',
      '<p>and we will puff up like boulders down there, darling,</p>',
      '<p>we will hole ourselves like children / digging down deep to the bottom:</p>',
      '<p>watch them, kids, / watch them do their dance and watch them,</p>',
      '<p>the way the sunken, heaving oak stays in the dark and deep water / for years and years and watch them, these babies</p>',
      '<p>and watch for someone to press their fingers / into our busting holes</p>',
      '<p>and the compulsive hollows that pepper our own bodies,</p>',
      '<h4>and watch them, watch everyone, pushing.</h4>']
      ]


    div.addEventListener('click', function(event){
      var words = document.getElementById('words');
      words.innerHTML=storyline[i++];
      if(i === storyline.length) {i = 0};
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







