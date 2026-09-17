type AsideProps = {
  initials: string;
  label: string;
  navigationLabel: string;
};

export const Aside = ({ initials, label, navigationLabel }: AsideProps) => {
  return (
    <aside className="side-rail" aria-label={navigationLabel}>
      <span className="rail-mark">{initials}</span>
      <span className="rail-line" />
      <span className="rail-label">{label}</span>
    </aside>
  );
};
