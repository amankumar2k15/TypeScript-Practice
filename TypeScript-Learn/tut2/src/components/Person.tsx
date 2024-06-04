type PersonProps = {
  name: {
    fname: string;
    lname: string
  };
};

const Person = (props: PersonProps) => {
  return (
    <>
      {props.name.fname} {props.name.lname}
    </>
  );
};



export default Person;
