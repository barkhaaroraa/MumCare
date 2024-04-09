from flask import Flask, render_template, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
import speech_recognition as sr

tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('chat.html')


@app.route("/get", methods=["POST"])
def chat():
    # Use speech recognition to get user input
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Start Talking")
        audio_text = recognizer.listen(source, 10)  # Listen for 10 seconds
        print("Time over, thank you")

        try:
            text = recognizer.recognize_google(audio_text)
            print(text)
        except sr.UnknownValueError:
            return jsonify({"message": "Sorry, I did not understand that."})
        except sr.RequestError as e:
            return jsonify({"message": "Something went wrong with speech recognition."})
    response = get_Chat_response(text)
    return jsonify({"message": response})

def get_Chat_response(text):

    for step in range(5):
        new_user_input_ids = tokenizer.encode(str(text) + tokenizer.eos_token, return_tensors='pt')
        bot_input_ids = torch.cat([chat_history_ids, new_user_input_ids], dim=-1) if step > 0 else new_user_input_ids
        chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)
        response = tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
        print(f"Chatbot Response: {response}")
        return response

if __name__ == '__main__':
    app.run()


