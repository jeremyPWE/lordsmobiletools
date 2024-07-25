const mockData = {
    equipment: [
      {
        id: 1,
        type: "mainhand",
        name: "Champion Blade",
        grades: {
          white: { Infantry_ATK: 3.2, Ranged_ATK: 3.2, Army_ATK: 2.4, Army_DEF: 2.75, Research_Speed: 2.4},
          green: {  Infantry_ATK: 6.2, Ranged_ATK: 6.2, Army_ATK: 4.65, Army_DEF: 5.25, Research_Speed: 4.65},
          blue: { Infantry_ATK: 9.4, Ranged_ATK: 9.4, Army_ATK: 7, Army_DEF: 8, Research_Speed: 7},
          purple: { Infantry_ATK: 13, Ranged_ATK: 13, Army_ATK: 9.5, Army_DEF: 10.75, Research_Speed: 9.5},
          gold: { Infantry_ATK: 20, Ranged_ATK: 20, Army_ATK: 15, Army_DEF: 17, Research_Speed: 15},
          mythic: {
            level0: {Infantry_ATK: 28, Ranged_ATK: 28, Army_ATK: 21, Army_DEF: 23.8, Research_Speed: 21, Cost: 0},
            level1: { Infantry_ATK: 28.4, Ranged_ATK: 28.4, Army_ATK: 21.3, Army_DEF: 24.1, Research_Speed: 21.3, Cost: 22},
            level2: { Infantry_ATK: 28.8, Ranged_ATK: 28.8, Army_ATK: 21.6, Army_DEF: 24.5, Research_Speed: 21.6, Cost: 33 },
            level3: { Infantry_ATK: 29.2, Ranged_ATK: 29.2, Army_ATK: 21.9, Army_DEF: 24.8, Research_Speed: 21.9, Cost: 39 },
            level4: {Infantry_ATK: 30, Ranged_ATK: 30, Army_ATK: 22.5, Army_DEF: 25.5, Research_Speed: 21.3, Cost: 88}
            // Add up to level 12
          }
        }
      },
      
      {
        id: 2,
        type: "helmet",
        name: "Champion Helm",
        grades: {
          white: { Infantry_ATK: 3.2, Ranged_ATK: 3.2, Army_ATK: 2.4, Army_DEF: 2.75, Research_Speed: 2.4},
          green: {  Infantry_ATK: 6.2, Ranged_ATK: 6.2, Army_ATK: 4.65, Army_DEF: 5.25, Research_Speed: 4.65},
          blue: { Infantry_ATK: 9.4, Ranged_ATK: 9.4, Army_ATK: 7, Army_DEF: 8, Research_Speed: 7},
          purple: { Infantry_ATK: 13, Ranged_ATK: 13, Army_ATK: 9.5, Army_DEF: 10.75, Research_Speed: 9.5},
          gold: { Infantry_ATK: 20, Ranged_ATK: 20, Army_ATK: 15, Army_DEF: 17, Research_Speed: 15},
          mythic: {
            level0: {Infantry_ATK: 28, Ranged_ATK: 28, Army_ATK: 21, Army_DEF: 23.8, Research_Speed: 21, Cost: 0},
            level1: { Infantry_ATK: 28.4, Ranged_ATK: 28.4, Army_ATK: 21.3, Army_DEF: 24.1, Research_Speed: 21.3, Cost: 22},
            level2: { Infantry_ATK: 28.8, Ranged_ATK: 28.8, Army_ATK: 21.6, Army_DEF: 24.5, Research_Speed: 21.6, Cost: 33 },
            level3: { Infantry_ATK: 29.2, Ranged_ATK: 29.2, Army_ATK: 21.9, Army_DEF: 24.8, Research_Speed: 21.9, Cost: 39 },
            level4: {Infantry_ATK: 30, Ranged_ATK: 30, Army_ATK: 22.5, Army_DEF: 25.5, Research_Speed: 21.3, Cost: 88}
            // Add up to level 12
          }
        }
      },
      
      {
        id: 3,
        type: "armor",
        name: "Champion Plate",
        grades: {
          white: { Infantry_ATK: 3.2, Ranged_ATK: 3.2, Army_ATK: 2.4, Army_DEF: 2.75, Research_Speed: 2.4},
          green: {  Infantry_ATK: 6.2, Ranged_ATK: 6.2, Army_ATK: 4.65, Army_DEF: 5.25, Research_Speed: 4.65},
          blue: { Infantry_ATK: 9.4, Ranged_ATK: 9.4, Army_ATK: 7, Army_DEF: 8, Research_Speed: 7},
          purple: { Infantry_ATK: 13, Ranged_ATK: 13, Army_ATK: 9.5, Army_DEF: 10.75, Research_Speed: 9.5},
          gold: { Infantry_ATK: 20, Ranged_ATK: 20, Army_ATK: 15, Army_DEF: 17, Research_Speed: 15},
          mythic: {
            level0: {Infantry_ATK: 28, Ranged_ATK: 28, Army_ATK: 21, Army_DEF: 23.8, Research_Speed: 21, Cost: 0},
            level1: { Infantry_ATK: 28.4, Ranged_ATK: 28.4, Army_ATK: 21.3, Army_DEF: 24.1, Research_Speed: 21.3, Cost: 22},
            level2: { Infantry_ATK: 28.8, Ranged_ATK: 28.8, Army_ATK: 21.6, Army_DEF: 24.5, Research_Speed: 21.6, Cost: 33 },
            level3: { Infantry_ATK: 29.2, Ranged_ATK: 29.2, Army_ATK: 21.9, Army_DEF: 24.8, Research_Speed: 21.9, Cost: 39 },
            level4: {Infantry_ATK: 30, Ranged_ATK: 30, Army_ATK: 22.5, Army_DEF: 25.5, Research_Speed: 21.3, Cost: 88}
            // Add up to level 12
          }
        }
      },
      
      {
        id: 4,
        type: "legs",
        name: "Champion Stride",
        grades: {
          white: { Infantry_ATK: 3.2, Ranged_ATK: 3.2, Army_ATK: 2.4, Army_DEF: 2.75, Research_Speed: 2.4},
          green: {  Infantry_ATK: 6.2, Ranged_ATK: 6.2, Army_ATK: 4.65, Army_DEF: 5.25, Research_Speed: 4.65},
          blue: { Infantry_ATK: 9.4, Ranged_ATK: 9.4, Army_ATK: 7, Army_DEF: 8, Research_Speed: 7},
          purple: { Infantry_ATK: 13, Ranged_ATK: 13, Army_ATK: 9.5, Army_DEF: 10.75, Research_Speed: 9.5},
          gold: { Infantry_ATK: 20, Ranged_ATK: 20, Army_ATK: 15, Army_DEF: 17, Research_Speed: 15},
          mythic: {
            level0: {Infantry_ATK: 28, Ranged_ATK: 28, Army_ATK: 21, Army_DEF: 23.8, Research_Speed: 21, Cost: 0},
            level1: { Infantry_ATK: 28.4, Ranged_ATK: 28.4, Army_ATK: 21.3, Army_DEF: 24.1, Research_Speed: 21.3, Cost: 22},
            level2: { Infantry_ATK: 28.8, Ranged_ATK: 28.8, Army_ATK: 21.6, Army_DEF: 24.5, Research_Speed: 21.6, Cost: 33 },
            level3: { Infantry_ATK: 29.2, Ranged_ATK: 29.2, Army_ATK: 21.9, Army_DEF: 24.8, Research_Speed: 21.9, Cost: 39 },
            level4: {Infantry_ATK: 30, Ranged_ATK: 30, Army_ATK: 22.5, Army_DEF: 25.5, Research_Speed: 21.3, Cost: 88}
            // Add up to level 12
          }
        }
      },
      {
        id: 5,
        type: "offhand",
        name: "Champion Light",
        grades: {
          white: { Infantry_ATK: 3.2, Ranged_ATK: 3.2, Army_ATK: 2.4, Army_DEF: 2.75, Research_Speed: 2.4},
          green: {  Infantry_ATK: 6.2, Ranged_ATK: 6.2, Army_ATK: 4.65, Army_DEF: 5.25, Research_Speed: 4.65},
          blue: { Infantry_ATK: 9.4, Ranged_ATK: 9.4, Army_ATK: 7, Army_DEF: 8, Research_Speed: 7},
          purple: { Infantry_ATK: 13, Ranged_ATK: 13, Army_ATK: 9.5, Army_DEF: 10.75, Research_Speed: 9.5},
          gold: { Infantry_ATK: 20, Ranged_ATK: 20, Army_ATK: 15, Army_DEF: 17, Research_Speed: 15},
          mythic: {
            level0: {Infantry_ATK: 28, Ranged_ATK: 28, Army_ATK: 21, Army_DEF: 23.8, Research_Speed: 21, Cost: 0},
            level1: { Infantry_ATK: 28.4, Ranged_ATK: 28.4, Army_ATK: 21.3, Army_DEF: 24.1, Research_Speed: 21.3, Cost: 22},
            level2: { Infantry_ATK: 28.8, Ranged_ATK: 28.8, Army_ATK: 21.6, Army_DEF: 24.5, Research_Speed: 21.6, Cost: 33 },
            level3: { Infantry_ATK: 29.2, Ranged_ATK: 29.2, Army_ATK: 21.9, Army_DEF: 24.8, Research_Speed: 21.9, Cost: 39 },
            level4: {Infantry_ATK: 30, Ranged_ATK: 30, Army_ATK: 22.5, Army_DEF: 25.5, Research_Speed: 21.3, Cost: 88}
            // Add up to level 12
          }
        }
      },
      {
        id: 6,
        type: "accessory",
        name: "Champion Faith",
        grades: {
          white: { Infantry_ATK: 3.2, Ranged_ATK: 3.2, Army_ATK: 2.4, Army_DEF: 2.75, Research_Speed: 2.4},
          green: {  Infantry_ATK: 6.2, Ranged_ATK: 6.2, Army_ATK: 4.65, Army_DEF: 5.25, Research_Speed: 4.65},
          blue: { Infantry_ATK: 9.4, Ranged_ATK: 9.4, Army_ATK: 7, Army_DEF: 8, Research_Speed: 7},
          purple: { Infantry_ATK: 13, Ranged_ATK: 13, Army_ATK: 9.5, Army_DEF: 10.75, Research_Speed: 9.5},
          gold: { Infantry_ATK: 20, Ranged_ATK: 20, Army_ATK: 15, Army_DEF: 17, Research_Speed: 15},
          mythic: {
            level0: {Infantry_ATK: 28, Ranged_ATK: 28, Army_ATK: 21, Army_DEF: 23.8, Research_Speed: 21, Cost: 0},
            level1: { Infantry_ATK: 28.4, Ranged_ATK: 28.4, Army_ATK: 21.3, Army_DEF: 24.1, Research_Speed: 21.3, Cost: 22},
            level2: { Infantry_ATK: 28.8, Ranged_ATK: 28.8, Army_ATK: 21.6, Army_DEF: 24.5, Research_Speed: 21.6, Cost: 33 },
            level3: { Infantry_ATK: 29.2, Ranged_ATK: 29.2, Army_ATK: 21.9, Army_DEF: 24.8, Research_Speed: 21.9, Cost: 39 },
            level4: {Infantry_ATK: 30, Ranged_ATK: 30, Army_ATK: 22.5, Army_DEF: 25.5, Research_Speed: 21.3, Cost: 88}
            // Add up to level 12
          }
        }
      },
      
      // Add more equipment
    ]
  };
  
  export default mockData;