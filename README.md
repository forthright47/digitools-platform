# **DigiTools Platform**

React + Vite Application for Premium Subscription Management

Live: [https://ai-model-hub-frontend.netlify.app/ ](https://digitools-platform-frontend.netlify.app/)

---

## **1. Overview**
The **DigiTools Platform** is a web application built with **React JS, Vite, Tailwind CSS and daisyUI** that allows users to browse, select, and subscribe to various premium tools. The application provides a unified subscription model for accessing multiple premium services under a single plan.

### **Key Features**
- **Tools Catalog**: Displays a list of premium tools with descriptions, pricing, and status indicators.
- **Shopping Cart**: Users can add tools to a cart and view their selections.
- **Responsive UI**: Built with Tailwind CSS and DaisyUI for a modern, responsive design.
- **Real-time Feedback**: Uses `react-toastify` for success/error notifications.
- **Dynamic Data Fetching**: Models are loaded asynchronously from `tools.json`.

---

## **2. Architecture Overview**
### **Tech Stack**
| Category       | Technology                          | Purpose                                                                 |
|----------------|-------------------------------------|-------------------------------------------------------------------------|
| **Frontend**   | React (v19.2.4)                     | Core UI and component-based architecture.                                |
| **Build Tool** | Vite (v8.0.1)                       | Fast development server and bundler.                                    |
| **Styling**    | Tailwind CSS (v4.2.2) + DaisyUI     | Utility-first CSS framework for rapid UI development.                   |
| **State Management** | React Hook (`useState`) | Local state management for cart and products switching.                     |
| **Notifications** | `react-toastify` (v11.0.5)         | User feedback via toast notifications.                                    |
| **Icons**      | Lucide React and React Icons               | Customizable SVG icons for UI elements.                                 |

---

## **3. Project Structure**
```
├── public
│   ├── favicon.svg
│   ├── icons.svg
│   └── tools.json
├── src
│   ├── assets
│   │   ├── products
│   │   │   ├── camera.png
│   │   │   ├── design-tool.png
│   │   │   ├── operation.png
│   │   │   ├── portfolio.png
│   │   │   ├── shopping-cart.png
│   │   │   ├── social-media.png
│   │   │   └── writing_2327400 1.png
│   │   ├── Play.png
│   │   ├── banner.png
│   │   ├── hero.png
│   │   ├── package.png
│   │   ├── react.svg
│   │   ├── rocket.png
│   │   ├── user.png
│   │   └── vite.svg
│   ├── components
│   │   ├── Banner
│   │   │   └── Banner.jsx
│   │   ├── Features
│   │   │   └── Features.jsx
│   │   ├── Footer
│   │   │   └── Footer.jsx
│   │   ├── Navbar
│   │   │   └── Navbar.jsx
│   │   ├── Pricing
│   │   │   └── Pricing.jsx
│   │   ├── Stats
│   │   │   └── Stats.jsx
│   │   ├── Steps
│   │   │   └── Steps.jsx
│   │   ├── Tools
│   │   │   └── Tools.jsx
│   │   └── ui
│   │       ├── Cart
│   │       │   └── Cart.jsx
│   │       └── ToolsCard
│   │           └── ToolsCard.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

## **4. Setup & Installation**
### **Prerequisites**
- **Node.js** (v18+ recommended)
- **npm** or **yarn** (v7+)

### **Installation Steps**
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd digitools-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   - The app will be available at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   - Outputs optimized files to the `dist/` directory.


---

## **5. Key Components**
### **5.1. `App.jsx` (Main Component)**
- **Purpose**: Orchestrates the application state and renders child components.
- **Key Logic**:
  - Manages active tab (`products` or `cart`) via `useState`.
  - Handles cart state (`carts` array) for adding/removing tools.

```jsx
const getTools = async () => {
  const res = await fetch("/tools.json");
  return res.json();
}
const toolsPromise = getTools(); // Async fetch of tools.json
```

---

### **5.2. `Tools.jsx` (Tools Listing)**
- **Purpose**: Displays a grid of premium tools using `ToolsCard`.
- **Key Features**:
  - Uses `use()` hook to await `toolsPromise`.
  - Renders models in a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

```jsx
const tools = use(toolsPromise);

return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
    {tools.map((tool, index) => (
    <ToolsCard key={index} tool={tool} tagStyles={tagStyles} periodLabel={periodLabel} onAddToCart={handleAddToCart} isAdded={cartItems.some(item => item.id === tool.id)} />
    ))}
    </div>
);
```

---

### **5.3. `ToolsCard.jsx` (Individual Tools UI)**
- **Purpose**: Represents a single tool with:
  - Image, title, description, price, and status badge.
  - "Added to Cart" button with toast feedback.
- **Key Logic**:
  - Tracks subscription state (`alreadyAdded`) to prevent duplicates.
  - Uses `react-toastify` for success/error messages.

```jsx
const handleAddToCart = (tool) => {
    const alreadyAdded = cartItems.find(item => item.id === tool.id);
    if (alreadyAdded) {
        toast.warn('Already added to Cart!');
        return;
    }
    setCartItems([...cartItems, tool]);
    toast.success('Added to Cart!');
};
```

---

### **5.4. `Cart.jsx` (Shopping Cart)**
- **Purpose**: Displays cart contents and allows removal of items.
- **Key Features**:
  - Calculates total price via `cartItems.reduce()`.
  - Renders empty state if cart is empty.
  - Provides "Remove" buttons for each item.

```jsx
const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success('Removed from Cart!');
};

const handleClearCart = () => {
    setCartItems([]);
    toast.success('Purchased Successfully!');
};
```

---

### **5.5. `Navbar.jsx` (Navigation)**
- **Purpose**: Provides global navigation with:
  - Logo, menu items (`Products`, `Features`, `Pricing`, `Testimonials`, `FAQ`), Cart icon, Login button and a CTA button.
- **Key Features**:
  - Responsive design (hidden on mobile, full menu on desktop).

```jsx
<div className='navbar sticky top-0 z-100 bg-white shadow-sm items-center lg:px-10 py-3'>
    <div className='navbar-start'>
        <h2 className='lg:text-4xl text-3xl font-bold bg-linear-to-br from-violet-800 to-violet-500 bg-clip-text text-transparent py-2'>DigiTools</h2>
    </div>
    <div className='navbar-center hidden lg:flex'>
        <ul className='flex items-center gap-7 text-black/80'>
            <li>
                <a href="">Products</a>
            </li>
            <li>
                <a href="">Features</a>
            </li>
            <li>
                <a href="">Pricing</a>
            </li>
            <li>
                <a href="">Testimonials</a>
            </li>
            <li>
                <a href="">FAQ</a>
            </li>
        </ul>
    </div>
    <div className='navbar-end flex items-center gap-5'>
        <ShoppingCart className='hidden lg:flex'/>
        <p className='font-medium hidden lg:flex'>Login</p>
        <button className='bg-linear-to-r from-violet-800 to-violet-500 text-white lg:font-semibold font-medium lg:py-3 lg:px-5 p-2.5 rounded-full lg:text-lg text-sm hover:opacity-90 transition-opacity duration-200'>Get Started</button>
    </div>
</div>
```

---

## **6. Configuration**
### **6.1. `package.json`**
- **Scripts**:
  | Script | Command | Description                          |
  |--------|---------|--------------------------------------|
  | `dev`  | `vite`  | Starts the development server.       |
  | `build`| `vite build` | Generates production-ready files.   |
  | `lint` | `eslint .` | Runs ESLint for code quality checks. |
  | `preview` | `vite preview` | Serves the production build locally. |

- **Dependencies**:
  - `@tailwindcss/vite`, `lucide-react`, `react-toastify`: UI and utility libraries.
  - `react`, `react-dom`: Core React dependencies.

- **Dev Dependencies**:
  - `@vitejs/plugin-react`: React plugin for Vite.
  - `eslint`, `daisyui`: Linting and styling tools.

---

### **6.2. `vite.config.js`**
- **Purpose**: Configures Vite plugins.
- **Key Settings**:
  - Enables React support via `@vitejs/plugin-react`.
  - Integrates Tailwind CSS via `@tailwindcss/vite`.

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

### **6.3. `eslint.config.js`**
- **Purpose**: Configures ESLint for React projects.
- **Key Rules**:
  - Enforces React hooks (`react-hooks`) and refresh rules.
  - Extends `@eslint/js` for base JavaScript rules.
  - Ignores `dist/` directory.

```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
```

---

## **7. Data Flow**
1. **Model Data**:
   - Loaded asynchronously from `public/tools.json` via `fetch()`.
   - Stored in `toolsPromise` and rendered via `use()` hook.

2. **Cart State**:
   - Managed locally in `Tools.jsx` via `useState`.
   - Passed down to `ToolsCard` and `Cart` components.

3. **User Feedback**:
   - Success/error messages handled by `react-toastify`.

---

## **8. Styling**
### **8.1. `index.css`**
- **Purpose**: Global styles and Tailwind/DaisyUI imports.
- **Key Rules**:
  - Sets default font (`Manrope` from Google Fonts).
  - Imports Tailwind and DaisyUI plugins.

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@import "tailwindcss";
@plugin "daisyui";
```

### **8.2. Tailwind/DaisyUI Classes**
- **Example Components**:
  - **Navbar**: Leverages `bg-linear-to-r` for gradient text.
  - **Cart**: Employs `bg-gray-100`, `rounded-2xl`, `p-6` for interactive states.
  - **ToolsCard**: Uses `shadow-sm`, `rounded-full`, and `border-gray-100`.

---

## **9. Development Guidelines**
### **9.1. Coding Standards**
- **Component Structure**:
  - Each component should be self-contained (props, state, logic).
  - Use `PascalCase` for component filenames (e.g., `ToolsCard.jsx`).
- **State Management**:
  - Prefer `useState` for local component state.
  - Avoid prop drilling; lift state up or use context if needed.
- **Async Operations**:
  - Use `use()` for suspended data fetching (e.g., `toolsPromise`).
  - Handle errors gracefully (e.g., toast notifications).



### **9.3. Linting**
- Run `npm run lint` to enforce ESLint rules.
- Fix errors before committing (Git pre-commit hooks recommended).

---

## **10. Deployment**
### **10.1. Production Build**
1. Run `npm run build` to generate optimized files in `dist/`.
2. Deploy the `dist/` directory to:
   - **Static Hosting**: Netlify, Vercel, GitHub Pages.

---

## **11. API Documentation**
### **11.1. Mock API (`tools.json`)**
- **Endpoint**: `/tools.json` (served from `public/`).
- **Response Schema**:
  ```json
  [
    {
        "id": 1,
        "name": "AI Writing Pro",
        "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
        "price": 29,
        "period": "monthly",
        "tag": "Best Seller",
        "tagType": "best-seller",
        "features": [
            "Unlimited AI generations",
            "50+ writing templates",
            "Grammar checker"
        ],
        "icon": "https://i.ibb.co.com/fVy9Phw5/writing-2327400-1.png"
    },
  ]
  ```


### **11.2. Future API Integration**
- Replace `tools.json` with a real API (e.g., REST or GraphQL).
- Example endpoint:
  ```javascript
  const getTools = async () => {
    const res = await fetch(process.env.VITE_API_URL);
    if (!res.ok) throw new Error("Failed to fetch models");
    return res.json();
  };
  ```
---


## **12. Troubleshooting**
| Issue                          | Solution                                                                 |
|--------------------------------|--------------------------------------------------------------------------|
| **404 on `/tools.json`**      | Ensure `tools.json` exists in `public/` and is served by the server.    |
| **Vite dev server not starting** | Check `node_modules` integrity; run `npm install --force`.               |
| **Cart state not updating**    | Verify `setCartItems` is called correctly in child components.               |
| **Tailwind classes not applying** | Ensure `@tailwindcss/vite` is in `vite.config.js`.                      |
| **ESLint errors**              | Run `npm run lint` and fix reported issues.                              |

---

## **13. Roadmap**
| Feature               | Priority | Description                                                                 |
|-----------------------|----------|-----------------------------------------------------------------------------|
| **User Authentication** | High     | Add login/signup via Firebase/Auth0.                                        |
| **Payment Integration** | High     | Stripe/PayPal for subscription payments.                                     |
| **Admin Dashboard**   | Medium   | CRUD for managing AI models (backend API).                                 |
| **Dark Mode**         | Low      | Toggle theme via `data-theme` in `index.html`.                             |
| **Model Filtering**   | Low      | Search/filter models by price, status, or category.                        |

---

## **14. Contributing**
1. **Fork the Repository**:
   ```bash
   git clone https://github.com/your-username/digitools-platform.git
   ```
2. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "your contributions for this project"
   ```
4. **Push to Fork**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a Pull Request** on the original repository.

---

## **15. License**
This project is licensed under the **MIT License**. See `LICENSE` for details.