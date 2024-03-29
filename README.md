<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]](https://github.com/wickhill)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/wickhill/)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot](coolDog-screen-shot.jpg)](https://wickhill.github.io/CoolDog/)

Hi, intrepid gamer! This here project, which I like to call "Cool Dog Gum Bone" is my take on the Hasbro classic "Simon". It's got sounds, lights, emojis, valley girls... What's not to love?! So, press the 'Start New Game' button, get some hints from the 'Hints' button (if you need 'em), and have a blast!

Some Ideas:

- Play it on your mobile device!
- Compete against your friends!
- Doncha just love puppies? Heck, I do!

Who's gonna get the highest score? Donno? Well, neither do I! Take a screen-shot and send it to your buddies - loser has to buy pizza!

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This Project was built with:

- [![Howler.js]](https://howlerjs.com/)
- [![FreeSound]](https://freesound.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Just like the classic game of "Simon" you know and love, "Cool Dog Gum Bone" functions in much the same way. So take the risk, pop in the disk, and press 'Start New Game'!

### Prerequisites

This is a browser-based JavaScript game, so you're already good to go.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. No API Key needed, just follow this link to play! [https://wickhill.github.io/CoolDog/](https://wickhill.github.io/CoolDog/)
2. Clone the repo
   ```sh
   git clone https://github.com/wickhill/CoolDog.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Basic Project Notes:

- Met MVP Goals (or altered them if they didn't make sense as game progressed) except timer
- Timer could've been Implemented, but perhaps quicker game/cpu movements make more sense.

Biggest Challenges:

- replayCompArray(), specifically staggering the replays. At one point, I had a couple 'setTimeout' timers set to 1000 milliseconds, which made it impossible to tell if the computer selected, for example, two 'cools' or 'dogs' in a row. Also, I had it set to 700 at one point, but that just had an 'uneven replay effect', and made the game confusing.

- 'isPlayerTurn = false;' in the 'replayCompArray()' function was of double inportance, as #1, players shouldn't be able to 'game over' during the computer replaying its moves, and #2, sometimes even when players selected the correct moves at the same moment as the computer, the game would 'game over'. That was interesting!

- Howler.js: script tag had to go at the bottom of HTML, otherwise it didn't work. Also, Howler does not like .m4a sound files, and I had to convert one to .mp3 to get it to function (i.e. the 'Um, I think not!" sound).

- Changing CSS layout from 'flex' to 'grid' was essential, as grid made it far easier to format the gaming board than flexbox. (Still, the 'h1' is in flexbox, as that looked fine.)

- Responsive design for mobile is still a work in progress.

- Building the project piece-by-piece meant that 'scope' became an issue I constantly had to be aware of and change, from time to time.

Biggest 'A-Ha' Moment:

- Early in the game, realizing that I had to erase the player's array after each turn so that data can be pushed in again... it seems like a small issue now, but that was the biggest 'early hurdle' that, once I wrapped my head around it, it made me expand how I thought about how I was interacting with data.

Unsolved Goals:

- Leaderboard, however it's a browser-based game, so maybe unnecessary, but adding initials would've been fun
- Mobile is still a work in progress

Where I had help:

- IIFE (Immediately Invoked Function Expression) for 'replayCompArray()'
- Compound Selectors

IIFE was discussed above. Compound Selectors are neither classes or IDs. It is created by combining two or more selectors - in my case it's an ID and a class - and I did this because I was having trouble 'overriding' some of the button ID styles that were 'default'. I just couldn't overwrite them when a move was successful, or when something went wrong and it was 'game-over', so this was the solution.

Shoutouts!

- Evonte for the lead on Howler.js, his mention of this led me to to it and my game having sound

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Email - wickhill@gmail.com

Twitter - [@your_twitter](https://twitter.com/your_usernamwickstartere)

Project Link: [https://github.com/your_username/repo_name](https://github.com/wickhill/CoolDog)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
