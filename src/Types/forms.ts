/* ---------==== custom forms ====--------- */



/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}
export interface progressFormData {
  profile: number;
  level: number;
  world: number;
  levelCompleted: boolean;
}

export interface PhotoFormData {
  photo: File | null;
}