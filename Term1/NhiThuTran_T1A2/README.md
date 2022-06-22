# *T1A1 Portfolio*

### Portfolio Website URL:
(https://nhi-tran.netlify.app)

### GitHub repo link:
(https://github.com/nhithutran/Homework)

## Purpose

The portfolio website will provide a platform to demonstrate my work while giving prospective employers an opportunity to learn more about me.  I believe intentional organisation of information about my work experience, relevant education, skills, interest, blogs and contact details will be more engaging than the traditional resume. It will get more attention from the viewer when the subject is personalised.

## Functionality/features

To display my work and information in a user-friendly and responsive designed website using all devices.  I have tried to keep the layout consistent so the user can have a good user experience when navigating through the website to easiery access information that matters.  My professional contact icons are linked to my accounts and can be found on the footer section, Contact page and I have included a contact form for them to email me. Via my Blog page "Read More" button the user can access more information on my blog. 

This website I am proud of and I hope to add more details and work as I progress through my course and work life experience.  I will be adding to my website a Project page for my future work.  


## Sitemap
![Alt text] (./docs/Sitemap_screenshot.png?raw=true "Sitemap screenshot")

## Screenshots
### Website mobile view
![Alt text] (./docs/mobile_screenshots/mob_home.png?raw=true "Mobile Home screenshot")
![Alt text] (./docs/mobile_screenshots/mob_dropdown_menu.png?raw=true "Mobile dropdown menu screenshot")
![Alt text] (./docs/mobile_screenshots/mob_about.png?raw=true "Mobile About screenshot")
![Alt text] (./docs/mobile_screenshots/mob_resume.png?raw=true "Mobile Resume screenshot")
![Alt text] (./docs/mobile_screenshots/mob_blog.png?raw=true "Mobile Blog screenshot")
![Alt text] (./docs/mobile_screenshots/mob_blogpost1.png?raw=true "Mobile Blog post 1 screenshot")
![Alt text] (./docs/mobile_screenshots/mob_blogpost2.png?raw=true "Mobile Blog post 2 screenshot")
![Alt text] (./docs/mobile_screenshots/mob_blogpost3.png?raw=true "Mobile Blog post 3 screenshot")
![Alt text] (./docs/mobile_screenshots/mob_blogpost4.pngraw=true "Mobile Blog post 4 screenshot")
![Alt text] (./docs/mobile_screenshots/mob_blogpost5.png?raw=true "Mobile Blog post 5 screenshot")
![Alt text] (./docs/mobile_screenshots/mob_contact.png?raw=true "Mobile Contact screenshot")

### Website mobile view
![Alt text] (./docs/desktop_screenshots/desktop_home.png?raw=true "Desktop Home screenshot")
![Alt text] (./docs/desktop_screenshots/desktop_about.png?raw=true "Desktop About screenshot")
![Alt text] (./docs/desktop_screenshots/desktop_resume.png?raw=true "Desktop Resume screenshot")
![Alt text] (./docs/desktop_screenshots/desktop_blog.png?raw=true "Desktop Blog screenshot")
![Alt text] (./docs/desktop_screenshots/desktop_blogpost1.png?raw=true "Desktop Blog post 1 screenshot")
![Alt text] (./docs/desktop_screenshots/desktop_contact.png?raw=true "Desktop Contact screenshot")

## Target audience

Potential employers who are looking to hire someone that not only has the right skillset but can also fit in with their company culture and people.

## Tech stack (e.g. html, css, deployment platform, etc)

### Demployement platform:
(https://www.netlify.com/)

### Home
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico" />
  <link href="style.css" rel="stylesheet" />
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Body with name, title and picture -->
  <section>
    <div class="homepage-content ">
      <div>
        <h1 tabindex="0">Nhi Thu Tran</h1>
        <h2 tabindex="0">Full-Stack Developer</h2>
      </div>
      <div>
        <img src="./images/home/photo-blkbrg.png" alt="photo of me">
      </div>
    </div>
  </section>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>

</body>

</html>
```

### About
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- About me page content -->
  <section>
    <div class="container box1 box2 skills-list">
      <h1 class="box1">About me</h1>
      <p>I am a wife, mother of two energetic boys and dog named Busta. I'm a novice surfer, coffeeholic and have a passion for food,
        yoga, hiking, camping, and indoor-plants.</p>
      <h2 class="box2">Skills</h2>
      <p>With thirteen years experience in Software testing, I am currently on an exciting journey to learn Web Developement and understand what lies
        beneath what I have been testing. I am currently completing a Full-stack Web Development Diploma with Coder Academy.
        at Coder Academy.</p>
      <p>My skillsets include:</p>
      <div class="skills-list">
        <img src="./images/aboutMe/github.png" alt="github logo">
        <img src="./images/aboutMe/html5.png" alt="html logo">
        <img src="./images/aboutMe/css.png" alt="css logo">
        <img src="./images/aboutMe/ruby.png" alt="ruby logo">
        <img src="./images/aboutMe/javascript.png" alt="javascript logo">
        <img src="./images/aboutMe/mongodb.png" alt="mongodb logo">
        <img src="./images/aboutMe/bootstrap.png" alt="bootstrap logo">
        <img src="./images/aboutMe/postman.png" alt="bootstrap logo">
      </div>
    </div>
  </section>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>
</body>

</html>
```

### Resume
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Resume page content -->
  <section>
    <div class="container work-history education">
      <h1>Resume</h1>
      <h2 class="work-history">Work history</h2>
      <h3>Full-stack Web Developer Trainee</h3>
      <p>Coder Academy (Feb 2022 - Present)</p>
      <h3>Test Analyst</h3>
      <p>Insignia Finanical (June 2022 - Present)</p>
      <h2 class="education">Education</h2>
      <h3>Diploma Web Development</h3>
      <p>Coder Academy (Feb 2022 - Nov 2022)</p>
      <h3>Certified Agile Tester</h3>
      <p>Planit Software (Jan 2022)</p>
      <h3>ISTQB Certificate - Foundation Software Testing</h3>
      <p>Jan 2012</p>
      <h3>Bachelor of Arts Humanity</h3>
      <p>Victorian University (Jan 2016 - Dec 2019)</p>
      <!-- Download resume -->
      <p class="download">Download my resume</p>
      <a href="./Nhi Resume.png" tabindex="1" target="_blank">
        <img src="./images/resume/download.png" alt="contact page linkedin icon">
      </a>
    </div>
  </section>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>
</body>

</html>
```

### Blog
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Blog page content -->
  <div class="main">
    <h1>Blog</h1>
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="./images/blog/csscode-image.jpg" alt="css code image"></div>
          <div class="card_content">
            <h2 class="card_title">Beginner CSS tips</h2>
            <p class="card_text">Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
              eiusmod tempor incididunt ut labore. l eum iure reprehenderit quicons ectetur vel eum iure.</p>
            <p class="card_text">Published: 01/02/2022</p>
            <!-- Click read more button to direct to blog post -->
            <button class="btn card_btn" tabindex="0" onclick="window.location.href= './blog_post1.html';">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="./images/blog/agilewall.jpg" alt="agile wall image"></div>
          <div class="card_content">
            <h2 class="card_title">What does Agile methodology mean to a QA?</h2>
            <p class="card_text">Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
              eiusmod tempor incididunt ut labore.</p>
            <p class="card_text">Published: 01/01/2022</p>
            <button class="btn card_btn" tabindex="0" onclick="window.location.href= './blog_post2.html';">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="./images/blog/lovetolearn.jpg" alt="love to learn image"></div>
          <div class="card_content">
            <h2 class="card_title">Learning to love learning.</h2>
            <p class="card_text">Lorem ipsum dolor sit amet, consectetur ratione voluptatem sequi.
              nesciunt consectetur Lorem ipsum dolor sit amet consectetur ratione voluptatem sequi.</p>
            <p class="card_text">Published: 01/12/2021</p>
            <button class="btn card_btn" tabindex="0" onclick="window.location.href= './blog_post3.html';">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="./images/blog/thought-catalog.jpg" alt="journal image"></div>
          <div class="card_content">
            <h2 class="card_title">How journalling can help you achieve your goals.</h2>
            <p class="card_text">Lorem ipsum dolor sit adipiscing elit consectetur adipiscing. Know consectetur adipiscing elit consectetur adipiscing.
            </p>
            <p class="card_text">Published: 01/11/2021</p>
            <button class="btn card_btn" tabindex="0" onclick="window.location.href= './blog_post4.html';">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="./images/blog/campfood.jpg" alt="campfood image"></div>
          <div class="card_content">
            <h2 class="card_title">Gourmet camp food?</h2>
            <p class="card_text">Lorem ipsum dolor sit ametad ipiscing it is those adipiscing elit consectetur who do not know consectetur adipiscing elit consectetur adipiscing.</p>
            <p class="card_text">Published: 01/10/2021</p>
            <button class="btn card_btn" tabindex="0" onclick="window.location.href= './blog_post5.html';">Read More</button>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>  
    </div>
  </footer>
</body>

</html>
```

### Blog post 1
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Blog content -->
  <article class="blog">
    <h1>Beginner CSS Tips</h1>
    <p>Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
      eiusmod tempor incididunt ut labore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
    <p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
      quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam.</p>
    <img src="./images/blog/csscode-image.jpg" alt="agile wall image">
    <p><img src="./images/blog_post_calender.png" alt="calender icon">Published: 01/02/2022</p>
  </article>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>

</body>

</html>
```

### Blog post 2
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Blog content -->
  <article class="blog">
    <h1>What does Agile methodology mean to a QA?</h1>
    <p>Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
      eiusmod tempor incididunt ut labore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
    <p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
      quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam.</p>
    <img src="./images/blog/agilewall.jpg" alt="agile wall image">
    <p><img src="./images/blog_post_calender.png" alt="calender icon">Published: 01/01/2022</p>
  </article>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>

</body>

</html>
```

### Blog post 3
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

    <!-- Blog content -->
    <article class="blog">
        <h1>Learning to love learning.</h1>
        <p>Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
            eiusmod tempor incididunt ut labore.  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
          quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam.</p>
          <img src="./images/blog/lovetolearn.jpg" alt="love to learn image">
        <p><img src="./images/blog_post_calender.png" alt="calender icon">Published: 01/12/2021</p>      
    </article>


    <footer>
        <div class="footer">
          <div class="copyright">
            <p>© 2022 Nhi Thu Tran</p>
          </div>
          <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
            <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
          </a>
          <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
            <img src="./images/footer_github_48px.png" alt="contact github icon">
          </a>
        </div>
      </footer>

</body>


</html>
```

### Blog post 4
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Blog content -->
  <article class="blog">
    <h1>How journalling can help you achieve your goals.</h1>
    <p>Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
      eiusmod tempor incididunt ut labore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
    <p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
      quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam.</p>
    <img src="./images/blog/thought-catalog.jpg" alt="journal image">
    <p><img src="./images/blog_post_calender.png" alt="calender icon">Published: 01/11/2021</p>
  </article>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>

</body>

</html>
```

### Blog post 5
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="0">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- Blog content -->
  <article class="blog">
    <h1>Gourmet camp food?</h1>
    <p>Lorem ipsum dolor sit amet consectetur vel eum iure. Reprehenderit qui in ea adipiscing elit.
      eiusmod tempor incididunt ut labore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
    <p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
      quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam.</p>
    <img src="./images/blog/campfood.jpg" alt="campfood image">
    <p><img src="./images/blog_post_calender.png" alt="calender icon">Published: 01/10/2021</p>
  </article>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>

</body>

</html>
```

### Contact
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
  <link rel="icon" type="image/x-icon" href="./images/NT.ico">
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <header>
    <!-- Navigation bar-->
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo" tabindex="0">
        <a href="https://nhi-tran.netlify.app" rel="home">NT</a>
      </div>
      <!-- Navigation menu -->
      <ul class="nav-links">
        <!-- Checkbox icon  -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" tabindex="1">&#9776;</label>
        <!-- Navigation menus -->
        <div class="menu">
          <li><a href="index.html" tabindex="0">Home</a></li>
          <li><a href="about.html" tabindex="0">About</a></li>
          <li><a href="resume.html" tabindex="0">Resume</a></li>
          <li><a href="blog.html" tabindex="0">Blog</a></li>
          <li><a href="contact.html" tabindex="0">Contact</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <section>
    <div class="container contact-details contact-form">
      <h1>Contact me</h1>
      <h3 class="contact-email">nhihuttran@gmail.com</h3>
      <!-- Professional contact links -->
      <div class="contact-details">
        <!-- Check if the icons link to LinkedIn or github icon -->
        <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
          <img src="./images/contact/contact-linkedin.png" alt="contact page linkedin icon">
        </a>
        <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
          <img src="./images/contact/contact_github_64px.png" alt="contact github icon">
        </a>
      </div>
    </div>

    <!-- Get in touch form -->
    <div class="form-heading">Get in touch</div>
    <div class="contact-form">
      <form action="https://formspree.io/f/xjvlrzwp" method="POST">
        <div class="contact-details">
          <label>First Name: </label>
          <input type="text" name="firstname">
        </div>
        <div class="contact-details">
          <label>Last Name: </label>
          <input type="text" name="lastname">
        </div>
        <div class="contact-details">
          <label>Email: </label>
          <input type="email" name="email">
        </div>
        <div class="contact-details">
          <label>Message: </label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="footer">
      <div class="copyright">
        <p>© 2022 Nhi Thu Tran</p>
      </div>
      <a href="https://www.linkedin.com/in/nhi-tran-39955b233" tabindex="1" target="_blank" class="contact-linkedin">
        <img src="./images/footer_linkedin_48px.png" alt="contact page linkedin icon">
      </a>
      <a href="https://github.com/nhithutran" tabindex="2" target="_blank" class="contact-github">
        <img src="./images/footer_github_48px.png" alt="contact github icon">
      </a>
    </div>
  </footer>
</body>

</html>
```

### CSS stylesheet
```
/* NAVIGATION bar*/
.navbar {
  display: flex;
  padding: 1em;
  font-size: 1em;
  width: 100%;
  background-color: var(--darkgrey);
  color: var(--white);
  justify-content: space-between;
  align-items: baseline;
}

.logo {
  display: flex;
  background: linear-gradient(to right, var(--lightgreen), #ededed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 15%;
  font-size: 2.5em;
  padding: 0.1em;
  margin-top: 0.5em;
  background-color: var(--darkgrey);
}

/* Navigation menu */
.menu {
  display: flex;
  gap: 1em;
  font-size: 1em;
}

.menu li:hover {
  background-color: var(--lightgreen);
  border-radius: 5%;
  transform: 0.3s ease;
}

.menu li {
  margin: 0.2em;
  list-style-type: none;
  padding: 5px 14px;
  color: var(--white);
}

.menu a {
  color: var(--white);
  text-decoration: none;
  font-size: 1.5em;
}

/* Hamburger menu to display for smaller screens */
/* Checkbox */
input[type="checkbox"] {
  display: none;
}

.hamburger {
  display: none;
  font-size: 1.5em;
  user-select: none;
}

/* Display hamburger menu on small screens */
@media only screen and (max-width: 768px) {
  .menu {
    display: none;
    position: absolute;
    background-color: var(--darkgrey);
    right: 0;
    left: 0;
    padding: 1em;
    text-align: center;
    z-index: 1;
  }
  .menu li:hover {
    display: inline-block;
    background-color: var(--lightgreen);
    transform: 0.3s ease;
  }
  .menu li + li {
    margin-top: 0.8em;
  }
  input[type="checkbox"]:checked ~ .menu {
    display: block;
  }
  .hamburger {
    display: block;
    cursor: pointer;
  }
}

/* BODY & TEXT styling */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: var(--white);
  /* color: var(--darkgrey); */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 0;
  font-size: 1em;
  line-height: 2em;
  scroll-behavior: smooth;
}

h1 {
  color: var(--emerald);
  font-size: 2em;
  display: block;
  text-align: center;
}

h2 {
  color: var(--darkgrey);
  font-size: 1.4em;
  display: block;
  text-align: center;
}

h3 {
  font-size: 1em;
  display: block;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 3rem;
  align-content: center;
}

/* HOME page */
.homepage-content {
  display: flex;
  line-height: 2em;
  padding: 20% 10% 20% 10%;
  font-size: 2em;
  align-items: center;
  justify-content: space-between;
}

.homepage-content img {
  display: block;
  width: 15em;
  height: 15em;
  justify-content: center;
  padding-top: 5%;
}

@media only screen and (max-width: 768px) {
  .homepage-content {
    display: flex;
    flex-direction: column;
    line-height: 2em;
    font-size: 1.2em;
    align-items: center;
  }
  .homepage-content img {
    display: block;
    width: 12em;
    height: 17em;
    justify-content: center;
    padding-top: 5%;
  }
}

/* ABOUT page */
.box1 p {
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: center;
}

.container .skills {
  margin-top: 10%;
}

/* RESUME page */
.work-history h2 {
  margin-top: 2em;
}

.education h2 {
  margin-top: 2.5em;
}

.work-history h3 {
  color: var(--emerald);
  font-size: 1em;
  margin-bottom: 0em;
}

.download {
  font-weight: bold;
  font-style: italic;
  margin-top: 2.5em;
  margin-bottom: 0;
}

/* BLOG page */
html {
  background-color: var(--white);
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3em;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: var(--white);
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid var(--darkgrey);
  background: transparent;
}

.btn:hover {
  background-color: var(--darkgrey);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

.card {
  background-color: var(--white);
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px var(--darkgrey);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-content: stretch;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(
    to bottom left,
    var(--darkgrey) 40%,
    var(--lightgreen) 100%
  );
}

.card_title {
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: var(--white);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}

/* Blog Post  */
.blog {
  padding: 2rem;
  font-size: 1rem;
  justify-content: center;
}

.blog img {
  padding-right: 0.5rem;
}

/* CONTACT page */
.contact-details a {
  display: inline-block;
  flex-direction: row;
  justify-content: center;
}

.form-heading {
  text-align: center;
  padding-top: 2%;
  font-size: 1.5em;
  font-weight: 500;
}

.contact-form {
  display: flex;
  padding: 2em 10em;
  justify-content: center;
}

.contact-form .contact-details {
  padding-bottom: 15px;
}

input[type="text"],
input[type="email"],
textarea[name="message"] {
  width: 150%;
  padding: 1em 2em;
  border-radius: 4px;
  resize: vertical;
}

/* Contact form to have less padding on the side so not to be squished */
@media only screen and (max-width: 600px) {
  .contact-form {
    display: block;
    padding: 0.5em 1em;
  }
}

@media screen and (max-width: 600px) {
  label {
    width: 80%;
    margin: 0;
  }
}

.contact-form textarea {
  height: 10em;
  border-radius: 4px;
}

.contact-form button {
  background-color: var(--darkgrey);
  color: var(--white);
  padding: 2% 6%;
  font-size: 1.2;
  text-transform: uppercase;
}

.contact-form button:hover {
  color: var(--lightgreen);
}

/* FOOTER styling */
.footer {
  position: relative;
  display: flex;
  bottom: 0%;
  width: 100%;
  padding: 1em;
  margin-top: 100%;
  background-color: var(--darkgrey);
}

.footer,
.copyright,
a {
  text-align: center;
  justify-content: center;
  display: inline-block;
  padding: 0;
}

.copyright p {
  color: var(--lightgreen);
  font-size: 1em;
  padding-right: 0.5em;
}

/* Website colors */
:root {
  --darkgrey: #333;
  --white: #ededed;
  --emerald: #046307;
  --lightgreen: #0bb654;
}
```