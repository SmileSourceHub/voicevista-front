# Your voicevista-front

This is the front-end of our project built with Next.js.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## About

VoiceVista-Frontend is a project that aims to recreate the frontend infrastructure of a popular communication platform like Discord. It provides real-time chat, voice, and video communication features, user management, and more.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [bun](https://bun.sh/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SmileSourceHub/voicevista-front.git
    ```

2. Change into the project directory:

    ```bash
    cd voicevista-front
    ```

3. Install dependencies:

    ```bash
    bun install
    ```

## Usage

...coming

## Folder Structure

```plaintext
├── app/               # Next.js pages
├── components/        # React components (This is where your Atomic Design components are organized)
│   ├── components/    # Atoms components
│   ├── molecules/     # Molecules components
│   ├── organisms      # Molecules components
│   └── templates/     # Templates components
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies and scripts
└── tailwind.config.js # Tailwind configuration