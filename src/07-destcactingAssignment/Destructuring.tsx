export type InfoType = {
  name: string;
  age: number;
  tech: Array<{ title: string; tName?: string }>;
  address: { street: { stname: string } };
};

type ManComponentPropsType = {
  title: string;
  man: InfoType;
  food: Array<string>;
  car: { model: string };
};

export const ManComponent: React.FC<ManComponentPropsType> = ({
  title,
  man,
  ...props
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{man.name}</div>
      <div>{props.car.model}</div>
    </div>
  );
};
