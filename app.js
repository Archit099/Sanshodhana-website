"use strict";
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/client/build"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.post("/api/contact-us", async (req, res, next) => {
  const { name, email, college, message, subject } = req.body;
  if (!name || !email || !message || !subject || !college) {
    return res.status(400).json({
      message: "Some required feilds are missing."
    });
  }
  const text =
    `From -: ${name},` +
    "\n" +
    `College -: ${(college || "No college")}, Contact Email of ${name} -: ${email}` +
    "\n\n" +
    message;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "no.reply.vsearchx@gmail.com",
        pass: ""
      }
    });

    const context = `
    <div style="margin:0px;overflow:hidden;">
      <div style="padding:50px;background-color:rgba(104, 102, 102, 0.945);color:white;">
        <div>
            <p>Hey ${name},</p>
            <p>We have recieved your contact request. Our team memebers will get back to you soon, at your email -: ${email}.</p>
            <div>
                <h3>Join Us at our Social Media Handles.</h3>
                
            </div>
        </div>
          <div>
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                  <td align="center">
                      <small>This email was sent by VsearchX Community.</small>
                      <div style="width: 250px;">
                      <small>You are receiving this email as you have filled out the contact-us form at <a style="color:white;" href="">VsearchX.com</a>, If you haven't filled out the contact-us form kindly ignore this email. </small>
                      </div>
                  </td>
              </tr>
              </table>
          </div>
      </div>
    </div>
    `;

    await transporter.sendMail({
      from: '"VsearchX Community"<no.reply.vsearchx@gmail.com>',
      to: email,
      subject: "Your Contact Request Has Been Received! " + name,
      html: context,
    });

    await transporter.sendMail({
      from: '"VsearchX Contact"<no.reply.vsearchx@gmail.com>',
      to: "vsearchx@gmail.com",
      subject: subject,
      text: text
    });

    res.status(200).json({ message: "Sent" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error Occured. Please try again after sometime." });
  }
});

app.use((req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message = "Page not found.";
  next(error);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).json(err);
});

app.listen((process.env.PORT || 5000), () => {
  console.log("Server listening at http://localhost:"+(process.env.PORT || 5000));
});
