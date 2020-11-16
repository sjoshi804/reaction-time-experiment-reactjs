# UCLA Physics 4AL Project: Reaction Time to Various Stimuli

This project is deployed at https://reaction-time-experiment.herokuapp.com/ using Heroku.

Currently has 4 variations:
- Basic (red circle)
- Varying colors (red green blue yellow)
- Varying sizes (small - 20px, large - 100px)
- Varying positions (x varies from 10-90% of width, y varies from 10-300px)

Results can be downloaded as a csv.

## Adding new experiments

New experiments can be added by extending the Experiment class found in src/experiments/experiment.tsx and overriding the showStimulus, stimulus and getExperimentTitle methods. 

## Sources of Error
- Delay in processing / rendering of react ui elements
- Frame rate leads to delay

This makes our recorded reaction times slower than their actual values (perhaps approximately ~100-150ms - by comparing to average human reaction time)
