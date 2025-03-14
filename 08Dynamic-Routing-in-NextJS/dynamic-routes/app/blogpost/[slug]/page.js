export default function page({ params }) {
  // throw new Error("Error Aaagya Bhai code mein...");

  // fetch your blog post by its slug
  let languages = ["python", "javascript", "java", "cpp", "cs"];

  if (languages.includes(params.slug)) {
    return (
      <div>
        <h1>My Post:{params.slug}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Post Not Found</h1>
      </div>
    );
  }

  return <h1>My Post: {params.slug}</h1>;
}
