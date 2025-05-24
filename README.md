# Healthcare Chatbot System

A web-based healthcare chatbot system that helps patients with symptom diagnosis, appointment booking, and accessing medical information.

## Features

- **Chat Interface**: Interact with the healthcare assistant using natural language
- **Symptom Diagnosis**: Report symptoms and get possible diagnoses
- **Doctor Recommendations**: Get specialist recommendations based on symptoms
- **Appointment Booking**: Schedule appointments with doctors
- **Prescription Management**: View prescription history
- **Medical Records**: Store and access patient medical information

## System Architecture

The system follows the architecture described in the project report:

- **Entity-Relationship Model**: User, Patient, Doctor, Medical_Info, Appointment, Prescription, Query, Response
- **Data Flow**: Level 0 (Context Diagram) and Level 1 diagrams implemented in the code structure
- **Use Cases**: Patient interaction with healthcare chatbot for diagnosis, appointments, and medical information

## Getting Started

### Prerequisites

- Python 3.6 or higher
- Flask

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the required packages:

```
pip install flask
```

### Running the Application

Run the web application:

```
python app.py
```

Then open your browser and go to `http://localhost:5000`

## System Components

- **app.py**: Flask web application
- **chatbot.py**: Core chatbot functionality for processing queries
- **database.py**: Data storage and management
- **symptoms.py**: Symptom diagnosis and medical information
- **appointment.py**: Appointment booking and management
- **prescription.py**: Prescription handling
- **templates/**: HTML templates for the web interface
- **static/**: Static files (CSS, JavaScript)

## Usage

1. Start the web application
2. Enter your name and age to create a user profile
3. Use the navigation menu to:
   - Chat with the healthcare assistant
   - Report symptoms for diagnosis
   - Book appointments with doctors
   - View upcoming appointments
   - Check prescription history

## Screenshots

(Screenshots would be added here)

## Future Enhancements

- Integration with real database systems
- User authentication and security
- Mobile application interface
- Integration with wearable health devices
- Video consultation capabilities 