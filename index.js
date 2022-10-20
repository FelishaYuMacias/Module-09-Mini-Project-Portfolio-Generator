const fs = require(`fs`)
const inquirer = require(`inquirer`)


const startPrompt = () => {
    return inquirer.prompt([
        {
            //name
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            //location
            type: 'input',
            message: 'Where are you located?',
            name: 'location'
        },
        {
            //bio
            type: 'input',
            message: 'Write a brief bio.',
            name: 'bio'
        },
        {
            //linkedin url
            type: 'input',
            message: 'What is your LinkedIn url?',
            name: 'linkedin'
        },
        {
            //github url
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'github'
        },
    ])
    .then ((response) =>{
        console.log (response)
        fs.writeFile(`${response.name}.html`, createHTML (response.name,response.location,response.bio,response.linkedin,response.github), (err) => err ? console.log(err) : console.log("Worked")
        );
    })
};

startPrompt () 



const createHTML = (name,location,bio,linkedin,github) =>
`
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- custom stylesheet  -->
    <link rel="stylesheet" href="./style.css">

    <title>Profile</title>
  </head>
  <body>
  <header>
    <h1>${name}</h1>
    <nav>
        <ul>
            <li> <a href="https://${name}">Github</a></li>
        <li> <a href="https://` + linkedin + `">LinkedIn</a></li>
        </ul>
    </nav>
    </header>
    <main>
        <section class="aboutMe">
            <p>I am located in ` + location + `</p>
            <p>` + bio + `</p>
        </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  </body>
</html>
`