# hospital-management
# Operation Scheduler for Hospital Management

## 📌 Project Overview
The **Operation Scheduler for Hospital Management** is a web-based application designed to streamline and automate the scheduling of surgeries and medical operations in hospitals. This project ensures efficient time management, reduces conflicts in operation bookings, and enhances hospital workflow.

## 🔧 Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend & Database**: Firebase

## 🌟 Features
- 🏥 **User Authentication**: Secure login for doctors, staff, and administrators.
- 📅 **Schedule Operations**: Allows hospitals to create, modify, and delete surgery schedules.
- ✅ **Status Management**: Tracks operation statuses (e.g., Scheduled, In Progress, Completed, Canceled).
- 📊 **Doctor & Patient Management**: Assigns operations to available doctors and links them with patient records.
- 📢 **Notifications & Alerts**: Sends reminders for upcoming operations.
- 📁 **Data Storage**: Stores and retrieves schedules in Firebase for real-time updates.

## 🏗 Project Structure
```
/operation-scheduler
│── index.html         # Main landing page
│── dashboard.html     # Admin/Doctor dashboard
│── schedule.html      # Operation scheduling interface
│── css/
│   ├── styles.css     # Styling files
│── js/
│   ├── app.js        # Main JavaScript logic
│── firebase-config.js # Firebase initialization
│── README.md         # Project documentation
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/deeku728/operation-scheduler.git
cd operation-scheduler
```
### 2️⃣ Set Up Firebase
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Add Firebase SDK in `firebase-config.js`.

### 3️⃣ Run the Project
Open `index.html` in your browser or use a local server like Live Server in VS Code.

## 📌 Future Enhancements
- 🔹 Integration with hospital databases.
- 🔹 AI-based operation time prediction.
- 🔹 Role-based access control for better security.

## 👨‍💻 Author
Developed by **Deeksha**

## 📜 License
This project is open-source and available under the MIT License.
