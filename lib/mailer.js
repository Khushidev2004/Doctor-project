import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendAdminEmail(data) {
  const mailOptions = {
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "🩺 New Appointment Request",
    html: `
      <h2>New Appointment Received</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Doctor:</b> ${data.doctor}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
      <p><b>Message:</b> ${data.message || "N/A"}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
