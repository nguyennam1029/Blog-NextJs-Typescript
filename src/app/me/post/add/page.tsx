import AddNewPost from "../_components/form";

export default function page() {
  return (
    <div className="max-w-5xl mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-medium mb-6">Add new Post</h1>
      <AddNewPost></AddNewPost>
    </div>
  );
}
