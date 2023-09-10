# FullStack project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1
and [NestJs](https://nestjs.com/) version 10.2.2 based on Node.js 20.6.1.

## Install NVM

Windows (winget):

```PowerShell
winget install -e --id CoreyButler.NVMforWindows
```

MacOS (homebrew):

```Zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo "# Homebrew\nexport PATH=/opt/homebrew/bin:\$PATH" >> .zshrc
source ~/.zshrc
brew install nvm
```

Linux:

```Bash
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```

## Installing Node.js

```Bash
nvm install 20.6.1
nvm use 20.6.1
```

## Installing dependencies

```Bash
cd client
npm i
cd ../backend
npm i
cd ..
```

## Running Dev servers

client:

```Bash
cd client
npm start
```

backend:

```Bash
cd backend
npm run start:dev
```