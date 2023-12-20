# INST-377-Group-11 (David Kneebone and Oscar Singh)

J&J Law Firm App

The purpose of our project is to create a dynamic web application that allows 
users, specifically lawyers and legal staff, to not only search for information
on existing cases, but to also input information on new cases. Many law firms 
currently rely on manual data entry and record keeping, which is inneficient 
and can even result in errors or innacuracies in the information. Our hopes are 
that this application can streamline the process of case information collection 
and the management of law firms by making the information easily accessible. 
Our application will fetch api from a structured database that we have created 
using Supabase. When users input new cases and their information, that 
information will be entered into the same structured database to then be called
on from the application by others in the future.

The devices the website will be targeting are cell phones, computers, and 
tablets. Tablets can be placed in the offices of law firms for clients to use 
upon arrival. It is of no concerfn for us whether the devices are ios or 
android since both will be able to use the web application.

User Manual:

To use this web application, starting at the home page, users can use the 
taskbar to navigate to either the "About" page, which talks about what eactly
this app is and its purpose, or they can navigate to the "Documentation" page,
which offers guidance for both users of the application as well as future
developers of this applications. From the home page, users can also scroll to 
find numerous links to recent news articles and can even click on the links to 
go to those articles if they are so inclined. The main functionality for this 
application starts with clicking the "Click to Get Started!" button on the home 
page, it is nice and colorful so it should be hard to miss. After clicking on 
the button it should take the user to a new page where they can either enter a
new case into our court case database, or they can search for an existing case
from the database. To enter a case, the user has to provide both a name for the
case, a case number of their choosing, the state that the case took place in, 
and the description of the case. Then once the user clicks "Enter", the case
should be uploaded straight to our database and can then be searched by users.
To search for a case, a user must enter the exact name of the case and then 
click "Go". This will result in the name and state of the case being displayed,
as well as the description of the case. Additionally, after searching for a 
case, a bar chart will appear that displays how many cases were from each US 
state.

Developer Manual:

For future developers who will be working on this project: you can install the 
application and all dependencies by opening up the program in VS Code and 
installing npm as well as Supabase by entering "npm i" and "npm install 
@supabase/supabase-js" into the VS Code terminal. To run the application on a 
server; you can simply enter "npm start" into the VS Code terminal, and then 
go to a new web browser and search up "localhost:4000". You should then reach 
the home page of the web application, where you can click the "click to get 
started" button to find the options to either enter a new court case, or search
for one. 

When entering a new case, if you right click the web page and click "Inspect" 
beforehand, it will notify you if the case you entered was added. Additionally,
if you then search for a case, you will be able to see the whole api that 
displays the list of court cases, so you will be able to see if the case you 
entered was successfully added to the api.

We used two APIs for our server application. One of them was the database API 
created using Supabase. We used a Get method to retreive this API so that the 
user can search cases, and we also used a POST method to update the API so that
the user can add new court cases to the database. The second API we used was an
external API that contained different news articles. We used a fetch api to 
retreive these articles and display the links to them on the home page for 
users to be up to date not jsut on court cases, but what is going on in the 
world.

The only bug we know of so far, is that occasionally when trying to enter a new
case, the VS Code terminal will say that there is a duplicated id error, and 
that for example, id-8 is already used. When this happens we have found that if 
you keep clicking the enter case button, that the id shown in the error will 
increase by 1 until it reaches an id that is no longer used up, and the case 
will be entered. Typically, even when revisiting the page, the id will stay 
where it left off so that you do not have to revisit this error, but 
ocasionally the id will be back to a lower number for some reason and you will
just have to keep clicking the enter button until the case is entered. In terms
of future development, one obvious step would be to just continue adding more 
cases to the database API so that there are more cases that users can search
for. Additionally, we tried using react to display a nice table for the 
information of a searched case appears, but we were unable to get the react 
table to work. However, we have left most of our framework for trying to create
the table, so if a new developer was up to the challenge, they would have a 
decent place to start.
