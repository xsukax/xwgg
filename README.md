# xsukax Winget Generator - XWGG
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/xsukax/xwgg)
## The Best Open Source Solution after Installing Fresh Windows
Simple tool to Generate batch script to install the most needed windows applications via winget tool<br />
Check Demo: https://xsukax.github.io/xwgg/
### If you have errors with winget command, try to install winget using Install-Winget.ps1 file
### To build image using Dockerfile, follow these steps:
1- Clone xwgg project
```sh
git clone https://github.com/xsukax/xwgg.git
```
```sh
cd xwgg
```
2- Build nginx alpine image
```sh
sudo docker build -t xsukax-xwgg .
```
3- Create a Container
```sh
sudo docker run -d -p 8088:80 --name xsukax-xwgg xsukax-xwgg:latest
```
4- Check localhost url<br/>
http://localhost:8088
### You can download docker image directly & run container:
```sh
sudo docker run -d -p 8088:80 --restart unless-stopped --name xsukax-xwgg xsukax/xwgg:latest
```
Check localhost url<br/>
http://localhost:8088

### Image link on Docker Hub<br/>
https://hub.docker.com/r/xsukax/xwgg
