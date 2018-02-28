const nodemailer = require('nodemailer');

class Mail {
  constructor(emailTujuan, username) {
    this.emailTujuan = emailTujuan
    this.name = username
  }

  send(){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'resapirecipe@gmail.com',
        pass: process.env.SECRET_MAIL
      }
    });
    const mailOptions = {
    from   : 'resapirecipe@gmail.com',
    to     : this.emailTujuan,
    subject: 'Reminder for your todo list' ,
    html   : `
    <table class="full-width-container" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" bgcolor="#eeeeee" style="width: 100%; height: 100%; padding: 30px 0 30px 0;">
    <tr>
      <td align="center" valign="top">
        <!-- / 700px container -->
        <table class="container" border="0" cellpadding="0" cellspacing="0" width="700" bgcolor="#ffffff" style="width: 700px;">
          <tr>
            <td align="center" valign="top">

              <!-- / Hero subheader -->
              <table class="container hero-subheader" border="0" cellpadding="0" cellspacing="0" width="620" style="width: 620px;">
                <tr>
                  <td class="hero-subheader__title" style="font-size: 43px; font-weight: bold; padding: 80px 0 15px 0;" align="left">${this.name}</td>
                </tr>
              </table>
              <!-- /// Hero subheader -->


              <!-- / Half block -->
              <table class="container half-block" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 25px;">
                <tr>
                  <td>
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="half-block__image" style="width: 353px; height: 325px;" width="353" height="325" background="">
                        <!--[if gte mso 9]>
                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 353px; height: 325px;" width="353" height="325">
                        <v:fill type="frame" src="" color="#488bd3" />
                        <v:textbox inset="0,0,0,0">
                        <![endif]-->

                        <!--[if gte mso 9]>
                        </v:textbox>
                        </v:rect>
                        <![endif]-->
                        </td>

                        <td class="half-block__content" style="width: 50%; padding: 0 25px 0 25px; font-size: 16px; line-height: 27px; color: #969696; text-align: center;">
                          Ingredients : 
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- /// Half block -->

              <!-- / Half block -->
              <table class="container half-block" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="half-block__content" style="width: 50%; padding: 0 25px 0 25px; font-size: 16px; line-height: 27px; color: #969696; text-align: center;">
                          health : 
                          diet :
                        </td>

                        <td class="half-block__image" style="width: 353px; height: 325px;" width="353" height="325" background="">
                        <!--[if gte mso 9]>
                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 353px; height: 325px;" width="353" height="325">
                        <v:fill type="frame" src="" color="#488bd3" />
                        <v:textbox inset="0,0,0,0">
                        <![endif]-->

                        <!--[if gte mso 9]>
                        </v:textbox>
                        </v:rect>
                        <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- /// Half block -->

              <!-- / Divider -->
              <table class="container" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 25px;" align="center">
                <tr>
                  <td align="center">
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="620" align="center" style="border-bottom: solid 1px #eeeeee; width: 620px;">
                      <tr>
                        <td align="center"> </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- /// Divider -->

              <!-- / CTA Block -->
              <table class="container cta-block" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" valign="top">
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="620" style="width: 620px;">
                      <tr>
                        <td class="cta-block__title" style="padding: 35px 0 0 0; font-size: 26px; text-align: center;">About Us</td>
                      </tr>

                      <tr>
                        <td class="cta-block__content" style="padding: 20px 0 27px 0; font-size: 16px; line-height: 27px; color: #969696; text-align: center;">Laper ? Resapi aja..</td>
                      </tr>

                      <tr>
                        <td align="center">
                          <table class="container" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td class="cta-block__button" width="230" align="center" style="width: 200px;">
                                <a href="#" style="border: 3px solid #eeeeee; color: #969696; text-decoration: none; padding: 15px 45px; text-transform: uppercase; display: block; text-align: center; font-size: 16px;">Visit Us</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- /// CTA Block -->

              <!-- / Divider -->
              <table class="container" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 25px;" align="center">
                <tr>
                  <td align="center">
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="620" align="center" style="border-bottom: solid 1px #eeeeee; width: 620px;">
                      <tr>
                        <td align="center"> </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- /// Divider -->
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });

}
}

module.exports = Mail;
