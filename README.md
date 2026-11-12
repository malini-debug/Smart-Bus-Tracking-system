# Smart Bus Tracker – Intelligent Public Transport Agent

A responsive React + TypeScript demo application for planning a sample journey from Perambalur to SRM TRP Engineering College, Tiruchirappalli.

## Important: no NVIDIA API key
This version removes NVIDIA API integration completely. The Smart Travel Assistant uses local rule-based responses. No API key, `.env` secret, or backend server is required.

## Features
- Dashboard and sample bus search
- Interactive OpenStreetMap using Leaflet
- Three sample buses with clearly labelled demo GPS positions
- Simulated arrival countdown and 10/5/2-minute alerts
- Missed-bus demonstration and alternative bus suggestions
- Nearby sample stops
- Trip planner
- Local Smart Travel Assistant chatbot
- In-app notification center and optional browser notifications
- Responsive desktop and mobile layout

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Demo walkthrough
1. Open Dashboard and search the default Perambalur → SRM TRP College journey.
2. Open Find Buses and select a sample bus.
3. Open Live Tracking to view the map and demo GPS markers.
4. Use 10 min, 5 min, 2 min and Arrival now controls to trigger alerts.
5. Press Simulate missed bus to view alternative bus recommendations.
6. Open Smart Travel Assistant and try the quick questions.
7. Open Notifications to mark alerts as read or clear them.

## Data and limitations
- All bus names, schedules, fares, ETAs, routes and coordinates in this prototype are sample demonstration data.
- GPS positions are not real-time. Markers are labelled DEMO GPS DATA.
- OpenStreetMap tiles require an internet connection.
- Browser notifications are optional and require user permission.
- This prototype does not connect to real transport operator data or live bus GPS.

## GitHub upload
1. Create a new GitHub repository.
2. Extract this ZIP file.
3. Upload the contents of the extracted `Smart-Bus-Tracker` folder (not the ZIP itself) to the repository.
4. Commit the files.
5. Do not upload `node_modules` or `dist`; `.gitignore` excludes them.

## Deployment
The app can be deployed as a Vite static site on GitHub Pages, Netlify or Vercel. Run `npm run build` to create the `dist` folder. Configure the host to use `npm run build` and publish `dist`.
