import RoutesList from "./RoutesList";


const Routes = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-stone-800 mb-4">
          Rutas de Senderismo
        </h1>
        <p className="text-stone-600">
          Descubre las mejores rutas de senderismo o crea las tuyas propias para
          compartir con la comunidad.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <RoutesList />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Routes;
