'use client';
import { useEffect, useState } from "react";
import { frmLogin } from "../auth";
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [formLogin, setFormLogin] = useState<frmLogin>({
    email: "",
    phone: "",
    password: "",
  });

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const listUser = localStorage.getItem('listUser');
    const newListUser = listUser ? JSON.parse(listUser) : [];

    try {
      // Tìm kiếm người dùng dựa trên email
      const foundByEmail = newListUser.find(
        (user: frmLogin) => user.email === formLogin.email
      );

      // Tìm kiếm người dùng dựa trên số điện thoại
    //   const foundByPhone = newListUser.find(
    //     (user: frmLogin) => user.phone === formLogin.phone
    //   );

      // Kiểm tra mật khẩu khi tìm thấy đối tượng có email hoặc số điện thoại khớp
      if ((foundByEmail ) 
        //   (foundByPhone && foundByPhone.password === formLogin.password)
        ) 
          {
        alert("Đăng nhập thành công");
        console.log("Đăng nhập thành công");
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        console.log("Sai tài khoản hoặc mật khẩu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailOrPhone">Email or Phone</label>
          <input
            id="emailOrPhone"
            name="email"
            placeholder="Email or Phone"
            onChange={handleLogin}
            />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formLogin.password}
            onChange={handleLogin}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
