# Observaciones

Celi, felicitaciones por tu trabajo. Es increible el nivel de atención al detalle que demostras con este TP: me encanta como adaptaste el modelo y lo bien que se ve tu web en practicamente cualquier resolucion. Se nota que hay mucho trabajo aquí. 

Tengo, lamentablmemente, pocos comentarios para hacerte, ya que el nivel de este trabajo es realmente muy alto. Pero siempre hay algo que comentar! :) Como dije en clase, este trabajo no se hace para que constates conocimientos, sino para que aprendas: en ese sentido, mi intencion es que estos comentarios te sirvan para aprender, mejorar tu codigo a futuro e ir apreciando mejor qué se espera de nosotras como desarrolladoras front end.

## Estructura correcta de documento HTML

Tu HTML esta realmente excelente. Claro, prolijo, muy bien comentado e identado.

Tenés cierta tendencia a tener divs de más. Algunas estructuras de tu web se podrían resolver con menos divs. Dicho esto, yo prefiero que los divs sobren antes de que falten: un div de más se soluciona muy fácil, un div menos puede ser un gran dolor de cabeza cuando estamos recién arrancando. Este sería un comentario que quizá me reservaría para futuros trabajos, pero veo tan bien tu código que me siento confiada en recomendarte que empieces a ver estas cosas desde ya. 

Si tenés ganas, con tiempo, te diría que valdría la pena recorrer tu html y notar que estructuras como esta se pueden hacer más breves. Tambien prestale atención al tabulado:

```html
    <header>
        <!--Primer sección Seccion-principal-->
        <section id="seccion-principal">
        <div class="seccion-principal">
            <div class="column izquierda-header">
                <h3>¡Hola! Soy</h3>
                <h1>Celinés Alsina</h1>
                <p class="texto-header">Desarrolladora, violinista, fan de los juegos de mesa, las plantas y la ciencia</p>
                <a href="#proyectos" class="lo-que-hago">LO QUE HAGO</a>
            </div>
            <div class="column derecha-header">
                <img src="imagenes-portafolio/undraw_working_late_pukg.svg" class="imgpresentacion">
            </div>
        </div>    
        </section>
    </header>
```

Todos los estilos del div `seccion-principal` se podrían llevar al `section` sin problema, y el `header` no cumple ninguna función así que se podría sacar también. 

Te lo comento aquí como un ejemplo, pero esto es algo que se repite a lo largo de tu código. 

Utilizás ocasionalmente etiquetas `br` para separar las cosas: no llegué a comentarlo en clase, pero esto es incorrecto. Esa etiqueta es un resabio de viejas épocas en las cuales css no era tan poderoso como ahora, pero usarla hoy viola uno de los principios básicos de programación: la separación de responsabilidades. Los estilos se dan con css, la estructura se da con html. Una decisión de estilo como un espaciado entre dos elementos debe controlarse con css -flex, elementos en bloque, etc, no con `br`. 

## Respeta la consigna

- El portfolio cuenta con las secciones solicitadas
- Al clickear en los links de navegación, debe llevar a la sección correspondiente
- Al clickear en los links de contacto, debe llevar a la página externa
  correspondiente
- El portfolio debe tener un diseño responsivo y verse correctamente en distintos dispositivos
- El portfolio debe estar deployado y ser accesible desde una URL
- El repositorio en GitHub debe tener un readme adecuado

Todos estos puntos están cumplidos. Menciono especialmente tu responsive: es increíble lo bien que solucionaste las distintas resoluciones, siguiendo casi a la perfección el modelo y preocupandote para que todo se vea hermoso, veamos tu web desde cualquier dispositivo. Ahora bien, para lograrlo adoptaste dos estrategias que no son ideales:

- Tenes muchas mas media queries que las necesarias. Comenté en clase que la guia de bootstrap para las media queries me parece la mejor, te la dejo acá. Si notas que necesitas una media para 600, una para 700... es una buena pauta de que quizá haya algo que no está bien resuelto a nivel HTML y CSS. Con flex bien aprovechado no debería ser necesario tener tantas media queries. 


```css
/* Celulares */
@media (max-width: 576px) { ... }

/* Celulares en modo horizontal y tablets pequeñas */
@media (max-width: 768px) { ... }

/* Tablets  */
@media (max-width: 992px) { ... }

/* Monitores pequeños */
@media (max-width: 1200px) { ... }

/* Monitores grandes */
@media (max-width: 1400px) { ... }
```

Nuevamente, este es un punto bastante complejo y que normalmente no señalaría en esta etapa, pero viendo la alta calidad de tu trabajo me siento confiada sugiriendotelo. 

Por otro lado, noto que agregaste esto:

```css
body, html {
    overflow-x: hidden;
}
```

... y si lo sacamos, se nos rompe el responsive en celulares, ya que aparece un scroll horizontal. Tu web funciona, pero esta estrategia es como meter todo el desorden de tu casa en el armario cuando vienen visitas: tu casa se ve ordenada, pero en realidad no lo está. Sólo escondimos el problema. 

Este scroll horizontal es muy, muy habitual y muy molesto. Ocurre cuando un elemento ocupa mas espacio del que le da el body, ya sea por un width, un margin, un padding o la combinacion de los tres. Encontrarlo es dificil, requiere recorrer con paciencia cada uno de nuestros elementos. Pero es un ejercicio necesario. En tu caso, el culpable es:

```css
@media screen and (max-width: 1100px)
.column {
    width: 500px;
}
``` 

Como no hemos especificado un width para `column` en medidas inferiores a 1100 px, en todos los celulares y tablets va a tener ese width. Y en todas las pantallas inferiores a 500px, este width va a provocar el scroll horizontal. Arreglar esto provocará que tu imagen del `header` también se agrande, forzando nuevamente un scroll horizontal: considerá darle `width: 100%` como hablamos en clase. 

### Respeta el diseño dado

Cumplido a la perfección. Noto algún apego a varias estructuras del HTML y CSS del modelo de Ada, especialmente en la seccion de "Mis proyectos". Por supuesto, el codigo de esa web es público y sabemos y comprendemos que ocasionalmente vas a mirarlo para despejar algunas dudas, pero algunos problemas parecen obvios de solucionar cuando ves como lo hace el modelo: esa no es la única manera. La mejor, por supuesto, es la que se te ocurra a vos.

### Buena estructura de proyecto

Cumplido casi a la perfección, pero la carpeta de imágenes debería tener su nombre en minúscula, ya que ocasionalmente esto puede provocar bugs al importar imágenes. Notá también que tenés una carpeta innecesaria, `vscode`, que es agregada a veces automáticamente por Visual Studio. Es buena práctica borrarla antes de una entrega. 

### Código bien indentado

Tabulas en general muy bien, lo cual parece un detalle extra cuando una recien comienza pero ayuda un monton a su legibilidad, y que lo hayas logrado en esta etapa es un gran mérito. Ocasionalmente tenés algunos errores como el que te comenté más arriba: es buena idea pasar el código por el auto formatter de VSCode antes de una entrega. 

### Comentarios que permiten mejorar la legibilidad del código

Impecables. 

### Uso correcto de etiquetas semánticas

En general usas bien las etiquetas semánticas. Me llama la atención que hayas usado `div` o `a` para las tarjetas de Mis Conocimientos y Mis Proyectos: yo diría que deberían ser `article`. Pero es el único detalle a comentar aquí (y hay quien podría discutirme que deberían ser divs)

### Buenos nombres de clases

En general está cumplido. Un problema menor, pero destacable, es el spanglish (yo también soy culpable de hacer esto). Queremos que las clases sean fácilmente identificables, que idealmente podamos escribir el css sin tener que volver a mirar el nombre de algo en HTML. Seguir convenciones nos facilita mucho ese trabajo. Si nuesta sección se llama contenedor-proyectos, me parece lógico asumir que cada tarjeta será proyecto, pero en tu caso es proyect. Así hay varios ejemplos a lo largo del código. 

Ocasionalmente veo que reutilizaste código CSS, lo cual está perfecto, pero mantuviste el nombre de clase anterior: no tiene sentido que los links del footer se llamen "navheader". Si tienen el mismo estilo que los links del nav de arriba, deberían ser por ejemplo "links-nav", sin referencia al elemento en donde están contenidos. 

Recordá también la importancia de seguir convenciones cuando una clase se compone de más de una palabra: "nav-header" es más legible que "navheader".

Noto algunas clases que tienen identidades confusas y problemas con lo que consideramos "descriptivo". Cuando decimos que un nombre de clase debe ser descriptivo, lo decimos en un sentido funcional: qué rol cumple este elemento en el código. Los colores de los elementos, su forma, su estilo, su posición, todas esas cosas pueden cambiar y efectivamente cambian todo el tiempo en las webs que hacemos. El botón que hoy es violeta mañana será azul; la sección que estaba a la derecha mañana estará arriba. Por lo tanto esos factores sos no son buenos descriptores, y no deberían ser parte de nuestros nombres de clases. Cosas como sección "derecha" deberían cambiarse para representar qué son en tu página: la sección que tiene una cita, el formulario de contacto.

Ocasionalmente tenés clases que no usas en tu css. Para que está "derecha header", por ejemplo?

### Código CSS bien estructurado

Cumplido a nivel formal. Noto algunos estilos innecesarios o confusos, que te voy indicando en tu archivo de css.

### Reutilización de estilos

Cumplido en general

### Cumple con criterios básicos de accesibilidad

- Los colores tienen un contraste adecuado

Cumplido en general, pero lo perdés en los detalles. El color amarillo del botón del form no es accesible con texto blanco. Tampoco olvides los hover: ni el botón amarillo oscuro es accesible con el texto blanco, ni el color rosa de los links del form con el fondo gris. 

- Las imágenes tiene el atributo `alt` que corresponde

Tenés un sólo alt correcto, "huevo resquebrajado". El resto están ausentes. Es absolutamente necesario que las imágenes tengan un atributo alt para quienes dependen de un lector de pantalla. 

- Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria, texto oculto)

Cumplido para los links del footer, pero no para por ejemplo los svg de las otras secciones. 

- Los íconos y elementos que no necesitan ser anunciados por un lector de pantalla tienen la etiqueta aria correspondiente

No cumplido. 

- Commits con mensajes adecuados

Cumplido, noto muchos y buenos commits en tu proyecto, lo que siempre se agradece.

- Cuenta con un favicon

Cumplido, aunque debería ser un archivo llamado favicon.ico, estar en la carpeta principal y con la capitalización indicada. 

### Nota: 9
