---
slug: /khd/kc200/configuration
id: kc200-configuration
sidebar_label: Configuration
title: KHD - KC200 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador GNSS KHD KC200 para Plaspy con ajustes de servidor y pasos claros para una instalación confiable.
keywords:
  - configuración KHD KC200
  - instalación KHD KC200
  - KHD KC200 en Plaspy
  - configuración rastreador GPS KC200
  - configuración rastreador KHD
  - configuración rastreo de vehículos
  - configuración rastreador GNSS
  - rastreo de flotas KHD
  - configuración GPRS KC200
  - configuración plataforma de rastreo
---

# KHD - Configuración KC200

Esta página reúne el contexto público de configuración para usar el rastreador GNSS KHD KC200 con Plaspy. Contiene los ajustes prácticos a nivel de plataforma que usted necesita para apuntar su dispositivo a Plaspy, además de describir el flujo de trabajo de instalación que suelen emplear instaladores e integradores. Use esta página como referencia para los parámetros del servidor y los pasos generales; las herramientas del fabricante y los comandos exactos varían según la versión de firmware y las utilidades del proveedor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos específicos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. La guía a continuación se centra en el endpoint público de Plaspy y en el proceso práctico para aplicar esos valores al KC200, de modo que el dispositivo pueda enviar ubicación y eventos a la plataforma.

## Resumen de configuración

El objetivo de esta configuración es preparar el KC200 para una comunicación confiable con el backend de Plaspy, de modo que las ubicaciones de vehículos o embarcaciones, alertas y datos de eventos aparezcan en su cuenta de Plaspy. Usted deberá apuntar el equipo al servidor de Plaspy, confirmar las opciones de transporte y validar que el rastreador informe como se espera.

- Asignar al KC200 el endpoint del servidor Plaspy para que el tráfico de red llegue a la plataforma.
- Configurar el transporte (UDP o TCP) y el puerto compartido de Plaspy para que el dispositivo pueda abrir sesión.
- Verificar que el dispositivo se registre en la red móvil y envíe GPRS o SMS según lo configurado.
- Validar el reporte en vivo y eventos comunes como alertas y notificaciones de geocerca en Plaspy.
- Confirmar que el dispositivo aparezca en Plaspy y que la plataforma parseé la telemetría correctamente.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el KHD KC200:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP (el dispositivo puede configurarse con UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Ingrese siempre el dominio o la dirección IP según lo permita su herramienta de configuración. Plaspy acepta ambos y detectará automáticamente el protocolo entrante en el puerto compartido.

## Requisitos habituales antes de la configuración

- Una unidad KC200 alimentada y accesible con la interfaz de configuración del fabricante disponible
- Una tarjeta SIM activa y conectividad de datos móviles si planea usar reporte por GPRS/GSM
- Acceso a las herramientas de configuración de KHD o al manual de instalación del KC200
- Credenciales o acceso a cualquier método de configuración vía SMS si utiliza comandos SMS para la configuración inicial
- Un medio para monitorear mensajes del dispositivo o registros del servidor mientras valida la conexión con Plaspy

## Cómo se conecta este rastreador a Plaspy

El KC200 envía datos de posición y eventos al backend de Plaspy para que la plataforma muestre ubicación, alertas y estado operativo. When configured correctly, the tracker reports to the shared Plaspy endpoint and port where Plaspy parses the incoming protocol automatically.

- El rastreador se configura para reportar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888
- Seleccione UDP o TCP en el dispositivo si se requiere elegir transporte; Plaspy acepta ambos en el mismo puerto
- Las actualizaciones de ubicación, alertas y eventos de geocerca se reenviarán desde el dispositivo a la plataforma Plaspy para su visualización
- El SMS puede utilizarse, donde lo soporte el equipo, para configuración o como método alterno de reporte según la instalación
- Una vez que el dispositivo reporte correctamente a Plaspy, será visible dentro de la plataforma para seguimiento y monitoreo

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración del KHD KC200 proporcionado por el fabricante o el proveedor.
2. En los ajustes de servidor del dispositivo, ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP en el rastreador si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o mediante comandos SMS al dispositivo.
6. Reinicie el KC200 si la documentación del fabricante recomienda un reinicio tras aplicar los ajustes.
7. Valide que el dispositivo reporte correctamente a Plaspy y que aparezca en la plataforma con la telemetría y eventos esperados.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis varían según el firmware del KC200 y el método de configuración usado (software para PC, interfaz web o SMS). Dado que las herramientas del fabricante difieren, consulte la guía de configuración de KHD para formatos de comandos específicos del KC200. Plaspy acepta conexiones apuntadas a d.plaspy.com o 54.85.159.138 en el puerto 8888 por UDP o TCP, y usted debe usar los comandos recomendados por el fabricante para establecer estos valores.

Si cuenta con un conjunto de comandos SMS proporcionado por el proveedor o un script de configuración para el KC200, sígalos para definir el dominio/IP del servidor y el puerto. Por ejemplo, muchos equipos de la familia KHD usan SMS o comandos de herramienta de configuración similares a los siguientes (solo ejemplos ilustrativos — confirme la sintaxis exacta con KHD):

- Establecer dominio o IP del servidor (ejemplo ilustrativo)
  ```
  SERVER,d.plaspy.com,8888
  ```
- Seleccionar transporte si es necesario (ejemplo ilustrativo)
  ```
  TRANSPORT,UDP
  ```

Nota: Los ejemplos anteriores son meramente ilustrativos. Use la documentación oficial de KHD o la herramienta de su proveedor para obtener los comandos exactos para su dispositivo y firmware.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y las opciones de transporte disponibles; verifique la versión de firmware del KC200 antes de aplicar comandos.
- Algunas instalaciones usan configuración por SMS mientras otras emplean una herramienta de PC o una app móvil; siga el método que proporcione su proveedor.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red local; Plaspy acepta ambos en el puerto 8888.
- Confirme el APN y la configuración de datos móviles para la SIM instalada si el KC200 usa GPRS/GSM para alcanzar el servidor Plaspy.
- Mantenga un registro de cualquier paso específico del fabricante y pruebe el reporte inmediatamente después de aplicar los ajustes para evitar tiempos de inactividad.

## Por qué usar Plaspy con esta configuración

Usar el KC200 con Plaspy ofrece a las organizaciones una vía sencilla para integrar datos de rastreo GNSS en una plataforma gestionada. Al apuntar el dispositivo al endpoint compartido de Plaspy y usar el puerto común, reduce la complejidad de configuración y permite que Plaspy detecte y parseé automáticamente el protocolo del equipo. Esto facilita la incorporación de múltiples dispositivos y garantiza visibilidad consistente en vehículos o embarcaciones.

Learn more about Plaspy and how it can receive and present KC200 data on the main website https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and installer guidance, verify details on the manufacturer's site http://www.khd.hk as setup methods and firmware behavior can change over time.
