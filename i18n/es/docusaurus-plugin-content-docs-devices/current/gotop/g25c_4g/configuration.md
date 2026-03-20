---
slug: /gotop/g25c_4g/configuration
id: g25c_4g-configuration
sidebar_label: Configuration
title: GOTOP - G25C-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP G25C-4G con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - configuración GOTOP G25C-4G
  - instalación GOTOP G25C-4G
  - G25C-4G Plaspy
  - GOTOP configuración de rastreador
  - configuración de rastreador GPS Plaspy
  - seguimiento de vehículos G25C-4G
  - ajustes de servidor G25C-4G
  - configuración plataforma GPS GOTOP
  - guía instalación G25C-4G
  - seguimiento de activos GOTOP
---

# GOTOP - G25C-4G Configuración

Esta página presenta el contexto público de configuración para usar el rastreador GOTOP G25C-4G con Plaspy. Resume los ajustes de servidor prácticos, las verificaciones previas imprescindibles y un flujo de trabajo que instaladores e integradores suelen seguir para registrar y validar un dispositivo G25C-4G en la plataforma Plaspy. Utilice este documento como referencia técnica junto con la documentación del fabricante y los valores de servidor de Plaspy que se muestran a continuación.

El G25C-4G es un rastreador GPS LTE de grado industrial con posicionamiento multimodal y control remoto por SMS. Plaspy emplea ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos concretos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Confirme los controles específicos del dispositivo, los comandos SMS o las utilidades del proveedor en la documentación oficial de GOTOP cuando sea necesario.

## Resumen de la configuración

Configurar el G25C-4G para Plaspy prepara el dispositivo para transmitir datos de ubicación, alarmas y telemetría a un punto central, de modo que el rastreador sea visible en los paneles y reportes de Plaspy. El objetivo es aplicar los ajustes de servidor de Plaspy en el dispositivo (mediante la herramienta del fabricante o SMS), confirmar la conectividad de red y validar que el rastreador informa correctamente a la plataforma.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy para que la plataforma pueda ingerir datos de ubicación y eventos.
- Asegúrese de que el dispositivo tenga una SIM LTE activa y acceso a la red para reportes en tiempo real y control por SMS.
- Verifique que las alarmas y el comportamiento de almacenamiento en búfer funcionen para que los datos offline se reenvíen cuando la conectividad regrese.
- Confirme la visibilidad del dispositivo en Plaspy y valide el reporte de eventos (movimiento, geocerca, batería baja, exceso de velocidad) según su flujo de trabajo.
- Mantenga a mano las herramientas del fabricante y notas de firmware, ya que los menús y comandos SMS específicos varían según la versión de software.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el G25C-4G para la integración con Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- automatic protocol detection in Plaspy — Plaspy automatically detects the tracker protocol
- note that all devices in Plaspy use the same port to simplify device configuration

## Requisitos típicos antes de la configuración

- Dispositivo encendido y con batería o conectado a la alimentación de instalación para que sea seguro realizar cambios de configuración y reinicios.
- SIM activa con datos y SMS habilitados si va a usar configuración por SMS o reporte por datos móviles.
- Acceso al método de configuración oficial del fabricante o software, como la herramienta de configuración GOTOP, comandos SMS o la app provista por el vendedor.
- Cuenta de Plaspy o acceso a la plataforma para confirmar el registro del dispositivo y la telemetría tras la configuración.
- Información básica del dispositivo disponible, como IMEI, ID del equipo y el transporte preferido (UDP o TCP) que se usará durante la configuración.
- Un plan para validar alarmas y el reenvío de datos en un entorno controlado antes del despliegue en campo.

## Cómo se conecta este rastreador a Plaspy

El G25C-4G envía posiciones, alarmas y telemetría a Plaspy a través de su enlace celular para que los eventos y las trazas históricas puedan mostrarse en la plataforma. Configure el rastreador para que apunte al endpoint del servidor Plaspy y verifique que establezca sesiones usando el modo de transporte seleccionado.

- El rastreador informa datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Los datos pueden enviarse por UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que una vez configurados servidor y puerto, la plataforma por lo general acepta la transmisión entrante.
- Las alarmas (movimiento, caída, batería baja, salida de geocerca, exceso de velocidad, vibración) se reenvían a Plaspy para alertas en tiempo real y registro histórico.
- Si se interrumpe la conectividad, la memoria interna almacena puntos y eventos y el dispositivo los reenvía cuando se restaura el acceso a la red.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el G25C-4G (app del fabricante, herramienta web o conjunto de comandos SMS).
2. Ingresar la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según se indicó arriba.
3. Establecer el puerto en 8888 en los ajustes de servidor del dispositivo.
4. Elegir UDP o TCP si el dispositivo requiere selección de transporte; Plaspy soporta ambos.
5. Aplicar o guardar la configuración en la herramienta del fabricante o enviar el comando SMS que confirme los ajustes.
6. Reiniciar el dispositivo si el firmware lo requiere para que los cambios de red tomen efecto.
7. Validar que el dispositivo reporte a Plaspy revisando el estado del equipo y las actualizaciones de ubicación recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el G25C-4G varían según el firmware y las herramientas del proveedor. Los dispositivos GOTOP suelen soportar métodos de configuración por SMS y por software; si usa comandos SMS o la herramienta oficial de GOTOP, siga la guía del fabricante para los formatos correctos. Dado que los conjuntos de comandos del fabricante difieren entre revisiones de firmware, consulte la documentación oficial de GOTOP para las cadenas SMS precisas o los formatos de archivo de configuración antes de aplicar ajustes.

Cuando se usan comandos SMS proporcionados por el vendedor, típicamente incluyen un comando para establecer dominio o IP de servidor, un comando para fijar el puerto y un comando opcional para seleccionar TCP o UDP. Mantenga marcadores de posición como [apn] u otros si usa plantillas del fabricante y reemplácelos por sus valores reales durante la configuración.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disposición de los menús y la sintaxis de los comandos SMS; confirme los comandos correctos para la versión de firmware de su dispositivo.
- Elija UDP o TCP según la confiabilidad de la red y las preferencias de su organización; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto (8888), lo que simplifica la configuración masiva y el aprovisionamiento.
- Si piensa usar configuración por SMS, asegúrese de que los comandos SMS y el control remoto estén permitidos por la SIM y el plan del operador.
- Registre siempre el IMEI y los pasos de configuración realizados para cada dispositivo para facilitar la resolución de problemas y las trazas de auditoría.

## Por qué usar Plaspy con esta configuración

Usar el G25C-4G con Plaspy ofrece una solución práctica y escalable para monitoreo de flotas y activos. La larga autonomía del rastreador, el posicionamiento multimodal y el almacenamiento offline resistente, combinados con la ingestión centralizada de Plaspy, facilitan mantener la visibilidad, recibir alarmas oportunas y conservar datos históricos incluso cuando la conectividad es intermitente. Este enfoque de configuración respalda flujos de trabajo comunes de prevención de robo y monitoreo operativo en flotas, contenedores y equipos remotos.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores como el GOTOP G25C-4G visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, detalles de firmware y formatos de comandos SMS o software más actuales, verifique la información en el sitio del fabricante https://www.gotop.cc/.
