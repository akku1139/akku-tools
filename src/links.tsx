const sites: Array<{title: String, url: String, icon: String}> = [
  {title: "Twitter", url: "https://x.com", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"},
  {title: "GitHub", url: "https://github.com", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"},
]

const Links = () => {
  return <div style="display: flex; flex-wrap: wrap;">
    {sites.map((s) => <a href={s.url} style="height: 100px; width: 23%; border: 2px solid green;">
  <img src={s.icon} alt="アイコン" height="70px" width="70px" style="margin: auto 20px;" />
  {s.title}
</a>)}
  </div>;
};

export default Links;
