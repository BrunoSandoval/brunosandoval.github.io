(()=>{
  var e={
    40(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/lovelace_anchor_luminance.jpg","metadata": null,"name":"lovelace_anchor","type": "PLANAR","properties": {"left": 0,"top": 126,"width": 2439,"height": 3252,"isRotated": false,"originalWidth": 2439,"originalHeight": 3504},"resources": {"originalImage":"lovelace_anchor_original.jpg","croppedImage": "lovelace_anchor_cropped.jpg","thumbnailImage":"lovelace_anchor_thumbnail.jpg","luminanceImage":"lovelace_anchor_luminance.jpg"},"created": 1792095377230,"updated": 1792095377230}')
    },
    41(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/murray_anchor_luminance.jpg","metadata": null,"name": "murray_anchor","type": "PLANAR","properties": {"left": 2,"top": 0,"width": 1538,"height": 2051,"isRotated": false,"originalWidth": 1542,"originalHeight": 2051},"resources": {"originalImage": "murray_anchor_original.jpg","croppedImage": "murray_anchor_cropped.jpg","thumbnailImage":"murray_anchor_thumbnail.jpg","luminanceImage": "murray_anchor_luminance.jpg"},"created":1792712530177,"updated": 1792712530177}')
    },
    42(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/turing_anchor_luminance.png","metadata": null,"name": "turing_anchor","type": "PLANAR","properties": {"left": 0,"top": 0,"width": 752,"height": 1002,"isRotated": false,"originalWidth": 752,"originalHeight": 1002},"resources": {"originalImage": "turing_anchor_original.png","croppedImage": "turing_anchor_cropped.png","thumbnailImage": "turing_anchor_thumbnail.png","luminanceImage": "turing_anchor_luminance.png"},"created": 1791836728856,"updated": 1791836728856}')
    },
    43(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/lamarr_anchor_luminance.png","metadata": null,"name": "lamarr_anchor","type": "PLANAR","properties": {"left": 52,"top": 0,"width": 1016,"height": 1354,"isRotated": false,"originalWidth": 1119,"originalHeight": 1354},"resources": {"originalImage": "lamarr_anchor_original.png","croppedImage": "lamarr_anchor_cropped.png","thumbnailImage":"lamarr_anchor_thumbnail.png","luminanceImage": "lamarr_anchor_luminance.png"},"created":1792182861844,"updated": 1792182861844}')
    },
    44(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/heafield_anchor_luminance.png","metadata": null,"name": "heafield_anchor","type":"PLANAR","properties": {"left": 3,"top": 0,"width": 521,"height": 694,"isRotated": false,"originalWidth": 527,"originalHeight": 694},"resources": {"originalImage": "heafield_anchor_original.png","croppedImage": "heafield_anchor_cropped.png","thumbnailImage": "heafield_anchor_thumbnail.png","luminanceImage": "heafield_anchor_luminance.png"},"created": 1792185519741,"updated": 1792185519741}')
    },
    45(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/ritchie_anchor_luminance.jpg","metadata": null,"name": "ritchie_anchor","type":"PLANAR","properties": {"left": 10,"top": 0,"width": 538,"height": 717,"isRotated": false,"originalWidth": 558,"originalHeight": 717},"resources": {"originalImage": "ritchie_anchor_original.jpg","croppedImage": "ritchie_anchor_cropped.jpg","thumbnailImage": "ritchie_anchor_thumbnail.jpg","luminanceImage": "ritchie_anchor_luminance.jpg"},"created":1792712613693,"updated": 1792712613693}')
    },
    46(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/candle_anchor_luminance.jpg","metadata": null,"name": "candle_anchor","type": "PLANAR","properties": {"left": 0,"top": 40,"width": 690,"height": 920,"isRotated": false,"originalWidth": 690,"originalHeight": 1000},"resources": {"originalImage": "candle_anchor_original.jpg","croppedImage": "candle_anchor_cropped.jpg","thumbnailImage":"candle_anchor_thumbnail.jpg","luminanceImage": "candle_anchor_luminance.jpg"},"created":1792966157043,"updated": 1792966157043}')
    },
    47(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/fruit_anchor_luminance.jpg","metadata": null,"name": "fruit_anchor","type": "PLANAR","properties": {"left": 0,"top": 98,"width": 1168,"height": 1557,"isRotated": false,"originalWidth": 1168,"originalHeight": 1752},"resources": {"originalImage": "fruit_anchor_original.jpg","croppedImage": "fruit_anchor_cropped.jpg","thumbnailImage":"fruit_anchor_thumbnail.jpg","luminanceImage": "fruit_anchor_luminance.jpg"},"created":1792977061676,"updated": 1792977061676}')
    },
    48(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/skull_anchor_luminance.jpg","metadata": null,"name": "skull_anchor","type": "PLANAR","properties": {"left": 69,"top": 0,"width": 775,"height": 1033,"isRotated": false,"originalWidth": 913,"originalHeight": 1033},"resources": {"originalImage": "skull_anchor_original.jpg","croppedImage": "skull_anchor_cropped.jpg","thumbnailImage":"skull_anchor_thumbnail.jpg","luminanceImage": "skull_anchor_luminance.jpg"},"created":1792976862268,"updated": 1792976862268}')
    },
    49(e){"use strict";
      e.exports=JSON.parse('{"imagePath": "image-targets/arc_anchor_luminance.png","metadata": null,"name": "arc_anchor","type": "PLANAR","properties": {"left": 8,"top": 0,"width": 480,"height": 640,"isRotated": false,"originalWidth": 495,"originalHeight": 640},"resources": {"originalImage": "arc_anchor_original.png","croppedImage": "arc_anchor_cropped.png","thumbnailImage":"arc_anchor_thumbnail.png","luminanceImage": "arc_anchor_luminance.png"},"created":1793059089369,"updated": 1793059089369}')
    }
  },
  t={};

  function a(r){
    var i=t[r];
    if(void 0!==i)
      return i.exports;
    var g=t[r]={exports:{}};
    return e[r](g,g.exports,a),g.exports
  }
  var r=function(){
    XR8.XrController.configure({imageTargetData:[a(40), a(41), a(42), a(43), a(44), a(45), a(46), a(47), a(48), a(49)]})
  };
  window.XR8 ? r() : window.addEventListener("xrloaded", r)
})();
