# Alguyrithms
*************************
Steps to Run Bookee
*************************
1. From the Bookedesignarchitecture Github page, click on the green "Code" button and at the bottom of that drop down menu click on the "Download Zip" option.
2. Find the zip file in your download folder or where ever you assigned your downloads to go. 
3. Unzip all the files located within that folder. 
4. Inside the folder find the landing.html document, and double click on it to open it in your browser.
5. With the Bookee landing page now open in your browser scroll to the bottom of the landing page.
6. At the bottom of the landing page you will find a link to the Bookee Prototype. Click that link to open the application.   

*********************************
Architectural Design/Organization
*********************************
A Browser/Server Model for an online appointment system will consist of two sets of functions.  

Online registration functions include registration. Login, selection of department, date, selecting an appointment slot, confirming the appointment, and receiving an email confirmation.  

Data management functions allowing the administrator to add, delete, modify, inquiry, restore and back up.  Add, delete, modify and inquiry are the basic operations of database management. 

Bookee will be designed in a layered approach with a focus on components having a single concern, limiting duplicate functionality while providing stable interfaces. Due to Bookee’s straight forward design it uses minimal components which reduces its overall complexity.  

The first component on the top layer of Bookee’s design is its user interface. The UI is accessed through a web-browser, so it provides a stable/familiar interface for the user.  The next layer will be the cloud-based server component. The server will supply the power, security and communication for the system.  While this does duplicate the functionality of the server, that frees up the other components to have only single concerns.  The final and bottom layer of the system will be split in half with the last two components existing side by side one another. To the bottom left of the server will be the database component and to the right will be the application component. This reduces cross-cutting as both components need to communicate with the server.   


******************************
Distribution and Communication
******************************

Bookee’s architectural components will be distributed using a service-oriented architecture. This architectural structure allows Bookee the flexibility to start on a small scale but quickly ramp up with user demand due to the greater efficiency, reliability and scalability that service-oriented architecture provides.   

It is efficient in that it allows multiple users the ability to access the server at one time from a variety of locations. This will provide Bookee with an opportunity to offer its services to providers and customers all around the country from day one, which has a positive effect on Bookee’s time to market. 	This architecture also increases Bookee’s reliability due to the replaceability of service components that this architecture allows. If a service component ever goes out, interruptions will be kept to a minimum as that service component can quickly be replaced, or several redundant service components can be built into this structure with no noticeable effect on performance.  

The same features of service-oriented architecture that enhance its reliability also benefit Bookee’s scalability.  This distribution model will allow Bookee to add service components based on user demands, whether that's due to increased traffic or contracting with a business or organization that wants a customized application interface or a dedicated database.  Bookee will be able to add these stateless components with ease, while not disrupting service to other users.  

Components will communicate with each other using a partially integrated structure. As described in question one, Bookee will utilize a layered chain of command between components that establishes a structured  communication path, that reduces cross-cutting, utilizes security systems, and keeps the communication flowing.  

Requests from the user will be communicated through Bookee’s web-based UI to our cloud-based server. This server then acts as the intermediary between the user, the application and the database sending communications back and forth to them as necessary.  At no point can the user directly access the application or database without passing through the cloud servers built in security. The cloud server analyses the traffic and only allows legitimate users to gain access.   

The application component and database will also not have direct communication with each other, they will be aware of each other and communicate through the server as needed. This further enhances security protocols and limits data leakage. It also reduces cross cutting, if the database and application were on separate layers, one would need to cross over the other one to talk to the server. 


**********************************
Development Tools and Technologies
**********************************

Database - Bookee will utilize a relational SQL database using MySQL. Since our product focuses on the relationship between customers and providers a relational database not only makes functional sense but will also provide the opportunity to run queries on that data to produce viable feedback on how users are interacting with Bookee but also provide feedback to providers that can help them better serve their customers.  

Platform- Web-based. Flexibility is key when it comes to using Bookee. It will be used in a variety of settings, including home, workplace and school, by a variety of users including customers and providers, on a variety of machines, including desktop, tablet and mobile devices. Therefore, Bookee will be best utilized as a web-based application that can run on all browsers.      

Server -   Initially Bookee will utilize a smaller scale cloud-service provider. This will provide Bookee with the low-overhead and flexibility necessary for a small startup application to hit the ground running. If Bookee can gain a foothold in the marketplace, especially in the medical field, then switching to one of the “big three” cloud providers or investing in custom servers would have to occur not only to ensure reliability of services for our users, but also to ensure safety of our data as it will most likely contain HIPPA protected information. The server will also be the one reused component in our application as it will act as the liaison between all other components.  

Open-Source – Bookee will take advantage of several open-source products at its inception to keep overhead costs down and help get it to market sooner.  This includes using Nodejs for its runtime execution, Docker as its container, and MySQL for database management.  

Development Tools – Bookee will be programmed using html, CSS, JavaScript and use MySQL to build and operate its database.  The development team behind Bookee has experience utilizing all these development tools. This will limit the learning curve needed by the team to create a functional application, while also allowing for all team members to assist with its development.  

Bookee will use Nodejs to provide its runtime framework and Docker for its container deployment to the cloud. Both are industry standards for the service they provide and are easily compatible with a variety of cloud providers. Docker especially will make scalability much easier to replicate our application onto to several service components in our service-oriented architecture.   

The potential hinderance to Bookee’s use of development tools is its use of MySQL for database management. As the database grows larger and more complex, especially as it stores more and more protected information, either contracting with a SQL database company for support services or switching over to a large cloud provider that offers Platform as a service (PaaS) to provide database management services will have to be considered.    

