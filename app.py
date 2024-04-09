
from flask import Flask, render_template, request, jsonify
import speech_recognition as sr
import os
import google.generativeai as genai
import pyttsx3  
from playsound import playsound  

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get("GOOGLE_API_KEY")

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/get_user_speech", methods=["POST"])
def get_user_speech():
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate',150)
    engine.setProperty('voice', voices[1].id)
    
    
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        engine.say("Hi, what would you like to talk about")
        engine.runAndWait()
        audio_text = recognizer.listen(source, 60) 
        engine.runAndWait()
        try:
            text = recognizer.recognize_google(audio_text)
            model = genai.GenerativeModel('gemini-1.0-pro-latest')
            if text is None:
                engine.say("Unable to recognize your speech.")
                engine.runAndWait()
                return jsonify({"message": "Unable to recognize your speech."})
            response = model.generate_content("be polite and supportive and be like a friend and give not too long answers"+text)
            
            engine.say(response.text)
            engine.runAndWait()
            return jsonify({"message": response.text})
        
        except sr.UnknownValueError:
            engine.say("Sorry, I did not understand that.")
            return jsonify({"message": "Sorry, I did not understand that."})
        
        except sr.RequestError as e:
            engine.say("Something went wrong with speech recognition")
            return jsonify({"message": f"Something went wrong with speech recognition: {e}"})


if __name__ == "__main__":
    app.run(debug=True)
