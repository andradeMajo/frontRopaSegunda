import { Screen } from "../../ui/components/Screen";
import { Input } from "../../ui/components/Input";
import { Button } from "../../ui/components/Button";
export default function Login() {
  return (
    <Screen>
      <h1 className="text-secondary text-2xl font-bold mb-6 text-center">
        INICIAR SESIÓN
      </h1>
      <div className="flex flex-col gap-4">
        <Input placeholder="Nombre de usuario" />
        <Input type="password" placeholder="Contraseña" />
        <Button>Entrar</Button>
        <div className="text-center text-muted">o</div>
        <Button variant="outline">
          Ingresar con Google
        </Button>
      </div>
    </Screen>
  );
}