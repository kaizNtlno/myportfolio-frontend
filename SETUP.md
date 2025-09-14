# 🚀 Portfolio Backend Setup Guide

I've created a complete production-ready Node.js + Express backend for your portfolio's contact form. Here's how to set it up:

## 📁 Backend Structure Created

```
backend/
├── package.json          # Dependencies and scripts
├── server.js            # Main server file
├── env.example          # Environment variables template
├── routes/
│   └── contact.js       # Contact form API routes
├── services/
│   └── emailService.js  # Email sending service
├── middleware/
│   ├── validation.js    # Input validation
│   └── errorHandler.js  # Error handling
└── README.md           # Detailed backend documentation
```

## 🛠️ Quick Setup (3 Steps)

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Email Settings

Copy the environment file:
```bash
cp env.example .env
```

Edit `.env` with your Gmail settings:
```env
# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Your contact email
CONTACT_EMAIL=kaiz.nitullano@example.com
FROM_NAME=Portfolio Contact Form

# Server settings
PORT=5000
FRONTEND_URL=http://localhost:5174
```

### 3. Start Both Servers

**Option A: Use the startup script**
```bash
# Windows
start-dev.bat

# Mac/Linux
./start-dev.sh
```

**Option B: Manual start**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
npm run dev
```

## 📧 Gmail Setup (Required)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account → Security → 2-Step Verification
   - Click "App passwords"
   - Select "Mail" and generate password
   - Use this password in `EMAIL_PASS`

## ✨ Features Included

### 🔒 Security Features
- ✅ **Rate Limiting**: 5 requests per 15 minutes per IP
- ✅ **Input Validation**: Comprehensive form validation
- ✅ **CORS Protection**: Only allows your frontend domain
- ✅ **Helmet Security**: Security headers
- ✅ **Input Sanitization**: XSS protection

### 📧 Email Features
- ✅ **Dual Emails**: Notification to you + confirmation to sender
- ✅ **HTML Templates**: Beautiful email templates
- ✅ **Error Handling**: Graceful failure handling
- ✅ **Reply-To**: Direct replies to sender's email

### 🚀 Production Ready
- ✅ **Environment Config**: Separate dev/prod settings
- ✅ **Health Check**: `/health` endpoint for monitoring
- ✅ **Error Logging**: Comprehensive error tracking
- ✅ **Graceful Shutdown**: Proper server shutdown handling

## 🔗 API Endpoints

### Contact Form
```
POST http://localhost:5000/api/contact
```

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "messageId": "email-message-id"
}
```

### Health Check
```
GET http://localhost:5000/health
```

## 🌐 Frontend Integration

Your React contact form is already updated to use the backend! It will:
- Send real emails instead of simulating
- Show proper success/error messages
- Handle network errors gracefully

## 🚀 Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
CONTACT_EMAIL=your-business-email@domain.com
FRONTEND_URL=https://yourdomain.com
```

### Deployment Options
1. **Heroku**: Easy deployment with automatic environment management
2. **Vercel**: Serverless deployment with great performance  
3. **Railway**: Simple deployment with built-in database options
4. **DigitalOcean**: VPS deployment with full control

## 🧪 Testing

Test your contact form:
1. Start both servers
2. Go to `http://localhost:5174`
3. Navigate to Contact section
4. Fill out and submit the form
5. Check your email for the notification
6. Check sender's email for confirmation

## 📊 Monitoring

- **Health Check**: `GET /health` - Monitor API status
- **Logs**: Check console for detailed error logs
- **Rate Limiting**: Monitor for abuse attempts

## 🆘 Troubleshooting

### Common Issues

**Email not sending:**
- Check Gmail app password
- Verify SMTP settings in `.env`
- Check console for error messages

**CORS errors:**
- Verify `FRONTEND_URL` in `.env`
- Ensure frontend is running on correct port

**Rate limiting:**
- Adjust `RATE_LIMIT_MAX_REQUESTS` in `.env`
- Wait 15 minutes or restart server

## 🎉 You're All Set!

Your portfolio now has a complete, production-ready backend that:
- ✅ Sends real emails
- ✅ Handles form validation
- ✅ Protects against spam
- ✅ Provides user feedback
- ✅ Is ready for production deployment

The contact form will now send actual emails to your inbox and confirmation emails to users who contact you!
