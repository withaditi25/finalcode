import db from '..';

export const getUserId = userId =>
  new Promise(resolve => {
    db.ref()
      .child('WMUserNameList')
      .child(userId)
      .on('value', snapshot => {
        resolve(snapshot.val());
      });
  });

export const getUserDetail = userId =>
  new Promise(resolve => {
    db.ref()
      .child('WMUserInfo')
      .child(userId)
      .on('value', snapshot => {
        resolve(snapshot.val());
      });
  });
