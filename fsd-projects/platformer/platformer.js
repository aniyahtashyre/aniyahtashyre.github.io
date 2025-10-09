$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 300, 130, 14, "hotpink")
createPlatform(200, 400, 100, 13, "red")
createPlatform(250, 500, 150, 12, "blue")
createPlatform(400, 4500, 200, 11, "purple")
createPlatform(500, 550, 130, 10, "black")
createPlatform(600, 650, 120, 8, "orange")



    // TODO 3 - Create Collectables
createCollectable("database", 500, 100, 0.5, 0.7)
createCollectable("steve", 200, 450);
createCollectable("diamond", 200, 170, 0.5, 0.7)

    
    // TODO 4 - Create Cannons
createCannon("top",  450, 2000)
createCannon("bottom", 200, 2000)
createCannon("right", 400, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
