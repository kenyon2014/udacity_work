var bio = {

    name: "Christie Cantwell",
    role: "Front-End Web Developer",
    contacts: [{
        mobile: "860-373-8062",
        email: "christie.cherie.kenyon@gmail.com",
        github: "kenyon2014",
        twitter: "@Christie42476",
        location: "Moosup, CT"
    }],
    welcomeMessage: "Welcome to my page. Thanks for stopping by!",
    skills: ["fast learner", "diligent", "dependable", "self-motivated", "flexible", "proactive", "takes initiative"],
    biopic: "images/profile.jpg",
    reach: "Best way to reach me: ",
    options: "mobile or email"
};

bio.display = function () {

    var formattedName;
    var formattedRole;
    var formattedMobile;
    var formattedEmail;
    var formattedGithub;
    var formattedTwitter;
    var formattedLocation;
    var formattedMessage;
    var formattedSkills;
    var formattedbioPic;
    var formattedReach;

    formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);

    formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    formattedReach = HTMLcontactGeneric.replace("%contact%", bio.reach).replace("%data%", bio.options);
    $("#header").append(formattedReach);

    for (var i = 0; i < bio.contacts.length; i++) {

        formattedMobile = HTMLmobile.replace("%data%", bio.contacts[i].mobile);
        $("#topContacts").append(formattedMobile);
        formattedEmail = HTMLemail.replace("%data%", bio.contacts[i].email);
        $("#topContacts").append(formattedEmail);
        formattedGithub = HTMLgithub.replace("%data%", bio.contacts[i].github);
        $("#topContacts").append(formattedGithub);
        formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[i].twitter);
        $("#topContacts").append(formattedTwitter);
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts[i].location);
        $("#topContacts").append(formattedLocation);
    }

    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkills);
    }
};

bio.display();

var work = {

    jobs: [{
        employer: "Thames Valley Council for Community Action",
        url: "http://www.tvcca.org",
        title: "SNP Program Manager",
        location: "Bozrah, Connecticut",
        dates: "October 2013 - Present",
        description: "system administrator for program software; invoicing and requisitions; billing through state website; filing; client registration; account creation and management"
    },
        {
            employer: "AT&T (formerly SBC/SNET)",
            url: "http://www.att.com",
            title: "Senior Analyst",
            location: "New Haven, Connecticut",
            dates: "August 2001 - June 2006",
            description: "table changes; unit, system, regression, and production test creation; unit, system, regression, and production testing; defect report and resolution; requirements analysis"
        },
        {
            employer: "SNET (became AT&T)",
            url: "http://www.att.com",
            title: "Service Order Specialist",
            location: "New London & Norwich, Connecticut",
            dates: "October 1995 - August 2001",
            description: "service order creation, completion, and correction; internal client support"
        }
    ]
};

work.display = function () {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer;
    var formattedTitle;
    var formattedEmployerTitle;
    var formattedDates;
    var formattedLocation;
    var formattedDescription;

    for (var i = 0; i < work.jobs.length; i++) {

        formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[i].url).replace("%data%", work.jobs[i].employer);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var education = {

    schools: [{
        name: "Quinebaug Valley Community College",
        location: "Danielson, CT",
        degree: "Associate's Degree (in progress)",
        dates: "Fall 2016 - Present",
        majors: "Liberal Arts & Sciences",
        url: "http://www.qvcc.edu"
    },
        {
            name: "Montville High School",
            location: "Oakdale, CT",
            degree: "High School Diploma",
            dates: "August 1990 - June 1994",
            majors: "N/A",
            url: "http://www.montvilleschools.org"
        }
    ],
    onlineCourses: [{
        title: "Front End Web Developer",
        school: "Udacity",
        dates: "June 2017 - Present",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        website: "Click Here to See the Front-End Web Developer Course Details."
    },
        {
            title: "Intro to Programming",
            school: "Udacity",
            dates: "October 2017 - December 2017",
            url: "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
            website: "Click Here to See the Intro to Programming Course Details."
        }
    ]
};

education.display = function () {
    $("#education").append(HTMLschoolStart);

    var formattedSchool;
    var formattedDegree;
    var formattedSchoolDegree;
    var formattedSchoolDates;
    var formattedSchoolLocation;
    var formattedMajor;

    for (var i = 0; i < education.schools.length; i++) {

        formattedSchool = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        formattedSchoolDegree = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedSchoolDegree);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    var formattedOnlineTitle;
    var formattedOnlineSchool;
    var formattedOnlineDates;
    var formattedOnlineURL;

    for (i = 0; i < education.schools.length; i++) {

        formattedOnlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        formattedOnlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].website);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

var projects = {

    project: [{
        title: "Portfolio",
        dates: "July 2017",
        description: "Created a web page to highlight and link to my featured works",
        images: "C:/Users/chris/Documents/Udacity/Portfolio Project/img/Portfolio_Snapshot.png",
        url: "C:/Users/chris/Documents/Udacity/Portfolio%20Project/index.htm"
    },
        {
            title: "Animal Card",
            dates: "June 2017",
            description: "Created a brief web card highlighting the gray wolf",
            images: "C:/Users/chris/Documents/Udacity/Animal Card/img/Card_Snapshot.png",
            url: "C:/Users/chris/Documents/Udacity/Animal%20Card/card.html"
        }
    ]
};

projects.display = function () {

    $("#projects").append(HTMLprojectStart);

    var formattedProTitle;
    var formattedProDates;
    var formattedProImages;
    var formattedProDescription;

    for (var i = 0; i < projects.project.length; i++) {

        formattedProTitle = HTMLprojectTitle.replace("#", projects.project[i].url).replace("%data%", projects.project[i].title);
        $(".project-entry:last").append(formattedProTitle);
        formattedProDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
        $(".project-entry:last").append(formattedProDates);
        formattedProDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
        $(".project-entry:last").append(formattedProDescription);
        formattedProImages = HTMLprojectImage.replace("%data%", projects.project[i].images);
        $(".project-entry:last").append(formattedProImages);
    }
};

projects.display();