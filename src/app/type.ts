// export interface  Course {
//     id: number;
//     title: string;
//     author: string;
//     description: string;
//     topic: string;
//     url: string;
// }

// export interface Query {
//     allCourses: Array<Course>;
// }

export interface Authors {
    id: number;
    firstName: string;
    lastName: string;
  }

  export interface Posts  {
    id: number;
    title: string;
    votes: number;
  }

  export interface PostQuery  {
    posts: Posts[];
  }

  export interface Upvote {
    upvotePost: Posts;
  }
