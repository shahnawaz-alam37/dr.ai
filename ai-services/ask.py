from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)
# Set up Gemini
genai.configure(api_key=os.getenv("AIzaSyCwnMHXjeXPue9KwgKiSJHRP3M_2vQTPv4"))
model = genai.GenerativeModel("gemini-2.0-flash")

# Hardcoded patient scenario
PATIENT_CONTEXT = """
You are simulating a virtual patient.

Patient background:
You are a 45-year-old male experiencing chest pain radiating to your left arm. 
You also have shortness of breath and dizziness. These symptoms began suddenly while climbing stairs. 
You have a history of mild hypertension. No known allergies.

Behavior guidelines:
- Respond in first-person language.
- Act confused, emotional, or unsure like a real patient.
- Stick strictly to what's in your medical background.
- If unsure, say things like "I'm not sure" or "I don’t know exactly."
"""

@app.route("/ask-patient", methods=["POST"])
def ask_patient():
    data = request.json
    doctor_question = data.get("question", "")

    if not doctor_question:
        return jsonify({"error": "Missing 'question' in request body"}), 400

    full_prompt = f"""
{PATIENT_CONTEXT}

Doctor: {doctor_question}
Patient (you):
"""

    try:
        response = model.generate_content(full_prompt)
        return jsonify({
            "success": True,
            "reply": response.text.strip()
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)
