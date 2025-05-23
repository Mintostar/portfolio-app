export interface Project {
  id: string;
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
  reflections: string;
  futurePlans: string;
  isDeveloping: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    description: "Next.js + shadcn/uiを用いたポートフォリオサイト",
    githubUrl: "https://github.com/Mintostar/portfolio-app",
    siteUrl: "https://portfolio-app-phi-snowy.vercel.app/",
    date: "2025/04/07",
    background: "自分のスキル・実績をまとめるために制作した。",
    techStack: [
      "Next.js",
      "VScode",
      "shadcn/ui",
      "Framer Motion",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "シンプルなUIデザイン",
      "react-simple-typewriterによるタイピングエフェクト",
      "モーダルでの動的な詳細表示",
      "アニメーションによるUX向上",
    ],
    learnings:
      "shadcn/uiやFramer Motionを初めて利用した。Tailwind CSSでレスポンシブデザインの実装に挑戦してみた。",
    highlights: "Framer Motionとshadcn/uiを組み合わせたアニメーション。",
    reflections:
      "Framer Motionの理解が浅く、実装に時間がかかった。詳細なページのデザインを考えずに実装を始めてしまったため、少し迷走してしまった。",
    futurePlans:
      "プロジェクトごとのイメージ画像を入れたい。CMSを導入して動的にコンテンツを管理したい。",
    isDeveloping: true,
  },
  {
    id: "2",
    title: "ECサイト",
    description: "Next.jsとFirebase、Stripeを活用したECサイト",
    githubUrl: "https://github.com/itc-s23014/EC_SITE",
    siteUrl: "https://ec-site-three.vercel.app/",
    date: "2025/02/26",
    background: "進級制作課題として、二人で制作した。",
    techStack: ["Next.js", "VScode", "Firebase", "Tailwind CSS", "Stripe"],
    features: [
      "Firebase Authenticationによるユーザー認証",
      "Firestoreを用いた商品データの管理",
      "Tailwindによる柔軟なUIスタイリング",
      "Stripeを用いた決済機能の実装",
      "カート機能の実装",
      "お気に入り機能の実装",
      "検索機能の実装",
    ],
    learnings:
      "FirebaseのFirestoreを用いたデータ管理や、Stripeを用いた決済機能の実装に挑戦した。また、Tailwind CSSを用いたUIデザインの実装にも取り組んだ。",
    highlights:
      "カート内やお気に入りの商品の個数がリアルタイムでヘッダー部分のアイコンに表示されるようにした。また、自分たちでルールを作りGitHubを運用した。",
    reflections:
      "データベースの設計が甘かった。途中からすべて見直す羽目になり、時間がかかった。デザインも大まかにしか決めていなかったため、途中からノーマルなCSSからTailwind CSSに切り替えたりと、時間を食ってしまった。",
    futurePlans:
      "計画段階で実装したかった機能である、Youtube Shortsのような動画で商品を紹介する機能や、カートの商品の一括購入機能(商品をFirestoreに保存していてできなかった)を実装したい。",
    isDeveloping: false,
  },
  {
    id: "3",
    title: "出席管理システム",
    description: "上級生と共同制作した出席管理システム",
    githubUrl: "https://github.com/itc-s22001/PBL_B",
    siteUrl: "",
    date: "2025/08/13",
    background:
      "2年生のとき、3年生と共同制作。出席を管理するためのシステムを作った。",
    techStack: ["Next.js", "VScode", "Firebase", "Figma"],
    features: [
      "シンプルなUIデザイン",
      "Firebaseによるユーザー認証機能",
      "教師用管理画面を実装",
    ],
    learnings:
      "この課題を進める過程で初めて、Next.jsに触れた。Firebaseの実装は先輩方が担当されたため、自分では触れる機会がなかった。設計段階でFigmaを用いてサイトのデザインを描いた。",
    highlights: "Figmaで描いたデザインを、そのままの形で実装できた。",
    reflections:
      "フロントエンドの実装を担当したが、デザインをそのまま実装することができたため、特に問題はなかった。",
    futurePlans: "当初計画していた機能は実装できたので、開発は終了した。",
    isDeveloping: false,
  },
  {
    id: "4",
    title: "ポケモンクイズアプリ",
    description: "PokeAPIを利用した、姿当てAndroidアプリ",
    githubUrl: "https://github.com/itc-s23023/Android2Exam",
    siteUrl: "",
    date: "2024/12/01",
    background: "Androidアプリ開発の課題として制作した。",
    techStack: ["Kotlin", "Android Studio"],
    features: ["取得したデータの保持", "最新のデータの取得"],
    learnings: "この課題で初めてKotlinを触り、Android開発をした。",
    highlights: "モックを活用することで、安定したテスト環境を構築できた。",
    reflections:
      "課題を完了することができなかった。先生が、手順を書いてくれていたが、それに気が付かずに実装を進めてしまったため、時間がかかってしまった。",
    futurePlans:
      "姿を表示させたいポケモンの名前と、4択の選択肢までは実装できていたので、あとは、名前をもとに、画像を取得して表示する機能を実装すれば完成。",
    isDeveloping: true,
  },
  {
    id: "5",
    title: "Mod翻訳ツール",
    description: "MinecraftのModの言語ファイルを翻訳してくれるツール。",
    githubUrl: "https://github.com/Mintostar/ModTranslation",
    siteUrl: "",
    date: "2024/11/19",
    background: "Minecraftの日本語未翻訳のModを快適に遊ぶために開発した。",
    techStack: ["Python", "VScode", "googletrans API"],
    features: [
      "Jsonファイルの英語から日本語への翻訳",
      "最新のデータの取得",
      "翻訳のログを残せる",
      "翻訳の進捗状況を表示",
    ],
    learnings:
      "初めて趣味で書いたプロジェクト。コードが肥大化し管理が難しくなったため、以降のプロジェクトでは責務ごとにファイルを分割する方針を取り入れた。",
    highlights:
      "Jsonファイルの読み書きや翻訳処理をスムーズに行えるようになった。進捗バーが実装できた。",
    reflections:
      "翻訳の精度、速度ともに遅く、巨大なファイル相手だと時間がかかったり、APIの制限に引っかかることある。",
    futurePlans:
      "GUIの実装。また、今は一行ずつ翻訳しているが、複数行をまとめて翻訳できるようにしたい。ユーザー辞書を実装して、特定の単語を優先的に翻訳できるようにしたい。",
    isDeveloping: true,
  },
  {
    id: "6",
    title: "音楽プレイヤー",
    description: "Electronを使って作った。デスクトップアプリケーション。",
    githubUrl: "https://github.com/Mintostar/music_player",
    siteUrl: "",
    date: "2025/03/24",
    background: "シンプルで広告がない音楽プレイヤーが欲しくて開発を始めた。",
    techStack: ["Node.js", "HTML", "CSS", "Electron"],
    features: ["MP3ファイルの再生", "プログレスバーの表示"],
    learnings: "まだ開発中ですが、Electronの開発環境の構築方法を理解しました。",
    highlights: "現在開発中のため、今後追加予定。",
    reflections: "まだ開発初期段階なので、特に反省点はありません。",
    futurePlans:
      "最低限の機能で動く軽量な音楽プレイヤーを目指しているため、機能を後からインストールできるような機能を実装したい。",
    isDeveloping: true,
  },
];
