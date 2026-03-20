---
slug: /cantrack/g03/configuration
id: g03-configuration
sidebar_label: Configuration
title: CanTrack - G03 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CanTrack G03 y conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración CanTrack G03
  - Configuración G03 Plaspy
  - Configuración rastreador CanTrack
  - Configuración servidor G03
  - Configuración de dispositivo Plaspy
  - Configuración GPS G03
  - Configuración rastreador personal
  - Integración seguimiento Plaspy
  - Configuración SOS G03
  - Seguimiento de activos portátiles
---

# CanTrack - Configuración del G03

Esta página explica el contexto público de configuración para usar el rastreador CanTrack G03 con Plaspy. Describe los ajustes de servidor de Plaspy que debe aplicar en el dispositivo y detalla los pasos prácticos para preparar el G03 para seguimiento en tiempo real y visualización del historial en la plataforma Plaspy.

Plaspy emplea parámetros de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor utilizadas para la configuración. Use esta guía como referencia práctica para integrar el G03 con Plaspy y confirme cualquier detalle específico del dispositivo en la documentación de CanTrack.

## Resumen de la configuración

Este proceso prepara al G03 para enviar datos de ubicación y eventos a Plaspy, de modo que el equipo sea visible en la plataforma y en las apps móviles. El enfoque principal es direccionar el rastreador al endpoint correcto de Plaspy, seleccionar el transporte si el dispositivo lo requiere y verificar el reporte exitoso.

- Configure el dispositivo para que reporte a los ajustes de servidor de Plaspy y así la telemetría y las posiciones lleguen a la plataforma.
- Seleccione el transporte apropiado (UDP o TCP) si el equipo exige una elección.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con actualizaciones de posición en vivo o recientes.
- Active eventos esenciales como SOS y reporte de batería baja para que Plaspy pueda generar alertas.
- Pruebe reinicios o procedimientos de guardado para asegurar que la configuración persista tras ciclos de energía.

## Ajustes de servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un G03 con batería cargada y acceso al método de configuración provisto por CanTrack (comandos SMS, aplicación de configuración o herramienta web según el método del vendedor).  
- Conexión celular activa y una SIM compatible con datos/servicio habilitado si la unidad usa la red celular para reportes.  
- Identificadores del dispositivo como IMEI o número de serie para registro y verificación en Plaspy.  
- Acceso al método oficial de configuración de CanTrack o al software necesario para cambiar servidor, transporte y parámetros de reporte.  
- Una cuenta en Plaspy o el proceso de incorporación necesario para asociar el dispositivo a la organización o usuario correcto en la plataforma.  
- Un plan de pruebas básico para confirmar SOS, batería baja y reportes de posición después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G03 envía posiciones GNSS y telemetría a través del enlace celular hacia el endpoint y puerto de Plaspy indicados arriba. Plaspy recibe los datos entrantes, detecta automáticamente el protocolo del dispositivo y hace que el equipo sea visible para monitoreo en tiempo real, alertas de eventos y reproducción de historial.

- El rastreador reporta ubicación y estado al endpoint compartido d.plaspy.com en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo; ambos son compatibles con Plaspy.  
- Plaspy detecta automáticamente el protocolo del equipo, por lo que en la plataforma se requiere poca o ninguna selección manual por dispositivo.  
- Eventos como SOS y batería baja se reenvían a Plaspy, donde se pueden aplicar reglas y generar alertas.  
- Un reporte exitoso hace que el G03 sea visible en los mapas, tableros y trazas de historial de Plaspy para su monitoreo y revisión.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de CanTrack para el G03 (siga las instrucciones del fabricante para su firmware y herramienta).  
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.  
3. Configure el puerto del servidor en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).  
4. Seleccione UDP o TCP si el dispositivo solicita elegir un transporte.  
5. Guarde o aplique la configuración en la herramienta o mediante el conjunto de comandos del dispositivo.  
6. Reinicie el equipo si el fabricante lo requiere para activar los nuevos ajustes.  
7. Verifique que el dispositivo reporte a Plaspy y que aparezca en su cuenta con actualizaciones de posición y eventos.

## Ejemplos de comandos de configuración

Los comandos exactos y la interfaz de configuración para el G03 dependen del método de configuración suministrado por CanTrack y del firmware del dispositivo. Dado que las herramientas del fabricante y la sintaxis de SMS/comandos varían por firmware y región, consulte la documentación de CanTrack o la herramienta de configuración incluida con su dispositivo para el conjunto de comandos preciso. Si su unidad utiliza una utilidad gráfica, los campos de servidor, IP, puerto y transporte corresponden a los ajustes de Plaspy indicados en esta página.

## Notas de configuración

- Las variantes de firmware y hardware regional pueden cambiar la sintaxis de comandos y los ajustes disponibles; verifique siempre la versión de firmware antes de aplicar instrucciones.  
- Si el dispositivo ofrece tanto UDP como TCP, elija el transporte que mejor se adapte a su entorno de red; Plaspy acepta ambos en el puerto 8888.  
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza detección automática del protocolo, por lo que la dirección de servidor y el puerto son los ajustes principales requeridos.  
- Mantenga la batería del dispositivo cargada durante la configuración y las pruebas para evitar conectividad intermitente.  
- Confirme que los eventos SOS y batería baja estén habilitados para que el G03 comunique esas condiciones a Plaspy tras la configuración.

## Por qué usar Plaspy con esta configuración

Integrar el CanTrack G03 con Plaspy ofrece a cuidadores y gestores una vía sencilla para obtener visibilidad en tiempo real, alertas por eventos y reproducción histórica de rutas para seguridad personal y monitoreo de activos portátiles. El enfoque del G03 en bajo consumo, capacidad SOS y posicionamiento fiable complementa las funciones de mapeo, reglas de alerta e historial de Plaspy para crear una solución de monitoreo operativa.

Learn more about Plaspy at https://www.plaspy.com and verify the latest CanTrack device-specific configuration details and firmware guidance at https://www.cantrackgps.com/ since manufacturer setup methods and firmware behavior can change over time.
