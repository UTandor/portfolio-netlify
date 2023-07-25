const emailjs = require('emailjs-com');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const emailParams = {
    from_name: 'Usman Tanveer',
    from_email: email,
    to_name: name,
    to_email: 'demonsouls34865@gmail.com', // Replace with the recipient's email address
    subject: 'Contact Form Submission',
    message: message,
  };

  try {
    const response = await emailjs.send(
      'service_t5n8f0u', // Replace with your EmailJS service ID
      'template_h3ea4oe', // Replace with your EmailJS template ID
      emailParams,
      'your_emailjs_user_id' // Replace with your EmailJS user ID
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
};