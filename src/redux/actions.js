export const logIn = (user) => {
  return {
    type: 'LOG_IN',
    payload: user, // Optional: Include user details
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
