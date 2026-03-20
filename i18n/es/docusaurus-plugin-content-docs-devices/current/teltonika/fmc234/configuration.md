---
slug: /teltonika/fmc234/configuration
id: fmc234-configuration
sidebar_label: Configuration
title: Teltonika - FMC234 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMC234 con ajustes de servidor y comandos para conectarlo a Plaspy
keywords:
  - configuración Teltonika FMC234
  - instalación Teltonika FMC234
  - configuración servidor Teltonika FMC234
  - configuración FMC234 Plaspy
  - configuración rastreador GPS FMC234
  - configuración rastreador Teltonika
  - seguimiento de flotas FMC234
  - compatibilidad FMC234 Plaspy
  - configuración plataforma GPS FMC234
  - integración Teltonika FMC234
---

# Teltonika - Configuración FMC234

Esta página documenta el contexto público de configuración para usar el Teltonika FMC234 con Plaspy. Se centra en los ajustes de servidor compartidos y en un comando de ejemplo usado comúnmente para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda enviar ubicación y telemetría a la plataforma. La guía está adaptada a la familia FMC234 y muestra los pasos prácticos necesarios para preparar el dispositivo para la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que use. El FMC234 admite métodos de configuración remota como Teltonika Configurator y comandos por lote vía SMS; a continuación se incluye un ejemplo de comando como referencia.

## Resumen de la configuración

Preparar un FMC234 para integrarlo con Plaspy implica apuntar el rastreador al servidor de Plaspy, asegurar que el equipo tenga conectividad móvil y validar que el dispositivo aparezca en su cuenta de Plaspy. El proceso público de configuración es sencillo y está orientado a permitir un reporte continuo y fiable hacia la plataforma.

- Configure el acceso de red en el dispositivo, incluyendo las credenciales APN cuando sean necesarias.
- Indique al dispositivo que reporte al endpoint del servidor de Plaspy y al puerto compartido de Plaspy.
- Seleccione y confirme el método de transporte si el equipo requiere elegir entre UDP y TCP.
- Guarde o aplique la configuración y reinicie el dispositivo si es necesario para comenzar el envío de datos.
- Verifique que el dispositivo sea visible y esté enviando datos a Plaspy para monitoreo en tiempo real e informes históricos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos habituales antes de la configuración

- Un equipo FMC234 con energía y accesible, con batería o alimentación externa conectada.
- Una tarjeta SIM celular válida con un plan de datos compatible con la región y las bandas del dispositivo.
- Credenciales APN del operador listas para ingresar en la configuración del equipo.
- Acceso a un método de configuración oficial de Teltonika como Teltonika Configurator o configuración vía SMS.
- Conocimiento del IMEI u otros datos identificativos del equipo para registrarlo o identificarlo en Plaspy.
- Una cuenta o despliegue de Plaspy listo para recibir la telemetría del dispositivo y validar conexiones entrantes.

## Cómo se conecta este rastreador a Plaspy

El FMC234 se configura para enviar posición y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ofrecer visibilidad en tiempo real, alertas e informes históricos. Una vez que el dispositivo apunta al endpoint de Plaspy y tiene conectividad de red, Plaspy detectará el protocolo del rastreador automáticamente y empezará a procesar los mensajes entrantes.

- El dispositivo reporta actualizaciones de ubicación y telemetría a d.plaspy.com en el puerto 8888.
- Plaspy recibe la conexión tanto en el dominio como en la IP correspondiente y analiza automáticamente el protocolo del rastreo.
- Los mensajes de telemetría y eventos se vuelven visibles en Plaspy para monitoreo y alertas basadas en reglas.
- El transporte puede configurarse como UDP o TCP si el firmware del FMC234 exige una selección explícita.
- Todos los dispositivos usan el mismo puerto de Plaspy, por lo que no es necesario un mapeo de puertos por dispositivo.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial de Teltonika, como Teltonika Configurator o la interfaz SMS del dispositivo.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes del servidor.
3. Configure el puerto del servidor en 8888 como puerto de reporte para todos los dispositivos.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según las necesidades de su despliegue.
5. Ingrese las credenciales APN y cualquier parámetro de red necesario para que el dispositivo tenga acceso a datos móviles.
6. Aplique o guarde la configuración y reinicie el FMC234 si la herramienta o el firmware requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo esté reportando a Plaspy y que aparezca en la vista de la plataforma para seguimiento en vivo y telemetría.

## Comandos de ejemplo de configuración

El FMC234 puede configurarse usando un formato de comando por lotes para parámetros básicos. El ejemplo siguiente es un comando setparam común que establece marcadores de APN y apunta el dispositivo a Plaspy. Envíe este comando usando el canal de configuración Teltonika soportado por su equipo, por ejemplo SMS por lotes o Teltonika Configurator cuando acepte comandos por lotes.

- Ejemplo de comando por lotes SMS o setparam por lotes

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando y los marcadores:
- [apn] es el nombre del APN de su operador.
- [apnu] es el nombre de usuario del APN cuando el operador lo requiere.
- [apnp] es la contraseña del APN cuando el operador lo requiere.
- El comando incluye d.plaspy.com y el puerto 8888 que son los ajustes públicos del servidor Plaspy.
- Los índices de parámetro exactos y los valores para la selección de transporte pueden variar según el firmware; consulte la documentación de Teltonika o Teltonika Configurator para mapear los números de parámetro a ajustes legibles para su versión de firmware.

## Notas de configuración

- Las versiones de firmware y las variantes regionales del dispositivo pueden emplear índices de parámetro distintos o requerir herramientas diferentes para la configuración por lotes. Confirme siempre el mapeo de parámetros para su firmware.
- La configuración vía SMS y los comandos setparam por lotes son comúnmente compatibles en dispositivos Teltonika, pero usar Teltonika Configurator ofrece un flujo GUI más seguro para muchos instaladores.
- Elija UDP o TCP según sus políticas de red y firewall. Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos soportados, solo necesita configurar el puerto 8888 en cada rastreador.
- Si encuentra comportamientos inesperados, revise las notas de la versión de Teltonika y los registros del dispositivo o diagnósticos para confirmar la aplicación de parámetros.

## Por qué usar Plaspy con esta configuración

Usar el FMC234 con Plaspy ofrece a operadores de flotas y gestores de activos una forma consistente y fiable de centralizar ubicación y telemetría en una sola plataforma para monitoreo, alertas y análisis histórico. El diseño robusto del FMC234 y su batería de respaldo aumentan la resiliencia operativa, mientras que apuntar el dispositivo a Plaspy asegura que la telemetría se capture centralmente para enrutamiento, flujos antirobo y alertas basadas en condiciones cuando se conectan sensores adicionales.

Para conocer más sobre Plaspy e integraciones soportadas visite https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, comportamiento del firmware y mapeo de parámetros más actualizados consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para verificar la guía del fabricante y cualquier cambio de firmware.
