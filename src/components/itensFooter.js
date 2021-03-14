

const ItemFooter = ({Icon, link, title}) => {
  return (
    <div>
      <a href={link} target="blank" className="text-light">
        <div>
          <Icon/>
          <h6  className="text-light">{title}</h6>
        </div>
      </a>
    </div>
  );
}

export {ItemFooter};