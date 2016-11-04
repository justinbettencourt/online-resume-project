var bio = {
    "name" : "Justin Bettencourt",
    "role" : "Front-End Web Developer",
    "contacts" : {
        "email" : "justinvbettencourt@gmail.com",
        "github" : "justinbettencourt",
        "homeLocation" : "London, Ontario"
    },
    "welcomeMessage" : "This is my resume!",
    "skills" : [
        "HTML", "CSS", "JavaScript" 
    ],
    "biopic" : "images/fry.jpg"
}

var work = {
    "job" : [{
        "employer" : "Yellow Bear Studios",
        "position" : "3D Generalist & Game Developer",
        "workLocation" : "Toronto, Ontario",
        "dates" : "August 2015 - August 2016",
        "workDescription" : "3D modeling and game development"
    },
    {
        "employer" : "Sulon Technologies",
        "position" : "2D and 3D Artist",
        "workLocation" : "Toronto, Ontario",
        "dates" : "August 2015 - August 2016",
        "workDescription" : "3D modeling and game development"
    }],
};
 
var projects = {
    "projects" : [{
        "title" : "Love It or List It",
        "dates" : "October 2015 - May 2016",
        "description" : "Mobile Game"
    },
    {
        "title" : "Love It or List It",
        "dates" : "October 2015 - May 2016",
        "description" : "Mobile Game"
    }]
}

var education = {
    "schools" : [{
        "name" : "George Brown College",
        "location" : "Toronto, Ontario",
        "degree" : "Advanced Diploma",
        "major" : "Game Development",
        "dates" : "2010 - 2013"
    }],
    "onlineCourses" : [{
        "name" : "Udacity",
        "degree" : "Nanodegree",
        "major" : "Front-End Web Development"
    }]
};



function displayHeader() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
}

displayHeader();

function displayBio() {
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGit);

    var formattedHomeLocation = HTMLlocation.replace("%data%", bio.contacts.homeLocation);
    $("#topContacts").append(formattedHomeLocation);
    
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
        
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
    }
}

displayBio();

function displayWork() {
    $("#workExperience").append(HTMLworkStart);

    work.job.forEach(function(jobs){
         var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
         var formattedPosition = HTMLworkTitle.replace("%data%", jobs.position);
         var formattedEmployerTitle = formattedEmployer + formattedPosition;
         $("#workExperience").append(formattedEmployerTitle);

         var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs.workLocation);
         $("#workExperience").append(formattedWorkLocation);

         var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
         $("#workExperience").append(formattedDates);

         var formattedDescription = HTMLworkDescription.replace("%data%", jobs.workDescription);
         $("#workExperience").append(formattedDescription);
    })
}

displayWork();

function displayProjects() {
    $("#projects").append(HTMLprojectStart);

    projects.projects.forEach(function(project) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $("#projects").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $("#projects").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $("#projects").append(formattedDescription);
    })
}

displayProjects();

function displayEducation() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(education) {
        var formattedName = HTMLschoolName.replace("%data%", education.name);
        $("#education").append(formattedName);
    })
}

displayEducation();





// function locationizer(work_obj){
//     var locationArray = [];

//     for (job in work_obj.jobs) {
//         var newLocation = work_obj.jobs[job].workLocation;
//         locationArray.push(newLocation);
//     }

//     return locationArray;
// }



// console.log(locationizer(work));

// $("#mapDiv").append(googleMap);

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;

//   logClicks(x,y);
// });

// var cameron = {};
// cameron.job = "course dev";

// var makeCourse = function() {
//     console.log("Made a course");
// }

// var courses = 0;

// while(cameron.job === "course dev") {
//     makeCourse();
//     courses = courses + 1;
//     if (courses === 10) {
//         cameron.job = "learning specialist";
//     }
// }

// console.log(cameron.job);

// for(var i=0; i<9;i++) {
//     console.log(i);
// }

// var countries = ["Germany", "Argentina", "Brazil", "Netherlands"];

// for (country in countries) {
//     console.log(countries[country]);
// }