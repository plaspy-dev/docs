---
slug: /ev/ev_07b/configuration
id: ev_07b-configuration
sidebar_label: Configuration
title: EV - EV-07B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EV EV-07B con Plaspy, ajustes de servidor, comandos SMS y pasos esenciales
keywords:
  - configuración EV EV-07B
  - instalación EV EV-07B
  - configuración de servidor EV EV-07B
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS personal
  - configuración de colgante GPS portátil
  - ajustes del servidor Plaspy
  - configuración de colgante SOS
  - comandos SMS EV
  - integración EV EV-07B Plaspy
---

# EV - EV-07B Configuración

Esta página explica el contexto público de configuración para usar el rastreador Eview EV-07B con Plaspy. Reúne los ajustes del servidor Plaspy y los comandos SMS del fabricante que están disponibles públicamente, de modo que usted pueda preparar el dispositivo para reportar ubicación y eventos SOS a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El EV-07B soporta comandos de configuración por SMS y puede requerir que el fabricante habilite la opción de cambio de servidor en algunas versiones de firmware.

## Resumen de la configuración

Este proceso prepara el EV-07B para enviar ubicación, SOS y datos de telemetría a Plaspy, de modo que los equipos de monitoreo y contactos autorizados obtengan visibilidad oportuna. El objetivo es configurar el endpoint del servidor Plaspy, confirmar los ajustes celulares y APN, y validar que la unidad reporte correctamente a Plaspy.

- Configure el dispositivo para que reporte al endpoint del servidor Plaspy y al puerto compartido.
- Establezca o verifique los datos del APN para que el dispositivo pueda alcanzar Plaspy a través de la red celular.
- Aplique la zona horaria del dispositivo y cualquier ajuste regional que utilice el firmware.
- Si el firmware lo requiere, solicite al fabricante que habilite la opción de cambio de servidor.
- Valide el reporte en Plaspy para verificar que el dispositivo aparezca en el mapa y envíe eventos SOS.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Un dispositivo EV-07B cargado y funcional con la versión celular regional correcta para su mercado.
- Un plan de servicio celular activo y una SIM operativa para que el dispositivo establezca comunicaciones por datos o SMS.
- Los ajustes APN correctos del operador de la SIM listos para aplicar al configurar el rastreador.
- Acceso a la lista de comandos SMS del fabricante o a la herramienta oficial de configuración Eview para el firmware de su dispositivo.
- Capacidad para contactar al fabricante o proveedor para habilitar el cambio de servidor si el firmware restringe esa opción.
- Una cuenta Plaspy y acceso al soporte o documentación de Plaspy para validar el dispositivo una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el EV-07B envía actualizaciones de ubicación, alarmas SOS y telemetría básica al endpoint y puerto compartido de Plaspy para que los eventos aparezcan en los mapas, registros y flujos de alerta de Plaspy.

- El dispositivo reporta mensajes de ubicación y eventos a d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware y la configuración del dispositivo; Plaspy detecta el protocolo automáticamente.
- Las activaciones del botón SOS y las alertas se reenvían a Plaspy para notificación y registro inmediatos.
- La telemetría y las actualizaciones de estado, como nivel de batería y conectividad, son visibles en Plaspy para monitoreo y mantenimiento.

## Flujo común de configuración

1. Acceda al método oficial de configuración Eview para el EV-07B, como la interfaz de comandos SMS o la herramienta del proveedor.
2. Prepare los datos del APN para el operador del dispositivo y cualquier marcador de posición como [apn], [apnu] y [apnp] si se requieren.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en el área de configuración de servidor del dispositivo.
4. Establezca el puerto en 8888 tal como lo requiere Plaspy.
5. Elija UDP o TCP si el dispositivo solicita selección de transporte; de lo contrario, confíe en la detección automática de Plaspy.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita un reboot para aplicar los cambios.
7. Valide que el EV-07B reporte a Plaspy confirmando que el dispositivo aparece en el mapa de Plaspy y que llegan eventos de prueba.

## Comandos de configuración de ejemplo

El EV-07B soporta configuración mediante SMS. El fabricante proporciona comandos SMS de ejemplo. La contraseña por defecto del dispositivo usada en estos ejemplos es 123456. Preserve los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos con los valores de APN de su operador cuando envíe los comandos.

1. Ajustar la zona horaria a UTC 0
```
123456L+00
```

2. Establecer el APN del operador
```
123456S1,[apn]
```
Si su operador requiere usuario y contraseña de APN, inclúyalos como campos opcionales:
```
123456S1,[apn],[apnu],[apnp]
```
- [apn] es el APN del operador.
- [apnu] es el usuario del APN si es requerido.
- [apnp] es la contraseña del APN si es requerida.

3. Establecer la IP y puerto del servidor Plaspy
Nota: algunas versiones de firmware requieren que el fabricante habilite la capacidad de cambiar la dirección del servidor. Contacte a Eview si el comando no se aplica.
```
123456I1,54.85.159.138,8888
```
- Este comando apunta el dispositivo directamente a la IP y puerto del servidor Plaspy. Alternativamente, configure d.plaspy.com si su dispositivo admite nombres de dominio.

## Observaciones de configuración

- El firmware del fabricante y las variantes de mercado pueden cambiar la disponibilidad y la sintaxis de los comandos; confirme los comandos con la documentación Eview para su revisión de firmware.
- La configuración por SMS está soportada como se muestra, pero algunos lotes de dispositivos pueden requerir herramientas del proveedor o un flag de firmware habilitado para cambiar el servidor de reporte.
- Elija UDP o TCP según la opción del dispositivo; Plaspy detectará automáticamente el protocolo una vez que el dispositivo empiece a enviar datos al puerto 8888.
- Preserve los marcadores de APN y verifique las credenciales del operador antes de enviar comandos para evitar pérdida de conectividad.
- Si los comandos de cambio de servidor son ignorados, contacte al proveedor para solicitar que habiliten la función de cambio de servidor para su unidad.

## Por qué usar Plaspy con esta configuración

Usar el EV-07B con Plaspy ofrece a cuidadores, servicios de monitoreo y equipos de seguridad una forma sencilla de recibir alertas SOS, actualizaciones de ubicación y telemetría en una sola plataforma. Los ajustes de servidor compartidos y la detección automática de protocolos de Plaspy facilitan el despliegue de múltiples unidades sin cambios de puerto por dispositivo, y el diseño portátil del EV-07B se adapta a casos de uso que requieren conciencia inmediata de la seguridad personal.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify information on the official vendor site http://www.eviewltd.com/ as configuration methods and firmware behavior may change over time.
