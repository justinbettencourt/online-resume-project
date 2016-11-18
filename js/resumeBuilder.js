var data = '%data%';

var bio = {
    "name": "Justin Bettencourt",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "justinvbettencourt@gmail.com",
        "github": "justinbettencourt",
        "location": "London, Ontario"
    },
    "welcomeMessage": "This is my resume!",
    "skills": [
        "HTML", "CSS", "JavaScript"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace(data, bio.name);
        $("#header").prepend(formattedName);

        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);

        var formattedGit = HTMLgithub.replace(data, bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGit);

        var formattedHomeLocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedHomeLocation);

        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        $("#topContacts, #footerContacts").append(formattedMobile);

        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedWelcome);

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkill);
        });
    }
};

var work = {
    "jobs": [{
        "employer": "Yellow Bear Studios",
        "title": "3D Generalist & Game Developer",
        "location": "Toronto, Ontario",
        "dates": "August 2015 - August 2016",
        "description": "Creating 3D characters and environment assets for PC and mobile, doing technical artist related roles within Unity such as lighting, particles, UI/UX and level design, and game performance, asset optimizations and quality assurance for games made in house at Yellow Bear Studios."
    }, {
        "employer": "Sulon Technologies",
        "title": "2D and 3D Artist",
        "location": "Toronto, Ontario",
        "dates": "August 2015 - August 2016",
        "description": "Creating 2D and 3D game assets, application demos and quality assurance for the Cortex; a spatial recognition, virtual and augmented reality headset."
    }, {
        "employer": "George Brown College",
        "title": "3D Artist",
        "location": "Toronto, Ontario",
        "dates": "June 2013 - December 2013",
        "description": "Creating 3D characters and environment assets for a virtual reality education and training simulator. This project is a simulator to help journalists in combat situations when entering war zones. Project used the Oculus Rift DK1, and the Razer Hydra Controllers."
    }],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedPosition = HTMLworkTitle.replace(data, job.title);
            var formattedEmployerTitle = formattedEmployer + formattedPosition;
            $("#workExperience").append(formattedEmployerTitle);

            var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
            $("#workExperience").append(formattedWorkLocation);

            var formattedDates = HTMLworkDates.replace(data, job.dates);
            $("#workExperience").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace(data, job.description);
            $("#workExperience").append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Love It or List It - Yellow Bear Studios",
        "role": "2D/3D Generalist & Technical Artist",
        "dates": "October 2015 - May 2016",
        "description": "Build your own real estate or interior design empire based on the hit TV series Love It or List It! In Love It or List It: The Game, you decide whether to renovate and redecorate your client’s current house, or find them their new dream home. Play as real estate agent and you must choose the right neighbourhood, outbid other agents and perform inspections to present the perfect house that meets all of your clients’ “must-haves”. Play as designer and your job is to renovate and redesign your clients’ current home to convince them to “love it”.",
        "platform": "iOS, Android, Facebook",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }, {
        "title": "The Moblees - Yellow Bear Studios",
        "role": "3D Generalist",
        "dates": "October 2015 - May 2016",
        "description": "The Moblees app is a second-screen experience that syncs with The Moblees TV show in real time, inspiring preschoolers to get up and Moblee moving! The app puts your child in the world of Terra Mova and lets you record them moving along with their favourite Moblees characters in their own personal Appisode.",
        "platform": "iOS",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }, {
        "title": "Hydra Demo - Sulon Technologies",
        "role": "2D/3D Generalist & Technical Artist",
        "dates": "November 2014 - March 2015",
        "description": "Hydra was a game demo created for the Sulon Cortex. It was created to show gamers and developers that the product can create intriguing and and interesting user experiences. With this demo, users experience an adventure within a cave filled with lava. Upon following a spirit guide, the players walk across an unstable bridge and must use their magical abilities to get around the obstacles. Upon reaching a main platform, a Hydra rises from the lava and you enter a large battle sequence where you must fire your ice and fire magic o kill the Hydra.",
        "platform": "The Sulon Cortex",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }, {
        "title": "Engine Demo - Sulon Technologies",
        "role": "2D/3D Generalist & Technical Artist",
        "dates": "October 2014 - January 2015",
        "description": "The Engine Demo was a showcasing demo created for the Sulon Cortex. It was created to virtually showcase products and the technical aspects of an object in AR and VR. With this specific demo, users will experience a V8 car engine in the middle of the room. By doing a simple hand gesture, users could then changed the engine from a compact form, to an exploded form with individual parts floating around the room. Users could then walk around and see each individual part of the V8 engine up close. Once done, repeating the gesture will move all the parts back into the compacted engine.",
        "platform": "The Sulon Cortex",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }, {
        "title": "Quasar - Oscine Games",
        "role": "Game Designer, 2D Artist & Programmer",
        "dates": "60 Hours",
        "description": "Quasar is a small Android game created by two game developers during a game jam, and was created in less than 60 hours. This is the first game published under Oscine Games.",
        "platform": "Android",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }, {
        "title": "Stringer: Afghanistan - George Brown College",
        "role": "3D Artist",
        "dates": "June 2013 - December 2013",
        "description": "Stringer is an immersive journalism first person video game that places you in the middle of an Afghanistan battlefield armed with only a video camera and a first aid kit. The player uses a virtual camera to film events as they unfold in the game. The first aid kit in the game teaches the player how to stop severe bleeding using a tourniquet, ETD, and a gauze. This serious game is intended to be used to teach freelance journalists lifesaving techniques to treat themselves and their colleagues while working in combat zones. The combat medical procedures in this serious game were created in collaboration with Wilderness Medical Associates International. This project was created with Unity3D enhanced with cinematic 3D tools created by Cinema Suite. The game uses the Oculus Rift VR headset and the Razer Hydra controller to bring a deeper level of immersion to the player.",
        "platform": "Windows, OSX",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]
    }],
    "display": function() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(project) {
            var formattedTitle = HTMLprojectTitle.replace(data, project.title);
            $("#projects").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace(data, project.dates);
            $("#projects").append(formattedDates);

            var formattedPlatform = HTMLprojectPlatform.replace(data, project.platform);
            $("#projects").append(formattedPlatform);

            project.images.forEach(function(image) {
                var formattedImages = HTMLprojectImage.replace(data, image);
                $("#projects").append(formattedImages);
            });

            var formattedDescription = HTMLprojectDescription.replace(data, project.description);
            $("#projects").append(formattedDescription);
        });
    }
};

var education = {
    "schools": [{
        "name": "George Brown College",
        "location": "Toronto, Ontario",
        "degree": "Advanced Diploma",
        "majors": [
            "Game Development", " 3D Modeling"
        ],
        "dates": "2010 - 2013",
        "url": "http://www.georgebrown.ca/"
    }],
    "onlineCourses": [{
        "title": "Nanodegree",
        "school": "Udacity",
        "majors": [
            "Front-End Web Development"
        ],
        "dates": "October 2016 - Present",
        "url": "https://www.udacity.com"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(education) {
            var formattedSchool = HTMLschoolName.replace(data, education.name);
            var formattedEducation = HTMLschoolDegree.replace(data, education.degree);
            var formattedName = formattedSchool + formattedEducation;
            $("#education").append(formattedName);

            var formattedLocation = HTMLschoolLocation.replace(data, education.location);
            $("#education").append(formattedLocation);

            var formattedDates = HTMLschoolDates.replace(data, education.dates);
            $("#education").append(formattedDates);

            var formattedMajor = HTMLschoolMajor.replace(data, education.majors);
            $("#education").append(formattedMajor);

            var formattedUrl = HTMLschoolURL.replace(data, education.url);
            $("#education").append(formattedUrl);
        });

        education.onlineCourses.forEach(function(education) {
            var formattedTitle = HTMLonlineTitle.replace(data, education.title);
            var formattedSchool = HTMLonlineSchool.replace(data, education.school);
            var formattedName = formattedSchool + formattedTitle;
            $("#education").append(formattedName);

            var formattedDates = HTMLonlineDates.replace(data, education.dates);
            $("#education").append(formattedDates);

            var formattedMajor = HTMLonlineMajor.replace(data, education.majors);
            $("#education").append(formattedMajor);

            var formattedUrl = HTMLonlineURL.replace(data, education.url);
            $("#education").append(formattedUrl);
        });
    }
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);