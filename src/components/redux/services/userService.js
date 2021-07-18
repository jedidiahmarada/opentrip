import axios from "axios";

export const login = async (email, password) => {
  const url = "https://fp-open-trip.herokuapp.com/api/ot/user/login";
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
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("gagal cuy");
  } catch (error) {
    throw error;
  }
};

export const travRegis = async (username, email, password) => {
  const url = "https://fp-open-trip.herokuapp.com/api/ot/travel/regis";
  const data = {
    username,
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const hostRegis = async (
  username,
  email,
  password,
  phone,
  address,
  identity_no,
  identity_pic,
  selfie_identity_pic,
  bank,
  account_number,
  book_account_pic
) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phone", phone);
  formData.append("address", address);
  formData.append("identity_no", identity_no);
  formData.append("identity_pic", fileField.files[0]);
  formData.append("selfie_identity_pic", fileField.files[0]);
  formData.append("bank", bank);
  formData.append("account_number", account_number);
  formData.append("book_account_pic", fileField.files[0]);

  const url = "https://fp-open-trip.herokuapp.com/api/ot/host/regis";
  // const data = {
  //   bank_name,
  // };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {},
      body: formData,
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getBankService = async () => {
  const url = `https://fp-open-trip.herokuapp.com/api/ot/bank/all`;
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};

export const getTripService = async () => {
  const url = `https://fp-open-trip.herokuapp.com/api/ot/trip/all?page=0&limit=9`;
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};
