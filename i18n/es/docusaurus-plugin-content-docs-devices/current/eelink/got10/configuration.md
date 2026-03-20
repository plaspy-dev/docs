---
slug: /eelink/got10/configuration
id: got10-configuration
sidebar_label: Configuration
title: EElink - GOT10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el EElink GOT10 para Plaspy con ajustes de servidor, comandos SMS y pasos de verificación para rastreo y telemetría OBD
keywords:
  - Configuración EElink GOT10
  - Configurar GOT10 Plaspy
  - Configuración rastreador OBD EElink
  - Configuración del servidor GOT10
  - Comandos SMS GOT10
  - Configuración APN EElink GOT10
  - Rastreador compatible con Plaspy
  - Configuración OBD II GOT10
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador diagnóstico vehicular
---

# EElink - GOT10 Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador OBD de diagnóstico EElink GOT10 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos, la guía de flujo de trabajo y los comandos SMS públicamente disponibles que se usan habitualmente para apuntar un dispositivo GOT10 a Plaspy y así enviar telemetría y diagnósticos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Las instrucciones a continuación se enfocan en los ajustes públicos de Plaspy y en los comandos SMS del fabricante que se usan en implementaciones típicas.

## Resumen de la configuración

El objetivo al configurar un GOT10 para Plaspy es asegurar que el dispositivo pueda comunicarse con el punto de conexión compartido de Plaspy, entregar ubicación y telemetría OBD (CAN BUS), y estar visible en la plataforma para monitoreo e informes. Para los dispositivos GOT10 esto normalmente implica enviar comandos SMS del fabricante para establecer el APN, la dirección del servidor y los intervalos de reporte.

- Configure el dispositivo para enviar telemetría al endpoint y puerto del servidor Plaspy.
- Establezca el APN del operador para que el dispositivo utilice datos GPRS para el reporte.
- Seleccione UDP o TCP según requiera el rastreador y asigne el puerto 8888.
- Valide la conectividad y confirme que el dispositivo informe a Plaspy.
- Active un intervalo de reporte adecuado según sus necesidades de monitoreo y la escala de la flota.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un dispositivo GOT10 instalado en el puerto OBD II del vehículo y alimentado por el encendido del vehículo.
- Una tarjeta SIM activa con un plan de datos y el APN correcto del operador móvil.
- Capacidad de enviar mensajes SMS al dispositivo para configuración por SMS, o acceso a la herramienta de configuración del fabricante si está disponible.
- Acceso a la documentación oficial de EElink o a las instrucciones del proveedor para la revisión de firmware de su dispositivo.
- Una cuenta en Plaspy y la posibilidad de verificar que el dispositivo sea visible en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Los dispositivos GOT10 reenvían telemetría CAN BUS y mensajes estándar del rastreador al endpoint de Plaspy para que la ubicación, parámetros operativos e información de diagnóstico aparezcan en la interfaz de Plaspy. El dispositivo puede configurarse para usar Plaspy estableciendo la dirección del servidor en d.plaspy.com o en la IP pública y usando el puerto 8888.

- El GOT10 reporta tramas de telemetría y diagnóstico al endpoint y puerto del servidor Plaspy.
- Plaspy recibe los datos y detecta automáticamente el protocolo del rastreador para su análisis.
- Las actualizaciones de ubicación y la telemetría derivada del OBD se transmiten a Plaspy para monitoreo en tiempo real y registro histórico.
- Los códigos de falla diagnosticados y métricas del vehículo están disponibles en los informes de Plaspy cuando el vehículo los expone en el CAN BUS.
- El dispositivo utiliza datos GPRS una vez que se configuran el APN y los ajustes de servidor como se muestra abajo.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de EElink para el GOT10 (comandos SMS o herramienta del fabricante) según la versión de firmware y las instrucciones del proveedor.
2. Configure el APN del dispositivo con el valor de su operador móvil para que el rastreador pueda usar datos GPRS.
3. Ingrese d.plaspy.com o 54.85.159.138 como servidor y establezca el puerto en 8888.
4. Seleccione UDP o TCP si el dispositivo requiere una selección de transporte.
5. Aplique o guarde la configuración y envíe los comandos al dispositivo (por SMS o mediante la herramienta).
6. Reinicie el dispositivo si el fabricante lo solicita para aplicar los nuevos ajustes.
7. Verifique que el dispositivo informe a Plaspy y aparezca en su cuenta de Plaspy según lo esperado.

## Comandos de configuración de ejemplo

El GOT10 soporta configuración vía SMS. Los siguientes comandos SMS públicos son proporcionados por el fabricante y se presentan en el orden usado para una configuración básica. Envíe cada comando como un SMS separado al número del dispositivo.

- Reinicio de fábrica inicial opcional (usar solo si necesita restaurar valores predeterminados):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Establecer el APN del operador (reemplace {{apn}} y opcionalmente {{apnu}} y {{apnp}} con los valores de su operador):
```text
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Nota: Mantenga los marcadores {{apn}} para el nombre del APN, {{apnu}} para el usuario del APN y {{apnp}} para la contraseña del APN. Incluya usuario y contraseña solo si su operador los requiere.

- Establecer el servidor GPRS usando el dominio de Plaspy (la elección entre UDP o TCP se configura en el dispositivo por separado si es necesario):
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, establecer el servidor GPRS usando la IP pública de Plaspy:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de posición cada 60 segundos:
```text
TIMER,60#
```

- Consultar parámetros actuales:
```text
PARAM#
```

Estos comandos son los públicos proporcionados por el fabricante para la configuración básica del GOT10. Use el comando SERVER con el dominio o la IP y el mismo puerto 8888. La selección de transporte entre UDP y TCP es una opción del dispositivo; consulte la herramienta del fabricante o la guía de firmware si el dispositivo requiere un comando de transporte explícito.

## Notas de configuración

- La configuración por SMS es un método común para dispositivos GOT10; confirme que su equipo acepta comandos SMS y que el número remitente del SMS esté autorizado si aplica.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles. Siempre verifique los comandos con la documentación de EElink para su versión de firmware.
- Elija UDP o TCP según la preferencia del instalador y la compatibilidad del equipo; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- Al usar el comando APN, conserve los marcadores de usuario y contraseña solo cuando su operador móvil requiera autenticación.
- Use el comando PARAM# después de la configuración para verificar que el servidor, APN y los ajustes del timer se hayan aplicado correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el GOT10 para que reporte a Plaspy proporciona a los operadores de flota una vista unificada de la ubicación del vehículo y los diagnósticos OBD. Al transmitir telemetría CAN BUS y diagnósticos junto con los datos GPS hacia Plaspy, los equipos pueden monitorear la salud del vehículo, responder más rápido a códigos de falla e integrar la información de diagnóstico en decisiones de ruteo y mantenimiento.

Para saber más sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para obtener las instrucciones más actuales específicas del GOT10, notas de firmware y detalles del fabricante, verifique la información en el sitio de EElink https://www.eelink.com.cn/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
