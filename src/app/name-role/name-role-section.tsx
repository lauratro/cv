export const NameRoleSection = ({ name, role }: { name: string; role: string }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p className="hero-role mt-2">{role}</p>{" "}
    </div>
  );
};
