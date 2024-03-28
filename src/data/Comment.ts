const commentData = [
  {
    commentId: "1",
    postId: "11",
    author: {
      username: "user123",
      name: "Md Foysal Ahammed",
      avatar: "https://i.ibb.co/5kD7rvy/img-3.png",
    },
    timestamp: "2024-03-12T14:30:00",
    content: "Great post! I learned a lot from it.",
    likes: 8,
    replies: [
      {
        replyId: "1-1",
        author: {
          username: "user456",
          name: "Jane Smith",
          avatar: "https://i.ibb.co/98R51J4/Slider-2.jpg",
        },
        timestamp: "2024-03-12T14:45:00",
        content: "I'm glad you found it helpful, Habib!",
      },
      {
        replyId: "1-2",
        author: {
          username: "user456",
          name: "David Clark",
          avatar: "https://i.ibb.co/j4Qyby2/Service-2.jpg",
        },
        timestamp: "2024-03-12T14:45:00",
        content: "Thanks for sharing your opinion, Habib!",
      },
    ],
  },
  {
    commentId: "2",
    postId: "12",
    author: {
      username: "user789",
      name: "David Johnson",
      avatar: "https://i.ibb.co/98R51J4/Slider-2.jpg",
    },
    timestamp: "2024-03-12T15:00:00",
    content: "Interesting insights! I'd love to see more on this topic.",
    likes: 12,
    replies: [
      {
        replyId: "1-1",
        author: {
          username: "user456",
          name: "Md Foysal Ahammed",
          avatar: "https://i.ibb.co/5kD7rvy/img-3.png",
        },
        timestamp: "2024-03-12T14:45:00",
        content: "I'm glad you found it helpful, David!",
      },
    ],
  },
  {
    commentId: "3",
    postId: "13",
    author: {
      username: "user456",
      name: "Jane Smith",
      avatar: "https://i.ibb.co/qrSbv9X/Gallary-3.png",
    },
    timestamp: "2024-03-12T15:30:00",
    content: "The examples provided really clarified things for me. Thanks!",
    likes: 6,
    replies: [],
  },
  {
    commentId: "4",
    postId: "14",
    author: {
      username: "user789",
      name: "Ravid Johnson",
      avatar: "https://i.ibb.co/Qvc5GPR/Gallary-1.png",
    },
    timestamp: "2024-03-12T16:00:00",
    content: "I have a question about AI discussed in the post.",
    likes: 4,
    replies: [
      {
        replyId: "4-1",
        author: {
          username: "user123",
          name: "John Doe",
          avatar: "https://i.ibb.co/qrSbv9X/Gallary-3.png",
        },
        timestamp: "2024-03-12T16:15:00",
        content: "Sure, Ravid! What would you like to know?",
      },
    ],
  },
  {
    commentId: "5",
    postId: "15",
    author: {
      username: "user789",
      name: "Alex Johnson",
      avatar: "https://i.ibb.co/YXh85vb/Gallary-2.png",
    },
    timestamp: "2024-03-12T17:00:00",
    content: "Thanks for the clarification, John!",
    likes: 3,
    replies: [],
  },
  {
    commentId: "6",
    postId: "16",
    author: {
      username: "user123",
      name: "John Kemron",
      avatar: "https://i.ibb.co/NyVY6cZ/Gallary-5.png",
    },
    timestamp: "2024-03-12T17:30:00",
    content: "No problem, Ravid! Happy to help.",
    likes: 5,
    replies: [],
  },
];

export const getAllComment = () => {
  return commentData;
};
