---
slug: /neomatica/adm50/configuration
id: adm50-configuration
sidebar_label: Configuration
title: Neomatica - ADM50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del Neomatica ADM50 para Plaspy con ajustes de servidor y notas prácticas
keywords:
  - Configuración Neomatica ADM50
  - Instalación Neomatica ADM50
  - Configuración ADM50 Plaspy
  - Instalación rastreador GPS Neomatica
  - Configuración rastreador GPS ADM50
  - Integración rastreador Plaspy
  - Configuración dispositivo Plaspy
  - Ajustes servidor Neomatica ADM50
  - Configuración seguimiento ADM50
  - Configuración telemetría Neomatica ADM50
---

# Neomatica - ADM50 Configuración

Esta página explica el contexto público de configuración para usar el rastreador personal Neomatica ADM50 con Plaspy. Reúne los ajustes de servidor de Plaspy que necesitará, describe el flujo típico para que el dispositivo informe a Plaspy y señala verificaciones prácticas para validar la conectividad y la visibilidad en la plataforma. El ADM50 es un rastreador compacto a batería con posicionamiento GNSS, detección de movimiento, botón de pánico y almacenamiento local de rutas, funcionalidades frecuentemente usadas en Plaspy para seguimiento en tiempo real y alertas de eventos.

Plaspy se apoya en ajustes de servidor compartidos y utiliza detección automática de protocolo, por lo que el mismo endpoint y puerto de servidor se usan para todos los rastreadores compatibles. Los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación como una lista práctica pública para integrar el ADM50 en Plaspy y confirme siempre los detalles específicos del dispositivo con la documentación de Neomatica cuando sea necesario.

## Resumen de la configuración

Preparar un ADM50 para Plaspy implica apuntar el rastreador al endpoint compartido de Plaspy, confirmar los ajustes de transporte y validar que los mensajes de ubicación y eventos sean visibles en Plaspy. El objetivo es asegurar la entrega fiable por GPRS de coordenadas GNSS, alarmas y eventos de movimiento, cuidando la duración de la batería mediante intervalos de reporte adecuados.

- Configure el equipo para enviar posición y telemetría a Plaspy usando los ajustes de servidor proporcionados.
- Seleccione el protocolo de transporte que soporte el dispositivo y asigne el puerto común de Plaspy.
- Verifique la conectividad del rastreador a la red y confirme que los mensajes lleguen a Plaspy.
- Ajuste los intervalos de reporte y el comportamiento de alarmas según el caso de uso para equilibrar granularidad y autonomía.
- Valide que los eventos de pánico y movimiento del ADM50 sean visibles en el panel de Plaspy una vez que el reporte esté activo.

## Ajustes de servidor de Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el ADM50 al endpoint de servidor de Plaspy y seleccionar el transporte del dispositivo si éste lo solicita.

## Requisitos típicos antes de configurar

- ADM50 con batería cargada y accesible para configuración o conectado a una PC mediante el puerto miniUSB.
- SIM activa con plan de datos configurada en el dispositivo si se requiere reporte por GPRS.
- Acceso al método de configuración oficial de Neomatica para el ADM50 o a una herramienta aprobada por el proveedor.
- Conocimiento de la versión de firmware del dispositivo y las notas de versión para confirmar soporte y comportamiento de comandos.
- Cuenta válida en Plaspy y posibilidad de validar la visibilidad del dispositivo en la interfaz de Plaspy tras la configuración.
- Confirmación básica de la alcanzabilidad de redes GSM de datos desde la ubicación del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El ADM50 transmite coordenadas GNSS, telemetría de eventos y señales de alarma por GPRS al endpoint y puerto del servidor de Plaspy. Plaspy recibe estos mensajes, detecta automáticamente el protocolo del rastreador y asigna la telemetría entrante a la entrada del dispositivo en su cuenta de Plaspy para mapeo en vivo y gestión de eventos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la opción del dispositivo; Plaspy admite ambos y detectará el protocolo automáticamente.  
- Las posiciones GNSS y las correcciones asistidas por LBS se envían como reportes periódicos según los intervalos configurados.  
- Las pulsaciones del botón de pánico y los eventos de movimiento del acelerómetro se envían como mensajes de evento inmediatos a Plaspy.  
- El historial local de rutas se sube o reporta según la configuración, permitiendo a Plaspy reconstruir trayectos cuando la conectividad lo permita.

## Flujo de configuración común

1. Acceda al método de configuración oficial del Neomatica ADM50 o al software recomendado por Neomatica usando la interfaz miniUSB o la herramienta del proveedor.  
2. En los ajustes de red o servidor del equipo, ingrese d.plaspy.com o 54.85.159.138 como servidor de destino.  
3. Configure el puerto del servidor del dispositivo en 8888, requerido por Plaspy.  
4. Si el ADM50 solicita seleccionar transporte, elija UDP o TCP según su preferencia o la recomendación del instalador.  
5. Aplique o guarde la configuración desde la herramienta o la interfaz web del dispositivo.  
6. Reinicie o corte y restaure la alimentación del ADM50 si el equipo necesita reiniciarse para aplicar los nuevos ajustes de red.  
7. Valide que el dispositivo está reportando a Plaspy comprobando la conectividad del equipo y los mensajes de posición o eventos recientes en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

La documentación y las herramientas de configuración de ADM50 pueden ofrecer métodos por línea de comandos, SMS o utilitarios. La sintaxis exacta varía según el firmware y la versión de la herramienta. Como los comandos públicos del fabricante no se incluyen en esta guía, siga la utilidad de configuración de Neomatica o la referencia oficial de comandos al aplicar los ajustes de dirección de servidor y puerto. En todos los métodos debe configurar el destino como d.plaspy.com o 54.85.159.138, establecer el puerto 8888 y seleccionar UDP o TCP si el dispositivo requiere elegir transporte.

Si obtiene ejemplos de comandos de Neomatica de fuentes oficiales, use bloques de comando en su documentación interna y preserve los marcadores de posición como {{apn}} o {{apnu}} donde sean requeridos por la sintaxis del comando del dispositivo.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de comandos y las opciones disponibles; confirme siempre la versión de firmware del ADM50 antes de aplicar comandos.  
- El ADM50 figura como retirado o descontinuado por el fabricante; la disponibilidad del equipo y el soporte de firmware pueden ser limitados. Consulte con Neomatica para documentación o firmware archivados.  
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador; Plaspy admite ambos y detectará el protocolo automáticamente cuando lleguen los mensajes.  
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que facilita el aprovisionamiento masivo entre los rastreadores compatibles.  
- Las herramientas de configuración del fabricante y las interfaces de PC, como el puerto miniUSB, son la vía recomendada para el aprovisionamiento inicial y las actualizaciones de firmware.

## Por qué usar Plaspy con esta configuración

Usar el ADM50 con Plaspy ofrece una vía sencilla para obtener ubicación en tiempo real, alarmas y telemetría de movimiento en escenarios de seguimiento personal y de activos. La capacidad de Plaspy para detectar automáticamente protocolos de rastreadores y aceptar conexiones en un endpoint de servidor compartido simplifica el aprovisionamiento y reduce la complejidad de la configuración por dispositivo, permitiendo visibilidad rápida de la ubicación y los eventos para operaciones y monitoreo de seguridad.

Para obtener más información sobre Plaspy y cómo soporta rastreadores como el Neomatica ADM50 visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique los detalles más recientes de configuración específica del dispositivo con Neomatica en https://neomatica.com/ antes del despliegue.
