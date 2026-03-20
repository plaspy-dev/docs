---
slug: /gotop/g36/configuration
id: g36-configuration
sidebar_label: Configuration
title: GOTOP - G36 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador GPS GOTOP G36 en cargador de auto para reportar a Plaspy con ajustes de servidor y flujo de configuración práctico
keywords:
  - Configuración GOTOP G36
  - Instalación GOTOP G36
  - GOTOP G36 en Plaspy
  - Configuración rastreador GPS G36
  - Configuración del servidor G36
  - Configuración de rastreador Plaspy
  - Integración de rastreador GPS
  - Configuración de rastreo vehicular
  - Configuración de seguimiento de flotas
  - Guía de configuración de dispositivo
---

# GOTOP - Configuración del G36

Esta página documenta la configuración pública necesaria para usar el rastreador GPS GOTOP G36 (cargador de auto) con la plataforma Plaspy. Explica los ajustes prácticos del servidor y el flujo de trabajo que permiten reenviar las posiciones, alarmas y estados del G36 a Plaspy para que el dispositivo sea visible y funcional en la plataforma: seguimiento en vivo, geocercas y reportes de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La guía aquí se centra en los valores del servidor Plaspy y en una secuencia práctica a seguir; siempre verifique en la documentación oficial de GOTOP cualquier menú o comando específico del dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el G36 para comunicarse de forma fiable con Plaspy y validar que las posiciones y eventos de alarma lleguen correctamente a la plataforma. La configuración típica se concentra en los ajustes de red y del endpoint del servidor, la elección del transporte si el equipo lo requiere y la confirmación de que la unidad reporta correctamente después de un reinicio.

- Proveer al G36 de servicio celular activo usando su Micro SIM y confirmar el registro en la red.
- Ingresar el endpoint y puerto del servidor Plaspy para que el G36 reenvíe mensajes de posición y eventos.
- Seleccionar el protocolo de transporte (UDP o TCP) si el equipo requiere elegirlo.
- Guardar y aplicar los ajustes en el dispositivo, y reiniciar si es necesario para comenzar el reporte en vivo.
- Validar la conectividad en Plaspy para que el dispositivo sea visible en el mapa y se reciban las alarmas.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos del servidor Plaspy al configurar el GOTOP G36:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador

Aplique estos valores exactamente en la herramienta de configuración del fabricante, aplicación o interfaz de comandos utilizada para el G36.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado en la toma de corriente del vehículo con energía vehicular estable disponible.
- Una Micro SIM con servicio de datos activo y capacidad para acceder a servicios de Internet en la red móvil local.
- Acceso al método oficial de configuración GOTOP para el G36 (herramienta web del fabricante, utilidad de escritorio o herramienta de concesionario autorizada).
- Información básica del dispositivo a la mano, como IMEI y etiqueta de modelo, para identificar la unidad en Plaspy una vez que comience a reportar.
- Conocimiento del APN correcto del proveedor de la SIM si el dispositivo requiere configurar el APN en la herramienta del fabricante.
- Una cuenta en Plaspy o acceso administrativo a la plataforma Plaspy para verificar que el dispositivo aparezca después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El G36 envía soluciones de posición derivadas de GNSS y mensajes de eventos auxiliares a través del enlace celular al endpoint de Plaspy. Plaspy recibe esos mensajes en el endpoint y puerto compartidos, detecta el protocolo automáticamente y muestra ubicaciones y eventos en la plataforma.

- El dispositivo reporta actualizaciones de ubicación a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según lo requiera el dispositivo; Plaspy acepta mensajes en el puerto 8888.
- Las posiciones, geocercas, alarmas de corte de energía y vibración, y mensajes de estado del dispositivo se reenvían a Plaspy para mapeo y alertas.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no necesita especificar el tipo de protocolo en la plataforma cuando el equipo comienza a reportar.
- La visibilidad y el historial de la unidad estarán disponibles en Plaspy una vez que el G36 establezca correctamente el reporte al endpoint compartido del servidor.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración GOTOP para el G36 (app del fabricante, utilidad de escritorio o herramienta de concesionario).
2. Configure o confirme el APN y ajustes celulares del dispositivo para que la Micro SIM tenga conectividad de datos, si la herramienta lo requiere.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en la opción de servidor del dispositivo.
4. Ajuste el puerto de reporte a 8888 en la configuración del equipo.
5. Elija UDP o TCP si el dispositivo solicita seleccionar el transporte para reportar al servidor.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
7. Reinicie el G36 si la herramienta o el equipo solicita un reinicio para activar los nuevos ajustes de servidor y red.
8. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de ubicación, el estado del dispositivo y las alarmas en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los métodos de configuración del modelo G36 varían según el firmware GOTOP y la herramienta de configuración del fabricante. Debido a que existen múltiples interfaces de configuración soportadas según firmware y mercados, los comandos exactos o las cadenas SMS (cuando estén disponibles) son específicos del fabricante y pueden cambiar con el tiempo. Consulte la documentación de GOTOP o la utilidad de configuración que obtuvo de GOTOP para formatos y sintaxis exactos de los comandos.

Si obtiene cadenas de comando públicas o patrones de configuración por SMS de GOTOP, colóquelos en la herramienta del dispositivo exactamente como los proporcione el fabricante y conserve cualquier marcador de posición como {{apn}} u otros campos de APN.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de los menús y la sintaxis de los comandos; verifique siempre la versión de firmware antes de aplicar instrucciones.
- La selección TCP versus UDP puede afectar el comportamiento de entrega en algunas redes móviles; pruebe el transporte recomendado en la documentación GOTOP si observa reportes intermitentes.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, reduciendo la necesidad de seleccionar el protocolo desde la plataforma.
- Mantenga a mano los detalles de APN, red y SIM; una configuración de APN incorrecta es una razón común por la que el dispositivo no llega a Plaspy.
- Confirme las variantes regionales del modelo y la compatibilidad de bandas celulares al desplegar en distintos países o con diferentes operadores.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G36 con Plaspy ofrece una solución de localización compacta y fácil de instalar que combina reporte continuo de posición con un formato práctico de cargador USB doble. Esta configuración proporciona visibilidad en tiempo real y reenvío de alarmas a Plaspy para que administradores de flotas y propietarios de vehículos puedan rastrear ubicaciones, recibir alarmas de geocerca y energía, y revisar rutas históricas con un esfuerzo mínimo de instalación.

Learn more about how Plaspy can ingest and visualize G36 device data by visiting the Plaspy website at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer procedures, verify current setup details on the official GOTOP site at https://www.gotop.cc/ since manufacturer specifications and setup methods may change over time.
