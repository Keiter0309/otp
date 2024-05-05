import { resolve } from "path";

export interface FormData {
    lastName: string;
    firstName: string;
    email: string;
    phone:string;
    password: string;
}
export interface frmLogin {
    email :string;
    phone :string;
    password:string
}

export async function signup(formData: FormData) {
    // Ở đây, bạn thường sẽ thực hiện một yêu cầu HTTP đến máy chủ của bạn
    // để thực hiện quá trình đăng ký. Ví dụ: sử dụng fetch hoặc Axios.
    // Để minh họa, chúng ta chỉ đơn giản log dữ liệu biểu mẫu ra console.
    console.log('Đang đăng ký với dữ liệu:', formData);

    // Giả lập thời gian xử lý của máy chủ
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Giả lập phản hồi thành công
    return { success: true, message: 'Đăng ký thành công!' };
}

export async function FrmLogin (frmLogin :frmLogin){
    console.log('Đang kết nối dữ liệu : ' , frmLogin);

    await new Promise(resolve=>setTimeout(resolve,1000));

    return { success: true, message: 'đăng nhập thành công'}
}