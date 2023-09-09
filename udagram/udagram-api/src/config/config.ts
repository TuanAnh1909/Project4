import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `postgres`,
  password: 'postgres',
  database: 'postgres',
  host: 'db-1.chfbysdpvds0.us-east-1.rds.amazonaws.com',
  aws_region: 'us-east-1',
  aws_profile: 'default',
  aws_media_bucket: 'project4-demo',
  url: '',
  jwt: {
    secret: 'qwertyuiopasdfghjklzxcvbnm123123123123123123123123123213123213213',
  },
};
