from flask import Flask
from flask_restful import Resource, Api
import smtplib, ssl

app = Flask(__name__)

class SendMail(Resource):
    def post(self):
        port = 465
        smtp_server = "smtp.gmail.com"
        sender_email = "jose.datamais@gmail.com"
        receiver_email = "jose.l.pellet@gmail.com"
        password = "j1j2j3j4j5"
        message = "Teste"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)

api = Api(app)

api.add_resource(SendMail, '/sendmail/')

if __name__ == '__main__':
    app.run();