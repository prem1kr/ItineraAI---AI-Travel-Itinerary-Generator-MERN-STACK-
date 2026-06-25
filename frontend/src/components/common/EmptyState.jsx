const EmptyState = ({ title = "No Data Found", description = "Nothing available right now." }) => {
  return (
    <div className="text-center py-16">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default EmptyState;