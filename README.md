# Bases de node

**Explicando las bases de node con este proyecto**

## Iniciando un proyecto node

``` node init ```

* En package.json especificar los scripts que se consideren necesarios:

    * ``` npm run myScriptName ```

* Para instalar un paquete de en node, seguir las instrucciones del autor, ejemplo:

    * [Instalar colors](https://www.npmjs.com/package/colors)
    
    * ``` npm install colors ```

Se agregará la dependencia en package.json

* Para desinstalar un paquete, usar:

    * ``` npm uninstall packageName ```

* Para instalar una versión específica:
    * ``` npm i packageName@version ```
    * ``` npm i colors@1.0.0 ```

* Para actualizar paquetes sin confirmación (solo hacer si se sabe lo que se va a actualizar ):
    * ``` npm update ```

* Para reconstruir los módulos de node de acuerdo a package.json y el lock:
    * ``` npm install ```