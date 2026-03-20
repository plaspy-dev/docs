---
slug: /globalsat/gtr_388nb/configuration
id: gtr_388nb-configuration
sidebar_label: Configuration
title: GlobalSat - GTR-388NB Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el GlobalSat GTR 388NB a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración GlobalSat GTR 388NB
  - Configuración GTR 388NB
  - Configuración GTR 388NB Plaspy
  - Configuración servidor GTR 388NB
  - Configuración rastreador NB IoT
  - Configuración rastreador GPS Plaspy
  - Configuración dispositivo rastreo vehicular
  - Comandos SMS rastreador GPS
  - Ajustes servidor Plaspy
  - Configuración rastreador para gestión de flotas
---

# GlobalSat - GTR-388NB Configuración

Esta página describe el contexto público de configuración para usar el GlobalSat GTR-388NB con Plaspy. Se enfoca en los pasos prácticos y en los parámetros públicos necesarios para apuntar el rastreador a Plaspy, habilitar el seguimiento en tiempo real, la entrega de telemetría y la visibilidad en la plataforma. Cuando el fabricante publica comandos, esta página extrae y explica esos comandos en formato claro.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir la documentación del fabricante cuando sea necesario. El GTR-388NB es un rastreador NB‑IoT que envía paquetes UDP; la configuración pública a continuación incluye ejemplos de comandos SMS y orientación sobre el cálculo de checksum extraídos del contenido proporcionado por el fabricante.

## Resumen de configuración

El proceso de configuración prepara el GTR-388NB para comunicarse de manera fiable con Plaspy, asegurando que el dispositivo envíe ubicación y telemetría al endpoint y puerto correctos de Plaspy. El equipo puede configurarse mediante comandos SMS como los que aparecen en el contenido público, y Plaspy detectará automáticamente el protocolo del rastreador cuando lleguen los paquetes al puerto compartido.

- Configure el APN y los valores de red para que el rastreador tenga conectividad móvil NB IoT
- Apunte el rastreador a los ajustes de servidor de Plaspy para que los paquetes lleguen al endpoint de Plaspy
- Aplique y guarde la configuración; reinicie el dispositivo si es necesario
- Verifique que el rastreador reporte en Plaspy y que la plataforma muestre la ubicación y telemetría en vivo
- Use comandos SMS con protección por checksum para una entrega segura cuando utilice la configuración vía SMS

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos previos a la configuración

- Un GTR-388NB alimentado e instalado según las indicaciones del fabricante
- Una micro SIM provisionada y los detalles de APN correctos para conectividad NB IoT cuando sea requerido
- El número IMEI del dispositivo disponible para usar en los comandos de configuración
- Acceso a una pasarela SMS o a un teléfono capaz de enviar mensajes SMS de configuración si va a usar este método
- Guía de configuración del fabricante o herramientas de referencia para el comportamiento específico del dispositivo y notas de firmware

## Cómo se conecta este rastreador a Plaspy

El GTR-388NB transmite paquetes NB‑IoT UDP al servidor configurado y puerto donde Plaspy los ingiere para su visualización y procesamiento. Una vez apuntado a Plaspy, la plataforma convierte los paquetes entrantes en marcadores de mapa en tiempo real, eventos y reportes de telemetría.

- El rastreador envía reportes al endpoint y puerto compartidos de Plaspy
- Los paquetes llegan por el puerto 8888, donde Plaspy detecta automáticamente el protocolo
- Datos de ubicación, movimiento y eventos se reenvían a Plaspy para seguimiento en tiempo real y reproducción de historial
- Plaspy interpreta la telemetría y genera alertas para geocercas, manipulación y entradas de emergencia
- La visibilidad en Plaspy habilita flujos de trabajo de gestión de flotas, registro de viajes y monitoreo remoto

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de GlobalSat o al software documentado por el fabricante para el GTR-388NB.
2. Asegúrese de que el dispositivo tenga una SIM válida y el APN configurado para acceder a la red móvil.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 según la opción que soporte el dispositivo.
4. Establezca el puerto en 8888, que Plaspy usa para todos los dispositivos.
5. Elija UDP o TCP si el equipo requiere selección de transporte; el GTR-388NB suele usar UDP para NB IoT.
6. Aplique o guarde la configuración y envíe el comando SMS de configuración si usa SMS.
7. Reinicie o encienda nuevamente el dispositivo si el fabricante lo exige para aplicar los nuevos ajustes.
8. Valide que el dispositivo reporte a Plaspy y confirme la visibilidad en el panel de la plataforma o verificando los mensajes entrantes del equipo.

## Ejemplos de comandos de configuración

Nota sobre el formato proporcionado por el fabricante
- El fabricante muestra una cadena de formato usada por Plaspy como ejemplo TSPRXAB27GHKLMnaicz*U!
- Los comandos SMS públicos que siguen fueron tomados del contenido de configuración facilitado por el fabricante e incluyen marcadores que usted debe reemplazar.

Comando de configuración principal
- Reemplace {{imei}} por el IMEI del dispositivo
- Reemplace [apn] por el nombre APN de su operador móvil
- Reemplace [apnu] por el usuario APN si su operador lo requiere
- Reemplace [apnp] por la contraseña APN si su operador lo requiere
- {{checksum}} es una cadena hexadecimal de dos caracteres en mayúsculas calculada sobre el texto del comando antes del asterisco según se describe más abajo

GTR-388NB setup SMS command
```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Comando de reinicio (opcional, use cuando sea necesario para aplicar ajustes)
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Cálculo del checksum
- El script proporcionado por el fabricante calcula el checksum realizando un XOR de los códigos de carácter de la cadena del comando hasta pero sin incluir el asterisco, luego convierte el resultado a una cadena hexadecimal de dos dígitos en mayúsculas. Inserte ese checksum en el marcador {{checksum}} o {{checksumreeboot}}.
- Si su herramienta del fabricante calcula el checksum automáticamente, úsela. De lo contrario, calcule el checksum con el método XOR y conversión a hexadecimal antes de enviar el SMS.

Nota sobre el nombre de host del servidor
- Los comandos anteriores usan la IP del servidor Plaspy 54.85.159.138 según el contenido público. Plaspy también publica el dominio d.plaspy.com; use la forma que soporte el firmware de su equipo al configurar el endpoint del servidor.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el formato exacto del comando SMS o los parámetros soportados; siempre confirme los comandos según las notas de firmware del dispositivo.
- Los ejemplos de configuración anteriores están basados en SMS tal como se publicaron; si dispone de una herramienta de configuración del fabricante, úsela como alternativa.
- Elija UDP o TCP de acuerdo con el firmware del dispositivo y las características de la red. El GTR-388NB suele usarse sobre UDP para NB IoT, pero el endpoint de Plaspy acepta ambos transportes.
- Asegúrese de los ajustes APN correctos para el servicio NB IoT y verifique que el perfil de la SIM soporte las bandas NB IoT necesarias para su despliegue.
- El checksum y la inclusión del IMEI son requeridos por los comandos publicados para asegurar la correcta aplicación de ajustes cuando se envían por SMS.

## Por qué usar Plaspy con esta configuración

Usar el GlobalSat GTR-388NB con Plaspy ofrece una vía sencilla hacia la visibilidad de la flota y el monitoreo remoto para vehículos livianos y flotas de micromovilidad. Apuntar el rastreador a Plaspy mediante el servidor y el puerto compartidos permite una ingestión rápida de telemetría NB‑IoT UDP, de modo que pueda implementar monitoreo en tiempo real, registro de trayectos y flujos de alertas sin la complejidad de configurar un servidor por cada dispositivo.

Learn more about Plaspy and how it ingests tracker telemetry at https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and manufacturer documentation please verify information at https://www.globalsat.com.tw/ as manufacturer specifications and setup methods can change over time.
