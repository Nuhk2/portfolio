const ExpContent = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl" style={{ color: "var(--text-primary)" }}>{expContent.title}</h1>
      <p style={{ color: "var(--text-secondary)" }}>{expContent.date}</p>
      <p style={{ color: "var(--text-tertiary)" }}>Responsibilities</p>
      <ul className="list-disc ms-5" style={{ color: "var(--text-secondary)" }}>
        {expContent.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;
