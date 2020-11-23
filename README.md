# UCLA Physics 4AL Project: Reaction Time to Various Stimuli

This project is deployed at https://reaction-time-experiment.herokuapp.com/ using Heroku.

Currently has 4 variations:
- Basic (red circle)
- Varying colors (red green blue yellow)
- Varying sizes  / Startle Reflex (small - 20px, large - 100px) - 90% of the time small appears and 10% of the time large appears
- Varying positions (x varies from 10-90% of width, y varies from 10-300px)

Results can be downloaded as a csv.

## Adding new experiments

New experiments can be added by extending the Experiment class found in src/experiments/experiment.tsx and overriding the showStimulus, stimulus and getExperimentTitle methods. 

## Sources of Error

- Delay in processing / rendering of react ui elements
- Frame rate leads to delay
- Variation in the button press across different computers

This makes our recorded reaction times slower than their actual values (perhaps approximately ~100-150ms - by comparing to average human reaction time). This is accounted to some extent by the 75ms offset for visual reaction times and 175 for audio. This is done by measuring empirically the time to render the stimulus and render the button visible. The 100ms extra is accounted for in the sound case by the need to obtain the sound file every time the stimulus is presented - as this is the way the program was designed.

## Data Processing Tips

- Data is in csv format, but all values are string types
- Should be typecast to int / float / string as and when appropriate
- For sizes, it would be good to convert both values to either pixels or % displacement from screen boundary (can be done by getting width / height of screen in pixels and appropriately converting)
