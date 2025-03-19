# 🎵 **David Kando Music - React & Next.js Portfolio**
![Image](https://github.com/user-attachments/assets/eb5a9f3b-4a66-41d4-90f4-dc5ebc17b37d)
A modern **music portfolio website** built with **React & Next.js**, featuring API integration, dynamic content rendering, and embedded media.

# What is Next.js?

**Next.js** is a popular **React framework** that enables **server-side rendering (SSR), static site generation (SSG), and API routes**. It simplifies React development by offering **performance optimizations, routing, and seamless deployment**.

## 🚀 **Tech Stack**

 - **Next.js:** - Optimized React framework with SSR & SSG.
 - **React.js:** - Component-based UI development. 
 - **Tailwind CSS:** - Modern styling for responsiveness. 
 - **Spotify API:** - Embedded music streaming & playlist data.
 - **Custom API Routes:** - Fetches artist data dynamically.


 ## 📁 Project Structure
 ![Image](https://github.com/user-attachments/assets/be13b4e2-99ca-493e-9931-8e8afe4bdd40)
 ```bash
📦 KandoMusic
 ┣ 📂 pages
 ┃ ┣ 📜 _app.js       # Global wrapper for the app
 ┃ ┣ 📜 index.js      # Home page
 ┃ ┗ 📜 about.js      # About page
 ┣ 📂 components
 ┃ ┗ 📜 Layout.js     # Main layout component (imports GRID_DATA_ITEMS)
 ┣ 📂 data
 ┃ ┗ 📜 index.js      # Contains GRID_DATA_ITEMS for dynamic rendering
 ┣ 📂 styles
 ┃ ┗ 📜 global.css    # Global styles
 ┗ 📜 package.json
### 🔍 Project Overview (Selected Code Samples)

- **`App[Layout.js]`** – The main layout component of KandoMusic, dynamically rendering photos by mapping through imported GRID_DATA_ITEMS. It structures the main screen with a grid-based design and interactive links.
  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/1312ac308aaef3e11dfcc0c6b26da638e977c211/src/Layout(App))