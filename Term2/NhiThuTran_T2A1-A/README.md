# Workbook T2A1-A RfQ Response

### Q1 Describe the architecture of a typical Rails application
Ruby on Rails uses Model-View-Controller (MVC) architectural pattern.  MVC splits a Rails application into three interconnected parts. The model is the base information and is the bridge between the database and the application’s code. It is like HTML code for a webpage in that it handles the business logic of the application and is responsible for managing data.

The view is the visual representation of the model and is like the CSS of a webpage. It shows information request on the web browser.  The Controller processes and responds to the user actions from the User Interface like clicking on a button or link.  Controller and interacts between the user and the system.  

When the Browser needs to retrieve information, it will send a request to the Controller which handles the decision making.  The request comes to a file on routes.rb in the config folder.  Routes decides which controller should be executed and its related action responsible for dealing with the request (Panos M. 2017).  Controller decide which data should be fetch from the database via the model. The Model gets that data from the database and sends it back to the Controller. Once the data is retrieved it passes the data to the view, then view will send the response back to the browser so the user can see on their screen.


### Q2 Identify a database management system (DBMS) commonly used in web applications (including Rails) and discuss the pros and cons of this database
Database management system (DBMS) are the programs that allow the users to interact with a database. One of the most popular DBMS and the industry standard for Rails is PostgreSQL.  PostgreSQL main advantages is that it is free and open-sourced which makes it more accessible to users. Open source means that the community of users are encouraged to collaborate and support each other.  Users can use, modify and extend PostgreSQL tables so they can tailor it to their specific needs (Peterson R, Apr 2022).  Overall PostgreSQL has a good reputation for being reliable, scalability, extensibility, and data integrity (PostgreSQL Org, May 2022).

PostgreSQL can support Windows, Linux and Mac as well as “SQL and JSON for relational and non-relational queries to be complaint with SQL standards” (Peterson R, Apr 2022). This means that it could easily be used alongside the user or development teams existing applications without licenses.  Finding documentation and support is easy. I personally found that when I had a question with PostgreSQL queries, I was readily able to find answers related to my question on sites such as Stack Overflow.

The Cons for PostgreSQL is that it does not offer a way for users to compress data.  If you are not able to compress data taken up by PostgreSQL more hardware storage is required and can impact the performance when accessing data (Derivaux S, Jan 2019).  The performance and speed to run PostgreSQL can be slower compared to other DBMS tools.  PostgreSQL creates a server for each new client connection required.  This takes up storage space and affect its performance (Pedamkar P, viewed 15 Jun 2022).


### Q3 Discuss the implementation of Agile project management methodology
Agile project management methodology breaks down a project in smaller increments and is strategically planned or prioritised by importance to what needs to be developed with the customers’ needs in mind. The project development team focuses on continuous delivery by releasing in short sprints usually around 1-3 weeks each sprint while incorporating customer feedback.  Depending on the team, their expertise and complexity of work, the main aim is to consistently deliver each sprint while adapting to changes in circumstances as they come along (Radigan D, May 2022).  From project inception, regular and faster feedback cycle, issues, or problems can be identified earlier so they can be addressed.

The implementation of the Agile project management framework to ACME Corporation requires upfront planning and analysis. Agile project management work very differently to the Waterfall method. There is also multiple Agile methodology such as Scrum, Kanban or XP that can be adopted.  The main aim of Agile project management framework is that the software developed works, meeting customer satisfaction over detailed documentation of the requirements.  

Agile is about documenting just enough requirements leaving more flexibility for collaboration and communication across the development team, stakeholders and their customers while being flexible with its processes (Planio, 2018). Transparency of how the Development Team is progressing each sprint and their milestone deadlines are displayed on a project management tool called an Agile Board. The Teams objectives to meeting the deadline is also planned iteratively and the development team require to be disciplined in making sure they do not accept more work unless they have capacity and have completed all their agreed and prioritised work first for the sprint or iteration.

Agile project management has core processes. Requirements are gathered collectively with the development team and the expertise of stakeholders.  The introduction of Agile practices may require training and changes to the existing processes (Atlassian 2022).


### Q4 Provide an overview and description of a standard source control workflow.
Source control workflow helps to manage versions of code on your local computer or when collaborating with others.  When working in a company setting with multiple Teams, source control workflow is very important for managing a single source of truth, maintaining code quality, allows developers to work in the same code, commit and merge their code without conflict (Gehman C, Sept. 2019).

The start of the source control workflow depends on if there is existing code that needs to be used.  If no, a new repository is created.  If yes, a copy or branch of the repository is made so you can work on your local independently.

When you are ready with your changes you can git add and commit on your local repository.  All history and details to your changes you made and tracked.  This information will be useful if code conflicts or problems such as bugs is introduced.  If there are any changes from other contributors, you can also pull in their code into your local repository   to check there is no issues before pushing your commits and merging your changes back into the main version of the repository (Atlassian Bitbucket, viewed 15 Jun 2022).


### Q5 Provide an overview and description of a standard software testing process (e.g. manual testing).
The objectives of software testing are to gain confidence about the level of code quality, validate that the software meets its business and technical requirements and preventing defects getting introduced into the code. 

Different types of software testing are carried out throughout the development life cycle.  Typically, Developers manually test as they develop and create automated unit and integration test to check their code quality.  Unit test targets a small block of code usually a function and makes sure that it works under all conditions.  Integration tests are longer, more complex test cases that combine different section code and make sure that everything works as expected.  These automated tests are then incorporated into the Continuous Integration testing pipeline to help reduce future defects.

When the Developer are done, they will hand over the new feature or bug fix for further testing. Where it makes sense Acceptance, Functional, Exploratory, Regression, Cross Browser and or Usability testing is required.  If there are delegated testing resources such as Test Analyst, the following testing processes will take place before they start manual testing (ReQtest, May 2016).  

Test strategy, planning, analysis, and design tasks will be carried out. Test strategy typically includes decisions made based on the project’s goal and risk assessments.  Test planning considers the scope, approach, resources, and scheduling of the testing activities.  In the Test Analysis and Design process the testing objective is transferred into test cases and then prioritised.  Once the Test Execution stage is complete Test Closure process is run to ensure the minimum agreed pass rate of all tests planned is meet and all major defects are fixes (Fathima N, May 2021).


### Q6 Discuss and analyse requirements related to information system security and how they relate to the project
Considering Information Technology (IT) system security is a critical requirement for ACME a Corporate Security Policy and training should be made available to all ACME staff who are given access to ACME IT networks, applications, systems, infrastructure, and data.  This will help staff understand their regulatory and legislative requirements regarding the safe use and handling of information and their obligations to reducing or preventing information related risks.   Security of ACME data and the ability to safely and securely access any sensitive information including both commercial and personal data is important.  

Before building the Marketplace web application, any security risk needs to be identified and considered upfront and factored into the requirements.  The application needs to be protected from unauthorised or accidental access, modification, storage, and release of data or sensitive information, especially payment details (Wikipedia, Information security, viewed June 2022).  ACME Marketplace application may deal with collecting and or displaying confidential data of their clients, so identifying and understanding these security risk while developing will help to build a secure product.


### Q7 Discuss common methods of protecting information and data and how you would apply them to the project
There are different methods that can be incorporated into ACME Marketplace Application to safeguard and ensure customer personal privacy and prevent hackers from accessing ACME data and systems.  As the ACME Marketplace app uses Rails, Authentication types such as session based authentication or token based authentication like JSON Web Token (JWT) can be used to ensures that only verified users can access their user account and the application.  Factors such as scalability and if multiple devises will be used to access the Marketplace application needs to be considered before deciding (Hsu S, Jun 2018).  Furthermore, stronger password requirement can also be incorporated into the customer sign up process. 

Once the customer is verified, authorisation checks using devise method can be included in the Marketplace Application to find out what level of access the user has to specific information or functions.  Access Control can then be used to stop users from accessing information they should not have access to (Priocept, viewed 16 Jun 2022) .  For example, a buyer should not be able to modify the price of listed items, or a user should not be able access personal or payment information of other users.


### Q8 Research what your legal obligations are in relation to handling user data and how they can be met for the project
In Australia the Privacy Act 1988 (Privacy Act) require government agencies and most private sector organisation to adhere to 15 Australian Privacy Principles (APPs) when dealing with handling personal information.  Organisations need to be open and transparent about the collection of personal Information and how it will be handled (OAIC, 2019).  It ensures personal sensitive information is secure and used only for the purpose it was intended.  

While developing the Marketplace Application, security features to protect user personal information should be included at all levels.  All Development processes such as Infrastructure or Architecture design, Analysis of requirements, UX design, Development and Testing and feature or product release needs to have security in mind.  Each feature and its security requirements are worked out and consulted with security experts upfront.  Personal information on the Marketplace application should not display to unauthenticated, unauthorised user.  

The Criminal Code Act 1996 in the Commonwealth legislation covers computer vulnerabilities with access or destruction of data, creating and distribution malicious software ( AFP, viewed 16 Jun 2022).  Security measures need to be taken to protect the site from any means of Cyberattacks trying to gain access to customer personal information.  If such sign is believed to be detected at work a security breach process should also be considered so they can be acted and investigate to prevent further security risk. 


### Q9 Describe the structural aspects of the relational database model. Your description should include information about the structure in which data is stored and how relations are represented in that structure.
Relational database stores information in tables holding details about a type of item that is mutually related to a collection of other data tables.  Each table is made up with one or more columns that has different data categories.  Each table also has multiple rows or also known as tuples, that represents a relationship among a set of values that belong to the data categories (Rai V, Apr 2021).  Most important part of relational database is the concept of Primary key and Foreign key.  The row has a field containing a unique value, known as the primary key.  This means the record containing the same details can be used distinguished.  There are also foreign keys which is a “field in one table that connects to the primary key data in another table” (Rai V, Apr 2021).

One of the advantages to relational database is that it does not need to be re-organised for queries to be run, changed, or manipulate in different formats.  The data tables and views are not attached to the physical data storage (Rai V, Apr 2021).  Relations in the database are also represented in the different relationship types listed below:

* One-to-one relationship type refer to one record in one table can only be linked to one record in another.
* One-to-many relationships means a record in one table can be linked with more than 1 record of another table.
* Many-to-many relationship mean more than 1 record can be lined to multiple records of another table.


### Q10 Describe the integrity aspects of the relational database model. Your description should include information about the types of data integrity and how they can be enforced in a relational database.
Integrity rules and validations can be enforced in relational database to ensure the data added into the tables remain accurate, reliable, and complete (Naeem T, Oct 2020).   The following highlights data integrity approach and what type of data they relate to:

* Primary key attributes to not allow NULL to be added and must be unique.   NULL values usually indicate that the value is unknown.  This can complicate queries and development work.   If one tries to add a record with null primary key, not-null constraint error will occur.  Unique constraint error will occur when you try to add a Primary key record that already exist (Edstem.org, viewed Jun 2022).
* All foreign key values need to match with a primary key.  Foreign keys help establish the it’s tables relationship to the primary key.  If a Foreign key does not exist or does not match with the Primary key value, this makes the data incomplete and a foreign key constraint error will occur (Edstem.org, viewed Jun 2022).
* When setting up the tables; format, type, size of data and default values should be defined according to business rules or what is deemed acceptable for each column.  Validations can used to leverage off the defined conditions to control what information can added or updated.  This will prevent inconsistency of data entering and meeting business requirements.


### Q11 Describe the manipulative aspects of the relational database model. Your description should include information about the ways in which data is manipulated (added, removed, changed, and retrieved) in a relational database.
Data manipulation refers to the process of organising data to make it easier to read, adjusting or modifying data.  Structured Query Language (SQL) can be used to interact with the relational database model.  The most common SQL command is SELECT and FROM where, which retrieves information from the database.  Queries can use Boolean operators such as OR and AND as to specify values.  Other more complex relational set operators such as Join, Sort, Union, Intersection or SET difference is useful to analyse data.  Set operators take one or more relations as input to form a new view of outputs.

DELETE operator is used to remove and clean-up data that may no longer be useful and to keep data consistent.  Operators to transform data by adding (INSERT) values or change (UPDATE) is helpful to analyse data that is helpful to make informed business decisions (Date C, viewed Jun 2022).  


### Q12 Conduct research into a marketplace website (app) and answer the following parts:  
#### a. List and describe the software used by the app.
Etsy.com was used to conduct research into a marketplace website.  The main software used by Etsy are the following:

* JavaScript, React and Python is used to display their content and drive an interactive web application.  
* Google Analytics is used to collect user statistics for search engines.
* AfterShip used to track shipment of sales
* Jenkins is used to continuously integrate changes into their build while developing
* AppThwack used to facilitate testing of their application on Android or iOS mobile devices in the cloud
 (Stackshare, viewed 19 June)

#### b. Describe the hardware used to host the app.
The following hardware is used by Etsy to host their application:
* Amazon S3 is the used by to store their database
* Amazon EC2 used to manage storage and backup their data in the cloud
* Apache HTTP Server is used by Etsy to deploy their code
 (Stackshare, viewed 19 June)

#### c. Describe the interaction of technologies within the app.
When Etsy.com URL is entered into the browser a request for the content is sent to the Amazon Server.  The browser reads the HTML specification to know what should be display, it applies the styling from the CSS code and JavaScript is the main programming language used to drive how the application will interact with user actions and behaviour and what will display in each scenario (Van Niekerk J, May 2017).  Python is used to control back end behaviour of the application.  After the sale is confirmed on Etsy, the buyer can use AppShip to track their purchase.  User behaviour statistics will be captured on Google Analytics to help determine statistics of certain functions or help future business decisions.  

During development any bug fixes or change or enhancement of code is tested in AppThwack first to check the code is behaving as expected on a variety of devices and browsers and to ensure not bugs or errors are introduced.  Jenkins will be used to deploy any changes of code into the pipeline from development environment to Staging and then Production.

#### d. Describe the way data is structured within the app
Etsy uses JSON files to store and manage structured data relating to listing items.  The complex and large range of categories, attributes and values used on the Etsy application are organised in taxonomies defined in JSON files.  Each JSON file is used for each category.  When Sellers create new item listing on Etsy, they can choose categories from the taxonomy most appropriate for their listing.   Associated attributes and values related to their chosen category will be retrieved from the category JSON file and automatically populated by the application to assist in making the process more efficient for Sellers.  This process also can help ensuring listing descriptions remain consistent and relevant for each category.  Buyers can filter their search defined by category and subcategory in the taxonomy (Giamas A, Aug 2019). 
  
#### e. Identify entities which must be tracked by the app.
The following entities are important to the Etsy application:

* Users (User_id, name, address_id, DOB, email and password )
* Address (address_id, address details)
* Seller (User_id, listing_id, rating and reviews)
* Listing (Listing_id, category_id, description, picture)
* Order (Order_id, listing_id, buyer and seller, payment)
* Payment (payment_id, method of payment, order id, buyer_id and seller_id)
* Categories (Category_id, name and description)

#### f. Identify the relationships and associations between the entities you have identified in part (e)
As Etsy is a two sided marketplace application, a user could be a buyer or seller.  The relationship and association between each entity are as follows:

* User and Address entity is one to one as the address is unique to the user.  Association is via Address entity address_id primary key which is the User entity foreign key.
* User to Order entity is zero to many as the user does not need to place an order but can have more than one order.  From Order to User entity the relationship is one to one as there can only be one unique buyer or seller for an order.  The associate is via User entity primary key user_id which is the Order entity foreign keys buyer_id or seller_id.
* User to Listing entity is zero to many as the user does not need to sell any products but can sell more than one item.  Listing to User entity is one to one as each listing can only have one user associated to it.  Association is via User entity primary key user_id which is the Listing entity foreign key. 
* Order to Listing entity has one to one as there can only be one listing for each order.  There can be no order for a listing so the relationship from Listing to Order entity is zero to one.  Association is via Order entity primary key order_id which is the foreign key is the Listing entity foreign key.
* Further order details regarding purchase details can be found in the Purchase entities.  Relationship between Order and Purchase entity is one to one as purchase will not exist if there is no order.  Associated via Purchase entity primary key purchase_id and is the Order entity foreign key.  

#### g. Design a schema using an Entity Relationship Diagram (ERD) appropriate for the database of this website (assuming a relational database model)
![Etsy ERD image](./Etsy_ERD.pdf)


# Reference Source
AFP, viewed 16 June 2022, Cybercrime, < https://www.afp.gov.au/what-we-do/crime-types/cyber-crime>

Atlassan Bitbucket, viewed 15 Jun 2022, Comparing Workflows, <https://www.atlassian.com/git/tutorials/comparing-workflows>
Date C, viewed 19 Jun 2022, Relational Theory for Computer Professionals – Chapter 4. Relational Operators I, < https://www.oreilly.com/library/view/relational-theory-for/9781449365431/ch04.html>

Derivaux S, 14 Jan 2019, PostgreSQL for data science: pro and cons, <https://dataintoresults.com/post/postgresql-for-data-science-pro-and-cons/>

Edstem.org, viewed 20 Jun 2022, CoderContent – Ed Lessons, Relational Database Model, < https://edstem.org/au/courses/4965/lessons/5798/slides/42070>

Fathima N, 18 May 2021, A Brief Guide to Software Testing – Standards and Processes, <https://www.specbee.com/blogs/software-testing-standards-and-processes>

Gahman C, 12 September 2019, What is Source Control?, <https://www.perforce.com/blog/vcs/what-source-control#:~:text=Source%20control%20is%20important%20for,work%20on%20the%20same%20codebase. >

Giamas A, 31 Aug 2019, InfoQ, An Introduction to Structured Data at Etsy, <https://www.infoq.com/news/2019/08/Introductio-Structured-Data-Etsy/ >

Hsu S, 30 Jun 2018, Session vs Token Based Authentication, <https://sherryhsu.medium.com/session-vs-token-based-authentication-11a6c5ac45e4>

Naeem T, 31 Oct 2020, What is Data integrity in a Database?  Why Do You Need It? <https://www.astera.com/type/blog/data-integrity-in-a-database/ >

OAIC, 22 July 2019, Chapter 6: APP 6 – Use or disclosure of personal information, <https://www.oaic.gov.au/privacy/australian-privacy-principles-guidelines/chapter-6-app-6-use-or-disclosure-of-personal-information>

Panos M. 27 April 2017, Ruby on RAILS – Architecture Overview For Beginners, <https://www.techcareerbooster.com/blog/ruby-on-rails-architecture-overview-for-beginners>

Pedamkar P, viewed 15 June 2022, What is PostgresSQL?, < https://www.educba.com/what-is-postgresql/>

Peterson R, 16 April 2022, What is PostgreSQL? Introduction, Advantages & Disadvantages, <https://www.guru99.com/introduction-postgresql.html>

Planio 2018, MacKay J, viewed 8 May 2022, <https://plan.io/blog/what-is -agile-project-management/>

PostreSQL Global, viewed 19 May 2022, About, < https://www.postgresql.org/about/>

Priocept, viewed 16 Jun 2022, Authentication vs Authorisation vs Access Control, <https://priocept.com/2011/08/30/authentication-vs-authorisation-vs-access-control/>

Radigan D, viewed 8 May 2022, Agile vs. waterfall project management <https://www.atlassian.com/agile/project-management/project-management-intro>

Rai V, 13 Apr 2021, What is a Relational Database? Stackby Blog, <https://stackby.com/blog/what-is-a-relational-database/>

ReQtest, May 2016, The A to Z Guide to the Software Testing Process,
< https://reqtest.com/testing-blog/the-a-to-z-guide-to-the-software-testing-process/>

Stackshare, viewed 19 June 2022, <https://stackshare.io/etsy/etsy>

Van Niekerk J, 11 May 2017, How do HTML, CSS and JavaScript work together? <https://www.itonlinelearning.com/blog/how-do-html-css-and-javascript-work-together/>

Wikipedia, Information security, viewed 16 Jun 2022, <https://en.wikipedia.org/wiki/Information_security >

