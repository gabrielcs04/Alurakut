import { SiteClient } from 'datocms-client';
export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'e009e68b5cc4cbe4bb8d28642235c8';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: '1055343',
      ...request.body,
    })

    response.json({
      registroCriado: registroCriado
    })

    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!"
  })
}