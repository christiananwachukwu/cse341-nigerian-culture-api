# 🇳🇬 Nigerian Culture API

A RESTful API celebrating Nigerian cultural heritage —
Dishes, Festivals, Traditional Rulers & Folklore.

Built with Node.js, Express, MongoDB & Swagger.

---

## 👥 Team Members
- Christiana Nwachukwu
- Morris Oliha
- Oribi Teo-iyalla

---

## 🚀 Getting Started (For Team Members)

### Step 1 — Clone the repo
```bash
git clone https://github.com/christiananwachukwu/cse341-nigerian-culture-api.git
Step 2 — Move into the folder
cd cse341-nigerian-culture-api
Step 3 — Install dependencies
npm install
Step 4 — Create your .env file
Create a file called .env in the root folder and add this:
PORT=3000
MONGODB_URI=mongodb+srv://Cse341-node_user:zcunJfTwOSlEh06r@cluster0.ftq2398.mongodb.net/nigerian-culture-api?appName=Cluster0
GITHUB_CLIENT_ID=your_github_client_id_here(coming soon)
GITHUB_CLIENT_SECRET=your_github_client_secret_here(coming soon)
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback
SESSION_SECRET=nigerianCultureAPISecret2025
Step 5 — Start the server
npm run dev
You should see:
Connected to MongoDB ✅
Server running on port 3000 🚀
Git Branch Workflow
IMPORTANT — Never work directly on main!!
Always create your own branch before coding:
git checkout -b your-name-feature
For example:
git checkout -b morris-festivals
git checkout -b oribi-rulers-folklore
When your work is ready, push your branch:
git push origin your-branch-name
Then create a Pull Request on GitHub for Christiana to review and merge! ✅
📁 Project Structure
cse341-nigerian-culture-api/
├── controllers/      # Business logic
├── routes/           # Express route definitions
├── models/           # Mongoose schemas
├── middleware/       # Auth middleware
├── swagger.json      # API documentation
├── server.js         # Entry point
├── .env              # Secret variables (NOT on GitHub)
└── package.json      # Dependencies

🔗 Links
GitHub Repo: https://github.com/christiananwachukwu/cse341-nigerian-culture-api
Render URL: Coming soon
Swagger Docs: Coming soon
Save it! ✅

---

Then push it to GitHub:

```bash
git add .
git commit -m "Add README with setup instructions for team"
git push origin main