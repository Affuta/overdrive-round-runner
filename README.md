# RoundRunner

Angular visualizer for the Overdrive game for the Entelect Challenge. 


## Setup
- Run npm install  
- Paste the rounds from the generated match-logs in the src/assets/rounds director
- Initially there will be 5 example rounds as an example.
- In the custom-config.ts file specify the directory names for the players found in any of the round folders
- For example in a round folder: src/assets/Round 001. The two player directories are A - Bob and B - Fred.
- Copy the directory names for the players in the custom-config.ts file:
   
       export const PLAYER_ONE_DIR = 'A - Bob'
       export const PLAYER_TWO_DIR = 'B - Fred'
       
- Run npm start
