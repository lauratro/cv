import { resumeData } from "./../../data/resume-data";
export const SocialMedia = () => {
  return (
    <div className="social-row">
      {resumeData.social.map((item) => {
        const Icon = item.icon;

        return (
          <div className="social-items mr-4" key={item.label}>
            <a href={item.href}>
              <div className="social-item">
                <Icon className="social-icon" />
                <p className="m-0 p-0">{item.label}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
