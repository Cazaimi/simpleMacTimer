# simpleMacTimer

A simple timer designed to work on Mac OS.

## Hacktoberfest 2022

This repository is accepting pull requests for Hacktoberfest22 (`#hacktoberfest`). Please fork this repostiory and send in your contributions. Additionally, please follow the official guidelines as given [here](https://hacktoberfest.com/participation/) when submitting your pull requests. And don't forget to tag your pull requests with the label "Hacktoberfest" when submitting!

Less yacking, and more hacking!

## Requirements

- Operating System
  - Mac OS
  - Mac OS X 10.6.x+
- Shell/Terminal, preferably [`bash`](https://www.gnu.org/software/bash/ "Bash download page")
- [Node.Js](https://nodejs.org/en/download/ "Node.Js download page") v7.10.0+ 

## Setup 

1. Clone this repository in any folder of your choosing.
2. Navigate to the folder where you cloned this repository.
3. Set the timer as follows: 

```bash
bash timer 25
```

will set the timer for 25 minutes.

```bash
bash timer 60
```

will set the timer for an hour, and so on.

## Working

At the end of the timer:

1. A notification banner will be displayed
2. A chime will sound
3. A computer-generated voice will read out _"The timer is up, take a break!"_ or however you customize the message (see [the Customization section](#customization) below)

**Remember to mute your audio if you're in a quiet environment.**

Demo:

![alt text](./Demo.png "Demo")


## Customization

### Setting a custom announcement

1. Run the command `bash setup.sh`.
2. Enter the command you wish to have announced.
3. Press Return/Enter.
4. The next time the timer is run, your custom command will be announced.
