<<<<<<< HEAD
# NovaTech - Portal de Pedidos (TA1)

**Objetivo**
Prueba de concepto DevOps para automatizar el desarrollo, validación y despliegue del portal de ventas de Comercial NovaTech S.A.C., mitigando fallos manuales y reduciendo el tiempo de entrega.

**Tecnologías Utilizadas**
* Frontend: HTML5, CSS3, JavaScript
* Pruebas Automatizadas: Jest, Node.js
* CI/CD: GitHub Actions
* Contenedorización: Docker, Nginx
* Automatización: Bash
* IaC: Terraform

**Integrantes**
* Samir Erick Quintana Canorio
* Sanchez Pajuelo Walter Jesus

**Requisitos Previos**
* Node.js (v18 o superior) y npm.
* Git instalado.
* Docker Desktop o motor Docker local en ejecución.

**Cómo ejecutar localmente **
1. Clonar el repositorio: `git clone https://github.com/TU-USUARIO/novatech-devops.git`
2. Navegar a la carpeta del proyecto: `cd novatech-devops`
3. Abrir el archivo `src/index.html` directamente en cualquier navegador web.

**Ejecturar el comando en docker**
1. Construir la imagen: 
   `docker build -t novatech:1.0 .`
2. Levantar el contenedor mapeando el puerto 8080: 
   `docker run --name novatech-web -d -p 8080:80 novatech:1.0`
3. Abrir en el navegador: `http://localhost:8080`
4. Detener el contenedor: `docker stop novatech-web`

**Qué valida el pipeline CI/CD?**
El workflow de GitHub Actions valida la exactitud de la lógica comercial del sistema con los cálculos de los precios y cantidades de los pedidos utilizando pruebas unitarias con Jest. Si el cálculo matemático es incorrecto, el pipeline aborta automáticamente la construcción y el despliegue, impidiendo que una versión defectuosa llegue al entorno de producción.

**Cómo reproducir los escenarios de prueba**

*   **Prueba Exitosa (Escenario A):**
    Realizar un commit sin alterar la lógica de negocio y envíarlo a la rama `main` (`git push`). Navegar a la pestaña "Actions" en GitHub para visualizar el flujo de integración continua completando todas las fases de color verde.

*   **Prueba Fallida (Escenario B):**
    1. Abrir el archivo `tests/app.test.js`.
    2. Modificar la línea `const resultadoEsperado = 300.00;` por un valor incorrecto.
    3. Guardar, realizar un commit y empujar los cambios a `main`.
    4. En la pestaña "Actions", el job fallará en el paso de validación (cruz roja), y las etapas posteriores de empaquetado y despliegue quedarán canceladas para proteger el sistema.
