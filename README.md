# abeshell-kai
Abeshell-kai

## Manual Deploy on Linux
```
// install npm
sudo apt update -y
sudo apt install nodejs npm
cd ~/abeshell-kai/frontend/

npm install
npm start

// sudo apt install php -y
cd ~/abeshell-kai/backend/
php -S localhost:3001
// access to localhost:3000 !
```

## Deploy on docker container
```
cd ~/abeshell-kai
make build
make run
// access to localhost:3000 !
```
