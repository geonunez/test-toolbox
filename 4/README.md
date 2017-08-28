## Preguntas

1. **¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y por qué?**
Los almacenaría en algún CDN disponible, con el fin de centralizarlos para que cualquier instancia de la aplicación sea capaz de leerlo y adicionalmente para agilizar su carga al momento de ser requerido.

2. **¿Implementaría un cache del lado del cliente? ¿Por qué?**
Dado que la gran mayoría de los navegadores web (*por no decir todos*) disponen de sistemas de cache, no veo motivos de porque implementar un cache de lado del cliente.

3. **¿Cuál es la diferencia entre SOAP y REST?**
Son dos métodos para la comunicación entre dos o más aplicaciones. SOAP por su parte trabaja con formato XML, en donde el o los clientes poseen una lista de los métodos disponibles en servidor, además de disponer de las especificaciones del modelo de datos que recibiran. Por otro lado REST trabaja (*aunque no obligatoriamente*) en formato JSON y se tiene como premisa utilizar los 'verbos' (*GET, POST, PUT, DELETE, etc*) de HTML para comunicar las distintas operaciones a las que quieren acceder del lado del servidor.
