# **Birthday Reminder**

A simple React Project that focuses on the basics of react by displaying some people and info about those people.

## **Description**

A simple React Project that focuses on the basics of react by displaying some people and info about those people.This project theme is about displaying the length of the people array and also displaying each person in a Person component.The user can click the Clear button to clear the people list,and when there are no people in the list the user can click Refresh and set the list back to how it was.

## **Getting Started**

### Dependencies

- Check package.json for details.
- **Docker** installed on your machine if you want to install using **Docker**

### Installing

```
git clone https://github.com/axense234/Birthday-Reminder-REACT.git
```

### Executing program

- **Execution using NPM**

```
npm install
npm start
```

- **Execution using Docker**

```
docker build -t birthday-reminder-react:0.3.0 .
docker stop birthday-reminder-react-app
docker rm birthday-reminder-react-app
docker run -p 3000:3000 -d --name birthday-reminder-react-app birthday-reminder-react:0.3.0
```

## **Authors**

- **axense234**

## **Version History**

- 0.3
  - Analyzed the code to gather to-do tasks and improved the site a little. Also played around with Docker.
- 0.2
  - Improved React logic and also made the website look better
  - See [commit change](https://github.com/axense234/Accordion-REACT/commits/master) or See [release history](https://github.com/axense234/Accordion-REACT/releases)
- 0.1
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

## **Acknowledgments**

- Inspired by [_John Smilga 15 React Projects_](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=8s)
