---
slug: /reachfar/rf_s1/configuration
id: rf_s1-configuration
sidebar_label: Configuration
title: Reachfar - RF-S1 Configuration
sidebar_class_name: menu_item_tracker
description: Configura el reloj inteligente Reachfar RF-S1 para seguimiento en tiempo real y telemetría de salud en Plaspy con ajustes de servidor compartidos
keywords:
  - Configuración Reachfar RF S1
  - Instalación Reachfar RF S1
  - Configuración RF S1 para Plaspy
  - Configuración rastreador GPS RF S1
  - Configuración rastreador ponible Reachfar
  - Configuración servidor RF S1
  - Instalación rastreador Plaspy
  - Configuración rastreador GPS personal
  - Configuración software de rastreo RF S1
  - Configuración plataforma GPS RF S1
---

# Reachfar - Configuración RF-S1

Esta página describe el contexto público de configuración para usar el reloj inteligente Reachfar RF-S1 con GPS y monitoreo de salud en la plataforma Plaspy. Resume los ajustes prácticos y el flujo de trabajo que deberá seguir para apuntar el RF-S1 a Plaspy y así recibir ubicación en tiempo real, alertas SOS y telemetría de salud. Está pensada para ayudar a integradores y usuarios técnicos a preparar el dispositivo para su visibilidad en Plaspy, mientras que las herramientas y controles específicos del fabricante deben utilizarse para los ajustes propios del equipo.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos precisos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información de esta página como referencia pública del lado Plaspy y consulte la documentación de Reachfar y las herramientas del proveedor para los comandos y menús específicos necesarios en el RF-S1.

## Resumen de configuración

El objetivo de la configuración es preparar el RF-S1 para que envíe su posición, eventos SOS y telemetría de salud a Plaspy de forma fiable, de modo que el dispositivo aparezca en el panel de Plaspy y active alertas según corresponda. La configuración se centra en apuntar el reloj al endpoint del servidor Plaspy, elegir el transporte adecuado y verificar conectividad y reporte de eventos.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Seleccione el transporte correcto (UDP o TCP) y aplique el puerto compartido de Plaspy para que el servidor acepte los mensajes.
- Guarde y aplique los ajustes mediante el método oficial de configuración Reachfar o el software provisto.
- Valide el dispositivo en Plaspy confirmando actualizaciones de ubicación y mensajes de eventos (SOS, alarma por extracción, telemetría).
- Documente la versión de firmware y cualquier paso realizado con herramientas del proveedor para mantenimiento y solución de problemas futuros.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos típicos

- Un dispositivo RF-S1 con batería cargada y accesorios de uso puestos correctamente.
- Conectividad celular activa para datos y llamadas si el reloj utiliza una SIM para actualizaciones en tiempo real y llamadas. Verifique la cobertura de red en el área de despliegue.
- Acceso al método oficial de configuración Reachfar o al software del proveedor para el RF-S1 (aplicación móvil, comandos SMS o herramienta del proveedor según lo suministrado por Reachfar).
- Una cuenta de Plaspy y acceso a su espacio de trabajo en Plaspy donde verificará que el dispositivo aparezca y reporte eventos.
- Conocimiento de la versión de firmware del dispositivo y de cualquier ajuste específico del proveedor necesario para telemetría o reenvío de eventos SOS.
- Tiempo para validar el reporte en vivo en Plaspy después de aplicar la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando el RF-S1 se configura para Plaspy, envía posición, estado y mensajes de evento al endpoint y puerto compartidos de Plaspy para que los datos sean ingeridos por la plataforma y estén disponibles para monitoreo y alertas. Plaspy presenta la ubicación en tiempo real, eventos SOS y la telemetría de salud compatible en el panel y en las notificaciones.

- El RF-S1 envía actualizaciones periódicas de ubicación a d.plaspy.com usando el transporte configurado y el puerto 8888.
- Los eventos del botón SOS y las alarmas por extracción se reenvían al mismo endpoint de Plaspy para su manejo inmediato.
- La telemetría de salud y las actualizaciones de estado se envían junto con la ubicación para que Plaspy muestre la condición del dispositivo y pueda activar reglas.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente el dispositivo solo necesita tener configurado el endpoint correcto (IP o dominio) y el puerto.
- Dado que todos los dispositivos en Plaspy usan el mismo puerto, aplique el puerto 8888 al configurar el RF-S1 para que la plataforma acepte los mensajes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Reachfar o al software para el RF-S1 proporcionado por el fabricante o el revendedor.
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los campos de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el RF-S1 requiere seleccionar transporte, siguiendo la guía del proveedor o las necesidades del despliegue.
5. Aplique o guarde la configuración en la herramienta Reachfar o mediante el método de comandos del dispositivo.
6. Reinicie el RF-S1 si las instrucciones del fabricante requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de ubicación y mensajes de eventos en su espacio de trabajo Plaspy.

## Ejemplos de comandos de configuración

Los comandos de configuración para el modelo RF-S1 y la sintaxis exacta son proporcionados por Reachfar y pueden variar según el firmware y la herramienta del proveedor. Plaspy acepta mensajes de dispositivos enviados a d.plaspy.com o a 54.85.159.138 en el puerto 8888 por UDP o TCP, y detectará automáticamente el protocolo del rastreador. Para los comandos SMS precisos, los pasos en la aplicación del proveedor o las instrucciones de la herramienta de escritorio para establecer el endpoint y el transporte en el RF-S1, consulte la documentación de Reachfar o a su proveedor de dispositivos.

Si dispone de plantillas de comandos suministradas por Reachfar que incluyen marcadores como {{apn}}, {{apnu}} o {{apnp}}, mantenga esos marcadores al aplicarlas y reemplácelos por los valores de su operador de red según lo indique el fabricante.

## Notas sobre la configuración

- Las variaciones de firmware pueden cambiar los menús disponibles y la sintaxis de comandos. Registre la versión de firmware del RF-S1 antes y después de la configuración.
- Elija UDP o TCP de acuerdo con la guía del proveedor y las características de la red; Plaspy aceptará cualquiera de los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Cuando un dispositivo soporte configuración por SMS o por software, siga las recomendaciones de seguridad del fabricante sobre contraseñas y control de acceso.
- Confirme que las configuraciones de llamadas de voz y marcación de emergencia estén establecidas por separado si el RF-S1 utiliza funciones de voz celular para los flujos SOS.
- Mantenga una lista corta de verificación con los ajustes aplicados, incluyendo dominio o IP del servidor, puerto 8888, transporte elegido y la fecha de configuración para facilitar la solución de problemas futuros.

## Por qué usar Plaspy con esta configuración

Usar el Reachfar RF-S1 con Plaspy ofrece una forma sencilla de centralizar ubicación, alertas SOS y telemetría personal de salud en una sola plataforma de monitoreo. Para equipos de cuidado, organizaciones de atención social y despliegues de monitoreo remoto, esta configuración permite visibilidad rápida de eventos críticos, rastreo continuo de ubicación y un historial consolidado útil para seguimiento y cumplimiento.

Para saber más sobre Plaspy y cómo soporta la integración y el monitoreo de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración del RF-S1, notas de firmware y comandos del fabricante consulte los recursos oficiales de soporte de Reachfar en https://www.reachfargps.com/ ya que los métodos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
