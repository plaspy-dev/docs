---
slug: /appello/gt01/configuration
id: gt01-configuration
sidebar_label: Configuration
title: Appello - GT01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Appello GT01 y reportar a Plaspy con ajustes de servidor compartidos y pasos comunes
keywords:
  - Configuración Appello GT01
  - Instalación Appello GT01
  - Configuración GT01 Plaspy
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreo de vehículos
  - Configuración de rastreo de activos
  - Configuración de servidor GT01
  - Guía rastreador GPS Appello
  - Integración de rastreador con Plaspy
---

# Appello - Configuración del GT01

Esta página ofrece el contexto público para usar el Appello GT01 con Plaspy. Describe los valores de servidor compartidos de Plaspy que deberá aplicar al GT01 y resume los pasos comunes para preparar el dispositivo y que pueda reportar ubicación y estado a Plaspy. Los detalles técnicos aquí están pensados para ayudar a instaladores y administradores a comprender lo necesario antes de integrar el GT01 con la plataforma Plaspy.

Plaspy utiliza un conjunto consistente de ajustes de servidor en los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante para el GT01 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor utilizadas. El GT01 es un rastreador compacto con clasificación IP67, soporte GSM y módulo GPS interno; puede configurarse mediante métodos del fabricante como SMS o software del proveedor. Esta página resume el flujo público para conectarlo a Plaspy.

## Resumen de la configuración

Configurar el GT01 para Plaspy implica aplicar un conjunto pequeño de valores de servidor y transporte para que el rastreador envíe posiciones y estados a la plataforma. Además de los valores del servidor, la configuración habitual incluye asegurarse de que el equipo tenga alimentación, acceso a la red y cualquier APN del operador requerido para reportar datos.

- Señalar el rastreador al punto de conexión de Plaspy para que comience la ingestión en la plataforma.
- Elegir el protocolo de transporte que soporte el dispositivo y la red, normalmente UDP o TCP.
- Verificar que el dispositivo tenga conectividad válida a la red móvil y que el APN requerido esté configurado para permitir sesiones de datos.
- Confirmar que el rastreador sea visible en Plaspy después de guardar la configuración para verificar el reporte y la detección automática del protocolo.
- Usar las herramientas de configuración del fabricante o los métodos por SMS soportados por el GT01 para aplicar los cambios.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP  
- Plaspy automatically detects the tracker protocol  
- All devices in Plaspy use the same port for server communication

## Requisitos típicos antes de la configuración

- Una unidad GT01 cargada y con alimentación instalada según la guía del fabricante.
- Servicio de red móvil activo para el dispositivo en una banda de frecuencia soportada.
- Acceso al método de configuración oficial del fabricante o al software del proveedor para aplicar los ajustes.
- Confirmación de cualquier configuración APN o del operador necesaria para la conectividad de datos.
- Una cuenta en Plaspy y permisos para validar los dispositivos después de la configuración.
- Acceso físico al equipo o un método de gestión remota para guardar y probar los cambios de configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando el GT01 se configura para reportar a Plaspy, envía datos de ubicación y del dispositivo al punto de enlace de la plataforma para que los activos sean visibles en la interfaz de Plaspy. Plaspy recibe los datos de los rastreadores en un puerto compartido y utiliza detección automática de protocolo para interpretar los paquetes entrantes.

- El rastreador se apunta a Plaspy usando el dominio del servidor o la IP del servidor y el puerto 8888.
- El dispositivo envía actualizaciones de posición y mensajes de estado por el transporte seleccionado (UDP o TCP).
- Plaspy detecta el protocolo del flujo entrante y procesa los mensajes del rastreador automáticamente.
- Una conexión exitosa hace que el dispositivo sea visible y gestionable en Plaspy para monitoreo e informes.
- La validación del reporte confirma que el GT01 está registrado y transmitiendo correctamente al punto compartido de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software del proveedor para el GT01.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138.  
3. Establezca el puerto en 8888 como el puerto del servidor del dispositivo.  
4. Elija UDP o TCP si el GT01 requiere selección del protocolo de transporte.  
5. Guarde o aplique la configuración en el dispositivo usando la herramienta del proveedor o el canal de configuración soportado.  
6. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, confirmando la detección automática del protocolo.

Si el GT01 se configura vía SMS o con una herramienta del proveedor, utilice esos canales oficiales para aplicar los ajustes de servidor y transporte en lugar de métodos no documentados.

## Notas de configuración

- El GT01 puede configurarse usando los métodos soportados por el fabricante; en algunas regiones y compilaciones de firmware se prefieren comandos SMS o una utilidad de software. Resuma y utilice únicamente los métodos oficiales.
- Las revisiones de firmware y hardware pueden cambiar cómo se aplican los ajustes; revise las notas de firmware antes de aplicar una configuración global.
- TCP y UDP se comportan de forma distinta en redes celulares; elija el transporte que mejor se adapte a su instalación y a las condiciones del operador.
- Puede requerirse la configuración APN del operador para la conectividad de datos; confirme la presencia del APN sin compartir plantillas de credenciales aquí.
- Consulte siempre la documentación del fabricante para procedimientos y opciones específicas del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Appello GT01 con Plaspy ofrece un camino directo para convertir los mensajes de ubicación del dispositivo en visibilidad accionable para flotas, activos o personal de campo. El factor de forma compacto y la carcasa robusta del GT01 lo hacen adecuado para muchas instalaciones, mientras que los ajustes de servidor compartidos de Plaspy y la detección automática del protocolo simplifican la incorporación en implementaciones a gran escala.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos como el Appello GT01, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante más actualizados, verifique la información en el sitio oficial del fabricante http://www.cnjeo.com/.
