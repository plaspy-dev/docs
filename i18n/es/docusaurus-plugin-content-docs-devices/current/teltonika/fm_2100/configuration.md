---
slug: /teltonika/fm_2100/configuration
id: fm_2100-configuration
sidebar_label: Configuration
title: Teltonika - FM 2100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FM 2100 y conectarlo a Plaspy con ajustes de servidor compartidos
keywords:
  - Configuración Teltonika FM 2100
  - Configuración FM 2100
  - Configuración del servidor FM 2100
  - Configuración FM 2100 Plaspy
  - Configuración de rastreador GPS Plaspy
  - Rastreo de vehículos FM 2100
  - Configuración del servidor Plaspy
  - Configuración SMS Teltonika
  - Rastreo de flotas FM 2100
  - Configuración de red FM 2100
---

# Teltonika - Configuración FM 2100

Esta página presenta el contexto público de configuración para usar el rastreador Teltonika FM 2100 con Plaspy. Explica los ajustes prácticos de servidor y el flujo de trabajo común para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y datos básicos del equipo a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice. Use esta página como guía práctica y revise siempre la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de configuración

Configurar el FM 2100 para Plaspy prepara el rastreador para comunicarse con el backend de Plaspy y garantiza que el dispositivo sea visible en la plataforma una vez que tenga conectividad de red. La configuración se centra en establecer el APN y los parámetros de servidor correctos, elegir el transporte cuando sea necesario y validar que el dispositivo esté reportando a Plaspy.

- Aplique los ajustes de APN requeridos por su SIM y operador móvil para que los datos GPRS estén disponibles.
- Defina el endpoint de servidor de Plaspy y el puerto compartido para que el rastreador envíe datos al servicio de Plaspy.
- Seleccione UDP o TCP en el dispositivo cuando el método de configuración lo requiera.
- Guarde y aplique la configuración y, opcionalmente, reinicie el rastreador para que los nuevos ajustes entren en vigor.
- Verifique la conectividad y que el dispositivo aparezca en Plaspy para monitoreo e informes de eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte: UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son los ajustes públicos del servidor Plaspy que debe ingresar en su dispositivo o en su comando SMS por lotes como se muestra en la sección de ejemplo.

## Requisitos típicos antes de la configuración

- Una unidad FM 2100 con alimentación instalada o accesible para configuración y pruebas.
- Una SIM celular válida con plan de datos y el APN correcto para su operador móvil.
- Acceso al método de configuración oficial de Teltonika que emplee en su entorno, como comandos SMS por lotes o herramientas del fabricante.
- Número telefónico del dispositivo o método de conexión para enviar comandos SMS si usa configuración por SMS.
- Conocimiento de cómo guardar y aplicar ajustes en el dispositivo y un plan para reiniciarlo si es necesario.
- Acceso a Plaspy para validar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el FM 2100 enviará su ubicación y datos del equipo al endpoint y puerto del servidor Plaspy para que el dispositivo sea visible y gestionable dentro de la plataforma. Plaspy detecta el protocolo del dispositivo automáticamente y acepta datos en el puerto compartido utilizado por los dispositivos compatibles.

- El rastreador informa al servidor Plaspy d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según los ajustes del dispositivo o la preferencia.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar protocolo por separado en la plataforma.
- Una vez reportando, las actualizaciones de ubicación y los mensajes de estado estarán disponibles para monitoreo y uso operativo en Plaspy.
- La validación dentro de Plaspy confirma que el dispositivo se está comunicando correctamente con el endpoint compartido de Plaspy.

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software para el FM 2100, o prepárese para enviar comandos SMS por lotes según lo soporte el dispositivo.  
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor.  
3. Configure el puerto del servidor en 8888 para coincidir con el puerto compartido de Plaspy.  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.  
5. Ingrese los ajustes de APN para su SIM usando el método de configuración oficial, incluyendo usuario y contraseña del APN si es necesario.  
6. Aplique o guarde la configuración y reinicie el dispositivo si su herramienta o el dispositivo lo requieren.  
7. Valide que el dispositivo reporta a Plaspy confirmando visibilidad y mensajes entrantes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El FM 2100 admite comandos SMS por lotes para la configuración básica de parámetros. El siguiente comando público establece parámetros de APN y configura el dispositivo para reportar a Plaspy. Conserve los marcadores y reemplácelos por los valores de su operador antes de enviarlo.

- Ejemplo de comando por lote (conserve los marcadores al reemplazarlos):

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores y campos en el ejemplo de comando:
  - {{apn}} es el APN de la red móvil necesario para la conectividad de datos.
  - {{apnu}} es el nombre de usuario del APN si su operador lo requiere; en caso contrario, déjelo vacío.
  - {{apnp}} es la contraseña del APN si la exige el operador.
  - 2004 se establece en d.plaspy.com para apuntar el rastreador al dominio del servidor Plaspy.
  - 2005 se establece en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos.
  - 2006 se incluye en el lote para definir una bandera relacionada con el transporte en la secuencia de parámetros; consulte la documentación de Teltonika para el significado exacto de sus valores posibles.

- Cómo aplicar el comando:
  - Envíe el texto SMS anterior al número telefónico del dispositivo FM 2100 si usa configuración por SMS.
  - Alternativamente, use las herramientas de configuración de Teltonika que aceptan cadenas de parámetros por lote y aplique los mismos valores.
  - Después de enviar, guarde los ajustes y reinicie el dispositivo si el método de configuración elegido lo requiere.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar nombres de parámetros, números y valores aceptados; confirme siempre los mapeos de parámetros con la documentación de Teltonika para su versión de firmware.
- La selección de transporte TCP versus UDP se realiza en el dispositivo cuando sea necesario; Plaspy acepta ambos y detecta automáticamente el protocolo del dispositivo una vez que llegan los datos al puerto 8888.
- La configuración por SMS es un método público común para dispositivos Teltonika y aquí se demuestra como ejemplo práctico.
- Usar el dominio d.plaspy.com es preferible por claridad, mientras que la IP 54.85.159.138 se proporciona como referencia alternativa.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que no necesita gestionar puertos distintos por dispositivo en el lado de la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FM 2100 para reportar a Plaspy ofrece un camino sencillo para obtener visibilidad en tiempo real de la ubicación y monitoreo remoto básico de los dispositivos en una plataforma centralizada. Para organizaciones que necesitan visibilidad de flotas y activos, esta configuración asegura que el FM 2100 reporte a un endpoint compartido y consistente de Plaspy, de modo que los dispositivos sean visibles y gestionables de forma rápida.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and detailed parameter references please verify information with the manufacturer at https://www.teltonika-gps.com/ before deploying.
