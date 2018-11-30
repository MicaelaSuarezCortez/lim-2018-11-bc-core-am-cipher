## Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.


#### Funcionalidad 
La interfaz permite al usuario:

- Insertar un mensaje (texto en mayúsculas y minúsculas con espaciado) que queremos cifrar.
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Sobre proceso y decisiones de diseño.
  El proceso creativo inició haciendo los wireframe con papel y lápiz plasmando la distribución de los elementos para la interfaz, y previniendo cómo el usuario interactuaría. Luego se pidió a 3 personas que revisen los wireframes de la aplicación para conocer qué tan intuitivo y amigable les parecía.Con el feedback recibido se encontraron aspectos donde los wireframe fallaban.
  Como siguiente paso fue maquetar los wireframe con html.
  Antes de aplicar los estilos con css definí la paleta de colores así como la tipografía. 
	
  Para elegir la paleta de colores tomé en consideración aspectos de la psicología del color, donde el color azul se asocia a la confianza, seguridad y calma, mientras que el color blanco se asocia a la pureza, limpieza y sinceridad por lo que es bueno para páginas web relacionada a la industria de salud.
  Finalmente se aplicó @media query para adaptar el tamaño de la página a dispositivos móviles. 
    

#### Definición del producto
La aplicación cuenta con un menú de navegación siendo la sección de "Análisis clínicos: personal médico" para que el personal médico encargado de entregar los resultados de los análisis clínicos pueda generar una clave con el botón cifrar para lo cual se requiere que llene los campos del formulario "cifrado de análisis clínicos", generada la clave ésta será enviada al email del paciente.  

De igual manera hay una sección en el menú para los pacientes "Análisis clínicos: paciente" donde el paciente debe ingresar la clave y su respectivo offset enviado a su email por el personal médico y de esa forma ver el resultado de su análisis clínico.

####¿Quiénes son los principales usuarios del producto?
	 Pacientes de clínicas, centros de salud, laboratorios clínicos.

####¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
	 Por el lado del personal médico es proteger la información médica del paciente, y brindar mejor servicio.
	 Por el lado del paciente es aumentar la confianza respecto a la seguridad de su información médica.

####¿Cómo crees que el producto que estás creando está resolviendo sus problemas?
	El producto creado atiende la necesidad y al derecho fundamental que toda persona posee acerca de mantener la condifencialidad de su información médica. Por otro lado también trae beneficios para mejorar la calidad de servicio de atención en los establecimientos de salud públicos o privados ya que el paciente tendrá acceso a su información evitando gastos de transporte para recoger el resultado de su análisis clínico.  

 



