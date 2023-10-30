# Web based application for displaying a slideshow

## Description

### Disclaimers

> This application is not finished and most likely will not receive any updates in the near future, as I abandoned it in favor of other projects. However, I will keep it here, as a reminder of my progress. 

> It was not supposed to be a public project, so the code is not clean at all, but it functions as intended.

### The application

This is a web based application for **displaying a slideshow**, very useful for teaching purposes, especially for **video tutorials**. It displays the content of a markup file split between multiple pages.

## Preview

![Application Preview](/public/Preview.png)


### The idea

It all started with the question: **How can I consolidate my web development skills, help others, be helped by others, and overall build a network of people?**. There were multiple ways of achieving this, but most of them were **not time efficient**, which for me, is **the most important thing**. In the end, out of all the options, I chose to **create web development tutorials** because it **checks all the points** from the questoin + it's **time efficient**. Having this scope in mind, all I needed was **a plan to execute** it. After some research, I chose **not to add too much editing**, because it is **time consuming**, I would rather just make some cuts, in case I stutter. This was achievable only if I could **fit into my display all the things I needed**: a browser, a code editor, and some kind of written structure, so I don't deviate too much while explaining. Finally, I chose to create this kind of application, which would allow me to **display a slideshow** with the content I need in a very compact way.

Unfortunately, none of the tutorials I made reached YouTube, so this project's only purpose is to be a part of my **personal projects**.


## Techlonogies used:

- **React**
- **Markdown**
- **React Markdown**
- **React Syntax Highlighter**
- **Styled Components**

## Features:
- Display the content of a **markdown file** split between multiple slides
- Custom `Night Owl` **syntax highlighting** for code blocks
- **Custom styling** for elements
- Use **Left** and **Right** Arrows to navigate between slides ( browser focused )
- **Completeness level** ( left vertical line )
- **Ending custom slide**


## Installation and Instructions

### Installation

1. Clone down this repository. You will need `node` and `npm` installed globally on your machine.
2. Run `npm install` to install all the dependencies.

### Run the application
1. Run `npm start` to start the application

### Change the lesson displayed

1. Open `src -> lessons` folder
2. Create a new `.md` file with the content you want
3. Open `src -> App.js` file
4. On the line `import lesson from './lessons/00_Generals.md'`, change `00_Generals.md` with the file name you created at **step 2**, including the extension `.md`
5. Save the file and the application will automatically reload

### Change the ending slide

Edit `src -> lessons -> ending.md` using markup instructions from below

### Markup instructions

- All the [basic markup syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) applies
- Use `~~~` to separate slides