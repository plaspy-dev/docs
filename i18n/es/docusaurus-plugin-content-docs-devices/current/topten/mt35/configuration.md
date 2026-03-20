---
slug: /topten/mt35/configuration
id: mt35-configuration
sidebar_label: Configuration
title: TopTen - MT35 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopTen MT35 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración TopTen MT35
  - Configuración MT35
  - MT35 Plaspy
  - Configuración rastreador GPS TopTen
  - Configuración rastreo de vehículos
  - Configuración servidor rastreador GPS
  - Rastreo de flotas Plaspy
  - Configuración SMS MT35
  - Guía rastreador TopTen
  - Ajustes APN del rastreador
---

# TopTen - Configuración del MT35

Esta página describe el contexto público de configuración para utilizar el rastreador TopTen MT35 con Plaspy. Reúne los pasos y comandos públicamente disponibles que suelen emplearse para preparar un MT35 y que el dispositivo reporte a Plaspy. Use esta guía como referencia práctica para lograr que el equipo se conecte a Plaspy y para verificar los ajustes clave antes de añadir el dispositivo a su cuenta.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, por lo que muchos equipos solo requieren que el mismo endpoint y puerto sean alcanzables. Los pasos de configuración en el lado del fabricante para el MT35 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT35 admite configuración por SMS según la documentación pública y los comandos que siguen reflejan ese flujo público por SMS.

## Resumen de la configuración

Configurar el MT35 para Plaspy prepara el rastreador para enviar datos de ubicación y eventos a la plataforma Plaspy y garantiza que el identificador que usa Plaspy coincida con el IMEI del dispositivo. El objetivo principal es establecer el APN y el endpoint del servidor, verificar la conectividad y confirmar que los reportes aparezcan en Plaspy.

- Configure el APN del rastreador y el servidor GPRS apuntando a Plaspy para que el equipo pueda abrir una conexión de datos.
- Asegúrese de que el identificador del dispositivo usado por Plaspy coincida con el formato de IMEI del MT35 según el fabricante.
- Valide el transporte y los ajustes de puerto para que los datos lleguen al servidor de Plaspy en el puerto compartido.
- Pruebe el envío de reportes y confirme que el rastreador sea visible y envíe actualizaciones periódicas de posición a Plaspy.

## Ajustes del servidor de Plaspy

Al configurar cualquier dispositivo para usar Plaspy, utilice los siguientes ajustes públicos del servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 as supported by the device
- Plaspy automatically detects the tracker protocol so the platform accepts common protocols on the shared port

Tenga en cuenta que todos los dispositivos que reportan a Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 en la configuración del equipo.

## Requisitos previos habituales

- Un MT35 alimentado e instalado o alimentado temporalmente para la configuración.
- Una tarjeta SIM activa con servicio de datos o SMS y las credenciales APN correctas del proveedor móvil.
- Acceso al IMEI del dispositivo para derivar el identificador que usa Plaspy (el MT35 usa el identificador basado en IMEI mostrado por el comando PAR; la guía pública mapea el ID del rastreador a los últimos 14 dígitos del IMEI de 15 dígitos).
- Capacidad para enviar comandos SMS al dispositivo o usar el método o herramienta de configuración oficial del fabricante.
- Conocimientos básicos del APN, usuario APN y contraseña APN requeridos por su proveedor de SIM.
- Una forma de observar que el dispositivo reporta (ya sea vía Plaspy una vez agregado o comprobando las respuestas SMS del dispositivo).

## Cómo se conecta este rastreador a Plaspy

El MT35 se configura para reportar al endpoint y puerto compartido de Plaspy. Una vez que el dispositivo tenga una conexión celular válida y los ajustes de APN/servidor estén en su lugar, abrirá una sesión de datos para enviar reportes de ubicación y eventos a Plaspy, lo que permite que el equipo sea visible y administrable en la plataforma.

- El rastreador apunta al dominio o IP del servidor de Plaspy y al puerto para que los paquetes de datos lleguen a la plataforma.
- El transporte de datos puede configurarse como UDP o TCP según las opciones de firmware del equipo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al puerto compartido, por lo que en muchos casos no es necesario seleccionar el protocolo explícitamente en el servidor.
- Los intervalos regulares de reporte y los parámetros de suspensión/ejecución controlan la frecuencia con la que el MT35 envía actualizaciones de posición a Plaspy.
- Los mensajes de eventos y alarmas se reenvían a Plaspy, donde están disponibles para monitoreo y alertas.

## Flujo de configuración común

1. Acceda al método o software de configuración oficial del fabricante o prepárese para enviar comandos de configuración por SMS según documenta TopTen.
2. Ingrese el dominio o la IP del servidor de Plaspy en la configuración del dispositivo: use d.plaspy.com o 54.85.159.138 como endpoint del servidor.
3. Establezca el puerto del servidor en 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP en el dispositivo si el firmware del MT35 exige seleccionar el transporte.
5. Configure el APN y las credenciales APN de su proveedor en el mismo comando o herramienta de configuración.
6. Aplique o guarde la configuración y reinicie el MT35 si el dispositivo requiere un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad en la plataforma o usando el comando SMS de verificación del rastreador.

## Ejemplos de comandos de configuración

El MT35 admite configuración vía SMS según la documentación pública. Los siguientes comandos son los comandos SMS públicamente documentados para restaurar los valores de fábrica, establecer el APN y el servidor GPRS y consultar los ajustes. Conserve los marcadores de posición cuando los reemplace por los valores de su operador.

- Restablecimiento opcional a valores de fábrica (utilícelo solo cuando sea necesario o durante la configuración inicial):
```text
111111CLR
```

- Establecer APN y configuración del servidor GPRS para apuntar a Plaspy
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explicación de marcadores de posición:
- {{apn}} = nombre del APN proporcionado por su operador
- {{apnu}} = nombre de usuario APN si lo requiere el operador (dejar vacío si no aplica)
- {{apnp}} = contraseña APN si lo requiere el operador (dejar vacío si no aplica)

Este comando configura el dispositivo para usar la IP del servidor Plaspy 54.85.159.138 en el puerto 8888 e incluye parámetros de reporte y suspensión (tal como se muestra en el comando público). También es aceptable usar el dominio del servidor d.plaspy.com en lugar de la IP cuando el dispositivo soporta nombres de dominio.

- Verificar los ajustes WWW actuales en el rastreador:
```text
111111WWW:
```

Nota sobre el identificador del rastreador
- Los rastreadores TopTen funcionan en Plaspy con el ID de rastreador que corresponde a los últimos 14 dígitos del IMEI tal como se informa en el comando PAR. Para un IMEI de 15 dígitos, elimine el primer dígito para obtener el identificador que el rastreador reporta a Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos SMS y los parámetros disponibles. Confirme los comandos según la documentación del firmware del MT35.
- El dispositivo admite configuración por SMS como se muestra arriba; también pueden existir herramientas de software o utilidades para PC proporcionadas por el fabricante que simplifiquen la configuración masiva.
- Elija UDP o TCP según su entorno de red; Plaspy acepta cualquiera de los dos transportes en el puerto común y detectará el protocolo automáticamente.
- Mantenga las credenciales APN correctas y pruebe la conectividad de datos de forma independiente antes de confiar en el reporte al servidor.
- Todos los dispositivos configurados para Plaspy deben usar el puerto 8888 para que la plataforma reciba telemetría en el endpoint compartido.

## Por qué usar Plaspy con esta configuración

Usar el MT35 con Plaspy ofrece una vía directa para obtener visibilidad del vehículo y monitoreo de eventos. Al configurar el APN y apuntar el dispositivo al endpoint del servidor de Plaspy en el puerto compartido, las organizaciones pueden centralizar reportes de ubicación, alarmas y datos operativos de una flota MT35 en una sola plataforma para seguimiento y análisis.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration methods and firmware behavior with the official manufacturer documentation at http://www.t10.cn since manufacturer specifications and setup steps can change over time.
