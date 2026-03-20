---
slug: /coban/bn_405d/configuration
id: bn_405d-configuration
sidebar_label: Configuration
title: Coban - BN-405D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban BN-405D en Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración Coban BN-405D
  - Configuración BN-405D para Plaspy
  - BN-405D configuración Plaspy
  - Configuración rastreador Coban
  - Configuración rastreador GPS para Plaspy
  - Configuración rastreador de vehículo
  - Rastreador de flota Coban BN-405D
  - Configuración servidor Plaspy
  - Comandos SMS BN-405D
  - Configuración plataforma GPS Coban
---

# Coban - BN-405D Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Coban BN-405D con Plaspy. Se centra en los pasos prácticos y en los ajustes de servidor orientados al usuario que se requieren para apuntar un BN-405D a Plaspy y habilitar el seguimiento y la telemetría en tiempo real. Cuando están disponibles, se incluyen comandos SMS de ejemplo proporcionados por el fabricante para facilitar la aplicación de los parámetros que se usan habitualmente al incorporar dispositivos a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como punto de partida práctico y verifique los detalles específicos del equipo en la documentación oficial de Coban cuando sea necesario.

## Resumen de configuración

El objetivo al configurar un BN-405D para Plaspy es preparar el equipo para que envíe de forma fiable datos de posición, estado y alarmas a la plataforma Plaspy. Esto implica aplicar los ajustes de red, elegir el transporte preferido y validar que el dispositivo reporte correctamente al endpoint y puerto compartidos de Plaspy.

- Configurar el rastreador para que use los ajustes de servidor de Plaspy y así la posición y telemetría lleguen a la plataforma.
- Aplicar APN y credenciales cuando el dispositivo requiera conectividad de datos móviles.
- Seleccionar el modo de transporte (UDP o TCP) y establecer el servidor y puerto de Plaspy.
- Validar el envío de datos del dispositivo y confirmar la visibilidad en Plaspy.
- Opcionalmente, usar comandos SMS para cambios de parámetros o para comprobar la configuración desde el campo.

## Ajustes de servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos integrados con Plaspy usan el mismo puerto y Plaspy intentará identificar automáticamente el protocolo del rastreador en el endpoint del servidor compartido.

## Requisitos típicos antes de la configuración

- Un BN-405D alimentado e instalado o conectado a una fuente de prueba con alimentación disponible.
- Una SIM celular con servicio de datos activo y capacidad de SMS si va a usar comandos SMS para configurar.
- Acceso al método de configuración admitido por la unidad, como comandos SMS o la herramienta del fabricante.
- La contraseña por defecto del dispositivo si los comandos SMS la requieren (en los ejemplos públicos se usa 123456).
- Información del APN del operador móvil para habilitar la conectividad GPRS (puede usar marcadores de posición en los comandos).
- Un número telefónico o un gateway SMS para enviar mensajes de configuración al dispositivo si va a aplicar ajustes por SMS.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el BN-405D envía posición y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma muestre ubicación en vivo, notificaciones de eventos y recorridos históricos.

- El dispositivo se configura para enviar paquetes GPRS/TCP o GPRS/UDP a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe las actualizaciones de ubicación y telemetría y mapea esos flujos al registro del vehículo en la plataforma.
- Las alarmas y eventos de sensores digitales reportados por el dispositivo se reenviarán a Plaspy para alertas y automatizaciones.
- La detección automática de protocolo de Plaspy determina el manejador correcto para el dispositivo sin que el usuario tenga que seleccionar el protocolo manualmente.
- El uso de un servidor compartido y un puerto consistente simplifica la incorporación de múltiples rastreadores a la misma cuenta de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Coban para el BN-405D, normalmente el conjunto de comandos SMS o las herramientas de configuración del fabricante.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 y elija el protocolo de transporte (UDP o TCP) si el equipo requiere selección de transporte.
4. Proporcione el APN y las credenciales de APN del operador móvil si la SIM lo requiere.
5. Aplique o guarde la configuración y ponga el dispositivo en modo GPRS si es necesario.
6. Reinicie o realice un ciclo de energía del dispositivo si el fabricante lo recomienda o después de aplicar ajustes de servidor y APN.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo en la plataforma y usando cualquier comando de verificación disponible en el rastreador.

## Comandos de configuración de ejemplo

El BN-405D admite la configuración vía SMS. Los siguientes comandos son ejemplos públicos proporcionados por el fabricante. Envíe cada comando como SMS al número del dispositivo. La contraseña de ejemplo usada es 123456, que es el valor de fábrica en los ejemplos.

- Reinicio opcional a configuración de fábrica (usar solo cuando sea necesario o durante la configuración inicial)
```sms
begin123456
```

- Configurar la zona horaria a UTC 0
```sms
time zone123456 0
```

- Establecer el APN (reemplace {{apn}} por el APN de su operador)
```sms
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN (reemplace los marcadores según corresponda)
```sms
up123456 {{apnu}} {{apnp}}
```

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```sms
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de actualización de posición (ejemplo del fabricante)
```sms
fix060s060s***n123456
```

- Cambiar el dispositivo a modo GPRS y seleccionar UDP o TCP según corresponda
```sms
gprs123456,1,1
```
o, si se admite la forma más simple:
```sms
gprs123456
```

- Comprobar la configuración actual del dispositivo
```sms
check123456
```

- Activar la transmisión mejorada de sensores o reporte de sensor de combustible (ejemplo del fabricante)
```sms
protocol123456 18
```

Notas sobre marcadores y uso:
- {{apn}} = la cadena APN de su operador móvil.
- {{apnu}} y {{apnp}} = usuario y contraseña del APN cuando el operador los requiere.
- Reemplace la contraseña de ejemplo 123456 por la contraseña real del dispositivo si se ha cambiado desde el valor de fábrica.
- Use el comando de reinicio de fábrica solo cuando sea necesario o durante la configuración inicial y verifique el comportamiento del equipo después de un reseteo.

## Notas de configuración

- Las versiones de firmware del fabricante y el comportamiento del dispositivo pueden cambiar con el tiempo; la sintaxis SMS y los comandos disponibles pueden variar según el firmware.
- La configuración vía SMS es útil para cambios remotos en campo, pero verifique que su SIM soporte SMS y que el número del dispositivo sea accesible.
- Elija UDP o TCP según sus necesidades de red y confiabilidad; Plaspy soporta ambos transportes y detectará automáticamente el protocolo del rastreador en el servidor.
- Siempre confirme los valores de APN y credenciales con su operador móvil antes de aplicarlos en el dispositivo.
- Después de aplicar los ajustes de servidor y APN, puede ser necesario reiniciar o realizar un ciclo de energía para que los cambios surtan efecto.

## Por qué usar Plaspy con esta configuración

Usar el BN-405D con Plaspy ofrece una forma sencilla de integrar posiciones GNSS en tiempo real, telemetría y datos de alarma en una plataforma centralizada de gestión de flotas. El soporte del BN-405D para TCP, UDP y configuración por SMS, junto con los ajustes de servidor compartidos y la detección automática de protocolos de Plaspy, permite una incorporación eficiente y un reporte consistente en flotas mixtas.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos compatibles visite https://www.plaspy.com. Para los comandos más recientes por dispositivo, notas de firmware y detalles de hardware, verifique la guía de configuración en el sitio del fabricante https://www.coban.net/.
