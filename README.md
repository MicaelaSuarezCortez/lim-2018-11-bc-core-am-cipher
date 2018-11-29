#Título del Proyecto: cipherhealth. 
 La aplicación tiene por finalidad proporcionar al paciente un nivel adicional de seguridad para visualizar la información consignada en sus resultados médicos los cuales son enviados a su email.

#### Cómo descargar
     La aplicación se accede a través de la url:

#### Funcionalidad 
La interfaz permite al usuario:

- Insertar un mensaje (texto en mayúsculas y minúsculas con espaciado) que queremos cifrar.
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Sobre proceso y decisiones de diseño.
  El proceso creativo inició haciendo los wireframe con papel y lápiz plasmando la distribución de los elementos para la interfaz, y previniendo cómo el usuario interactuará. Luego se pidió a 3 personas que revisen los wireframes de la aplicación para conocer qué tan intuitivo y amigable les parecía.Con el feedback recibido se encontraron aspectos donde los wireframe fallaban.
  Como siguiente paso fue maquetar los wireframe con html.Antes de aplicar los estilos con css se definió la paleta de colores así como la tipografía.
  La decisión respecto a la paleta de colores se basó en que de acuerdo a la psicología del color el azul se asocia a la confianza, seguridad, calma mientras que el blanco se asocia a la pureza, limpieza,sinceridad por lo que es bueno para páginas web relacionada a la industria de  salud.
  Finalmente se aplicó @media query para adaptar el tamaño de la página a dispositivos móviles. 
    

#### Definición del producto
La aplicación cuenta con un menú de navegación siendo la sección de "Análisis clínicos: personal médico" para que el personal médico encargado de entregar los resultados de los análisis clínicos pueda generar una clave con el botón cifrar para lo cual se requiere que llene los campos del formulario "cifrado de análisis clínicos", generada la clave ésta será enviada al email del paciente.  
De igual manera hay una sección en el menú para los pacientes "Análisis clínicos: paciente" donde el paciente debe ingresar la clave y su respectivo offset enviado a su email por el personal médico y de esa forma ver el resultado de su análisis clínico.

El producto creado atiende la necesidad y el derecho fundamental que toda persona posee acerca de mantener la condifencialidad de su información médica. Por otro lado también trae beneficios para mejorar la calidad de servicio de atención en los establecimientos de salud públicos o privados.

 



