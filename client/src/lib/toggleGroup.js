import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function iconGroup() {
  const icons = {
    id: 0,
    name: { faHeart },
    id: 1,
    name: { fTrash },
  };
  const [active, setActive] = useState(icons[0]);
  return (
    <IconGroup>
      {icons.map((icon) => (
        <IconToggle
          key={icon}
          active={active === icon}
          onClick={() => setActive(icon)}
        >
          {icon}
        </IconToggle>
      ))}
    </IconGroup>
  );
}
