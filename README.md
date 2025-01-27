# ✨ SaaS Code Editor - Next.js 15 ✨

![Demo App](https://cdn.sanity.io/images/0ww2tgdo/production/678bc71abd6a3d5bae601403ddc8c5daaa4b495f-1280x720.png)

## 📌 Project Description

The **SaaS Code Editor - Next.js 15** is a modern, feature-rich online Integrated Development Environment (IDE) designed for developers who need a seamless, customizable, and collaborative coding experience. 🚀 Built using **Next.js 15**, **Convex**, **Clerk**, and **TypeScript**, this app enables developers to write, test, and share code online across multiple languages. 💻

With support for 10 programming languages, customizable themes 🎨, real-time output handling 🕒, and advanced search capabilities 🔍, the SaaS Code Editor is designed to streamline coding tasks, enhance productivity 💡, and foster community collaboration 🤝. Whether you're an individual coder or part of a development team, this platform provides the flexibility and tools to elevate your coding workflow. 🚀

## 🚀 Highlights

- **Tech Stack**: Built with Next.js 15, Convex, Clerk, and TypeScript for a seamless and modern development experience. 🛠️
- **Online IDE**: Supports 10 programming languages for a versatile coding environment, allowing users to code in multiple languages without switching tools. 🌍
- **Customizable Themes**: Choose from 5 VSCode-inspired themes to match your personal preference, ensuring a comfortable user experience. 🎨
- **Smart Output Handling**: Automatically handles success ✅ and error ❌ states for a cleaner workflow, providing real-time feedback. 🔄
- **Flexible Pricing Plans**: Offering both Free and Pro plans, catering to individual users and teams, with premium features in the Pro version. 💸
- **Community-driven**: Share and collaborate with others through a robust code-sharing system. Discover community solutions and contribute your own code snippets. 👥
- **Advanced Search & Filtering**: Easily find the code or snippets you need with powerful search capabilities, including filtering by language, keywords, or tags. 🔍
- **Personal Profile**: Track your execution history, including past code runs, and manage your projects more efficiently with a personalized dashboard. 🗂️
- **Comprehensive Dashboard**: Gain insights into your coding performance 📈, project statistics 📊, and trends with an intuitive and detailed statistics dashboard. 📋
- **Customizable Controls**: Adjust font size 🔠, themes 🎨, and interface layout to suit your preferences for optimal readability and productivity. ⚙️
- **Webhook Integrations**: Easily integrate with external services like Slack, GitHub, or other APIs to automate workflows and streamline development. 🔗

## 📦 Installation & Setup

### Prerequisites

Before setting up the application, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher) 🔧
- [npm](https://www.npmjs.com/) (v8 or higher) 📦

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/BernieTv/SASS-Code-Editor.git
cd SASS-Code-Editor
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Configure the .env File

Create a `.env` file in the root directory and configure the following environment variables for the app to work seamlessly:

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
CONVEX_DEPLOYMENT=YOUR_CONVEX_DEPLOYMENT
NEXT_PUBLIC_CONVEX_URL=YOUR_CONVEX_URL
```

### 4. Add Webhooks to Convex Dashboard

To enable webhook functionality, add these keys to your Convex Dashboard:

```js
CLERK_WEBHOOK_SECRET=YOUR_CLERK_WEBHOOK_SECRET
LEMON_SQUEEZY_WEBHOOK_SECRET=YOUR_LEMON_SQUEEZY_WEBHOOK_SECRET
```

### 5. Run the Application

Run the app locally by executing the following command in your terminal:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to access the SaaS Code Editor. 🌐

## 💻 Usage

- Open the editor and choose a language from the supported list (e.g., JavaScript, Python, Go). 🔤
- Start typing your code and use the integrated terminal to run and test it. ⏱️
- Share your code with the community by submitting snippets through the community-driven sharing system. 📤
- Track your progress, review your execution history, and view your performance insights from the user profile. 📈

## 🤝 Contributing

We welcome contributions to improve the SaaS Code Editor! 🙌 To contribute, please follow these steps:

1. Fork the repository. 🍴
2. Create a new branch (`git checkout -b feature-branch`). 🌱
3. Make your changes. ✍️
4. Commit your changes (`git commit -am 'Add new feature'`). 💼
5. Push to the branch (`git push origin feature-branch`). 🚀
6. Create a pull request. 🔄

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📑
