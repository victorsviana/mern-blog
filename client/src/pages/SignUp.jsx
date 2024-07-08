import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              M.E.R.N.
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Olha aí como vai ser o template do site da tua gangue. Anota as
            cores e o que vai precisar, depois me manda que eu faço a alteração.
            See Ya!
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Nome de Usuário" />
              <TextInput type="text" placeholder="Usuário" id="username" />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput type="text" placeholder="nome@email.com" id="email" />
            </div>
            <div className="">
              <Label value="Senha" />
              <TextInput type="text" placeholder="Senha" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Entrar
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Ja tem uma conta?</span>
            <Link className="text-blue-500 font-semibold" to="/signin">Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
