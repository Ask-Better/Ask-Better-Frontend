const fetchComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data;
};

export { fetchComments };
