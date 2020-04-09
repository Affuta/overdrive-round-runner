# RoundRunner

Angular visualizer for the Overdrive game for the Entelect Challenge. 


## Setup
- Run npm install  
- Paste a directory from any of the previous matches in the src/assets folder
- Rename the folder to rounds
- For example '2020.04.04.14.53.15' to 'rounds'</p>
- In the custom-config.ts file specify the directory names for the players found in any of the round folders
- For example in a round folder: /game-runner/match-logs/2020.03.29.21.06.33/Round 002
- Copy the directory names for the players in the custom-config.ts file:
   
       export const PLAYER_ONE_DIR = 'A - Player One'
       export const PLAYER_TWO_DIR = 'B - Player Two'
       
- Run npm start
