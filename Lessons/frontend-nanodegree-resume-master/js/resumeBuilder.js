var name = "Justin Bettencourt";

var role = "Front-End Web Developer"

var age = 24;

var email = "justinvbettencourt@live.ca";

var newEmail = email.replace("live", "gmail");

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#main").append(skills.length);