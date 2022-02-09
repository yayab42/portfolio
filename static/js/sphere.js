// const myTags = [
//     'JavaScript', 'CSS', 'HTML',
//     'C', 'C++', 'React',
//     'Python', 'Java', 'git',
//     'django', 'Node.js', 'OpenCV',
//     'GCP', 'MySQL', 'jQuery',
// ];


// var tagCloud = TagCloud('.content', myTags,{

//     // radius in px
//     radius: 175,
  
//     // animation speed
//     // slow, normal, fast
//     maxSpeed: 'fast',
//     initSpeed: 'fast',
  
//     // 0 = top
//     // 90 = left
//     // 135 = right-bottom
//     direction: 135,
  
//     // interact with cursor move on mouse out
//     keep: true
  
//   }); 


$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      outlineMethod: "none",
      initial:[0.4,-0.2],
      noSelect : "true",
      shape: 'sphere',
      textColour: '#42FF7D',
      reverse: true,
      pinchZoom : false,
      wheelZoom : false,
      depth: 0.8,
      maxSpeed: 0.05,
      textFont: null,
      weightMode:'both',
      weight: true,
      weightGradient: {
       0:    '#f00', // red
       //0.33: '#ff0', // yellow
       //0.66: '#0f0', // green
       1:    '#00f'  // blue
      }
    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  });
