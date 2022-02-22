from flask import Flask, request
from flask_restful import Resource, Api
import json
import smtplib

app = Flask(__name__)
class SendMail(Resource):
    def post(self):
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login("jose.l.pellet@gmail.com", "j1o2s3e4")
        server.sendmail(
            "jose.l.péllet@gmail.com",
            "jose.datamais@gmail.com",
            "Conteúdo da mensagem")
        server.quit()


        return {'nome': 'José'}

api = Api(app)

api.add_resource(SendMail, '/sendmail/')

if __name__ == '__main__':
    app.run();