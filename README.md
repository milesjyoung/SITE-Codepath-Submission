# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Miles Young

Time spent: 15 hours spent in total

Link to project: https://glitch.com/edit/#!/keyboard-snd-game

## Required Functionality

The following **required** functionality is complete:

* :white_check_mark: &nbsp; Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* :white_check_mark: &nbsp; "Start" button toggles between "Start" and "Stop" when clicked. 
* :white_check_mark: &nbsp; Game buttons each light up and play a sound when clicked. 
* :white_check_mark: &nbsp; Computer plays back sequence of clues including sound and visual cue for each button
* :white_check_mark: &nbsp; Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* :white_check_mark: &nbsp; User wins the game after guessing a complete pattern
* :white_check_mark: &nbsp; User loses the game after an incorrect guess

The following **optional** features are implemented:

* :white_check_mark: &nbsp; Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* :white_check_mark: &nbsp; Buttons use a pitch (frequency) other than the ones in the tutorial
* :white_check_mark: &nbsp; More than 4 functional game buttons
* :white_check_mark: &nbsp; Playback speeds up on each turn
* :white_check_mark: &nbsp; Computer picks a different pattern each time the game is played
* :x: &nbsp; Player only loses after 3 mistakes (instead of on the first mistake)
* :x: &nbsp; Game button appearance change goes beyond color (e.g. add an image)
* :x: &nbsp; Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* :x: &nbsp; User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* :white_check_mark: &nbsp; Custon keyboard and polyphonic synth
* :x: &nbsp; Stop playback on stopGame()

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](http://g.recordit.co/tJZy6c0XBQ.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  
  * **[Stackoverflow](https://stackoverflow.com/)**
  * **[codingnepal](https://www.codingnepalweb.com/2020/05/cool-glowing-effect-on-css-buttons.html)**
  * **[youtube keyboard](https://www.youtube.com/watch?v=VBVOXTgXX2U)**
  * **[innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)**
  * **[tonejs](https://tonejs.github.io/docs/r13/PolySynth#context)**
  * **[chrome permissions](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)**
  * **[w3schools](https://www.w3schools.com/css/css3_animations.asp)**
  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
\
`I encountered an array (no pun intended...) of challenges in creating this submission. This was my introduction to 
using html, javascript, and css; there was definitely a learning curve. My biggest challenge was really just syntax.
I wasted a lot of time figuring out how to do something I knew was simple, but simply didn't know the syntax. For example,
when creating the function that played the notes automatically from the keyboard, I had difficulty in figuring out how to 
access the specific keys because I didn't understand how div elements worked. Once I figured out I could get a reference to
the element by simply giving the div an id I then proceeded to struggle with this task for a while because I don't have a full
grasp of the syntax of javascript. This was frustrating because I was very aware that it was a simple task and in a language that
I am more familiar with, the task would have been completed as fast as my fingers can type. While it was frustrating, I was patient 
and I use the internet and eventually figured out how to do it. This was just one example of a challenge I encountered throughout this 
project. The silver lining is that every challenge I overcome, the more confident I become in my ability to troubleshoot and problem solve, which
  is, in my opinion, a programmers most valuable tool.`

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
\
`I have more questions about web development than I suspect I would know what to do with. Interestingly the first questions that 
popped up in my head when starting this project were probably more specific to the backend. I wonder how glitch makes its service possible. 
How can glitch design a page that can display your page within it, web-ception? Another question I had is how to refer to the use of all three
programs at once. I didn't find a ton of results, but I did see a few articles bring up the term DOM. This is interesting to me and I would like 
to better understand how these languages interact. Another question that came up in the course of designing this project was APIs. As I understand it,
the way I import the tonejs library is making use of a public API. APIs are something that come up a lot in all different types of projects I take on. I would like
to better understand what that really means. There are so many more questions I have, but it would take forever to list them all!`

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
\
`First off, there are a couple bugs that really....bug me. I was unable to figure out how to silence the synthesizer, so when the user wins the game, or stops the game while the 
keyboard is playing notes automatically, the tone will continue. I have been reading through the tonejs API, but I have yet to figure out a function that will stop all output, but I'm sure 
there is one and I would just call that when the game is won or stop button is clicked. I would also want to make improvements to the game. As it stands now, the game is a little boring. I believe that
the user experience could be improved in a number of ways. I would have liked to make the keyboard respond to the users keyboard (user presses "c", keyboard plays "c"). I would probably go about adding this by creating
a keydown event listener, but I was struggling to figure out a way that this would be conveyed to the user as far as the design goes visually. I also think it would be cool to add a feature where the user can play along 
with a song, or maybe even record their own pattern and add it to the list of possible patterns played upon start. Of course ther is also always design. I will admit that visual design has never been my strong suit, so 
I didn't really know where I could improve in that arena, but I know improvements could be made. I would likely look at some other web apps and try to take inspiration from them. Finally, I am pretty clueless when it comes to 
security. Since I am an amateur, I'm sure that this site could be exploited on that web, and it would be good to make the code as secure as possible.`



## License

    Copyright [Miles Young]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.