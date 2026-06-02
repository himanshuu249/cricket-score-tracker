# Deployment Guide

Complete guide to deploy the Cricket Score Tracker app to production.

## Prerequisites

- GitHub account
- Vercel account (for frontend)
- Render or Heroku account (for backend)
- MongoDB Atlas account

## Backend Deployment (Render)

### 1. Prepare MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create database user with password
4. Get connection string and add to environment variables

### 2. Deploy to Render

1. Go to https://render.com
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Set configuration:
   - **Name**: cricket-score-tracker-api
   - **Runtime**: Node
   - **Build command**: `npm install`
   - **Start command**: `npm start`
   - **Root directory**: `backend`

5. Add environment variables:
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_key_min_32_chars
   CLIENT_URL=https://your-frontend-domain.com
   ```

6. Click "Create Web Service"

## Frontend Deployment (Vercel)

### 1. Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New..." and select "Project"
3. Import your GitHub repository
4. Set configuration:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add environment variable:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```
   (Get the backend URL from Render)

6. Click "Deploy"

## Alternative Backend Deployment (Heroku)

### 1. Install Heroku CLI

```bash
npm install -g heroku
```

### 2. Deploy to Heroku

```bash
heroku login
heroku create cricket-score-tracker
heroku buildpacks:add heroku/nodejs
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret_key
heroku config:set CLIENT_URL=your_frontend_url
heroku config:set NODE_ENV=production
git push heroku main
```

## Environment Variables Summary

### Backend (.env)
```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/cricket-tracker?retryWrites=true&w=majority
JWT_SECRET=your_very_secure_secret_key_min_32_chars_change_this
JWT_EXPIRE=7d
CLIENT_URL=https://your-frontend-url.vercel.app
```

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## Testing Deployment

1. Create a test account
2. Create a match
3. Update scores
4. Delete a match
5. Test all authentication flows

## Post-Deployment

1. Test all endpoints using Postman or similar tool
2. Verify authentication flow works
3. Test match creation and score updates
4. Check CORS configuration
5. Monitor logs for errors

## Domain Setup (Optional)

### Custom Domain on Vercel

1. Go to Project Settings
2. Add custom domain
3. Update DNS records at your domain registrar

### Custom Domain on Render

1. Go to Service Settings
2. Add custom domain
3. Update DNS records at your domain registrar

## Security Checklist

- [ ] Change JWT_SECRET to a strong random value (min 32 chars)
- [ ] Enable HTTPS (automatic on Vercel/Render)
- [ ] Set NODE_ENV to production
- [ ] Verify CORS origin matches your frontend
- [ ] Use strong MongoDB password
- [ ] Enable MongoDB Atlas network security
- [ ] Keep dependencies updated
- [ ] Use environment variables for all secrets
- [ ] Enable database backups
- [ ] Set up monitoring and error tracking

## Monitoring & Maintenance

1. Set up error tracking with Sentry
2. Monitor performance with New Relic
3. Set up uptime monitoring
4. Enable database backups
5. Regular security updates

## Troubleshooting

### CORS errors
- Ensure CLIENT_URL matches your frontend domain exactly
- Check CORS middleware configuration
- Verify the Access-Control-Allow-Origin header

### Database connection errors
- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas (add 0.0.0.0/0 for testing)
- Ensure network access is enabled
- Test connection with MongoDB Compass

### 502 Bad Gateway
- Check server logs in Render/Heroku dashboard
- Verify all environment variables are set
- Restart the application
- Check application startup logs

### Frontend not connecting to backend
- Verify VITE_API_URL is correct
- Check browser console for CORS errors
- Ensure backend is running and accessible
- Verify network connectivity

### Authentication not working
- Check JWT_SECRET matches between frontend/backend
- Verify token is being stored in localStorage
- Check Authorization header format (Bearer token)
- Test login endpoint with curl/Postman

## Performance Optimization

1. Enable gzip compression on backend
2. Implement database indexing
3. Use CDN for frontend assets (Vercel does this automatically)
4. Optimize images and assets
5. Implement request caching where appropriate

## Scaling

- **Database**: Upgrade MongoDB cluster tier for more resources
- **Backend**: Upgrade Render/Heroku dyno type for better performance
- **Frontend**: Automatic with Vercel
