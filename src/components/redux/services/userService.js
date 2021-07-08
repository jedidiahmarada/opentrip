export const login = async (email, password) => {
  const url = "https://fp-open-trip.herokuapp.com/api/ot/user/login";
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const data = {
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
