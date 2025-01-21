"use  strict";

const user1 = {
  name: "Alex",
  birthday: "2011-01-21",
};

function getBirthday(user) {
  const nowDate = new Date();
  const userBirthday = new Date(user.birthday);

  let age = nowDate.getFullYear() - userBirthday.getFullYear();

  if (
    nowDate.getMonth() < userBirthday.getMonth() ||
    (nowDate.getMonth() === userBirthday.getMonth() &&
      nowDate.getDate() < userBirthday.getDate())
  ) {
    age--; // Уменьшаем возраст, если день рождения еще не был в текущем году
  }
  return age >= 14;
}

console.log(getBirthday(user1));
