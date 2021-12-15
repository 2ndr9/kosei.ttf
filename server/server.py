import base64
from flask import Flask, request
from pngToSVG import lambda_handler
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/', methods=['POST'])
def post_user():
    # jsonリクエストから値取得
    payload = request.json
    base64 = payload['base64']
    font_name = payload['font_name']
    # print(font_name)
    lambda_handler(base64, font_name)

    # print(font_name)
    # HTTPステータスを200以外で返却したい場合
    return 'success'


if __name__ == '__main__':
    app.run(host="0.0.0.0")
