# T3A1 - Workbook

### Q1 
“Source control is a practice to track and manage changes to software code.   Source control management (SCM) gives a running history of code development and helps to resolve conflicts when merging contributions from multiple sources” (AWS, viewed 30 Jul 22).  Each time a change is made, the details of who and what was changed should be recorded, so that it can be reviewed later.  This information can be useful in saving time to identifying and fixing bug(s) if they are introduced.  

How can SCM help a large project reduce risk and make collaborating with each other more efficient?  When working in an organisation setting with a large project and multiple teams there is more than one developer sharing the same codebase at the same time.  Other projects and teams may be required to work on code that overlaps on the same software function. This can significantly increase the number of developers and make the project more complex to manage and co-ordinate.   For this reason, consistent SCM tools and processes across the organisation is critical for maintaining a single source of truth and reduce the development cost repository (Atlassian Bitbucket, viewed 29 July 2022).  

One of the main tools in SCM is source control, also known as version control.  Source control tools keeps track of every change made to the code during the development life cycle.  The main function for source control is to protect the source code from being compromised and damaged.  Source code is like a software’s blueprint, containing information on how the software works, why changes were made and details of functionality developed over time.  Some of the source control tools include Git which is an open-source tool, CVS, SVN or Perforce Helix Core.  Based on the organisations needs; they may choose to store changes on a single server called centralized system like VCS or Perforce or clone a copy of the repository by using a distributed version control system like GIT or Mercurial (Software Testing Help, 15 July 2022).

Source control tools, allow multiple developers to continually make changes to the same codebase and collaborate more efficiently.  It tracks who, when and why the changes are made so that it is tracible.  With larger projects more people are working on the same codebase.  The likelihood of mistakes or code changes made not being compatible with another developer’s changes can increase.  When this happens developers can look back at the history, compare the code prior to their change to help solve and fix issue earlier and faster before moving forward.  It gives developers comfort that they can always safely revert their changes if they have accidently overwritten over code and caused conflicts or introduced bugs in the code base.  

Without SCM, more care is required to co-ordinate the timing of each release and ensure that they do not over-lap which can cause issues.  With SCM it allows developers to create a separate branch, pulls the latest version of the code and work on the necessary changes independently on their local environment.  When they are ready with their changes, the developer can check if there any changes from other contributor and choose to pull that code into their local repository to make sure there is no issues before merging their own changes back into the main version of the project repository.  The following are SCM best practices to ensure smooth running of a large project (Atlassian Gitbucket, viewed 31 July 2022, What is source control?):

* Ensure everyone in the project have a consistent shared approach to source control workflow and practices before development begins
* Committing frequently to give quicker feedback and capture update to the codebase
* Git pull or fetch latest version before making changes or updates as this can help to reduce issue when you are merging your code
* Being diligent with making accurate notes when committing code so they can be useful and informative for future contributors
* Review changes and check what it entails before committing code in the staging area.  This gives the developer a final chance to check their changes before committing their code  
* Using branches as a way to enable each developer to work on separate features at the same time and merge into the main or master branch when they are ready



### Q2
Aspects of quality software? Discuss and demo 6 qualities

### Q3 

### Q4
Name skills team members should have in order to develop.  Also include non-development skills

### Q5
Marketplace project

### Q6
Marketplace project


### Q7 

### Q8 

### Q9 

### Q10

### Q11

### Q12

### Q13
Add comments, briefly explain what code snippet does.  There are also errors in code so point out

# Reference Source

Gahman C, 12 September 2019, What is Source Control?, <https://www.perforce.com/blog/vcs/what- source-control#:~:text=Source%20control%20is%20important%20for,work%20on%20the%20same%20codebase.>