import type { IProject } from '~/types';

export const GENERAL_INFO = {};

export const SOCIAL_LINKS = [];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Vue.js', icon: 'vuedotjs' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'Nuxt.js', icon: 'nuxtdotjs' },
        { name: 'Astro', icon: 'astro' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'shadcn', icon: 'shadcnui' },
    ],
    backend: [
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Deno', icon: 'deno' },
        { name: 'Express', icon: 'express' },
        { name: 'NestJS', icon: 'nestjs' },
        { name: 'Flask', icon: 'flask' },
        { name: 'Django', icon: 'django' },
        { name: 'FastAPI', icon: 'fastapi' },
        { name: 'REST', icon: 'swagger' },
        { name: 'WebSocket', icon: 'socketdotio' },
        // { name: 'vLLM', icon: 'vllm' },
        { name: 'Ollama', icon: 'ollama' },
        { name: 'PyTorch', icon: 'pytorch' },
        { name: 'TensorFlow', icon: 'tensorflow' },
        { name: 'Python', icon: 'python' },
        { name: 'Kotlin', icon: 'kotlin' },
        { name: 'Java', icon: 'java' },
        { name: 'C', icon: 'c' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'Rust', icon: 'rust' },
        { name: 'Go', icon: 'go' },
    ],
    database: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Elasticsearch', icon: 'elasticsearch' },
        { name: 'SQLite', icon: 'sqlite' },
    ],
    servers: [
        { name: 'Nginx', icon: 'nginx' },
    ],
    networking: [
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'WireGuard', icon: 'wireguard' },
    ],
    'cloud infra': [
        { name: 'AWS', icon: 'amazonwebservices' },
        { name: 'GCP', icon: 'googlecloud' },
        // { name: 'Heroku', icon: 'heroku' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Railway', icon: 'railway' },
        { name: 'Cloudflare', icon: 'cloudflare' },
        // { name: 'Zeabur', icon: 'zeabur' },
    ],
    'ci/cd': [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'GitLab', icon: 'gitlab' },
        { name: 'GitHub Actions', icon: 'githubactions' },
    ],
    // security: [],
    container: [
        { name: 'Docker', icon: 'docker' },
        // { name: 'Docker Compose', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
    ],
    cdn: [
        // { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'Cloudflare R2', icon: 'cloudflare' },
    ],
    monitoring: [
        { name: 'Grafana', icon: 'grafana' },
        { name: 'Prometheus', icon: 'prometheus' },
    ],
    // backups: [],
}



export const PROJECTS: IProject[] = [
    {
        title: "Wynnpool",
        slug: "wynnpool",
        year: 2024,
        description:
            "A feature-rich web utility for the MMORPG Wynncraft, providing real-time global statistics, integrations, and guild management tools. Originally built for personal use, it evolved into a comprehensive community-driven platform with a growing user base.",
        role: "Main Full-stack Developer",
        techStack: [
            "Rust",
            "Next.js",
            "React",
            "Tailwind CSS",
            "NestJS",
            "MongoDB",
            "TypeScript",
            "shadcn UI",
        ],
        thumbnail: 'https://raw.githubusercontent.com/AiverAiva/Wynnpool/refs/heads/main/apps/web/public/images/og-image.png',
        // longThumbnail: 'https://raw.githubusercontent.com/AiverAiva/Wynnpool/refs/heads/main/apps/web/public/images/og-image.png',
        images: [
            "/img/wynnpool/1.png",
            "/img/wynnpool/2.png",
            "/img/wynnpool/3.png",
            "/img/wynnpool/4.png",
            "/img/wynnpool/5.png",
            "/img/wynnpool/6.png",
            "/img/wynnpool/7.png",
            "/img/wynnpool/8.png",
            "/img/wynnpool/9.png",
            "/img/wynnpool/10.png",
        ],
        liveUrl: "https://wynnpool.com",
        repoUrl: "https://github.com/AiverAiva/Wynnpool"
    },
    {
        "title": "Earthquake Visualization",
        "year": 2025,
        "description": "A web app that visualizes real-time earthquake data in Taiwan. It uses Next.js, React, and PostgreSQL/PostGIS to display earthquake epicenters on an interactive map. The data is sourced from the Central Weather Administration's open data API.",
        "role": "Main Full-stack Developer",
        "techStack": ["Next.js", "PostGIS", "CWA Open Data API", "React", "Tailwind CSS", "PostgreSQL"],
        "thumbnail": "http://earthquake.gugugaga.net/thumbnail.png",
        "images": [
            "/img/earthquake-visualization/1.png",
            "/img/earthquake-visualization/2.png",
            "/img/earthquake-visualization/3.png"
        ],
        "slug": "earthquake-visualization",
        "liveUrl": "https://earthquake.gugugaga.net/",
        "repoUrl": "https://github.com/AiverAiva/earthquake.gugugaga.net",
        "sourceCode": "https://github.com/AiverAiva/earthquake.gugugaga.net"
    },
    {
        "title": "zhlinter",
        "year": 2025,
        "description": "A Chinese text linting and normalization tool that automatically fixes spacing between Chinese and English, punctuation, fullwidth/halfwidth characters, and formatting rules. It helps users quickly clean, standardize, and optimize written text for professional-quality typography.",
        "role": "Main Full-stack Developer",
        "techStack": ["Next.js", "React", "Tailwind CSS", "ZHLinter Core", "TypeScript"],
        "thumbnail": "https://zhlinter.gugugaga.net/thumbnail.png",
        "images": [
            "https://zhlinter.gugugaga.net/thumbnail.png"
        ],
        "slug": "zhlinter",
        "liveUrl": "https://zhlinter.gugugaga.net/",
        "repoUrl": "https://github.com/AiverAiva/zhlinter.gugugaga.net",
        "sourceCode": "https://github.com/AiverAiva/zhlinter.gugugaga.net"
    }
];

export const MY_EXPERIENCE = [
    {
        title: '',
        company: '',
        duration: '',
    },
];