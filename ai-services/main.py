from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app)

# Set up Gemini
GEMINI_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)
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

@app.route("/assess", methods=["POST"])
def assess():
    data = request.json
    chat_history = data.get("chat_history")
    case_context = data.get("case_context")

    if not chat_history or not case_context:
        return jsonify({"success": False, "error": "Missing required fields"}), 400

    prompt = f"""
You are a senior medical examiner reviewing an interaction between a medical intern and a simulated patient.

CASE CONTEXT:
{case_context}

CHAT HISTORY:
{chat_history}

Evaluate the intern based on these criteria:
1. Clinical Relevance – Did the intern ask appropriate, symptom-focused questions?
2. Depth of Inquiry – Did they follow up intelligently?
3. Communication Clarity – Were they clear and easy to understand?
4. Empathy – Did they show care or comfort to the patient?
5. Diagnostic Progression – Did they move toward a diagnosis logically?

Please provide:
- A score (1 to 5) for each category
- A brief comment on each
- A final summary recommendation
"""

    try:
        response = model.generate_content(prompt)
        return jsonify({
            "success": True,
            "evaluation": response.text.strip()
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)