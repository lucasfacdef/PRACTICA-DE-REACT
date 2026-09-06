import { Button, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import type { User } from "../../types/User";

const { Title } = Typography;

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = (values: {
    email: string;
    password: string;
  }) => {
    const savedUsers = localStorage.getItem("streamtuc-users");

    const users: User[] = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    const userFound = users.find(
      (user) =>
        user.email === values.email &&
        user.password === values.password,
    );

    if (!userFound) {
      messageApi.error(
        "Correo o contraseña incorrectos",
      );
      return;
    }

    login(userFound);

    messageApi.success("Inicio de sesión correcto");

    navigate("/");
  };

  return (
    <>
      {contextHolder}

      <main className="login-page">
        <div className="login-container">
          <Title level={1}>STREAMTUC</Title>

          <Title level={3}>Iniciar sesión</Title>

          <Form
            layout="vertical"
            onFinish={handleLogin}
          >
            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[
                {
                  required: true,
                  message:
                    "Ingresá tu correo electrónico",
                },
                {
                  type: "email",
                  message:
                    "Ingresá un correo válido",
                },
              ]}
            >
              <Input
                placeholder="correo@ejemplo.com"
              />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    "Ingresá tu contraseña",
                },
              ]}
            >
              <Input.Password
                placeholder="Contraseña"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
              >
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>

          <Button
            type="link"
            onClick={() => navigate("/register")}
          >
            Crear una cuenta
          </Button>
        </div>
      </main>
    </>
  );
}

export default Login;