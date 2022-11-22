#   Pryecto Alexa

Pequeño sistema ERP para comercializadoraOPS


### Requisitos 📜
- Servidor web apache
- PHP 7.4 o superior
- Composer
- Gestor de base datos MYSQL

### Pasos para correr el proyecto 🚀

👉 En la raiz donde se ejecutan los archivos del servidor (var/www)
o (public_html) clona el repositorio


```
git clone https://github.com/Vente16/alexa_project
```

👉 Crea un archivo .env en la siguiente ruta alexa_project/api/models con la estructura del archivo
.env.example del directorio del proyecto, deberác contener algo como lo
siguiente:


```
DB_USER="user"
DB_PASSWORD="****"
DB_NAME=""
DB_HOST="localhost"
DB_PORT=3306
JWT_KEY=""

```

👉 Estos son los datos para la conexión de la base de datos, pon los datos correspondientes según tu configuración de MYSQL



- Importa a la base datos el script con el siguiente nombre que se encuentra en la raiz del proyecto clonado

```
OPERADORA_OPS.sql
```

- Luego corre en la base datos el script con el siguiente nombre que se encuentra en la raiz del proyecto clonado

```
SP_DINAMYC_TABLE.SQL
```

👉 Una vez corrido los dos scripts anteriores entra a la carpeta api/

```
$ cd api
```

- Haz un composer install para las dependencias necesarias

```
$ composer install
```

👉 Para probar haz una petición HTTP get al siguiente Endpoint
```
 alexa_project/api/tables/fileds
```

📡 Tener encuenta como tienes configurado tu servidor web apunta hacia esa dirección, aquí un pequeño ejemplo de cómo sería
```
 http://localhost:8888/alexa_project/api/tables/fileds
```

- El Endpoint debería devolver el siguiente JSON

```
 {
    "data": {
        "CLIENTS": [
            "ID",
            "NOMBRE",
            "APELLIDO",
            "TELEFONO",
            "DOCUMENTO",
            "TIPO_DOCUMENTO",
            "FORM_BUILDER_ID",
            "ACTION",
            "ESTADO"
        ],
        "FORMS_BUILDER": [
            "ID",
            "NAME",
            "BUILDER",
            "ID_USER",
            "CREATION_DATE"
        ],
        "MODULES": [
            "ID",
            "NAME"
        ],
        "PRODUCTS": [
            "ID",
            "NOMBRE",
            "FOTO",
            "DESCRIPCION",
            "CATEGORIA",
            "PRECIO",
            "FORM_BUILDER_ID",
            "ID_USER",
            "DATE",
            "ACTION",
            "ESTADO"
        ],
        "PROVIDERS": [
            "ID",
            "NOMBRE",
            "NIT",
            "DIRECCION",
            "TELEFONO",
            "FORM_BUILDER_ID",
            "ACTION",
            "ESTADO"
        ],
        "TABLES_BUILDER": [
            "ID",
            "NAME",
            "NAME_TABLE",
            "FIELDS",
            "BUILDER",
            "ID_USER",
            "DATE"
        ],
        "USERS": [
            "ID",
            "NOMBRE",
            "APELLIDO",
            "PASSWORD",
            "ROL",
            "EMAIL",
            "FORM_BUILDER_ID",
            "ACTION",
            "ESTADO"
        ]
    },
    "statusCode": 200
}
```

### Configuración frontend

- Dirigete a la siguiente ruta dentro del proyecto
 ```
  frontend/app/app.module.js
```

👉 Verás una constante llamada config que tiene la siguiente estructura:


 ```
  .constant('config', {
    apiUrl: 'http://localhost:8888/alexa_project',
    baseUrl: '/',
    enableDebug: true,
    token: localStorage.getItem('token')
  })
```

👀 Cambia la clave apiUrl por la dirección de tu servidor local

### Eso sería todo 😁 lo hiciste 🎸
