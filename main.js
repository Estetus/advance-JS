"use  strict";

const user1 = {
  name: "Alex",
  birthday: "1991-01-01",
};

function getBirthday(user) {
  const nowDate = new Date();
  const userBirthday = new Date(user.birthday);

  if ((nowDate.getFullYear() - userBirthday.getFullYear()) > 14) {
    return true;
  }
  return false;
}

console.log(getBirthday(user1));
