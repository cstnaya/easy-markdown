const User = require("./user.mongo");

async function saveUserData(user) {
  await User.updateOne({ userId: user.userId }, user, { upsert: true });
}

async function getUserDetail(userId) {
  return await User.findOne({ userId: userId }, { _id: 0, __v: 0 });
}

module.exports = { saveUserData, getUserDetail };
