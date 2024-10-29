# Taskflow - Customer Support System
Taskflow is a full-stack application designed to streamline customer support through an efficient taskflow. Built with Firebase, this system supports secure user authentication, ticket creation and management, assignment workflows, and feedback collection.


![My Image](client/public/images/)

![My Image]()

![My Image]()


# Features:
##### - **Software Architecture**: Follows the MVC pattern for organized and scalable development;
##### - **Next.js Frontend**: Blazing-fast frontend using server-side rendering and static generation;
##### - **Express Backend**: RESTful API for seamless data handling and secure backend logic;
##### - **Prisma ORM**: Simplified database queries and schema management with Prisma;
##### - **PostgreSQL Database**: Reliable, ACID-compliant relational database for data storage;
##### - **Role-Based Access Control**: Different dashboard views for users and admins;
##### - **Task Assignment**: Assign tasks to team members or categorize by project;
##### - **Progress Tracking**: Monitor task statuses (e.g., Pending, In Progress, Completed);
##### - **Priority Management**: Set and filter tasks by priority levels;
##### - **Notifications**: Real-time toast notifications for task updates;
##### - **Responsive Design**: Built to work seamlessly on both desktop and mobile;
##### - **CSV Export**: Download task and progress reports in CSV format.

### Built With

Key frameworks and tools used to develop Taskflow:

* [![Next.js][Next.js]][Next-url]
* [![Express][Express.js]][Express-url]
* [![Prisma][Prisma.dev]][Prisma-url]
* [![PostgreSQL][PostgreSQL.dev]][PostgreSQL-url]
* [![TypeScript.dev][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. install the dotenv package in both of your directories_

1. Clone the repo
   ```sh
   https://github.com/JohnKamaujk/TaskFlow.git
   ```
2. cd into the frontend folder
   ```sh
   cd client/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a dot env file inside the frontend folder and set up env variables
   ```sh
    REACT_APP_API_URL(Deployed api-url) =
   ```
5. cd into the backend folder
   ```sh
   cd server/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a dot env file inside the backend folder and set up env variables
   ```sh
    PORT = 
    DATABASE_URL = 
   ```
5. Then run both the backend and frontend servers using
    ```sh
    npm run dev
    ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/