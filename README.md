# E-Commerce Backend
[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.com/project/pip/)
## Description 
Setting up the backend of an E-Commerce site. Connecting different models (categories, products, and tags as well as the junction table ProductTag) to different routes to then do different GET, PUT, POST, and DELETE events.

## Table of Contents
* [Description](#description)
* [Instillation](#instillation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
## Instillation 
Clone the repository, run "npm init -y" to set up packages, "npm install" to download all dependencies, source the schema file into mysql to set up the database (must do so from the db file), as well as input their user and password information in the .env file (found in the main file) to make sure sequalize shall connect correctly. In the main file, then run "npm run seeds" to seed all the beginning information. This repository also needs the user to launch insomnia alongside VS Code to then do all the routes.
## Usage 
Once instillation is complete, the user would then run "npm run start" to start the application and then run different urls in insomia with the format of "http://localhost:3001/api" with whatever route they want to do after to start using the routes. For example they would attach /categories at the end of the url to get information on all the categories stored in the database. Some routes like POST and PUT require the user to create a JSON object in the body, to send that information into the database to work fully. Examples of what that body information can be seen in the video.

![A gif of the deployed application](./assets/GET%20routes.gif "A video of the GET request options in insomia. Including GET all categories, products, and tags, as well as GET one category, product and tag.")

Link to the video in google drive: https://drive.google.com/file/d/1xf961FVPUjLJBvdiukoKtD3SkjW4k0F0/view?usp=sharing 

![A gif of the deployed application](./assets/Untitled_%20Apr%2022%2C%202022%203_36%20PM.gif "A video of the PUT and DELETE request options in insomia, for categories, products and tags")

Link to the video in google drive: https://drive.google.com/file/d/1K9I1o-Cxj80Dx0zQEVt31gO517BaX6NQ/view?usp=sharing 

![A gif of the deployed application](./assets/Untitled_%20Apr%2022%2C%202022%203_36%20PM.gif "A video of the POST request options in insomia, for categories, products and tags")

Link to the video in google drive: https://drive.google.com/file/d/1K9I1o-Cxj80Dx0zQEVt31gO517BaX6NQ/view?usp=sharing 

    
## Contribution
There are no contribution guidelines for this project
## Tests
There are no tests for this application

## Liscense
MIT License Copyright (c) 2022 Simona Snapkauskaite
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://mit-license.org/

## Questions
If you have any further questions contact me here:
 - Email simona.snapk@gmail.com
 - GitHub [SimonaSnap](https://github.com/SimonaSnap)
