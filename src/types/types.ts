export type TCourse = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  price: number;
  duration: string;
  level: string;
  category: string;
  rating: number;
  ratingCount: number;
};

export type TInstructor = {
  id: string;
  instructorName: string;
  designation: string;
  image: string;
};

export type TBlog = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  image: string;
};


type TAuthor = {
  username: string;
  name: string;
  avatar: string;
};

export type TReply = {
  replyId: string;
  author: TAuthor;
  timestamp: string;
  content: string;
};

export type TComment = {
  commentId: string;
  postId: string;
  author: TAuthor;
  timestamp: string;
  content: string;
  likes: number;
  replies: TReply[];
};


