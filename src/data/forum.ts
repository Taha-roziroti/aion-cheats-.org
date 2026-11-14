export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides', tone: 'blue', icon: 'navBlog' },
  { name: 'Updates', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((p) => p.slug === slug);
}

export const forumPosts: ForumPost[] = [
  {
    slug: 'welcome-placeholder',
    category: 'General',
    categoryTone: 'purple',
    title: 'Forum thread placeholder',
    excerpt: 'Replace this thread with real community topics when you launch.',
    author: 'Moderator',
    age: '1d ago',
    commentsCount: 1,
    upvotes: 0,
    flair: 'Placeholder',
    body: [
      'This forum layout is functional: votes, replies, and categories render without sample game-specific posts.',
      'Add threads in `src/data/forum.ts` or connect a backend when you are ready.',
    ],
    comments: [
      {
        author: 'Member',
        age: '1d ago',
        score: 0,
        body: 'Reply placeholder — swap with real discussion content.',
      },
    ],
  },
];