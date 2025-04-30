export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  siteUrl: string;
  date: string;
  background: string;
  techStack: string[];
  features: string[];
  learnings: string;
  highlights: string;
}

export const projects: Project[] = [
  {
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いた個人ポートフォリオサイト。",
    githubUrl: "https://github.com/yourname/portfolio",
    siteUrl: "https://yourportfolio.com",
    date: "2025/04/01",
    background:
      "求職活動に向けて自分のスキル・実績をまとめるために設計・実装しました。SEO・アニメーション・アクセシビリティなど、現場で求められる要素を意識しています。",
    techStack: [
      "Next.js",
      "shadcn/ui",
      "Framer Motion",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "レスポンシブ対応のトップページ・詳細ページ",
      "モーダルでの動的な詳細表示",
      "アニメーションによるUX強化",
      "GitHub・公開リンクの導線設計",
    ],
    learnings:
      "TypeScriptの型安全性を保ちつつ、ユーザー体験を意識した設計の重要性を学びました。",
    highlights: "Framer Motionと組み合わせた自然なトランジション設計。",
  },
  {
    title: "ToDoアプリ",
    description: "ReactとFirebaseを活用したリアルタイムToDoアプリ。",
    githubUrl: "https://github.com/yourname/todo-app",
    siteUrl: "https://yourtodoapp.com",
    date: "2025/03/20",
    background:
      "リアルタイムデータの操作と状態管理を中心に、基本機能の設計・UIの改善を重視して構築しました。",
    techStack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    features: [
      "リアルタイムでのタスク追加・削除・更新",
      "Firebase Authenticationによるログイン管理",
      "Tailwindによる柔軟なUIスタイリング",
    ],
    learnings:
      "クライアント状態とサーバー状態の整合性を保つ工夫の重要性を体感しました。",
    highlights: "Firebaseとのデータ同期とパフォーマンス最適化。",
  },
];
