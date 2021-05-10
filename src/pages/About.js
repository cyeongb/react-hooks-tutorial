import { useContext, memo } from "react";
import { UserContext } from "../UserContext";

const About = memo(() => {
  const { user } = useContext(UserContext);
  console.log("About() user:", user);
  console.log("json.stringify(user,null,2) ?", JSON.stringify(user, null, 2));
  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
});

export default About;
