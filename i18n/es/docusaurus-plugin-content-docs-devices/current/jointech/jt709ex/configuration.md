---
slug: /jointech/jt709ex/configuration
id: jt709ex-configuration
sidebar_label: Configuration
title: Jointech - JT709Ex Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech JT709Ex para integrarlo con Plaspy incluye servidor y comandos SMS
keywords:
  - Configuración Jointech JT709Ex
  - Configuración JT709Ex para Plaspy
  - Guía de configuración Jointech
  - Configuración servidor JT709Ex
  - Configuración de rastreador Plaspy
  - Configuración plataforma GPS Jointech
  - Configuración SMS JT709Ex
  - Dispositivos compatibles con Plaspy
  - Configuración APN del rastreador
  - Integración monitoreo de flotas
---

# Jointech - Configuración JT709Ex

Esta página explica el contexto público de configuración para usar el Jointech JT709Ex con Plaspy. Describe los ajustes del servidor compartido de Plaspy que deberá configurar en el equipo y resume los pasos prácticos para preparar el JT709Ex, de modo que Plaspy pueda recibir sus mensajes de estado y telemetría. Cuando los comandos del fabricante están disponibles públicamente se incluyen aquí como ejemplos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del JT709Ex y los fragmentos de configuración por SMS incluidos a continuación se presentan como orientación pública; verifique los procedimientos del fabricante vigentes para su dispositivo y versión de firmware.

## Resumen de configuración

El objetivo de la configuración es apuntar el JT709Ex a Plaspy para que el estado de bloqueo, las alertas por manipulación y los mensajes de estado aparezcan en la plataforma Plaspy. Este proceso normalmente configura el endpoint del dispositivo, valida la conectividad de datos móviles o telemetría y verifica que la plataforma reciba los primeros mensajes.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así los eventos lleguen a su cuenta.
- Ingrese los detalles de red necesarios, como el APN y el host del servidor, para que el dispositivo establezca el enlace de datos.
- Seleccione opciones de transporte si el dispositivo requiere elegir entre UDP y TCP.
- Guarde y aplique los ajustes, luego confirme que el dispositivo se registre y reporte en Plaspy.
- Valide la visibilidad de los eventos en Plaspy para que las alertas de manipulación y de bloqueo estén disponibles junto con las señales del rastreador GPS.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una unidad JT709Ex alimentada y accesible con las baterías o la fuente de energía necesarias conectadas.
- Acceso al ID del equipo necesario para los comandos SMS de configuración del fabricante o para la herramienta de gestión del dispositivo.
- Una tarjeta SIM con APN válido y datos móviles si el equipo usará GPRS o reporte por celular.
- Capacidad para enviar mensajes SMS al número del dispositivo cuando la provisión por SMS sea el método soportado por el fabricante.
- Acceso al método o software oficial de configuración de Jointech para pasos específicos de firmware.
- Confirmación de la cadena APN correcta y, si aplica, el usuario y contraseña del APN proporcionados por su operador móvil.

## Cómo se conecta este tracker a Plaspy

El JT709Ex se configura para enviar mensajes de estado y eventos al endpoint y puerto compartido de Plaspy para que Plaspy pueda ingerir información de bloqueo y manipulación. Dependiendo del firmware del dispositivo y la conectividad habilitada, la unidad puede reportar por los enlaces de telemetría disponibles al endpoint de Plaspy.

- El dispositivo envía eventos de bloqueo y manipulación a Plaspy para que aparezcan en los paneles y registros de la plataforma.
- Los mensajes de estado se entregan al dominio o IP del servidor Plaspy en el puerto 8888 para monitoreo centralizado.
- Plaspy recibe esos mensajes y detecta automáticamente el protocolo del rastreador empleado por el dispositivo.
- Elegir UDP o TCP en el dispositivo determina el transporte pero no cambia el endpoint del servidor, que sigue siendo d.plaspy.com o 54.85.159.138 puerto 8888.
- Una vez activo el reporte, Plaspy puede correlacionar los eventos del JT709Ex con las señales del rastreador GPS y las reglas de flota.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de Jointech según lo recomiende el fabricante.
2. Ingrese el endpoint del servidor Plaspy ya sea como d.plaspy.com o como la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el que Plaspy utiliza para todos los equipos.
4. Seleccione UDP o TCP en los ajustes de transporte del dispositivo si es necesario elegir un transporte.
5. Aplique o guarde la configuración en el dispositivo o mediante la provisión por SMS.
6. Reinicie el equipo si las instrucciones del fabricante lo requieren para aplicar cambios de red.
7. Verifique que el dispositivo reporte a Plaspy revisando los mensajes y eventos entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La configuración pública del JT709Ex incluye comandos de provisión por SMS para establecer el servidor GPRS y el APN. Reemplace los marcadores con los valores de su equipo antes de enviar.

- Establecer el servidor GPRS y el APN
Envíe este SMS al dispositivo, sustituyendo {{trackerID}} por el ID del equipo y [apn] por el APN de su operador móvil.

```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```

- Establecer usuario y contraseña del APN
Si su APN requiere usuario y contraseña, envíe este SMS reemplazando {{trackerID}}, [apnu] y [apnp] según corresponda. Si su APN no tiene credenciales, este paso puede omitirse.

```
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```

Notas sobre los marcadores
- {{trackerID}} — el ID único del dispositivo requerido por el rastreador para la provisión por SMS.
- [apn] — la cadena APN proporcionada por su operador móvil.
- [apnu] — nombre de usuario del APN cuando el operador lo solicita.
- [apnp] — contraseña del APN cuando el operador lo solicita.

Envíe estos cuerpos de SMS al número del dispositivo usando su teléfono o una pasarela SMS según lo documente Jointech. La sintaxis exacta del SMS y el alcance requerido pueden variar según la versión de firmware.

## Notas de configuración

- Las versiones de firmware del fabricante y las variantes regionales pueden cambiar los formatos de comando o los parámetros requeridos; siempre consulte la documentación actual de Jointech.
- La configuración puede realizarse por SMS como se muestra o mediante las herramientas de Jointech si están disponibles; siga el método recomendado para su despliegue.
- Cuando se le indique, elija UDP o TCP según sus requisitos de red y del dispositivo — Plaspy aceptará cualquiera de los dos en el puerto 8888.
- Tras cambiar el APN o los ajustes del servidor, permita tiempo para que el dispositivo se registre en la red móvil y establezca una sesión de datos.
- Plaspy detecta automáticamente el protocolo usado por el rastreador una vez que los mensajes llegan al puerto compartido.

## Por qué usar Plaspy con esta configuración

Usar el JT709Ex con Plaspy centraliza el estado de bloqueo, las alertas por manipulación y los mensajes de estado para que los operadores puedan correlacionar eventos de seguridad con la ubicación del rastreador GPS y la telemetría de la flota. Esta visibilidad combinada facilita una respuesta más rápida a incidentes, proporciona registros de auditoría de eventos de desbloqueo y fortalece los flujos de trabajo antirobo en entornos regulados y peligrosos.

Para saber más sobre Plaspy y cómo puede integrar la telemetría de dispositivos en los flujos de trabajo de flota visite https://www.plaspy.com. Para los métodos de configuración específicos de dispositivo, notas de firmware y detalles del fabricante más actualizados, consulte la documentación oficial de Jointech en https://www.jointcontrols.com/
