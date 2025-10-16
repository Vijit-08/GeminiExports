# EmailJS Setup Guide for Contact & Job Applications

This guide provides complete instructions for setting up and managing EmailJS for receiving contact form submissions and job applications.

---

## Table of Contents
1. [Overview](#overview)
2. [Initial Setup](#initial-setup)
3. [Creating Email Templates](#creating-email-templates)
4. [Getting API Keys](#getting-api-keys)
5. [Email Template Structure](#email-template-structure)
6. [Managing Received Emails](#managing-received-emails)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

---

## Overview

EmailJS is a service that allows sending emails directly from client-side JavaScript without needing a backend server. We'll use it for two purposes:
- **Contact Form**: General inquiries from website visitors
- **Job Applications**: Resume submissions and application details

---

## Initial Setup

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create account using:
   - Email address (use company email if possible)
   - Or sign up with Google/GitHub
4. Verify your email address

### Step 2: Add an Email Service

After logging in:

1. Click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for ease of setup)
   - **Outlook/Office 365**
   - **Custom SMTP** (for company email servers)

#### For Gmail:
1. Select **Gmail**
2. Click **"Connect Account"**
3. Sign in with the Gmail account where you want to receive emails
4. Grant permissions
5. Give your service a name (e.g., "Company Contact Form")
6. Click **"Create Service"**
7. **Save the Service ID** (you'll need this later)

#### For Outlook/Office 365:
1. Select **Outlook**
2. Enter your Outlook/Office 365 email
3. Click **"Connect Account"**
4. Sign in and authorize
5. Name your service
6. Click **"Create Service"**
7. **Save the Service ID**

#### For Custom SMTP (Company Email):
1. Select **"Custom SMTP"**
2. Enter SMTP server details:
   - **SMTP Server**: (Get from IT department)
   - **Port**: Usually 587 or 465
   - **Username**: Your email address
   - **Password**: Your email password or app password
3. Test the connection
4. Click **"Create Service"**
5. **Save the Service ID**

---

## Creating Email Templates

You need to create two templates: one for contact forms and one for job applications.

### Template 1: Contact Form

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Name it: **"Contact Form Submission"**
4. Configure the template:

**Template Settings:**
```
Template Name: Contact Form Submission
From Name: {{name}}
From Email: {{email}}
Subject: New Contact Inquiry - {{subject}}
Reply To: {{email}}
```

**Email Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #1F2937; border-bottom: 3px solid #1CAFD8; padding-bottom: 10px;">New Contact Form Submission</h2>

    <div style="margin-top: 20px;">
      <h3 style="color: #555; margin-bottom: 10px;">Contact Details:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold; width: 150px;">Name:</td>
          <td style="padding: 10px; background-color: #fff;">{{name}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Email:</td>
          <td style="padding: 10px; background-color: #fff;">{{email}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; background-color: #fff;">{{phone}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Company:</td>
          <td style="padding: 10px; background-color: #fff;">{{company}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Subject:</td>
          <td style="padding: 10px; background-color: #fff;">{{subject}}</td>
        </tr>
      </table>
    </div>

    <div style="margin-top: 20px;">
      <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
      <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1CAFD8; min-height: 100px; white-space: pre-wrap;">
        {{message}}
      </div>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
      <p>This email was sent from the contact form on geminiexports.in</p>
      <p>Submitted on: {{submission_date}}</p>
    </div>
  </div>
</div>
```

5. Click **"Save"**
6. **Copy the Template ID** (shown at the top of the template page)

### Template 2: Job Application

1. Click **"Create New Template"** again
2. Name it: **"Job Application Submission"**
3. Configure the template:

**Template Settings:**
```
Template Name: Job Application Submission
From Name: {{firstName}} {{lastName}}
From Email: (your HR email - like hrd@geminiexports.in)
Subject: New Job Application - {{position}}
Reply To: (your HR email - like hrd@geminiexports.in)
```

**Email Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #1F2937; border-bottom: 3px solid #1CAFD8; padding-bottom: 10px;">New Job Application Received</h2>

    <div style="margin-top: 20px;">
      <h3 style="color: #555; margin-bottom: 10px;">Applicant Information:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold; width: 180px;">Position Applied:</td>
          <td style="padding: 10px; background-color: #fff; color: #1CAFD8; font-weight: bold;">{{position}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">First Name:</td>
          <td style="padding: 10px; background-color: #fff;">{{firstName}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Last Name:</td>
          <td style="padding: 10px; background-color: #fff;">{{lastName}}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background-color: #f9f9f9; font-weight: bold;">Referral:</td>
          <td style="padding: 10px; background-color: #fff;">{{referral}}</td>
        </tr>
      </table>
    </div>

    <div style="margin-top: 20px;">
      <h3 style="color: #555; margin-bottom: 10px;">Cover Message:</h3>
      <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1CAFD8; min-height: 100px; white-space: pre-wrap;">
        {{message}}
      </div>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: #FEF3C7; border-radius: 8px; border: 1px solid #FCD34D;">
      <p style="margin: 0; color: #92400E; font-weight: bold; font-size: 16px;">📎 Resume/CV Attached</p>
      <p style="margin: 10px 0 0 0; font-size: 14px; color: #92400E;">
        The applicant's resume is attached to this email. Please download and review it before scheduling an interview.
      </p>
      <p style="margin: 10px 0 0 0; font-size: 12px; color: #78350F; font-style: italic;">
        File name: {{resume_name}}
      </p>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
      <p>This application was submitted through the careers page on geminiexports.in</p>
      <p>Submitted on: {{submission_date}}</p>
    </div>
  </div>
</div>
```

5. Click **"Save"**
6. **Copy the Template ID**

---

## Getting API Keys

### Step 1: Get Your Public Key

1. Click on your profile icon (top right)
2. Select **"Account"**
3. Go to **"API Keys"** or **"General"** tab
4. Find your **Public Key** (starts with a string like "user_...")
5. **Copy this key** - this is your `VITE_EMAILJS_PUBLIC_KEY`

### Step 2: Collect All Required Information

You should now have these four pieces of information:

1. **Public Key**: `user_xxxxxxxxxxxxx`
2. **Service ID**: From Step 2 of Initial Setup (e.g., `service_xxxxxxx`)
3. **Contact Template ID**: From Template 1 (e.g., `template_xxxxxxx`)
4. **Job Application Template ID**: From Template 2 (e.g., `template_yyyyyyy`)

---

## Configuration for Development Team

Provide the following information to your development team:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxxx
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_JOB_TEMPLATE_ID=template_yyyyyyy
```

**Important**: Replace the `xxxxx` values with your actual IDs from EmailJS.

### Where to Add These:

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add the above lines with your actual values
3. Never commit the `.env` file to version control (it should be in `.gitignore`)

---

## Email Template Structure

### Contact Form Email Fields

When someone submits the contact form, the following data is sent:

| Field Name | Description | Example | Required |
|------------|-------------|---------|----------|
| `name` | Sender's full name | "John Smith" | Yes * |
| `email` | Sender's email address | "john@example.com" | Yes * |
| `phone` | Contact phone number | "+91 98765 43210" | Optional |
| `company` | Company name | "Acme Pharmaceuticals" | Optional |
| `subject` | Inquiry subject/category | "Product Quote Request" | Yes * |
| `message` | The message content | "I'm interested in bulk ordering..." | Yes * |
| `submission_date` | Date/time of submission | "2025-10-16 14:30:00" | Auto |

**Subject Options:**
- General Inquiry
- Product Quote Request
- Partnership Opportunity
- Quality Concern
- Technical Support

### Job Application Email Fields

When someone applies for a job, the following data is sent:

| Field Name | Description | Example | Required |
|------------|-------------|---------|----------|
| `firstName` | Applicant's first name | "Jane" | Yes * |
| `lastName` | Applicant's last name | "Doe" | Yes * |
| `position` | Job position applied for | "International Marketing Co-ordinator" | Yes * |
| `message` | Why they want to work here | "I'm passionate about pharmaceutical..." | Yes * |
| `resume` | Resume file (PDF/DOC/DOCX) | "jane_doe_resume.pdf" | Yes * |
| `resume_name` | Name of uploaded resume file | "jane_doe_resume.pdf" | Auto |
| `referral` | Who referred them (if any) | "Rajesh Kumar" | Optional |
| `submission_date` | Date/time of submission | "2025-10-16 14:30:00" | Auto |

**Position Options:**
- International Marketing Co-ordinator
- Accounts Assistant
- Data Analyst

**Important Notes About Resume Attachments:**
- EmailJS supports file attachments directly (up to 500KB in free plan, 5MB in paid plan)
- Your form accepts PDF, DOC, and DOCX files up to 5MB
- For the best experience, consider upgrading to EmailJS paid plan OR use Cloudinary/AWS S3 to store resumes
- Files are attached directly to the email HR receives

---

## File Attachment Setup (For Job Applications)

EmailJS can automatically attach files sent from your form. Here's how to enable it:

### Method 1: Direct Email Attachment (Recommended - Easier for HR)

1. **In Your Email Template** (Job Application template):
   - EmailJS automatically handles file attachments
   - The resume file will be attached directly to the email HR receives
   - No additional configuration needed in the template

2. **EmailJS Plan Limits**:
   - **Free Plan**: 500KB per attachment
   - **Personal Plan ($7/month)**: 5MB per attachment ✓ *Recommended for your 5MB form limit*
   - **Team Plan**: 5MB per attachment

3. **Upgrade if Needed**:
   - Go to EmailJS Dashboard → Account → Billing
   - Choose "Personal Plan" for $7/month
   - This increases attachment limit to 5MB (matching your form)

### Method 2: Cloud Storage (Alternative - For Unlimited File Sizes)

If you prefer not to pay for EmailJS or need larger files:

1. **Use Cloudinary** (Free tier: 25GB storage):
   - Sign up at cloudinary.com
   - Get your upload preset
   - Upload resume to Cloudinary first
   - Send the Cloudinary URL via EmailJS

2. **Template Modification**: Instead of attaching file, include the URL in the email template:
   ```html
   <a href="{{resume_url}}" style="color: #1CAFD8; text-decoration: none; font-weight: bold;">
     Download Resume/CV
   </a>
   ```

**For Your Setup**: We recommend **Method 1 (Direct Attachment with Personal Plan)** because:
- Simpler for HR - files arrive directly in email
- No need to manage cloud storage
- More reliable - no broken links
- Only $7/month

---

## Managing Received Emails

### Setting Up Email Routing

1. Log into your EmailJS dashboard
2. Go to **"Email Services"**
3. Click on your connected service
4. Under **"Settings"** → **"Email Address"**:
   - This is where all form submissions will be sent
   - By default, it's the email you used to connect the service
   - You can add multiple email addresses (comma-separated)

**Example**: `hr@company.com, admin@company.com`

### Creating Email Filters (Gmail)

To automatically organize incoming applications:

1. Open Gmail
2. Click the search box
3. Enter: `from:noreply@emailjs.com subject:"Job Application"`
4. Click the dropdown arrow in search box
5. Click **"Create filter"**
6. Choose actions:
   - ✓ Apply label: Create/select "Job Applications"
   - ✓ Mark as important
   - ✓ Star it (optional)
7. Click **"Create filter"**

Repeat for Contact Form submissions:
- Search: `from:noreply@emailjs.com subject:"Contact Form"`
- Label: "Contact Inquiries"

### Setting Up Email Forwarding

To forward applications to multiple people:

1. **Gmail**: Settings → Forwarding and POP/IMAP → Add forwarding address
2. **Outlook**: Settings → Mail → Forwarding → Enable forwarding

---

## Testing

### Test the Setup Before Going Live

1. **In EmailJS Dashboard**:
   - Go to "Email Templates"
   - Click on your template
   - Click **"Test It"**
   - Fill in sample data
   - Click "Send Test Email"
   - Check if you received it

2. **From the Website** (After Development Integration):
   - Fill out the contact form with test data
   - Use your own email address
   - Submit the form
   - Check both:
     - The email arrives in the HR inbox
     - The format looks correct
     - All fields are populated

3. **Test Job Application**:
   - Go to the careers page
   - Fill out the application form
   - Upload a test resume
   - Submit
   - Verify email receipt and resume link works

---

## Monitoring Usage

### Check Email Quota

EmailJS free plan includes:
- **200 emails per month**
- After that: $7/month per 1000 emails

To monitor usage:
1. Log into EmailJS
2. Click **"Account"**
3. View **"Usage"** section
4. Monitor monthly email count

**Recommendation**: If you expect more than 200 submissions per month, upgrade to a paid plan.

---

## Troubleshooting

### Emails Not Being Received

1. **Check Spam Folder**: EmailJS emails might be flagged as spam initially
2. **Verify Service Connection**:
   - EmailJS Dashboard → Email Services
   - Ensure service status is "Active"
3. **Check Template IDs**: Ensure template IDs in `.env` file match EmailJS dashboard
4. **Test Template**: Use "Test It" button in template editor

### Wrong Email Format

1. Go to EmailJS → Email Templates
2. Click on the problematic template
3. Review the HTML and variable names (e.g., `{{from_name}}`)
4. Make sure variable names match what the website is sending
5. Save and test again

### Service Disconnected

If your Gmail/Outlook disconnects:
1. EmailJS Dashboard → Email Services
2. Click **"Reconnect"**
3. Authorize the account again

### Rate Limiting / Too Many Emails

If you hit the 200/month limit:
1. EmailJS Dashboard → Account → Billing
2. Upgrade to paid plan
3. Or wait until next month (quota resets monthly)

---

## Security Best Practices

1. **Never Share API Keys Publicly**:
   - Keep `.env` file private
   - Don't commit to GitHub
   - Don't share in screenshots

2. **Enable reCAPTCHA** (Recommended):
   - EmailJS Dashboard → Account → Security
   - Enable reCAPTCHA to prevent spam
   - Google reCAPTCHA setup: [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)

3. **Set Rate Limits**:
   - EmailJS Dashboard → Account → Security
   - Enable rate limiting (e.g., max 10 emails per hour from same IP)

4. **Monitor for Abuse**:
   - Check EmailJS usage regularly
   - Look for suspicious patterns
   - Block IPs if needed

---

## Contact & Support

### EmailJS Support
- Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
- FAQ: [https://www.emailjs.com/faq/](https://www.emailjs.com/faq/)

### For Technical Issues
Contact your development team with:
- Screenshot of the error
- Browser console errors (F12 → Console)
- EmailJS dashboard screenshot showing service/template status

---

## Quick Reference Card

Print this and keep it handy:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         EMAILJS QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 EmailJS Dashboard:
   https://dashboard.emailjs.com

🔑 Your Keys (Don't Share!):
   Public Key: user_xxxxxxxxxxxxx
   Service ID: service_xxxxxxx
   Contact Template: template_xxxxxxx
   Job Template: template_yyyyyyy

📊 Check Usage:
   Dashboard → Account → Usage
   Monthly Limit: 200 emails (free)

🔧 Test Templates:
   Dashboard → Email Templates
   → Select Template → "Test It"

📬 Where Emails Go:
   [your-hr-email@company.com]

⚠️ Troubleshooting:
   1. Check spam folder
   2. Verify service is active
   3. Test template in dashboard
   4. Check quota usage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Appendix: Sample Email Screenshots

When you set everything up, you should receive emails that look like this:

**Contact Form Email:**
- Clean, professional header
- Table with sender details
- Message in a bordered box
- Footer with submission time

**Job Application Email:**
- Job position prominently displayed
- Complete applicant information
- Cover letter section
- Highlighted resume link
- Submission timestamp

---

*Document Version: 1.0*
*Last Updated: October 16, 2025*
*Created for: HR Department Setup*
