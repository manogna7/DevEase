# **DevEase**

DevEase is a revolutionary platform that empowers users to create websites effortlessly. Whether you're a beginner, a business owner, or a developer, DevEase simplifies web development by combining **automated code generation**, **pre-built templates**, and **drag-and-drop customization** into one seamless experience. With DevEase, you can describe your website idea, customize it visually, and export or deploy it all without writing a single line of code.

---

## **Key Features**

### **1. Automated Code Generation**
- Describe your website or component in plain English (e.g., "a landing page for a bakery with a hero section and contact form").
- DevEase generates clean, production-ready code in your preferred framework (React, HTML/CSS, etc.).

### **2. Template Library**
- Access a growing library of professionally designed templates for various use cases:
  - Landing pages
  - Portfolios
  - E-commerce sites
  - Blogs

### **3. Drag-and-Drop Customization**
- Intuitive visual editor for modifying layouts, styles, and content.
- Real-time preview of changes.

### **4. Multi-Framework Support**
- Generate code for multiple frameworks:
  - React, Vue, Angular (for dynamic websites)
  - HTML/CSS/JavaScript (for static websites)

### **5. Export and Deployment**
- Download your project as a ZIP file with all necessary files (HTML, CSS, JS, assets).
- One-click deployment to platforms like Netlify, Vercel, or GitHub Pages.

### **6. Collaboration Tools**
- Share projects with team members or clients for feedback.
- Real-time collaboration on website edits.

### **7. User Accounts**
- Save and manage your projects in the cloud.
- Access a history of previously generated websites.

---

## **What Makes DevEase Unique?**
### **1. Framework Flexibility**
- Most website builders only output static HTML/CSS. DevEase allows users to generate code for modern frameworks like React, Vue, and Angular, making it ideal for developers and businesses alike.

### **2. No-Code + Pro-Code in One**
- Beginners can use the visual editor and pre-built templates without touching code.
- Developers can start with AI-generated code and refine it further, saving hours of repetitive work.

### **3. Real-Time Collaboration**
- Unlike other tools, DevEase allows teams to collaborate in real-time on website projects, making it perfect for agencies and remote teams.

### **4. Open-Ended Creativity**
- While other tools limit users to pre-defined templates, DevEase allows users to describe **anything** and generate it. From simple landing pages to complex dashboards, the possibilities are endless.

### **5. Export and Ownership**
- DevEase lets users export their code and own it completely. No vendor lock-in take your code and deploy it anywhere.

---

## **Tech Stack**

- **Frontend**: React.js, Tailwind CSS, CodeMirror
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API
- **DevOps**: Docker, GitHub Actions
- **Testing**: Jest, Cypress

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/manogna7/devEase.git
cd devEase
```

### **2. Install Dependencies**
```bash
cd client
npm install

cd ../server
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the `server` directory and add the following:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/devEase
OPENAI_API_KEY=your_openai_api_key
```

### **4. Run the Application**
Start the backend server:
```bash
cd server
npm start
```

Start the frontend development server:
```bash
cd client
npm start
```

Visit the application at [http://localhost:3000](http://localhost:3000) in your browser.

---

## **License**

This project is licensed under the [MIT License](./LICENSE).

