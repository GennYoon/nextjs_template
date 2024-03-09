interface SigninAuthDto {
  email: string;
  password: string;
}

interface SignupAuthDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface UpdateAuthDto extends Partial<SignupAuthDto> {}
