#!/usr/bin python3

import base64
from flask import Flask, request, jsonify
from pngToSVG import lambda_handler
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

import timeout_decorator

# @timeout_decorator.timeout(5)
def test(base64, font_name):
    lambda_handler(base64, font_name)


@app.route('/', methods=['GET'])
def get():
    return 'success'



@app.route('/', methods=['POST'])
def post_user():
    try:
        # jsonリクエストから値取得
        payload = request.json
        base64 = payload['base64']
        font_name = payload['font_name']
        # print(font_name)
        test(base64, font_name)
        
        # print(font_name)
        # HTTPステータスを200以外で返却したい場合
    except:
        return jsonify({'message': 'bad request'}), 400 
    else:
        return 'success'



if __name__ == '__main__':
   # app.run(host='0.0.0.0', port=443, ssl_context=('/home/ec2-user/openssl/server.crt', '/home/ec2-user/openssl/server.key'), threaded=True, debug=True)
    app.run(host='0.0.0.0', port=80, threaded=True, debug=True)
