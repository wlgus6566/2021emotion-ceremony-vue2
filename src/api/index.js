import axios from 'axios';
import { setInterceptors } from './interceptors';

function createWithAuth(options) {
  const instance = axios.create(
    Object.assign(
      {
        baseURL: '',
        timeout: 3000,
        responseEncoding: 'utf8',
      },
      {
        ...options,
      }
    )
  );
  setInterceptors(instance);
  return instance;
}

export const instance = createWithAuth();

function getMemberContents() {
  return instance.get(`getMemberContents`);
}
function getMemberCardImage(params) {
  return instance.get(`getMemberCardImage`, );
}
function getAllMemberCardImage(params) {
  return instance.get(`getAllMemberCardImage`, );
}
function getSurvey(params) {
  return instance.get(`getSurvey`,{params:params});
}
function getAllPhoto(params) {
  return instance.get(`getAllPhoto`, );
}
function getRanPhoto(params) {
  return instance.get(`getRanPhoto`, );
}
function getMbti(params) {
  return instance.get(`getMbti`,{params:params} );
}
function postVotes(params) {
  return instance.get(`postVotes`, );
}

export {
  getMemberContents,
  getMemberCardImage,
  getAllMemberCardImage,
  getSurvey,
  getAllPhoto,
  getRanPhoto,
  getMbti,
  postVotes,
}

