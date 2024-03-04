interface RegisterContextType {
  registerState: RegisterState;
  setRegisterState: React.Dispatch<React.SetStateAction<RegisterState>>;
}

interface RegisterState {
  username: string;
  full_name: string;
  phone_number: string;
  password?: string;
  data?: any;
}
