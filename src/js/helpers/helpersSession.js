import * as Session from "./session";
const sessionGeneral = new Session.SessionCache("general");
const sessionAccount = new Session.SessionCache("account");


export const getSession = (session, name) => {
  return new Session.SessionCache(session).get(name) ?? "";
};

export const setSession = (session, name, value) => {
  return new Session.SessionCache(session).add(name, value);
};

export const getSessionAccount = (name) => {
  return sessionAccount.get(name) ?? "";
};

export const setSessionAccount = (name, value) => {
  sessionAccount.add(name, value);
};

export const getSessionGeneral = (name) => {
  return sessionGeneral.get(name) ?? "";
};

export const setSessionGeneral = (name, value) => {
  sessionGeneral.add(name, value);
};

const helperSession = {
  Get: getSession,
  Set: setSession,
  GetAccount: getSessionAccount,
  SetAccount: setSessionAccount,
  GetGeneral: getSessionGeneral,
  SetGeneral: setSessionGeneral,
};

export default helperSession;
