# main.py

from database import add_patient
from chatbot import get_diagnosis
from appointment import show_available_doctors, make_appointment

def run_chatbot():
    print("Welcome to the Healthcare Chatbot")
    
    name = input("Enter your name: ")
    age = input("Enter your age: ")
    symptoms = input("Enter your symptoms (comma separated): ").split(',')

    patient_id = add_patient(name, age, symptoms)
    
    print("\n--- Diagnosis ---")
    diagnosis = get_diagnosis(symptoms)
    for d in diagnosis:
        print(d)

    print("\n--- Doctors Available ---")
    doctors = show_available_doctors()
    for doc_id, info in doctors.items():
        print(f"{doc_id}: {info['name']} - Available at {', '.join(info['available'])}")

    book = input("\nDo you want to book an appointment? (yes/no): ").lower()
    if book == "yes":
        doc_id = input("Enter doctor ID: ")
        time = input("Enter time (exactly as shown): ")
        if make_appointment(patient_id, doc_id, time):
            print("Appointment booked successfully!")
        else:
            print("Selected time is not available.")

if __name__ == "__main__":
    run_chatbot()
