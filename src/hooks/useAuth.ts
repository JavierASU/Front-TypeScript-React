import { useState } from "react";
import { instance } from "../api/base.api";

interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginResponseInterface {
  user: User;
  token: string;
}

export interface User {
  id: number;
  username: string;
  createdAt: Date;
  updatedAt: string;
}

export const useLogin = () => {
  const [user, setUser] = useState<LoginInterface>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const doLogin = async () => {
    const response = await instance.post<LoginResponseInterface>(
      "auth/login",
      user,
      {
        validateStatus: (status) => {
          return status < 500;
        },
      }
    );

    if (response.status !== 200) {
      return null;
    } else {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  };

  return { user, handleChange, doLogin };
};

export const useRegister = () => {
  const [user, setUser] = useState<LoginInterface>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const doRegistry = async () => {
    const response = await instance.post<User>("users", user, {
      validateStatus: (status) => {
        return status < 500;
      },
    });

    if (response.status !== 201) {
      return null;
    } else {
      return response.data;
    }
  };

  return { handleChange, doRegistry };
};

export const useValidateSession = () => {
  const validateSession = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }

    const response = await instance.post(
      "/auth/validate",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        validateStatus: (status) => {
          return status < 500;
        },
      }
    );

    if (response.status !== 200) {
      return false;
    } else {
      return true;
    }
  };

  return { validateSession };
};
