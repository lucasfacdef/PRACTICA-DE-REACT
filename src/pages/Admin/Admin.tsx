import { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Typography,
  Popconfirm,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { useMovies } from "../../hooks/useMovies";
import type { Movie } from "../../types/Movie";

const { Title } = Typography;

function Admin() {
  const {
    movies,
    addMovie,
    updateMovie,
    deleteMovie,
  } = useMovies();

  const [editingMovie, setEditingMovie] =
    useState<Movie | null>(null);

  const [form] = Form.useForm();

  const handleSubmit = (values: {
    title: string;
    description: string;
    image: string;
    category: string;
    year: number;
    rating: number;
    type: "movie" | "series";
  }) => {
    if (editingMovie) {
      const updatedMovie: Movie = {
        id: editingMovie.id,
        ...values,
      };

      updateMovie(updatedMovie);
      message.success("Contenido actualizado");

      setEditingMovie(null);
      form.resetFields();

      return;
    }

    const newMovie: Movie = {
      id: uuidv4(),
      ...values,
    };

    addMovie(newMovie);

    message.success("Contenido agregado");

    form.resetFields();
  };

  const handleEdit = (movie: Movie) => {
    setEditingMovie(movie);

    form.setFieldsValue({
      title: movie.title,
      description: movie.description,
      image: movie.image,
      category: movie.category,
      year: movie.year,
      rating: movie.rating,
      type: movie.type,
    });
  };

  const handleCancelEdit = () => {
    setEditingMovie(null);
    form.resetFields();
  };

  const handleDelete = (id: string) => {
    deleteMovie(id);
    message.success("Contenido eliminado");

    if (editingMovie?.id === id) {
      setEditingMovie(null);
      form.resetFields();
    }
  };

  return (
    <main className="admin-page">
      <div className="admin-container">
        <Title level={1}>Panel de administración</Title>

        <Card className="admin-form-card">
          <Title level={3}>
            {editingMovie
              ? "Editar contenido"
              : "Agregar contenido"}
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Título"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Ingresá el título",
                },
              ]}
            >
              <Input placeholder="Ej: El último viaje" />
            </Form.Item>

            <Form.Item
              label="Descripción"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Ingresá la descripción",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Descripción del contenido"
              />
            </Form.Item>

            <Form.Item
              label="Imagen"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Ingresá la URL de la imagen",
                },
              ]}
            >
              <Input placeholder="https://..." />
            </Form.Item>

            <Form.Item
              label="Categoría"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Seleccioná una categoría",
                },
              ]}
            >
              <Select
                placeholder="Seleccioná una categoría"
                options={[
                  {
                    value: "Acción",
                    label: "Acción",
                  },
                  {
                    value: "Suspenso",
                    label: "Suspenso",
                  },
                  {
                    value: "Ciencia ficción",
                    label: "Ciencia ficción",
                  },
                  {
                    value: "Drama",
                    label: "Drama",
                  },
                  {
                    value: "Comedia",
                    label: "Comedia",
                  },
                  {
                    value: "Terror",
                    label: "Terror",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Año"
              name="year"
              rules={[
                {
                  required: true,
                  message: "Ingresá el año",
                },
              ]}
            >
              <InputNumber
                min={1900}
                max={2100}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label="Puntuación"
              name="rating"
              rules={[
                {
                  required: true,
                  message: "Ingresá la puntuación",
                },
              ]}
            >
              <InputNumber
                min={0}
                max={5}
                step={0.5}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label="Tipo"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Seleccioná el tipo",
                },
              ]}
            >
              <Select
                placeholder="Seleccioná el tipo"
                options={[
                  {
                    value: "movie",
                    label: "Película",
                  },
                  {
                    value: "series",
                    label: "Serie",
                  },
                ]}
              />
            </Form.Item>

            <Space>
              <Button
                type="primary"
                htmlType="submit"
              >
                {editingMovie
                  ? "Guardar cambios"
                  : "Agregar contenido"}
              </Button>

              {editingMovie && (
                <Button onClick={handleCancelEdit}>
                  Cancelar
                </Button>
              )}
            </Space>
          </Form>
        </Card>

        <section className="admin-list">
          <Title level={2}>
            Contenido existente
          </Title>

          <div className="admin-movies-grid">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="admin-movie-card"
                cover={
                  <img
                    src={movie.image}
                    alt={movie.title}
                  />
                }
              >
                <Title level={4}>
                  {movie.title}
                </Title>

                <p>
                  {movie.type === "movie"
                    ? "Película"
                    : "Serie"}
                </p>

                <p>
                  {movie.category} · {movie.year}
                </p>

                <p>
                  ⭐ {movie.rating} / 5
                </p>

                <Space>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() =>
                      handleEdit(movie)
                    }
                  >
                    Editar
                  </Button>

                  <Popconfirm
                    title="¿Eliminar este contenido?"
                    description="Esta acción no se puede deshacer."
                    okText="Sí, eliminar"
                    cancelText="Cancelar"
                    onConfirm={() =>
                      handleDelete(movie.id)
                    }
                  >
                    <Button
                      danger
                      icon={<DeleteOutlined />}
                    >
                      Eliminar
                    </Button>
                  </Popconfirm>
                </Space>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;