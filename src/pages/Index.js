import { useContext, memo } from "react";
import { UserContext } from "../UserContext";
import login from "../utils/login";

const Index = memo(() => {
  const { user, setUser } = useContext(UserContext);
  console.log("Index() user:", user);
  return (
    <>
      <h2>Home </h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {/* pre 태그는 텍스트 안에 사용된 여백과 줄바꿈이 모두 그대로
      브라우저 화면에 나타납니다.*/}
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </>
  );
});

export default Index;
