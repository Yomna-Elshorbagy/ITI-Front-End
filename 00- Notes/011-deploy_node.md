# 🚀 Deploy Node.js App on AWS EC2 with Nginx

This guide explains how to set up **Node.js** on an **EC2 Ubuntu instance**, clone your project from **GitHub**, and configure **Nginx** as a reverse proxy.

---

## 🧩 Prerequisites
- AWS EC2 Ubuntu instance
- SSH access (Port **22** allowed only from your PC)
- GitHub repository
- Node.js application

---

## 🔹 Step 1: Update Packages
```bash
sudo apt update && sudo apt upgrade -y
```

---

## 🔹 Step 2: Install Node.js (v22)
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify installation:
```bash
node -v
npm -v
```

---

## 🔹 Step 3: Install Git
```bash
sudo apt install git -y
```

---

## 🔹 Step 4: Clone Project from GitHub

> 🔐 **Note:** If the repo is private, generate a **GitHub Classic Access Token** from:
> **GitHub → Settings → Developer settings → Personal access tokens**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

## 🔹 Step 5: Install Dependencies
```bash
npm install
```

---

## 🔹 Step 6: Set Up Environment Variables (Optional)
```bash
nano .env
```

Add your environment variables, then save:
- **CTRL + O** → Enter
- **CTRL + X** to exit

---

## 🔹 Step 7: Run the App Temporarily (Test)
```bash
node index.js
# OR
npm start
```

---

## 🔹 Step 8: Install PM2 (Keep App Running)
```bash
sudo npm install -g pm2
```

Start the app:
```bash
pm2 start ./src/index.js -i 0
```

> `-i 0` enables **cluster mode** using all CPU cores

---

## 🔹 Step 9: Open Required Ports in EC2 Security Group

Allow inbound traffic:
- **HTTP** → Port **80**
- **HTTPS** → Port **443** (optional)
- **SSH** → Port **22** (only your IP)

---

## 🔹 Step 10: Install and Configure Nginx

### Install Nginx
```bash
sudo apt install nginx -y
```

### Edit Default Config
```bash
sudo nano /etc/nginx/sites-available/default
```

Replace the server block with:
```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### Test & Restart Nginx
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔹 Step 11: Access Your App

Visit in browser:
```
http://YOUR_EC2_PUBLIC_IP
```

Your Node.js app is now running behind **Nginx** 🎉

---

# 🔐 Expose Node.js App with ngrok (HTTPS Without Domain)

This section explains how to expose your Node.js app running on EC2 using **ngrok** with **HTTPS**, without buying a domain.

---

## 🔹 Step 1: Install ngrok
```bash
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list && \
sudo apt update && sudo apt install ngrok -y
```

---

## 🔹 Step 2: Connect Your ngrok Account

1. Go to https://ngrok.com
2. Create a free account
3. Copy your **Auth Token**

```bash
ngrok config add-authtoken YOUR_AUTHTOKEN_HERE
```

---

## 🔹 Step 3: Start Your Node.js App

Ensure the app is running on port **3000**:
```bash
pm2 start ./src/index.js -i 0
```

---

## 🔹 Step 4: Start ngrok Tunnel
```bash
ngrok http 3000
```

You will receive a public HTTPS URL:
```
https://randomsubdomain.ngrok.io → http://localhost:3000
```

---

## 🔹 Step 5: Run ngrok in the Background (Optional)
```bash
nohup ngrok http 3000 --log=stdout > ngrok.log &
```

View logs:
```bash
tail -f ngrok.log
```

---

## 🛑 How to Stop ngrok

### If running in the foreground:
```text
Ctrl + C
```

### If running in the background:

1. Find PID:
```bash
ps aux | grep ngrok
```

2. Kill process:
```bash
kill PID
# Force kill
kill -9 PID
```

3. (Optional) Remove log file:
```bash
rm ngrok.log
```

---

## ✅ Summary
- EC2 + Node.js + PM2 for production stability
- Nginx as reverse proxy
- ngrok for instant HTTPS exposure

🚀 Perfect setup for **testing, demos, and production-ready apps**

