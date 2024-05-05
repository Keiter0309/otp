// login.tsx
'use client'
import { useState } from 'react';
import { signup, FormData } from '../auth';

const Register = () => {

    const [formData, setFormData] = useState<FormData>({
        lastName: '',
        firstName: '',
        email: '',
        phone:'',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const listUser = localStorage.getItem('listUser');
        const newListUser = listUser ? JSON.parse(listUser): [];
        try {
            const response = await signup(formData);
            let isCheckedEmail = false;
            let isCheckedPhone = false;
            if(newListUser.length > 0){
                newListUser.forEach((e:FormData) => {
                    if (e.email ===formData.email) {
                        isCheckedEmail=true;
                    }
                    else if(e.phone === formData.phone) {
                        isCheckedPhone=true
                    }
                });
                if(isCheckedEmail){
                    console.log("email tồn tại ");
                    alert('email tồn tại')
                    return
                }else if(isCheckedPhone){
                    console.log("số điện thoại tồn tại ");
                    alert('số điện thoại tồn tại')
                    return
                }
                newListUser.push(formData)
                localStorage.setItem('listUser',JSON.stringify(newListUser))
                console.log("Đăng kí thành công");
                alert("Đăng kí thành công")
            }else{
                newListUser.push(formData)
                localStorage.setItem('listUser',JSON.stringify(newListUser))
                console.log("Đăng kí thành công");
                alert("Đăng kí thành công")

            }

            console.log(response.message);
            // Optionally, you can redirect the user after successful signup
        } catch (error) {
            // Handle error
            console.error('Signup failed:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">FirstName</label>
                    <input id="firstName" name="firstName" placeholder="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">LastName</label>
                    <input id="lastName" name="lastName" placeholder="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Phone</label>
                    <input id="phone" name="phone" placeholder="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input id="cfpassword" name="cfpassword" type="password"  />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
