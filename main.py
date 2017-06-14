from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/question-with-one-answer')
def index():
    return render_template('index.html')


@app.route('/the-question')
def question():
    return render_template(
        'question.html',
        question=request.args.get('question'),
        answer=request.args.get('answer') == 'Yes'
    )

if __name__ == '__main__':
    app.run()
