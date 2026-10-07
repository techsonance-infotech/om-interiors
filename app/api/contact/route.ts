import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      projectType,
      propertySize,
      designStyle,
      timeline,
      budgetRange,
      services,
      isConsultation
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email fields are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "studio@om-interior.in";
    const mailSubject = isConsultation || projectType
      ? `[Om Interiors Consultation Request] ${projectType || subject || "Design Estimate"} - ${name}`
      : `[Om Interiors Website Inquiry] ${subject || "Contact Form Submission"} - ${name}`;

    const formattedServices = Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "Standard Interior Consultation";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #1a1715; padding: 25px 20px; text-align: center; border-radius: 6px 6px 0 0;">
          <h2 style="color: #b89368; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 3px;">OM INTERIORS</h2>
          <p style="color: #ffffff; margin: 6px 0 0 0; font-size: 13px;">${isConsultation || projectType ? "Design Consultation & Project Estimate Request" : "Website Contact Inquiry"}</p>
        </div>
        
        <div style="padding: 25px 20px;">
          <h3 style="color: #333333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #b89368; padding-bottom: 8px;">Client Information</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0; color: #222222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #222222;"><a href="mailto:${email}" style="color: #b89368; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #222222;"><a href="tel:${phone}" style="color: #222222; text-decoration: none;">${phone || "Not provided"}</a></td>
            </tr>
          </table>

          ${(isConsultation || projectType) ? `
          <h3 style="color: #333333; font-size: 18px; border-bottom: 2px solid #b89368; padding-bottom: 8px; margin-top: 25px;">Project Specifications</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold; width: 140px;">Project Type:</td>
              <td style="padding: 8px 0; color: #222222;">${projectType || "General Interior"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Property Size:</td>
              <td style="padding: 8px 0; color: #222222;">${propertySize || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Design Style:</td>
              <td style="padding: 8px 0; color: #222222;">${designStyle || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0; color: #222222;">${timeline || "Flexible"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Budget Range:</td>
              <td style="padding: 8px 0; color: #222222;">${budgetRange || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Additional Services:</td>
              <td style="padding: 8px 0; color: #222222;">${formattedServices}</td>
            </tr>
          </table>
          ` : ""}

          <h3 style="color: #333333; font-size: 16px; border-bottom: 1px solid #eeeeee; padding-bottom: 6px; margin-top: 25px;">Client Message / Requirements</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; color: #444444; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
            ${message || "No additional notes specified."}
          </div>
        </div>

        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-radius: 0 0 6px 6px; font-size: 12px; color: #777777;">
          This email was dispatched automatically to <strong style="color: #222222;">${recipientEmail}</strong> from Om Interiors Website.
        </div>
      </div>
    `;

    // Transporter configuration (supports SMTP env or console log)
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"${name} via Om Interiors" <${user}>`,
        to: recipientEmail,
        replyTo: email,
        subject: mailSubject,
        html: htmlContent,
        text: `Consultation Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nProperty Size: ${propertySize}\nStyle: ${designStyle}\nTimeline: ${timeline}\nBudget: ${budgetRange}\nServices: ${formattedServices}\n\nMessage:\n${message}`,
      });
    } else {
      console.log(`[Consultation Request queued for ${recipientEmail}]`, {
        name,
        email,
        phone,
        projectType,
        propertySize,
        designStyle,
        timeline,
        budgetRange,
        services: formattedServices,
        message,
      });
    }

    return NextResponse.json({
      success: true,
      message: `Your consultation request has been sent to studio@om-interior.in. We will contact you shortly!`,
    });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email studio@om-interior.in directly." },
      { status: 500 }
    );
  }
}
