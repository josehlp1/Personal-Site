from flask import Flask, request
from flask_restful import Resource, Api
import smtplib, ssl
import email.message
import json

app = Flask(__name__)

class SendMail(Resource):
    def post(self):

        data = json.loads(request.data)

        if data['token'] == "oGJ1!6F2GmL1":
            email_content = """
            <html>

            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

               <title>Tutsplus Email Newsletter</title>
               <style type="text/css">
                a {color: #d80a3e;}
              body, #header h1, #header h2, p {margin: 0; padding: 0;}
              #main {border: 1px solid #cfcece;}
              img {display: block;}
              #top-message p, #bottom p {color: #3f4042; font-size: 12px; font-family: Arial, Helvetica, sans-serif; }
              #header h1 {color: #ffffff !important; font-family: "Lucida Grande", sans-serif; font-size: 24px; margin-bottom: 0!important; padding-bottom: 0; }
              #header p {color: #ffffff !important; font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", sans-serif; font-size: 12px;  }
              h5 {margin: 0 0 0.8em 0;}
                h5 {font-size: 18px; color: #444444 !important; font-family: Arial, Helvetica, sans-serif; }
              p {font-size: 12px; color: #444444 !important; font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", sans-serif; line-height: 1.5;}
               </style>
            </head>

            <body>
            <table width="100%" style="padding: 50px;" cellpadding="0" cellspacing="0" bgcolor="e4e4e4"><tr><td>
             
            <table id="main" width="600" align="center" cellpadding="0" cellspacing="15" bgcolor="ffffff">
                <tr>
                  <td>
                    <table id="header" cellpadding="10" cellspacing="0" align="center" bgcolor="25166b">
                      <tr>
                        <td width="570" align="center"  bgcolor="25166b"><h1>Contato - Site</h1></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table id="content-4" cellpadding="0" cellspacing="0" align="center">
                      <tr>
                        <td width="200" valign="top">
                          <h5>Nome:</h5>
                          <p></p>
                        </td>
                        <td width="15"></td>
                        <td width="200" valign="top">
                          <h5>E-mail:</h5>
                          <p></p>
                        </td>
                      </tr>
                      <tr>
                      <td width="400" valign="top">
                          <h5>Mensagem:</h5>
                          <p></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>


              </table>

            </body>
            </html>


            """

            port = 465
            smtp_server = "smtp.gmail.com"
            sender_email = "jose.datamais@gmail.com"
            receiver_email = "jose.l.pellet@gmail.com"
            password = "xxxxx"
            msg = email.message.Message()
            msg['Subject'] = 'Contato - Site'
            msg.add_header('Content-Type', 'text/html')
            msg.set_payload(email_content)

            context = ssl.create_default_context()
            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                server.login(sender_email, password)
                server.sendmail(sender_email, receiver_email, msg.as_string())

            #     return 'Success!', 200
            # except:
            #     return 'Server Error!', 500

        else:
            return 'Invalid Token!', 401


api = Api(app)

api.add_resource(SendMail, '/sendmail/')

if __name__ == '__main__':
    app.run();