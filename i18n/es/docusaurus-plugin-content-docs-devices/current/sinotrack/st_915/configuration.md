---
slug: /sinotrack/st_915/configuration
id: st_915-configuration
sidebar_label: Configuration
title: SinoTrack - ST-915 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SinoTrack ST-915 con Plaspy mediante comandos SMS y ajustes compartidos del servidor Plaspy
keywords:
  - Configuración SinoTrack ST-915
  - Configuración ST-915 para Plaspy
  - Configuración de servidor ST-915
  - Comandos SMS SinoTrack
  - Configurar APN ST-915
  - Integración rastreador GPS Plaspy
  - Configuración GPRS ST-915
  - Guía de configuración SinoTrack
  - Ajustes servidor Plaspy
  - Configuración plataforma seguimiento ST-915
---

# SinoTrack - Configuración del ST-915

Esta página documenta el contexto público de configuración para usar el rastreador SinoTrack ST-915 con Plaspy. Describe los ajustes prácticos de servidor y el flujo de comandos SMS que se emplean habitualmente para apuntar el ST-915 a Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría por GPRS. Utilice esta guía para preparar el equipo antes de integrarlo y para verificar los pasos básicos antes de registrar los dispositivos en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando la unidad reporta a la plataforma. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, el lote de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos que aparecen abajo como una guía pública práctica basada en la interfaz SMS del dispositivo y el patrón de configuración público del ST-915.

## Descripción general de la configuración

El objetivo de configurar el ST-915 para Plaspy es asegurar que el rastreador pueda alcanzar el punto de conexión de Plaspy por GPRS y entregar de forma fiable los mensajes de posición y telemetría. La configuración típica utiliza la interfaz de comandos SMS del dispositivo para ajustar el APN, el endpoint del servidor, los intervalos de reporte y el modo de operación.

- Configure el APN y las credenciales del operador para que el dispositivo establezca una sesión GPRS.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para el reporte en vivo.
- Defina intervalos básicos de reporte para que el equipo envíe actualizaciones de posición con la cadencia requerida.
- Cambie la unidad al modo de reporte por GPRS y verifique los ajustes con el comando de verificación.
- Compruebe que el dispositivo aparece en Plaspy y que se reciben mensajes de ubicación y estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la instalación

- Un equipo ST-915 cargado con una tarjeta SIM 2G compatible instalada y un plan de datos activo que soporte GPRS y SMS.
- Nombre de APN y, opcionalmente, usuario y contraseña del APN proporcionados por el operador móvil.
- Acceso a la interfaz de comandos SMS del dispositivo o a la herramienta del proveedor que envía comandos SMS.
- Conocimiento del IMEI del dispositivo para identificarlo y registrarlo en Plaspy.
- Un teléfono móvil o puerta de enlace SMS capaz de enviar los mensajes de configuración al rastreador.
- Verificación básica de colocación y alimentación para que el dispositivo obtenga una posición GNSS y establezca la sesión GPRS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST-915 envía posiciones GNSS y telemetría por GSM GPRS al endpoint y puerto de Plaspy configurados. Plaspy recibe los mensajes, detecta automáticamente el protocolo y asigna los datos entrantes al dispositivo por su IMEI o ID de reporte, de modo que el equipo sea visible y gestionable en la plataforma.

- El rastreador reporta al endpoint y puerto compartidos de Plaspy para todos los dispositivos compatibles.
- Las actualizaciones de posición y la telemetría se envían por GPRS a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Plaspy detecta y decodifica el protocolo del rastreador de forma automática en la mayoría de los casos, sin necesidad de seleccionar el protocolo manualmente.
- La cadencia de reporte y los eventos son controlados por los comandos de intervalo de reporte del rastreador.
- Una vez que comienza el reporte, Plaspy muestra posición en vivo, historial y mensajes de estado para monitoreo operativo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de SinoTrack o al software del proveedor, normalmente la interfaz de comandos SMS descrita en la documentación del ST-915.
2. Ingrese d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
3. Configure el puerto 8888 para el servidor GPRS y elija UDP o TCP si el equipo requiere selección explícita del transporte.
4. Proporcione los datos del APN del operador usando el comando APN e incluya usuario y contraseña si el operador los solicita.
5. Aplique o guarde la configuración enviando los comandos SMS y cambie el dispositivo a modo GPRS.
6. Reinicie o permita que el dispositivo se reinicie si el rastreador lo requiere después de la configuración.
7. Valide que el equipo reporte a Plaspy revisando el dispositivo en la plataforma o solicitando el comando de verificación de ajustes.

## Comandos de configuración de ejemplo

El ST-915 usa comandos SMS para la configuración pública. A continuación están los comandos comunes en el orden recomendado por el conjunto de comandos público de SinoTrack. Preserve exactamente los marcadores de posición al sustituirlos por los valores de su operador.

- Reinicio inicial opcional de fábrica (usar solo si necesita un inicio limpio)
```
RESET
```

- Ajustar la zona horaria a UTC 0
```
8960000E00
```

- Configurar el APN del operador
Nota: reemplace los marcadores con los valores de su operador. {{apn}} es el nombre del APN. {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN. Si su operador no requiere usuario o contraseña, deje esos marcadores vacíos según las reglas del dispositivo.
```
8030000 {{apn}} {{apnu}} {{apnp}}
```

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP pública y el puerto
```
8040000 54.85.159.138 8888
```

- Establecer intervalo de actualización cuando el dispositivo está encendido
```
8050000 60
```

- Establecer intervalo de actualización cuando el dispositivo está apagado (sueño o bajo consumo)
```
8090000 60
```

- Cambiar el dispositivo al modo GPRS
```
7100000
```

- Verificar la configuración actual y leer el ID de reporte
```
RCONF
```

Estos comandos deben enviarse como mensajes SMS simples al número del dispositivo. Mantenga el orden anterior cuando realice una configuración desde cero: reset solo si es necesario, luego zona horaria, APN, servidor, intervalos de reporte y finalmente habilite el modo GPRS. Use RCONF para comprobar que los ajustes se aplicaron correctamente.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos; verifique la compatibilidad de los comandos con la versión de firmware del dispositivo antes de desplegar en masa.
- Algunas instalaciones prefieren TCP sobre UDP para persistencia de sesión, mientras que otras usan UDP por menor sobrecarga. Elija UDP o TCP según la cobertura y la confiabilidad del operador.
- El ST-915 soporta configuración por SMS en el conjunto de comandos público anterior; utilice la documentación oficial de SinoTrack o las herramientas del proveedor si prefiere un método de aprovisionamiento desde escritorio.
- Preserve exactamente los marcadores del APN al redactar los comandos SMS y confirme las credenciales del APN con el operador móvil.
- El comando de servidor GPRS mostrado usa la IP del servidor Plaspy. Si el firmware de su proveedor soporta nombres DNS puede usar d.plaspy.com donde esté disponible, de lo contrario use la IP 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Usar el ST-915 con Plaspy ofrece una ruta sencilla para el rastreo en tiempo real y el reporte de telemetría en activos y vehículos que se benefician de larga duración de batería y hardware resistente. La configuración por SMS del APN y del servidor permite a integradores e instaladores apuntar rápidamente los dispositivos a Plaspy sin herramientas de aprovisionamiento especializadas, y Plaspy gestiona la detección automática del protocolo para que los mensajes entrantes se decodifiquen y se atribuyan al dispositivo correcto.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo Sinotrack, notas de firmware y documentación detallada del producto verifique la información actual con el fabricante en https://www.sinotrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
