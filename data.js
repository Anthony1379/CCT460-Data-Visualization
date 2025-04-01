// Auto theft data from 158 areas
const data = [
    {area_id: 1, autotheft: 20},
    {area_id: 2, autotheft: 18},
    {area_id: 3, autotheft: 27},
    {area_id: 4, autotheft: 35},
    {area_id: 5, autotheft: 46},
    {area_id: 6, autotheft: 16},
    {area_id: 7, autotheft: 150},
    {area_id: 8, autotheft: 97},
    {area_id: 9, autotheft: 164},
    {area_id: 10, autotheft: 25},
    {area_id: 11, autotheft: 88},
    {area_id: 12, autotheft: 45},
    {area_id: 13, autotheft: 40},
    {area_id: 14, autotheft: 57},
    {area_id: 15, autotheft: 53},
    {area_id: 16, autotheft: 64},
    {area_id: 17, autotheft: 65},
    {area_id: 18, autotheft: 55},
    {area_id: 19, autotheft: 157},
    {area_id: 20, autotheft: 102},
    {area_id: 21, autotheft: 105},
    {area_id: 22, autotheft: 77},
    {area_id: 23, autotheft: 23},
    {area_id: 24, autotheft: 46},
    {area_id: 25, autotheft: 51},
    {area_id: 26, autotheft: 81},
    {area_id: 27, autotheft: 50},
    {area_id: 28, autotheft: 62},
    {area_id: 29, autotheft: 47},
    {area_id: 30, autotheft: 305},
    {area_id: 31, autotheft: 125},
    {area_id: 32, autotheft: 129},
    {area_id: 33, autotheft: 100},
    {area_id: 34, autotheft: 34},
    {area_id: 35, autotheft: 45},
    {area_id: 36, autotheft: 62},
    {area_id: 37, autotheft: 73},
    {area_id: 38, autotheft: 45},
    {area_id: 39, autotheft: 38},
    {area_id: 40, autotheft: 43},
    {area_id: 41, autotheft: 34},
    {area_id: 42, autotheft: 72},
    {area_id: 43, autotheft: 24},
    {area_id: 44, autotheft: 14},
    {area_id: 45, autotheft: 78},
    {area_id: 46, autotheft: 70},
    {area_id: 47, autotheft: 294},
    {area_id: 48, autotheft: 174},
    {area_id: 49, autotheft: 24},
    {area_id: 50, autotheft: 34},
    {area_id: 51, autotheft: 37},
    {area_id: 52, autotheft: 59},
    {area_id: 53, autotheft: 54},
    {area_id: 54, autotheft: 82},
    {area_id: 55, autotheft: 123},
    {area_id: 56, autotheft: 55},
    {area_id: 57, autotheft: 95},
    {area_id: 58, autotheft: 40},
    {area_id: 59, autotheft: 57},
    {area_id: 60, autotheft: 144},
    {area_id: 61, autotheft: 40},
    {area_id: 62, autotheft: 43},
    {area_id: 63, autotheft: 84},
    {area_id: 64, autotheft: 27},
    {area_id: 65, autotheft: 42},
    {area_id: 66, autotheft: 23},
    {area_id: 67, autotheft: 46},
    {area_id: 68, autotheft: 23},
    {area_id: 69, autotheft: 121},
    {area_id: 70, autotheft: 208},
    {area_id: 71, autotheft: 103},
    {area_id: 72, autotheft: 63},
    {area_id: 73, autotheft: 55},
    {area_id: 74, autotheft: 22},
    {area_id: 75, autotheft: 108},
    {area_id: 76, autotheft: 23},
    {area_id: 77, autotheft: 77},
    {area_id: 78, autotheft: 34},
    {area_id: 79, autotheft: 13},
    {area_id: 80, autotheft: 9},
    {area_id: 81, autotheft: 48},
    {area_id: 82, autotheft: 10},
    {area_id: 83, autotheft: 43},
    {area_id: 84, autotheft: 14},
    {area_id: 85, autotheft: 19},
    {area_id: 86, autotheft: 82},
    {area_id: 87, autotheft: 6},
    {area_id: 88, autotheft: 27},
    {area_id: 89, autotheft: 33},
    {area_id: 90, autotheft: 26},
    {area_id: 91, autotheft: 30},
    {area_id: 92, autotheft: 32},
    {area_id: 93, autotheft: 59},
    {area_id: 94, autotheft: 51},
    {area_id: 95, autotheft: 28},
    {area_id: 96, autotheft: 16},
    {area_id: 97, autotheft: 51},
    {area_id: 98, autotheft: 32},
    {area_id: 99, autotheft: 43},
    {area_id: 100, autotheft: 42},
    {area_id: 101, autotheft: 54},
    {area_id: 102, autotheft: 27},
    {area_id: 103, autotheft: 43},
    {area_id: 104, autotheft: 23},
    {area_id: 105, autotheft: 18},
    {area_id: 106, autotheft: 28},
    {area_id: 107, autotheft: 163},
    {area_id: 108, autotheft: 46},
    {area_id: 109, autotheft: 38},
    {area_id: 110, autotheft: 55},
    {area_id: 111, autotheft: 155},
    {area_id: 112, autotheft: 81},
    {area_id: 113, autotheft: 138},
    {area_id: 114, autotheft: 228},
    {area_id: 115, autotheft: 120},
    {area_id: 116, autotheft: 62},
    {area_id: 117, autotheft: 218},
    {area_id: 118, autotheft: 84},
    {area_id: 119, autotheft: 76},
    {area_id: 120, autotheft: 154},
    {area_id: 121, autotheft: 72},
    {area_id: 122, autotheft: 202},
    {area_id: 123, autotheft: 77},
    {area_id: 124, autotheft: 48},
    {area_id: 125, autotheft: 36},
    {area_id: 126, autotheft: 264},
    {area_id: 127, autotheft: 120},
    {area_id: 128, autotheft: 17},
    {area_id: 129, autotheft: 113},
    {area_id: 130, autotheft: 56},
    {area_id: 131, autotheft: 61},
    {area_id: 132, autotheft: 69},
    {area_id: 133, autotheft: 98},
    {area_id: 134, autotheft: 76},
    {area_id: 135, autotheft: 35},
    {area_id: 136, autotheft: 74},
    {area_id: 137, autotheft: 50},
    {area_id: 138, autotheft: 37},
    {area_id: 139, autotheft: 38},
    {area_id: 140, autotheft: 149},
    {area_id: 141, autotheft: 90},
    {area_id: 142, autotheft: 65},
    {area_id: 143, autotheft: 49},
    {area_id: 144, autotheft: 120},
    {area_id: 145, autotheft: 119},
    {area_id: 146, autotheft: 117},
    {area_id: 147, autotheft: 25},
    {area_id: 148, autotheft: 106},
    {area_id: 149, autotheft: 115},
    {area_id: 150, autotheft: 39},
    {area_id: 151, autotheft: 75},
    {area_id: 152, autotheft: 49},
    {area_id: 153, autotheft: 151},
    {area_id: 154, autotheft: 837},
    {area_id: 155, autotheft: 84},
    {area_id: 156, autotheft: 108},
    {area_id: 157, autotheft: 122},
    {area_id: 158, autotheft: 132}
  ];
  
  // Setting variables for visualization
  let margin, graphWidth, graphHeight, barWidth, maxAutotheft;
  let hoveredBar = -1;
  let tooltip;
  let sortedData;
  
  function setup() {
    // Creating a canvas that fits within the window
    let canvas = createCanvas(windowWidth - 50, 600);
    canvas.parent('canvas-container');
    
    // Set margin for graph
    margin = 60;
    
    // Prepare data for visualization
    // Data will be sorted by area_id in ascending order (1-158)
    sortedData = [...data].sort((a, b) => a.area_id - b.area_id);
    
    // Find maximum auto theft value for scaling
    maxAutotheft = Math.max(...sortedData.map(item => item.autotheft));
    
    // Calculate graph dimensions
    graphWidth = width - 2 * margin;
    graphHeight = height - 2 * margin;
    barWidth = graphWidth / sortedData.length;
    
    // Get tooltip element
    tooltip = select('#tooltip');
    
    // Set the draw loop to update only when needed
    noLoop();
  }
  
  function draw() {
    background(245);
    
    // Draw title and labels
    fill(50);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Auto Theft Rates by Neighbourhood Area ID (2023)", width/2, margin/2);
    
    textSize(14);
    // X-axis label
    text("Neighbourhood Area ID", width/2, height - margin/3);
    
    // Y-axis label (rotated)
    push();
    translate(margin/3, height/2);
    rotate(-PI/2);
    text("Number of Auto Thefts", 0, 0);
    pop();
    
    // Draw axes
    stroke(0);
    strokeWeight(1);
    line(margin, height - margin, width - margin, height - margin); // x-axis
    line(margin, height - margin, margin, margin); // y-axis
    
    // Draw y-axis grid lines and labels
    stroke(200);
    fill(80);
    textAlign(RIGHT, CENTER);
    textSize(12);
    
    // Draw 5 evenly spaced grid lines and labels
    for (let i = 0; i <= 5; i++) {
      let y = height - margin - (i * graphHeight / 5);
      let value = round(maxAutotheft * i / 5);
      
      // Grid line
      line(margin, y, width - margin, y);
      
      // Label
      noStroke();
      text(value, margin - 10, y);
      stroke(200);
    }
    
    // Draw bars
    noStroke();
    
    for (let i = 0; i < sortedData.length; i++) {
      // Calculate bar position and dimensions
      let x = margin + i * barWidth;
      let barHeight = map(sortedData[i].autotheft, 0, maxAutotheft, 0, graphHeight);
      let y = height - margin - barHeight;
      
      // Use colour gradient from blue to red based on value
      let inter = map(sortedData[i].autotheft, 0, maxAutotheft, 0, 1);
      let col = lerpColor(color(0, 0, 255), color(255, 0, 0), inter);
      
      // Highlight over the hovered bar
      if (hoveredBar === i) {
        fill(255, 255, 0); // Highlight color
      } else {
        fill(col);
      }
      
      // Draw the bar
      rect(x, y, barWidth * 0.8, barHeight);
    }
    
    // Draw x-axis labels (show every 10th area for readability)
    fill(80);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(10);
    
    for (let i = 0; i < sortedData.length; i += 10) {
      let x = margin + i * barWidth + barWidth/2;
      text(sortedData[i].area_id, x, height - margin + 5);
      
      // Tick mark
      stroke(0);
      line(x, height - margin, x, height - margin + 3);
    }
  }
  
  // Handle mouse movement for interactivity
  function mouseMoved() {
    let previousHoveredBar = hoveredBar;
    hoveredBar = -1;
    
    // Check if mouse is over any bar
    for (let i = 0; i < sortedData.length; i++) {
      let x = margin + i * barWidth;
      let barHeight = map(sortedData[i].autotheft, 0, maxAutotheft, 0, graphHeight);
      let y = height - margin - barHeight;
      
      if (mouseX > x && mouseX < x + barWidth * 0.8 && 
          mouseY > y && mouseY < height - margin) {
        hoveredBar = i;
        
        // Update tooltip
        tooltip.html(`
          <strong>Area ID:</strong> ${sortedData[i].area_id}<br>
          <strong>Auto Thefts:</strong> ${sortedData[i].autotheft}
        `);
        tooltip.style('display', 'block');
        tooltip.style('left', `${mouseX + 10}px`);
        tooltip.style('top', `${mouseY + 10}px`);
        
        break;
      }
    }
    
    // Hide tooltip if not over any bar
    if (hoveredBar === -1) {
      tooltip.style('display', 'none');
    }
    
    // Only redraw if the hovered bar changed
    if (previousHoveredBar !== hoveredBar) {
      redraw();
    }
  }
  
  // Handle window resize
  function windowResized() {
    resizeCanvas(windowWidth - 50, 600);
    graphWidth = width - 2 * margin;
    barWidth = graphWidth / sortedData.length;
    redraw();
  }