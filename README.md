# Spoodle

## Description:

Spoodle, short for speed doodle is a game that I wanted to create based on my love for fun but simple party games such as [skribble.io](skribble.io). The goal of Spoodle is in a short period of time, create the best possible drawing of a given prompt, and accuracy is judged by a neural network. How close the neural network believes the drawing is to the prompt, the higher the score, and these scores are used to compete against other players and friends.

## Phases:

There will be four phases to this project.

1. Use a pretrained model to create a program that can classify doodles.
2. Write the software that allows players to create doodles.
3. Integrate the classification and doodle programs into a website that users can interface with.
4. Possibly train a neural network with a dataset to provide another classification option.
5. Release, get recommendations on improvements, and continue to improve Spoodle.

## The Code:

### Phase 1:

The first phase, using a pretrained model to classify doodles, will be relatively simple. I will be using [DoodleNet](https://github.com/yining1023/doodleNet), a pretrained convolutional neural network (CNN) that is trained on Google's [Quick Draw dataset](https://quickdraw.withgoogle.com/data). There are two CNN classifiers in the repo, one running with tf.js and one running with keras. Since I am already familiar with Keras in python, I am going to try to learn Javascript and use the tf.js model.
 
Needed to up the brush size:canvas size ratio to 1:28, since it needs to match as closely as possible to the dataset. 


## Ideas:

### Game Ideas:

- Perhaps add a multiplier for an early submit, where the time left when submitted gives a higher score.
- Quick submit hotkey.
- Add percentage while you draw?
- After submitting, add points based on placing and show other peoples' drawings and their percentages.


## Sources:

https://www.youtube.com/watch?v=ABN_DWnM5GQ
https://github.com/yining1023/doodleNet