import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= ADMIN EMAIL ================= */
export async function sendAdminEmail(data) {
  const { name, email, phone, doctor, date, time, message } = data;

  await transporter.sendMail({
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "🩺 New Appointment Received",
    html: `
      <h2>New Appointment</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Doctor:</b> ${doctor}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>
      <p><b>Message:</b> ${message || "—"}</p>
    `,
  });
}

/* ================= USER EMAIL ================= */
export async function sendUserEmail(data) {
  const { name, email, doctor, date, time } = data;

  await transporter.sendMail({
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "✅ Appointment Received",
    html: `
      <h2>Hello ${name},</h2>
      <p>Your appointment request has been received.</p>
      <p><b>Doctor:</b> ${doctor}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>
      <p>Status: <b>Pending Approval</b></p>
    `,
  });
}

/* ================= APPROVAL EMAIL ================= */
export async function sendApprovalEmail(data) {
  const { name, email, doctor, appointment_date, appointment_time } = data;

  await transporter.sendMail({
    from: `"Khushi Clinic" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🎉 Appointment Approved",
    html: `
      <h2>Hello ${name},</h2>
      <p>Your appointment has been <b>APPROVED</b>.</p>
      <p><b>Doctor:</b> ${doctor}</p>
      <p><b>Date:</b> ${appointment_date}</p>
      <p><b>Time:</b> ${appointment_time}</p>
      <p>See you soon!</p>
    `,
  });
}
