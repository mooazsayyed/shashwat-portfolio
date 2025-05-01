import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "python",
  "javascript",
  "terraform",
  "java",
  "react",
  "ansible",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "mongodb",
  "firebase",
  "nginx",
  "vercel",
  "mysql",
  "kubernetes",
  "linux",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "jenkins",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
