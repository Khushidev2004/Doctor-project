import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   ADMIN EMAIL (already hai)
========================= */
export async function sendAdminEmail(data) {
  await transporter.sendMail({
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "🆕 New Appointment Received",
    html: `
      <h2>New Appointment</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Doctor:</b> ${data.doctor}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
  });
}

/* =========================
   USER CONFIRMATION EMAIL
========================= */
export async function sendUserEmail(data) {
  await transporter.sendMail({
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "✅ Appointment Received – Khushi Clinic",
    html: `
      <h2>Hello ${data.name},</h2>

      <p>Thank you for booking an appointment at <b>Khushi Clinic</b>.</p>

      <p><b>Appointment Details:</b></p>
      <ul>
        <li><b>Doctor:</b> ${data.doctor}</li>
        <li><b>Date:</b> ${data.date}</li>
        <li><b>Time:</b> ${data.time}</li>
      </ul>

      <p>Your appointment request has been <b>successfully received</b>.</p>

      <p>Our team will review it and confirm soon.</p>

      <br/>
      <p>Regards,<br/>
      <b>Khushi Clinic</b></p>
    `,
  });
}

export async function sendApprovalEmail(data) {
  await transporter.sendMail({
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "🎉 Appointment Approved – Khushi Clinic",
    html: `
      <h2>Hello ${data.name},</h2>

      <p>Good news! 🎉</p>

      <p>Your appointment with <b>${data.doctor}</b> has been
      <b style="color:green;">Approved</b>.</p>

      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>

      <p>Please arrive 10 minutes early.</p>

      <br/>
      <p>Regards,<br/>
      <b>Khushi Clinic</b></p>
    `,
  });
}

