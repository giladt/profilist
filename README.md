# Profilist

## About

This app allows you to retrieve contact information from a selection of your favorite professionals.

## How to use?

### Clone this repo locally 
`git clone https://github.com/giladt/profilist`

### Install dependencies
`cd profilist`

`npm ci`

### Spin the server
`npm run dev`

### Run build
`npm run build`

### Run tests (Vitest)
`npm run test`

## Features
* Shows 20 profiles. 
  
  Drag the images left-and-right to see more or use the arrow-buttons below.
* Click a profile image to get more details
* Click the **Remove** button to remove a profile from the list
* Add incrementally more profiles by clicking the **Add** button
* Reset the list to get a freshly brewed profis list.

## Stack
* This is a ReactJS app, scaffold using Vite.
* Typescript
* TailwindCSS
* Unit tests provided with Vitest (jest)
* 
* Dependencies
  * Swiper
  * Fontawesome (Icons)

## Architecture
Components are used in Atomic-Design architecture for an easier categorization.
* Atoms:
  * Button: Full, Round, SwipeNext SwipePrev button styles.
  * Header: Main (h1), Sub (h2), Title (h3) with a (text-)size prop: 'sm', 'md' or 'lg'
  * Logo: Hardhat image logo with a size property.
  * Text: regular or bold
* Molecules:
  * Navbar
  * Footer
  * ProfiCarousel
  * Tile
* Pages
  * Home: Main page composition
* Layouts
  * Default: A default page layout wrapper (navbar, main content, footer).

### Context 
The Context folder holds the logic for hydrating and handling data related actions.

### Types
Reusable types and props for the components

### __tests__
Unit tests.
