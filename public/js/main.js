

  // Part 1 javascript functionality ends here
$(document).ready(function() {
  if (!$("#myCanvas").tagcanvas({
    textColour: "#FFFFFF",
    outlineColour: "transparent",
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.05,
    weight: true,
  }, "tags")) {
    $("#myCanvasContainer");
  }
});


