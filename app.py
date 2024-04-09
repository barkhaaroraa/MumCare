from flask import Flask, render_template, request, jsonify
import speech_recognition as sr
import os
import google.generativeai as genai

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get("GOOGLE_API_KEY")

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/get_user_speech", methods=["POST"])
def get_user_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Start Talking...")
        audio_text = recognizer.listen(source, 20)  # Listen for 10 seconds
        print("Time over, thank you")

        try:
            text = recognizer.recognize_google(audio_text)
            print("User Input:", text)
            
            model = genai.GenerativeModel('gemini-1.0-pro-latest')
            if text is None:
                return jsonify({"message": "Unable to recognize your speech."})
            response = model.generate_content(text)
            return jsonify({"message": response.text})
        
        except sr.UnknownValueError:
            print("Sorry, I did not understand that.")
            return jsonify({"message": "Sorry, I did not understand that."})
        
        except sr.RequestError as e:
            print(f"Something went wrong with speech recognition: {e}")
            return jsonify({"message": f"Something went wrong with speech recognition: {e}"})


if __name__ == "__main__":
    app.run(debug=True)
