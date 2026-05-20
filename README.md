# Britney's Blog - Developer Documentation

Welcome to the documentation for **Britney's Blog**. This repository contains a purely static, blazing-fast Hugo blog configured securely without any JavaScript build tools or `npm` dependencies. 

## 🏗️ Architecture Overview

- **Engine:** Hugo (Go binary v0.146.0)
- **Theme:** [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (Installed securely via Git Submodule)
- **Deployment:** GitHub Pages (Automated via GitHub Actions)
- **Styling:** Custom CSS (`assets/css/extended/custom.css`) mapping to an earthy color palette with a dynamic Card Layout.

---

## 📝 How to Create a New Post

Writing a new article is as simple as creating a new Markdown file and pushing it to GitHub.

### Step 1: Create the Markdown File
Create a new file ending in `.md` inside the `content/posts/` folder. You can name it whatever you like, using dashes for spaces (e.g., `my-new-research.md`).

Alternatively, you can use the Hugo binary to generate it automatically:
```bash
../hugo new content content/posts/my-new-research.md
```

### Step 2: Add the Frontmatter
At the very top of your `.md` file, include the following YAML block. This is called "Frontmatter" and tells the blog how to format and categorize your post:

```yaml
---
title: "Your Catchy Title Here"
date: 2026-05-25T10:00:00-03:00
draft: false
tags: ["agents", "research"]
categories: ["Tech"]
cover:
  image: "/images/your-image-name.png"
  alt: "Description of the image"
  caption: "Optional caption"
---

Start writing your markdown content here...
```

*Note: Make sure `draft:` is set to `false` when you want the post to be visible!*

### Step 3: Add a Featured Image
Save your featured image inside the `static/images/` directory. Then, reference it exactly as shown in the frontmatter above (`/images/your-image-name.png`).

---

## 💻 How to Preview Locally

It's highly recommended to preview your changes on your own computer before showing them to the world.

1. Open your terminal and navigate to the project directory:
   ```bash
   cd /Users/evapaula/blog/britneyscripts.github.io
   ```
2. Run the Hugo development server:
   ```bash
   ../hugo server -D
   ```
   *(The `-D` flag tells Hugo to also show posts where `draft: true` so you can preview unfinished work).*
3. Open your browser and go to: **[http://localhost:1313](http://localhost:1313)**

---

## 🚀 How to Publish to the Live Site

Because this repository is connected to GitHub Actions, your live site automatically updates whenever new code is pushed to the `main` branch.

Once you are done writing and previewing your post, run the following three commands in your terminal:

```bash
# 1. Stage your changes
git add .

# 2. Commit your changes with a descriptive message
git commit -m "Add post about agent-driven discovery"

# 3. Push to GitHub
git push
```

That's it! GitHub will detect the push, run the Hugo builder in the background, and publish your new post to `https://britneyscripts.github.io/` within about 30 seconds.
