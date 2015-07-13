//=========================================
// BIO
//=========================================

var bio = {

  //data
  name: 'John Doe',
  role: 'Web Developer',
  contacts: {
    mobile: '650-555-5555',
    email: 'john@example.com',
    github: 'johndoe',
    twitter: '@johndoe',
    location: 'San Francisco'
  },
  welcomeMessage: 'lorem ipsum dolor sit amet etc etc etc.',
  skills: [
    'awesomeness',
    'delivering things',
    'cryogenic sleep',
    'saving the universe'
  ],
  biopic: 'images/fry.jpg',

  //display function
  display: function() {

    //prepend name and role before the contact details
    formattedHeaderRole = HTMLheaderRole.replace('%data%', this.role);
    $('#header').prepend(formattedHeaderRole);
    formattedHeaderName = HTMLheaderName.replace('%data%', this.name);
    $('#header').prepend(formattedHeaderName);

    //append contact details in both the header and footer
    formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter);
    $('#topContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter);
    formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedLocation);

    //append bio pic
    formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
    $('#header').append(formattedBioPic);

    //append welcome message
    formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
    $('#header').append(formattedWelcomeMsg);

    //append skills
    if (this.skills.length > 0) {

      //append skills title first
      $('#header').append(HTMLskillsStart);

      //loop through skills array and append each of them to the skills ul
      for (var i = 0; i < this.skills.length; i++) {
        var formattedSkills = HTMLskills.replace('%data%', this.skills[i]);
        $('#skills').append(formattedSkills);
      }
    }

  }

};

//display bio section
bio.display();



//=========================================
// EDUCATION
//=========================================

var education = {

  //data
  schools: [
    {
      name: 'Nova Southeastern University',
      location: 'Fort Lauderdale, FL',
      degree: 'Masters',
      majors: ['CS'],
      dates: 2013,
      url: 'http://example.com'
    },
    {
      name: 'Eckerd College',
      location: 'Saint Petersburg, FL',
      degree: 'BA',
      majors: ['CS'],
      dates: 2003,
      url: 'http://example.com'
    }
  ],
  onlineCourses: [
    {
      title: 'JavaScript Crash Course',
      school: 'Udacity',
      date: 2014,
      url: 'http://www.udacity.com/course/ud804'
    }
  ],

  //display function
  display: function() {

    //iterate through schools
    for (var i = 0; i < this.schools.length; i++) {

      //append starter div
      var $schoolElem = $(HTMLschoolStart);
      $('#education').append($schoolElem);

      //append school name
      var formattedSchoolName = HTMLschoolName.replace('%data%', this.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[i].degree);
      var $formattedSchoolNameElem = $(formattedSchoolName + formattedDegree);
      $formattedSchoolNameElem.attr('href', this.schools[i].url);
      $schoolElem.append($formattedSchoolNameElem);

      //append dates
      var formattedDates = HTMLschoolDates.replace('%data%', this.schools[i].dates);
      $schoolElem.append(formattedDates);

      //append location
      var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
      $schoolElem.append(formattedLocation);

      //append majors
      var numMajors = this.schools[i].majors.length;
      var majorText = numMajors === 0 ? '-' :  this.schools[i].majors.join(', ');
      var formattedMajor = HTMLschoolMajor.replace('%data%', majorText);
      $schoolElem.append(formattedMajor);

    }

    //append online courses header if there are courses
    var numOnlineCourses = this.onlineCourses.length;
    if (numOnlineCourses !== 0) {
      var $onlineClassesElem = $(HTMLonlineClasses);
      $('#education').append($onlineClassesElem);
    }

    //iterate through online courses
    for (var i = 0; i < numOnlineCourses; i++) {

      //append starter div
      var $schoolElem = $(HTMLschoolStart);
      $('#education').append($schoolElem);

      //append title
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
      var $formattedOnlineTitleElem = $(formattedOnlineTitle + formattedOnlineSchool);
      $formattedOnlineTitleElem.attr('href', this.onlineCourses[i].url);
      $schoolElem.append($formattedOnlineTitleElem);

      //append dates
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', this.onlineCourses[i].date);
      $schoolElem.append(formattedOnlineDates);

      //append url
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
      var $formattedOnlineUrlElem = $(formattedOnlineURL);
      $formattedOnlineUrlElem.attr('href', this.onlineCourses[i].url);
      $schoolElem.append($formattedOnlineUrlElem);

    }

  }

};

//display education section
education.display();



//=========================================
// WORK
//=========================================

var work = {

  //data
  jobs: [
    {
      employer: 'Planet Express',
      title: 'Delivery Boy',
      location: 'Brooklyn, NY',
      dates: 'January 3000 - Future',
      description: 'Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody\'s happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.'
    },
    {
      employer: 'Panucci\'s Pizza',
      title: 'Delivery Boy',
      location: 'Manhattan, NY',
      dates: '1998 - December 31, 1999',
      description: 'Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody\'s happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.'
    }
  ],

  //display function
  display: function() {

    //iterate through jobs
    for (var i = 0; i < this.jobs.length; i++) {

      //append starter div first
      var $workExpElem = $(HTMLworkStart);
      $('#workExperience').append($workExpElem);

      //append employer
      var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
      $workExpElem.append(formattedWorkEmployer + formattedWorkTitle);

      //append location
      var formattedWorkLocation = HTMLworkLocation.replace('%data%', this.jobs[i].location);
      $workExpElem.append(formattedWorkLocation);

      //append dates
      var formattedWorkDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
      $workExpElem.append(formattedWorkDates);

      //append description
      var formattedWorkDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);
      $workExpElem.append(formattedWorkDescription);

    }

  }
};

//display work section
work.display();



//=========================================
// PROJECTS
//=========================================

var projects = {

  //data
  projects: [
    {
      title: 'Sample Project 1',
      dates: '2014',
      description: 'Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody\'s happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.',
      images: [
        'images/197x148.gif',
        'images/197x148.gif'
      ]
    }
  ],

  //display function
  display: function() {

    //iterate through projects
    for (var i = 0; i < this.projects.length; i++) {

      //append starter div first
      var $projectsElem = $(HTMLprojectStart);
      $('#projects').append($projectsElem);

      //append title
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
      $projectsElem.append(formattedProjectTitle);

      //append dates
      var formattedProjectDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
      $projectsElem.append(formattedProjectDates);

      //append description
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
      $projectsElem.append(formattedProjectDescription);

      //append images
      for (var j = 0; j < this.projects[i].images.length; j++) {
        var formattedProjectImage = HTMLprojectImage.replace('%data%', this.projects[i].images[j]);
        $projectsElem.append(formattedProjectImage);
      }

    }

  }
};

//display projects section
projects.display();



//=========================================
// MAPS
//=========================================

var maps = {
  display: function() {
    $('#map-div').append(googleMap);
  }
};

//display maps section
maps.display();
