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
    return response.json();
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

export const getBank = async () => {
  const url = "https://fp-open-trip.herokuapp.com/api/ot/bank/all";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjoxLCJlbWFpbCI6ImFmQGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6IkFkZSBGaXJtYW4iLCJpYXQiOjE2MjUxODQ3MzQsImV4cCI6MTYyNTE5NTUzNH0._BPK1GO-rsLEwmvYo5UdESDZEMIXMZ5A5CK-Wg_GzOo",
      },
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
