import md5 from "md5";

export const myPublicKey = "a7878e3e5813dc6dd121964e7bbbcaed";

export const myPrivateKey = "64b8a4843973cd80124b07c7a6ea263a6b67e820";

export const hash = md5(`1${myPrivateKey}${myPublicKey}`);

export const reqDefaultParams = `ts=1&apikey=${myPublicKey}&hash=${hash}`;

