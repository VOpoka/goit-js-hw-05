"use strict";
const sortByDescendingFriendCount = (users) =>
  users.sort((a, b) => b.friends.length - a.friends.length);
