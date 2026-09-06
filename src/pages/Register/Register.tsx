import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import type { User } from "../../types/User";

const { Title } = Typography;

function Register() {
  const navigate = useNavigate();

  const handleRegister = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    const savedUsers = localStorage.getItem("streamtuc-users");

    const users: User[] = savedUsers
      ? JSON.parse(savedUsers)
      : [];

    const emailAlreadyExists = users.some(
      (user) => user.email === values.email,
    );

    if (emailAlreadyExists) {
      alert("Ese correo ya está registrado");
      return;
    }

    const newUser: User = {
      id: uuidv4(),
      name: values.name,
      email: values.email,
      password: values.password,
      role: "user",
    };

    localStorage.setItem(
      "streamtuc-users",
      JSON.stringify([...users, newUser]),
    );

    alert("Usuario registrado correctamente");

    navigate("/login");
  };

  return (
    <main className="register-page">
      <div className="register-container">
        <Title level={1}>STREAMTUC</Title>

        <Title level={3}>Crear cuenta</Title>

        <Form
          layout="vertical"
          onFinish={handleRegister}
        >
          <Form.Item
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Ingresá tu nombre",
              },
            ]}
          >
            <Input placeholder="Tu nombre" />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              {
                required: true,
                message: "Ingresá tu correo electrónico",
              },
              {
                type: "email",
                message: "Ingresá un correo válido",
              },
            ]}
          >
            <Input placeholder="correo@ejemplo.com" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Ingresá una contraseña",
              },
              {
                min: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            ]}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Registrarme
            </Button>
          </Form.Item>
        </Form>

        <Button
          type="link"
          onClick={() => navigate("/login")}
        >
          Ya tengo una cuenta
        </Button>
      </div>
    </main>
  );
}

export default Register;