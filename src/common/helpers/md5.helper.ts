import crypto from 'crypto';

export const md5String = (data) => {
  const hash = crypto.createHash('md5');
  const buffer = Buffer.from(data, 'utf8');

  hash.update(buffer);

  return hash.digest('hex');
};
