# 🎵 **David Kando Music - React & Next.js Portfolio**
![Image](https://github.com/user-attachments/assets/eb5a9f3b-4a66-41d4-90f4-dc5ebc17b37d)
A modern **music portfolio website** built with **React & Next.js**, featuring API integration, dynamic content rendering, and embedded media.

# What is Next.js?

**Next.js** is a popular **React framework** that enables **server-side rendering (SSR), static site generation (SSG), and API routes**. It simplifies React development by offering **performance optimizations, routing, and seamless deployment**.

# 🚀 **Tech Stack**

 - **Next.js:** - Optimized React framework with SSR & SSG.
 - **React.js:** - Component-based UI development. 
 - **Tailwind CSS:** - Modern styling for responsiveness. 
 - **Spotify API:** - Embedded music streaming & playlist data.
 - **Custom API Routes:** - Fetches artist data dynamically.


 # 📁 Project Structure
 ![Image](https://github.com/user-attachments/assets/be13b4e2-99ca-493e-9931-8e8afe4bdd40)
 
```bash
📦 app
 ┣ 📂 found
 ┃ ┣ 📂 about
 ┃ ┣ 📂 band
 ┃ ┣ 📂 connect
 ┃ ┣ 📂 discography
 ┃ ┣ 📂 quiz
 ┃ ┣ 📂 record
 ┃ ┣ 📂 studio
 ┃ ┣ 📜 layout.js          # Main layout for found pages
 ┃ ┗ 📜 page.js            # Root page for found section
 ┣ 📂 [...not-found]       # Dynamic route for handling 404 pages
 ┣ 📂 fonts                # Stores custom fonts
 ┣ 📜 data.js              # Stores application data
 ┣ 📜 favicon.ico          # Website favicon
 ┣ 📜 globals.css          # Global styling
 ┣ 📜 layout.js            # Global layout file
 ┣ 📜 not-found.js         # Handles 404 errors
 ┗ 📂 components           # (Expand if needed)
```
## 🔍 Project Overview (Selected Code Samples)

- **`app/layout.js`** – The main layout component of KandoMusic, dynamically rendering photos by mapping through imported GRID_DATA_ITEMS. It structures the main screen with a grid-based design and interactive links.
  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/1312ac308aaef3e11dfcc0c6b26da638e977c211/src/Layout(App))

### Connect with me

![Image](https://github.com/user-attachments/assets/5284fc7b-aa0c-49a2-ad65-9d6b8554535f)

```bash
📦 connect
 ┣ 📂 email-list
 ┃ ┣ 📜 form.js          # Handles email form input
 ┃ ┗ 📜 post-contact.js  # Processes contact form submissions
 ┣ 📂 followers
 ┃ ┣ 📜 get-followers.js # Fetches follower data
 ┃ ┣ 📜 index.js         # Main entry point for followers
 ┣ 📜 layout.js          # Layout for connect module
 ┣ 📜 loading.js         # Loading state handler
 ┗ 📜 page.js            # Main page for connect section
```
#### Email Subscription Form

- **`email-list/form.js`** – This form collects the **user's name and email**, validates input, and submits data asynchronously to `post-contact.js`. It provides **real-time feedback**, handles errors, and displays a **loading spinner** during submission.  

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/1312ac308aaef3e11dfcc0c6b26da638e977c211/src/Layout(App))

- **`email-list/post-contact.js`** – This **server-side function** securely sends **name and email** to **Mailjet’s API** for contact management. It **authenticates requests** using environment variables (`API_KEY`, `SECRET_KEY`) and returns the **JSON response** from the API.

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/1312ac308aaef3e11dfcc0c6b26da638e977c211/src/Layout(App))

### **Email Subscription Flow (`form.js` & `post-contact.js`)**  

`form.js` handles user input, validation, and async submission, while `post-contact.js` securely sends data to Mailjet’s API using authentication. 
Key skills: **React Hooks, API integration, server-side execution, and authentication**.  

