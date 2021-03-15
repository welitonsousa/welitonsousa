const ItemFooter = ({ Icon, link, title }) => (
  <div>
    <a href={link} target="blank" className="text-light">
      <div>
        <Icon />
        <h6 className="light-gray">{title}</h6>
      </div>
    </a>
  </div>
);

export { ItemFooter };
