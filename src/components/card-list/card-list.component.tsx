import "./card-list.styles.css";
import { Card } from "../card/card.component";
import { Monster } from "../../interfaces/monster.interface";

export const CardList = (props: { monsters: Monster[] }) => (
  <div className="card-list">
    {props.monsters.map((monster: Monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
