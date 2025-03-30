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
├─ found
│  ├─ about/
│  ├─ band/
│  ├─ connect/
│  ├─ discography/
│  ├─ quiz/
│  ├─ record/
│  ├─ studio/
│  ├─ layout.js        # Main layout for found pages
│  └─ page.js          # Root page for found section
├─ [...not-found]/     # Dynamic route for handling 404 pages
├─ fonts/              # Stores custom fonts
├─ data.js             # Stores application data
├─ favicon.ico         # Website favicon
├─ globals.css         # Global styling
├─ layout.js           # Global layout file
├─ not-found.js        # Handles 404 errors
└─ components/         # Shared UI components
```
## 🔍 Project Overview (Selected Code Samples)

- **`app/found/layout.js`** – The main layout component of KandoMusic, dynamically rendering photos by mapping through imported GRID_DATA_ITEMS. It structures the main screen with a grid-based design and interactive links.
  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/1312ac308aaef3e11dfcc0c6b26da638e977c211/src/Layout(App))

---

### Connect with me

![Image](https://github.com/user-attachments/assets/5284fc7b-aa0c-49a2-ad65-9d6b8554535f)

```bash
📦 connect
├─ email-list
│  ├─ form.js           # Handles email form input
│  └─ post-contact.js   # Processes contact form submissions
├─ followers
│  ├─ get-followers.js  # Fetches Instagram follower data
│  └─ index.js          # Main entry point for followers
├─ layout.js            # Layout for connect module
├─ loading.js           # Loading state handler
└─ page.js              # Main page for /connect
```
### Email Subscription Form

- **`email-list/form.js`** – This form collects the **user's name and email**, validates input, and submits data asynchronously to `post-contact.js`. It provides **real-time feedback**, handles errors, and displays a **loading spinner** during submission.  

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/bc385d60a26841a8b08389918268eb01988c1af3/src/ConnectWithMe/Formjs)

- **`email-list/post-contact.js`** – This **server-side function** securely sends **name and email** to **Mailjet’s API** for contact management. It **authenticates requests** using environment variables (`API_KEY`, `SECRET_KEY`) and returns the **JSON response** from the API.

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/bc385d60a26841a8b08389918268eb01988c1af3/src/ConnectWithMe/Postjs)

- **`connect/page.js`** – This **main page** encourages user engagement by **promoting Spotify and Instagram follows**, displaying **real-time follower counts** via `<Followers />`, and **collecting email subscriptions** through `<Form />`. It also provides **direct contact information** for inquiries.

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/2b44a17baf135f72d25e2a4277d22cfa9e88ef4f/src/ConnectWithMe/Page)

---

### Poision Worms

![Image](https://github.com/user-attachments/assets/ce74ee05-8640-4308-990e-2f6d38ba7455)

```bash
📦 record
├─ [id]
│  ├─ [content]
│  │  └─ page.js                  # Dynamic content page for each record ID
│  ├─ embeds
│  │  ├─ in-perpetuity-embed.js  # Embed for "In Perpetuity"
│  │  ├─ poison-worms-embed.js   # Embed for "Poison Worms"
│  │  └─ index.js                # Main index for embeds
│  ├─ data.js                    # Track and record metadata
│  ├─ loading.js                 # Loading state for dynamic routes
│  ├─ page.js                    # Main page for /record/[id]
│  └─ player.js                  # Audio player component
└─ layout.js                     # Layout for the record section                  
 ```
### Music Track Feature: "Poison Worms"

- **`record/layout.js`** – This layout dynamically adjusts based on the current record’s path using **Next.js navigation hooks**. It fetches the correct **background style and title** from the record data, and renders a **breadcrumb UI** with `<SegmentsBreadcrumbs />`, all wrapped in a reusable `<LayoutStructure />` component.

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/185a2d2d583598bf8804ae93e6d7880f1d542fe9/src/PoisonWorms/Layoutjs)

- **`id/page.js`** – This dynamic route renders each record's details using `RECORDS_MAP`, including the release blurb, date, and embedded Spotify player. It also dynamically generates metadata and provides links to **Lyrics** and **GearUsed** pages.

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/185a2d2d583598bf8804ae93e6d7880f1d542fe9/src/PoisonWorms/Pagejs_id)

- **`id/content/page.js`** – This dynamic page renders **record-specific content sections** (like lyrics or gear) using `RECORDS_MAP`. It statically generates paths via `generateStaticParams()` and displays an embedded Spotify player along with the selected content.

  - **View Code:** [Click here](https://github.com/ChungmanPARK12/KandoMusic/tree/a0db4ea1ba6448fc96683c80d394c28a30a972cb/src/PoisonWorms/Page_content)
  
---

### Project Architecture Summary

- **Overview**:  
  Modular and data-driven architecture built with the **Next.js App Router**, supporting dynamic routing and scalable page management.

- **Navigation Flow**:  
  `data.js → items.map → Link.attribute → Click → page.js`

- **Component Hierarchy**:  
  `layout.js → children (page.js) → title/text/embed → index.js → embed.js → <iframe>`

- **Tech Stack**:  
  **Next.js** (App Router), **React Components**, **Spotify Embed**, `useState` / `useEffect` for client interactivity.


## Thank you
Thank you for visiting my github :)







