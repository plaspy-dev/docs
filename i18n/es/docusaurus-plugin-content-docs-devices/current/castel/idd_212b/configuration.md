---
slug: /castel/idd_212b/configuration
id: idd_212b-configuration
sidebar_label: Configuration
title: Castel - IDD-212B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Castel IDD-212B y conectarlo a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración Castel IDD-212B
  - Instalación Castel IDD-212B
  - Castel IDD-212B Plaspy
  - Configuración rastreador GPS Castel
  - Configuración seguimiento vehicular Castel
  - Guía de configuración IDD-212B
  - Ajustes de servidor IDD-212B
  - Configuración de rastreador Plaspy
  - Configuración rastreador OBD Bluetooth
  - Seguimiento de diagnóstico vehicular
---

# Castel - Configuración IDD-212B

Esta página documenta el contexto público de configuración para usar el Castel IDD-212B con Plaspy. Reúne los ajustes prácticos de servidor y los comandos SMS proporcionados por el fabricante que se usan comúnmente para apuntar el equipo hacia Plaspy y que el rastreador pueda reportar a la plataforma. Utilice esto como una referencia compacta para los pasos básicos necesarios para dejar el IDD-212B visible en Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El IDD-212B puede configurarse mediante comandos SMS en el formato que muestra el fabricante a continuación, por lo que verifique cualquier diferencia con la documentación oficial de Castel.

## Resumen de la configuración

El objetivo de la configuración es preparar el IDD-212B para que establezca una conexión de datos hacia Plaspy y sea visible en la plataforma. Eso incluye definir el APN y los parámetros del servidor, confirmar que el dispositivo acepta los ajustes y validar que los datos llegan a Plaspy.

- Configure el dispositivo para usar Plaspy como endpoint de servidor y dirigir los datos del vehículo a la plataforma
- Establezca el APN y los parámetros GSM necesarios para que el equipo abra sesiones de datos GPRS
- Verifique que la dirección y el puerto del servidor se hayan guardado y que el dispositivo pueda alcanzar Plaspy
- Valide el reporte comprobando las respuestas del dispositivo y confirmando su visibilidad en Plaspy
- Anote el ID del dispositivo y la clave secreta SMS por defecto para una configuración segura

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes públicos de conexión a Plaspy al configurar el IDD-212B:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos pueden usar el mismo puerto

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y puede detectar automáticamente el protocolo del equipo.

## Requisitos típicos antes de la configuración

- Una unidad IDD-212B alimentada y accesible con el ID del instalador o del dispositivo disponible
- Una SIM válida con plan de datos y la información APN para conectividad GPRS
- Capacidad para enviar SMS al dispositivo desde un teléfono o usar la herramienta de configuración del fabricante si está disponible
- Conocimiento del ID del equipo para poder derivar la clave secreta SMS por defecto si es necesario
- Un entorno seguro de banco de pruebas o instalación en vehículo para probar la conectividad y reiniciar el equipo
- Acceso a la documentación oficial de configuración de Castel o a soporte del proveedor para instrucciones específicas de firmware

## Cómo se conecta este rastreador a Plaspy

El IDD-212B se configura para enviar sus datos al endpoint y puerto del servidor de Plaspy, de modo que la plataforma reciba la información de ubicación y eventos. Una vez aplicados correctamente los parámetros de servidor y APN, el dispositivo abre una sesión de datos y empieza a enviar telemetría a Plaspy, donde se parsea y se muestra en la cuenta.

- El dispositivo apunta a la dirección IP o dominio de Plaspy y al puerto configurado para conexiones salientes
- El transporte puede ser UDP o TCP dependiendo de lo que soporte el firmware del equipo
- Plaspy recibe la conexión entrante en el puerto compartido y detecta automáticamente el protocolo del rastreador
- Tras una configuración exitosa, el dispositivo reporta su estado y ubicación para volverse visible en Plaspy
- La validación de la conectividad confirma que los datos fluyen desde el dispositivo hacia el servidor de Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Castel para el IDD-212B, como comandos SMS o la herramienta del proveedor recomendada por el fabricante
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo
3. Configure el puerto del equipo en 8888, que es el puerto utilizado por la plataforma Plaspy para todos los dispositivos
4. Seleccione UDP o TCP si el equipo requiere una selección explícita de transporte
5. Establezca el APN y cualquier usuario o contraseña de APN que requiera el operador de la SIM
6. Aplique o guarde la configuración y reinicie el dispositivo si éste necesita reboot para aplicar los cambios
7. Valide que el dispositivo reporte a Plaspy verificando las respuestas del equipo y confirmando su visibilidad en la plataforma Plaspy

Si utiliza el método por SMS que se muestra abajo, los comandos se envían en el orden indicado y el dispositivo responderá con confirmación si los ajustes son aceptados.

## Ejemplos de comandos de configuración

Los siguientes comandos se toman del formato público de configuración de Castel. El IDD-212B acepta comandos SMS donde se requiere una clave secreta. La clave secreta SMS por defecto para las instrucciones es los últimos seis caracteres ASCII del ID del dispositivo, salvo que haya sido cambiada.

- Para establecer el APN y el servidor IP y puerto use el comando set gprs. Reemplace los marcadores con sus valores de APN y la clave secreta SMS del dispositivo:

```
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Para comprobar la configuración actual de GPRS y servidor en el dispositivo use el comando get gprs:

```
*{{SecretKey}}#get gprs#*
```

Notas sobre los marcadores y su uso:
- {{SecretKey}} es la contraseña SMS del dispositivo. Por defecto es los últimos seis caracteres ASCII del ID del dispositivo, a menos que el instalador la haya cambiado.
- [apn] es la cadena APN de la red móvil proporcionada por el operador de la SIM.
- [apnu] es el usuario de APN cuando la red lo requiere. Si no es necesario, déjelo en blanco.
- [apnp] es la contraseña de APN cuando la red la requiere. Si no es necesaria, déjela en blanco.
- Los ejemplos anteriores usan la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Plaspy también es accesible en el dominio d.plaspy.com, pero confirme si su equipo acepta nombres de dominio o requiere una IP.

Envíe estos comandos SMS desde un número reconocido por el dispositivo o siguiendo la guía del fabricante para configuración por SMS. Espere las respuestas de confirmación del dispositivo antes de proceder con la validación.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros aceptados. Confirme siempre los comandos según la versión de firmware del equipo.
- El IDD-212B soporta configuración vía SMS en el formato público mostrado aquí. También pueden existir herramientas del proveedor o métodos OTA disponibles por parte de Castel.
- Elija UDP o TCP según las opciones del firmware del dispositivo y el comportamiento de la red. Plaspy soporta ambos y detecta el protocolo automáticamente.
- Pruebe la configuración en un único equipo en un entorno controlado antes de desplegar a múltiples unidades.
- Mantenga un registro del ID del dispositivo y de cualquier clave secreta SMS modificada para el mantenimiento futuro.

## Por qué usar Plaspy con esta configuración

Configurar el Castel IDD-212B para reportar a Plaspy ofrece una vía sencilla para recopilar datos del vehículo y ponerlos a disposición en una plataforma centralizada de gestión de flotas. Usar el endpoint y puerto compartidos de Plaspy reduce la variación por equipo y la detección automática de protocolos simplifica la incorporación de dispositivos.

Para saber más sobre Plaspy y las configuraciones soportadas visite https://www.plaspy.com. Para detalles actuales y específicos del dispositivo, confirme la información más reciente del fabricante en http://www.castelecom.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
