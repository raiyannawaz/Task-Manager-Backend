const regMailContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Task Manager - Welcome</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif;">
    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; margin:auto; background:#ffffff; border:1px solid #e5e7eb;">
      <tr>
        <td style="padding:20px; text-align:center; background:#6366F1; color:#ffffff;">
          <h1 style="margin:0; font-size:22px;">Task Manager</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:30px; color:#111827;">
          <h2 style="margin-top:0; color:#111827;">Thanks for registering 🎉</h2>
          <p style="font-size:15px; line-height:1.6; color:#374151;">
            Welcome to <strong>Task Manager</strong>! Your account has been created successfully.  
            You can now organize your work and keep track of tasks more effectively.
          </p>
          <p style="font-size:15px; line-height:1.6; color:#374151;">
            Here’s what you can do:
          </p>
          <ul style="font-size:15px; line-height:1.6; color:#374151; padding-left:18px;">
            <li>Create and manage tasks with status and priorities</li>
            <li>Set up and update your profile</li>
            <li>View your dashboard with task summary</li>
          </ul>
          <div style="text-align:center; margin:30px 0;">
            <a href="https://raiyannawaz.github.io/Task-Manager" style="background:#6366F1; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; display:inline-block;">
              Go to Dashboard
            </a>
          </div>
          <p style="font-size:13px; color:#6b7280;">
            Didn’t register for Task Manager? Please ignore this email.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:15px; background:#f3f4f6; text-align:center; font-size:12px; color:#6b7280;">
          © 2025 Task Manager. All rights reserved.
        </td>
      </tr>
    </table>
  </body>
</html>
`

const updMailContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Task Manager - Email Updated</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif;">
    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; margin:auto; background:#ffffff; border:1px solid #e5e7eb;">
      <!-- Header -->
      <tr>
        <td style="padding:20px; text-align:center; background:#6366F1; color:#ffffff;">
          <h1 style="margin:0; font-size:22px;">Task Manager</h1>
        </td>
      </tr>
      
      <!-- Body -->
      <tr>
        <td style="padding:30px; color:#111827;">
          <h2 style="margin-top:0; color:#111827;">Your email has been updated ✅</h2>
          <p style="font-size:15px; line-height:1.6; color:#374151;">
            Hi {$name$}, we wanted to let you know that your <strong>Task Manager</strong> account email was updated successfully.  
          </p>
          <p style="font-size:15px; line-height:1.6; color:#374151;">
            What’s next?
          </p>
          <ul style="font-size:15px; line-height:1.6; color:#374151; padding-left:18px;">
            <li>Log in using your new email address</li>
            <li>Keep managing your tasks with priorities and statuses</li>
            <li>Access your dashboard and stay organized</li>
          </ul>
          <div style="text-align:center; margin:30px 0;">
            <a href="https://raiyannawaz.github.io/Task-Manager" style="background:#6366F1; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; display:inline-block;">
              Go to Dashboard
            </a>
          </div>
          <p style="font-size:13px; color:#6b7280;">
            If you didn’t request this change, please <a href="#" style="color:#6366F1; text-decoration:none;">contact support</a> immediately.
          </p>
        </td>
      </tr>
      
      <!-- Footer -->
      <tr>
        <td style="padding:15px; background:#f3f4f6; text-align:center; font-size:12px; color:#6b7280;">
          © 2025 Task Manager. All rights reserved.
        </td>
      </tr>
    </table>
  </body>
</html>`

module.exports = { regMailContent, updMailContent }