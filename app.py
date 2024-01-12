from flask import Flask, render_template, request
import spacy

app = Flask(__name__, static_folder='static')

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

@app.route('/', methods=['GET', 'POST'])
def index():
    entities = []
    if request.method == 'POST':
        text = request.form['text']
        doc = nlp(text)
        entities = [(ent.text, ent.label_) for ent in doc.ents]
    return render_template('index.html', entities=entities)

if __name__ == '__main__':
    app.run(debug=True)
