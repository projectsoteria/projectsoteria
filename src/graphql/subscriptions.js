/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
      id
      title
      text
      author
      likes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      id
      title
      text
      author
      likes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      id
      title
      text
      author
      likes
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      userID
      id
      title
      text
      image
      comments {
        items {
          postID
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      userID
      id
      title
      text
      image
      comments {
        items {
          postID
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      userID
      id
      title
      text
      image
      comments {
        items {
          postID
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      postID
      id
      author {
        id
        username
        firstname
        lastname
        birthday
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      postID
      id
      author {
        id
        username
        firstname
        lastname
        birthday
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      postID
      id
      author {
        id
        username
        firstname
        lastname
        birthday
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      firstname
      lastname
      birthday
      posts {
        items {
          userID
          id
          title
          text
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      firstname
      lastname
      birthday
      posts {
        items {
          userID
          id
          title
          text
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      firstname
      lastname
      birthday
      posts {
        items {
          userID
          id
          title
          text
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
