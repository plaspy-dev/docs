---
slug: /navtelekom/smart_s_2425/configuration
id: smart_s_2425-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2425 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar Navtelekom SMART S-2425 a Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - Configuración Navtelekom SMART S-2425
  - Configuración SMART S-2425
  - SMART S-2425 Plaspy
  - Configuración rastreador Navtelekom
  - Configuración rastreador Plaspy
  - Configuración rastreador vehicular
  - Configuración GPS Plaspy
  - Rastreador de flotas SMART S-2425
  - Configuración servidor SMART S-2425
  - Integración SMART S-2425
---

# Navtelekom - Configuración del SMART S-2425

Esta página resume el contexto público de configuración para usar el Navtelekom SMART S-2425 con la plataforma Plaspy. Se concentra en los ajustes de servidor prácticos y en el flujo de trabajo que deberá seguir para apuntar el dispositivo a Plaspy y permitir que envíe posiciones GNSS, telemetría y eventos a la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el SMART S-2425 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor como NTC Configurator o la configuración local por Bluetooth; revise estas indicaciones junto con la documentación oficial de Navtelekom antes del despliegue.

## Resumen de la configuración

El objetivo de esta configuración es preparar el SMART S-2425 para enviar datos de posición y telemetría de forma confiable a Plaspy y validar la conectividad para que el dispositivo aparezca y reporte correctamente en el panel de Plaspy.

- Apunte el SMART S-2425 a Plaspy usando el endpoint público d.plaspy.com o la IP 54.85.159.138 en el puerto 8888.
- Elija el modo de transporte que soporte el equipo (UDP o TCP) cuando el dispositivo solicite selección de transporte.
- Asegúrese de que el rastreador tenga una SIM celular activa y el APN correcto para que el módem 2G pueda alcanzar el servidor de Plaspy.
- Guarde y aplique la configuración con la herramienta del fabricante o mediante Bluetooth local, luego valide el envío de datos en Plaspy.
- Confirme que el dispositivo entrega GNSS, eventos de E/S y telemetría para que Plaspy pueda registrar viajes, alarmas e informes.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Confirme que la alimentación y el cableado del dispositivo estén instalados y estables para la configuración inicial.
- Tarjeta(s) SIM activa(s) con datos habilitados instaladas en las ranuras dual SIM del SMART S-2425 según sea requerido.
- Acceso al método de configuración oficial de Navtelekom, como NTC Configurator o herramientas de aprovisionamiento por Bluetooth 4.0.
- Conocimiento del identificador del dispositivo y los datos de registro necesarios para su cuenta o flota en Plaspy.
- Cobertura celular estable en el área de instalación para conectividad 2G durante las pruebas iniciales.
- Acceso a la documentación técnica de Navtelekom para parámetros específicos del dispositivo o notas sobre firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el SMART S-2425 transmite posiciones GNSS, estados de E/S y telemetría mediante su módem 2G al endpoint y puerto compartidos de Plaspy. Plaspy procesa estos mensajes para mostrar ubicación en vivo, alarmas y telemetría en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Seleccione UDP o TCP en el dispositivo si se requiere elección de transporte; Plaspy aceptará cualquiera en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpretará los datos entrantes del SMART S-2425 sin necesidad de seleccionar el protocolo por dispositivo en el servidor.
- Las actualizaciones de ubicación, los eventos de E/S y la telemetría enviados por el dispositivo se muestran en Plaspy como posiciones en el mapa, alertas y canales de datos para informes.
- La validación periódica de los reportes garantiza que viajes, alarmas y datos de sensores sean visibles para los operadores.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración Navtelekom (por ejemplo NTC Configurator o la herramienta de aprovisionamiento Bluetooth del dispositivo).
2. En los ajustes de servidor del equipo, ingrese el dominio del servidor Plaspy d.plaspy.com o use la IP del servidor 54.85.159.138 como alternativa.
3. Configure el puerto del servidor en 8888.
4. Si el dispositivo requiere elección de transporte, seleccione UDP o TCP para la conexión a Plaspy.
5. Guarde o aplique la configuración usando la herramienta del fabricante y confirme que los cambios se escribieron en el dispositivo.
6. Reinicie el equipo si las instrucciones del fabricante indican que es necesario tras aplicar la configuración de red.
7. Valide que el dispositivo reporte a Plaspy comprobando que el rastreador aparece y envía actualizaciones de posición o telemetría en el panel de Plaspy.

## Ejemplo de comandos de configuración

El SMART S-2425 puede configurarse usando las herramientas de Navtelekom o el aprovisionamiento por Bluetooth en lugar de comandos de texto directos; la sintaxis exacta y las opciones varían según el firmware y la utilidad de configuración del fabricante. Para la integración con Plaspy normalmente ingresará el dominio del servidor d.plaspy.com (o la IP 54.85.159.138), establecerá el puerto 8888 y elegirá UDP o TCP si la interfaz del equipo solicita selección de transporte.

Si utiliza utilidades de configuración Navtelekom, consulte la guía oficial de NTC Configurator para la ruta de menú o la sintaxis de comandos exacta que utiliza su versión de firmware.

## Notas de configuración

- Las diferencias de firmware entre revisiones de hardware pueden cambiar nombres de menús o ubicaciones de parámetros en el NTC Configurator o en el flujo de aprovisionamiento por Bluetooth.
- Elija UDP o TCP según las condiciones de red y las políticas de firewall; Plaspy acepta ambos en el puerto 8888, pero la elección puede afectar latencia y comportamiento de entrega.
- Asegúrese de que los ajustes de APN de la SIM sean correctos para el operador móvil instalado para que el dispositivo pueda establecer una sesión de datos antes de intentar conectarse al servidor Plaspy.
- El SMART S-2425 soporta configuración local por Bluetooth, lo que puede simplificar el aprovisionamiento en campo para algunos instaladores.
- Siempre contraste los pasos de configuración con la documentación oficial de Navtelekom para ejemplos específicos del dispositivo y notas de versiones de firmware.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2425 con Plaspy brinda a los operadores de flotas visibilidad continua de posiciones, eventos de E/S y telemetría a través de una plataforma unificada. La recepción GLONASS/GPS del equipo, el módem 2G con doble SIM y su conjunto flexible de E/S lo hacen adecuado para rastreo vehicular, monitoreo de alarmas y recolección de telemetría que Plaspy presenta como mapas en vivo, alertas e informes históricos.

Learn more about connecting devices and configuring fleet tracking on the Plaspy website at https://www.plaspy.com. For device specific configuration methods, firmware behavior and the latest technical details, verify current information on the manufacturer site https://www.navtelecom.ru/.
