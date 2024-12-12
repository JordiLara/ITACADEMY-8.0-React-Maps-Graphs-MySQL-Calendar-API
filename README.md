# Hiking Routes & Events Application

## 🌿 About the Project
This **Hiking Routes & Events Application** is a platform designed for hiking enthusiasts in **Catalonia**, providing tools to:

- **Discover hiking routes**: View routes with detailed information, including starting and ending points, elevation gain, distance, and difficulty.
- **Plan events**: Add events to a calendar, specifying the route, date, and starting time.
- **Visualize routes**: Display routes on an interactive map powered by Mapbox.
- **Manage routes**: Add, edit, and delete routes effortlessly.

The project integrates a user-friendly interface, an interactive calendar, and a map to enhance the experience for hiking lovers.

---
![Screenshoot-1](/public/HikingPaths_home.png)
![Screenshoot-2](/public/HikingPaths_rutas.png)
![Screenshoot-3](/public/HikingPaths_mapa.png)
![Screenshoot-4](/public/HikingPaths_calendario.png)
![Screenshoot-5](/public//HikingPaths_graficos.png)

## 🛠️ Features

### **1. Routes Management**
- Add new routes with key details: name, description, origin, destination, distance, elevation gain, and difficulty (low, medium, high).
- View all routes in a grid format, including their origin and destination.
- Edit or delete existing routes directly from the interface.

### **2. Interactive Map**
- Display all routes on an interactive **Mapbox map**.
- View starting points as colored markers based on difficulty:
  - **Green**: Easy routes
  - **Orange**: Medium difficulty
  - **Red**: Challenging routes
- Click on markers to view additional route details in a popup.

### **3. Event Calendar**
- View and manage events using a **full calendar interface**.
- Create events by selecting a date, specifying the starting time, and choosing a route.
- Edit or delete events directly from the calendar.

---

## 🔧 Technologies Used

### **Frontend**
- [React](https://reactjs.org/): Component-based library for building the user interface.
- [React Router](https://reactrouter.com/): Manage navigation between pages.
- [React Calendar](https://github.com/wojtekmaj/react-calendar): Interactive calendar component.
- [FullCalendar](https://fullcalendar.io/): Calendar with event management capabilities.
- [Mapbox](https://www.mapbox.com/): Interactive maps for visualizing routes.
- [Tailwind CSS](https://tailwindcss.com/): Styling the application with utility-first CSS.

### **Backend**
- [Node.js](https://nodejs.org/): Server-side JavaScript runtime.
- [Express](https://expressjs.com/): Framework for building the REST API.
- [MySQL](https://www.mysql.com/): Relational database for storing routes and events.

### **Others**
- [Axios](https://axios-http.com/): Simplified HTTP requests.
- [Chart.js](https://www.chartjs.org/): Visualize data with line and pie charts.

---

## 🔧 Installation and Setup
Follow these steps to clone and run the application:

### **1. Clone the Repository**
```bash
# Replace <repository-url> with the actual repository link
git clone <https://github.com/JordiLara/ITACADEMY-8.0-React-Maps-Graphs-MySQL-Calendar-API.git>
cd <repository-folder>
```

### **2. Install Dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### **3. Configure Environment Variables**
Create `.env` files for both the client and server with the required API keys (e.g., Mapbox token) and database credentials.

### **4. Run the Application**
```bash
# Start the server
cd server
npm start

# Start the client
cd ../client
npm start
```

### **5. Access the Application**
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🔍 Roadmap

Future enhancements might include:
- User authentication to save personal preferences and events.
- Export calendar events to external tools like Google Calendar.
- Add route ratings and reviews.
- Multi-language support.

---

## 📚 License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🔗 Repository Links
- **Frontend**: [https://github.com/JordiLara/ITACADEMY-8.0-React-Maps-Graphs-MySQL-Calendar-API.git](#)
- **Backend**: [https://github.com/JordiLara/ITACADEMY-8.1-Backend-React-Maps-Graphs-MySQL-Calendar-API.git](#)

---

Enjoy your hikes and make the most of this application!

