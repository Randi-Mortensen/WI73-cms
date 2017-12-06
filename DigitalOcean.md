# webserver
# DigitalOcean.com
Opret en konto

## create droplet
CentOS x32bit 
//Vælg 32bit da den bruger mindst resurser
Vælg den mindste server da det er nok til en json hjemmeside
Vælg en europæisk server 
// eks. Amsterdam
Ret servernavn til det du vil have den skal hedde

## Installer putty
login: root

password:
Brug det password der kommer i en email fra digitalocean.

Sæt det ind i putty ved at højre klikke gør dette 2 gange og skriv så det nye password som du ønsker at  bruge.

## Linux-server med Node.js & MySQL
## 0. Installer Nano
Nano er en linux tekst editor, som er rigtig let at bruge.
### Installation
yum install nano

## 1. Installer MySQL

### Installation
yum install mysql-server

#### Start/stop/restart
service mysqld start/stop/restart
#### Konfigurer MySQL
sudo /usr/bin/mysql_secure_installation

## 2. Installer Node.js
### Installation
yum install epel-release   

//tryk y når den spørger om det er ok

yum install nodejs

//tryk y begge gange den spørger

yum install npm

npm install -g n

### Opdater nodejs
n lts

n

### Genstart din linux-box nu.
## 3. Installer PM2
PM2 er en process manager til Node.js applikationer.
### Installation
npm install -g pm2
### Kør PM2 ved startup
pm2 startup
## 4. Installer Git
### Installation
yum install git
### Konfiguration
git config --global user.name "Dit navn"

git config --global user.email "din@email.dk"
### Tjek konfigurationen
nano ~/.gitconfig
## 5. Opret et nøglesæt til at logge ind på GitHub
## Opret nøglesæt
ssh-keygen -t rsa
### Åbn den offentlige nøgle
nano ~/.ssh/id_rsa.pub

Kopier indholdet af den offentlige nøgle til GitHub -> Settings -> SSH and GPG keys -> New SSH key


Gå ind på github login og find settings under dit billede. 

Vælg SSH and GPG keys.

Vælg new ssh key.

Sæt koden fra putty ind.

Og gem. 


## 6. Opret en mappe til din applikation

mkdir ~/www

### Naviger ind i mappen
cd ~/www


## 7. Klon dit repository fra GitHub
git clone git@github.com:brugernavn/repository

//(og når du har en opdatering, skal du lave et pull)

git pull git@github.com:brugernavn/repository


cd dir   dir= eks webserver73

npm install

ls –l

pm2 start app.js



## Husk når der rettes i virtualcode at
### VirtualCode
commit all

pull

### Putty
git pull git@github.com:brugernavn/repository