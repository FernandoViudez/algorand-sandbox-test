# How to reun this project using algorand sandbox and node.js

1. First, install the algorand sandbox and follow the instructions there.
Algorand sandbox: https://github.com/algorand/sandbox

- My steps were:
1. Install git for windows -> https://gitforwindows.org/
2. Install and launch docker for windows -> https://docs.docker.com/get-docker
3. Open git bash and type:

``` git clone https://github.com/algorand/sandbox.git  ```
``` cd sandbox ```
``` ./sandbox up -v ``

2. Once you have already installed docker and running in the background with sandbox, go to this project folder root and type te following:
``` npm install ```

3. The last step of this tutorial is to run the command 
``` npm start ```

Congrats, you started a private algorand network and created an address with algorand 
javascript sdk!


# IMPORTANT
We assume that you already have node.js and npm installed in your computer.
I made this tutorial with node.js v16.13.1 & npm v8.1.2 (yes, a bit old but you can use a newer version instead) 