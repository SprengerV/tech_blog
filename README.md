<p align="center">
  <h3 align="center">techl0rd_blog</h3>
</p>


[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
            

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a server that serves up a website for making blog posts. Users can sign in, create, view, edit, and delete posts. They can also leave and view comments on posts. All posts, comments, and user info is stored in a database that the site interacts with via its API.

[Here is a link to the deployed version of the app.](https://techl0rd.herokuapp.com/)

### Built With

<ul>
	<li>NodeJS</li>
	<li>MySQL</li>
	<li>ExpressJS</li>
	<li>Sequelize</li>
	<li>Handlebars</li>
	<li>HTML</li>
	<li>CSS</li>
</ul>






<!-- GETTING STARTED -->
### Installation

The app does not need to be installed. Instead you can access it [here](https://techl0rd.herokuapp.com/). If you do want to run the app on your local machine, you can clone the repository, navigate to the directory it is saved to, and run the command "npm install" from the terminal. Using the MySQL shell or manager, import the schema "db/techblog_db.sql" to create the database. Create a file named ".env" in the root folder of the app and populate it according to ".env.example". Once you've set your environment variables, run "node server". Once the server is running, access the app in your browser at "localhost:3001".



<!-- USAGE EXAMPLES -->
## Usage

This app is made for anyone looking to make and share blog posts, or read those made by others. It could be repurposed for any topic, or even as an announcement board.



<!-- TESTING -->
## Testing

You can test the deployed version of the app at the link above. If testing a local copy, it is suggested that you use the command "nodemon server" to start the server. The API can be interacted with using Postman or Insomnia Core.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Brendan Francis - [B.Francis@SprengerV.com](email:B.Francis@SprengerV.com)

Project Link: [https://github.com/SprengerV/techl0rd_blog](https://github.com/SprengerV/techl0rd_blog)



<!-- LICENSE -->
## License


BSD 3-Clause License

Copyright (c) 2021, Brendan Francis
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
© 2021 GitHub, Inc.
                
