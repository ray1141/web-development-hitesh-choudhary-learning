/*const fetchUserData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "anshika", url: "https://google.com" });
    }, 3000);
  });
};

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");
    console.log(userData);
  } catch (error) {
    console.log("Error fetching data...");
  }
}

getUserData();
*/

const fetchPostData = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched.");
    }, 2000);
  });
};

const fetchCommentData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000);
  });
};

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();

    //better way -- promise all
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.error("Error fetching blog data.");
  }
}

getBlogData();
