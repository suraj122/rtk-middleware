import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieExample = () => {
  const [cookiename, setCookieName] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const storedCookie = Cookies.get("name");
    if (storedCookie) {
      setCookieName(storedCookie);
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const addCookie = () => {
    Cookies.set("name", name, { expires: 7 });
    setCookieName(name);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <button onClick={addCookie}>submit</button>
      <p>{cookiename}</p>
    </div>
  );
};

export default CookieExample;
