
# ExpertEase

A real time chatting web application with cool vibes.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Mickyverma24/ExpertEase
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
Add .env 

```bash
  make these environment variable 
  PORT = write port ex. 5000
  MONOGO_DB_URI = "mongodb://localhost:27017"
  JWT_SECRET = write some secrate key or genrate by ssl
        type this command in git openssl using $ openssl rand -base64 32
  NODE_ENV = "development"

```
Go to the .../Frontend/src/contexts/SocketContext.jsx
```bash
change line 17 to 
const socket = io("http://localhost:5000", {
  
```
Start the server

```bash
  npm run start
```


## Features

- Login Singup functionality 
- Automatic genrate a profile picture of you
- Search the Expert to talk
- notification sound when you get a new messages and many more just use it

