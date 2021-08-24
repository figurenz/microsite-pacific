# Figure.NZ Microsites

This is a Jekyll-based website template used for making Figure.NZ microsites.

Code from this website can be shared. You may not use the fonts.

This is because of licensing requirements. Font files are only licensed to Figure.NZ.

## Structure

This repo has two main layout files.
- Homepage, used for the homepage
- Content, used for all other pages

index.md generates the homepage.
Other top-level .md files generate additional top-level pages, such as an 'About' file.
Some versions of this site will also have secondary pages that are grouped together. This repo has a folder called "_topics" as an example. .md files added to the topics file can be used to generate secondary pages, or to provide additional metadata for linking and cards, or both.

## Setup

the config.yml file has a series of variables you'll need to set for your project. This includes the name, tracking code etc.

## Running the project

Once you've navigated to the code folder and installed necessary dependencies, run

```bundle exec jekyll serve```

## Design

This project uses SCSS. 

The top of the SCSS file has variables for colour, font, and background tile used.

### Templates

the 'Content' template is nested into the 'Homepage' one.

## Cname

the CNAME file will need to be uncommented and updated with correct URL

## Analytics

the analytics flag in config.yaml will need to be set to true, and the woopra.html file in the _includes folder will need to be updated with correct domain

## Topics

Config.yaml lists the groups of topics (collections) that will be enumerated on the homepage when the grid-topic-cards section is used. You'll need to update the list in config.yaml AND update the grid-topic-cards.html include file to ensure they're added.

If you opt to use the topic grouping folder structure, you'll need to update the grid-topic-cards.html file with the correct group names and the correct folder names.

Individual topic pages have a 'data' attribute. This is used to select the appropriate file name from the image folder for the card display. Ensure you have a matching .jpg file in the image list folder to match the data attribute for every topic. These are case sensitive.
