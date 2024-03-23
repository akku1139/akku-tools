const sites: Array<{title: String, url: String, icon: String}> = [
  {title: "Twitter", url: "https://x.com", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"},
]

const Links = () => {
  return <div style="display: flex">
    {sites.map((s) => <a href={s.url}>
      <img src={s.icon} alt="アイコン" />
      {s.title}
    </a>)}
  </div>;
};

export default Links;
