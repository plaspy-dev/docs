---
slug: /ulbotech/t362/configuration
id: t362-configuration
sidebar_label: Configuration
title: Ulbotech - T362 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Ulbotech T362 con Plaspy, incluyendo ajustes de servidor, transporte y flujo de trabajo
keywords:
  - Configuración Ulbotech T362
  - Configuración T362
  - Configuración T362 Plaspy
  - Ajustes servidor Plaspy
  - Configuración rastreador OBD II GPS
  - Configuración seguimiento de vehículos
  - Configuración rastreador gestión de flotas
  - Actualización firmware T362
  - Configuración SIM dual
  - Configuración seguimiento en tiempo real
---

# Ulbotech - T362 Configuración

Esta página describe la configuración pública para usar el rastreador GPS Ulbotech T362 con Plaspy. Explica los ajustes comunes del servidor Plaspy, las opciones de transporte y los pasos prácticos para apuntar un T362 hacia Plaspy y habilitar el seguimiento en tiempo real y la ingestión de telemetría. Use esta guía junto con la documentación oficial de Ulbotech y sus procedimientos de instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el lado del servidor. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor usadas para provisionarlo.

## Resumen de la configuración

El objetivo al configurar un T362 para Plaspy es que el dispositivo envíe posiciones GNSS, telemetría OBD y registros de eventos a Plaspy, de modo que el vehículo sea visible y gestionable en la plataforma. La configuración pública se centra en el endpoint de red, la selección del transporte y la validación de que el dispositivo reporte correctamente.

- Configure el dispositivo para usar el endpoint de servidor de Plaspy y así enrutar datos a los paneles y alertas.
- Seleccione el protocolo de transporte que el dispositivo soporte (UDP o TCP) y establezca el puerto requerido.
- Verifique la SIM, el APN y la conectividad GPRS para que el T362 mantenga el enlace con Plaspy.
- Aplique y guarde la configuración del fabricante y reinicie el dispositivo si es necesario.
- Valide en Plaspy que el dispositivo reporte posiciones, telemetría OBD y mensajes de eventos.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el T362. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador en el backend

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD-II del vehículo para conectar el T362 y confirmar alimentación.
- SIM activa instalada y habilitada para datos; el T362 admite conmutación por fallos de SIM dual.
- Información de APN correcta para la(s) SIM para que el dispositivo establezca la conexión GPRS.
- Acceso al método o software oficial de configuración de Ulbotech para el T362 (herramienta micro USB, portal del proveedor o utilitario autorizado de configuración).
- Una cuenta de Plaspy y permisos para añadir o validar dispositivos en su espacio de trabajo.
- Documentación del dispositivo o datos de identificación suministrados por Ulbotech para registro y resolución de problemas.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para apuntar a Plaspy, el T362 transmite fijaciones de posición GNSS, telemetría derivada de OBD y eventos detectados por GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe el tráfico y asocia automáticamente el protocolo del dispositivo, por lo que se requiere poca selección de protocolo por dispositivo en el servidor.

- El T362 envía paquetes periódicos de posición y telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Puede configurar el dispositivo para usar transporte UDP o TCP según su preferencia o las opciones del firmware.
- Plaspy ingiere el flujo entrante y asocia los mensajes con el dispositivo para visibilidad y reportes en tiempo real.
- Los mensajes de eventos y telemetría del T362 (por ejemplo comportamiento de conductor o datos OBD) llegan al mismo endpoint compartido de Plaspy.
- El comportamiento de SIM dual y APN automático en el T362 ayuda a mantener el dispositivo en línea y a que Plaspy reciba actualizaciones continuas.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de Ulbotech para el T362 (por ejemplo la utilidad USB del fabricante, una herramienta de configuración del proveedor o la interfaz de instalador autorizada).
2. En los ajustes de servidor del dispositivo introduzca el servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Proporcione los ajustes de APN y los parámetros relacionados con la SIM apropiados para la(s) SIM instaladas y guarde la configuración.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta del fabricante o el firmware lo requieren.
7. Valide que el T362 está reportando a Plaspy revisando la actividad del dispositivo y los mensajes entrantes en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos y la sintaxis para configurar un T362 dependen de la herramienta de configuración de Ulbotech o de la versión de firmware del dispositivo. Ulbotech proporciona utilidades de configuración y cadenas de comandos documentadas en su documentación oficial; siga esos comandos del fabricante cuando estén disponibles. Si usa un método basado en serie, USB o SMS de Ulbotech, consulte la guía del proveedor para obtener los comandos exactos y los marcadores para APN y entradas de servidor.

Si obtiene comandos públicos específicos de la documentación de Ulbotech o del proveedor, preséntelos a su instalador o úselos tal como están documentados. Esta página no incluye comandos crudos porque las herramientas del fabricante y los firmwares difieren según la versión.

## Notas sobre la configuración

- Las diferencias de firmware pueden afectar las opciones de configuración disponibles, como la selección de transporte, la detección automática del APN y el comportamiento FOTA; confirme la versión de firmware antes de aplicar ajustes.
- El T362 admite conmutación por fallos de SIM dual y manejo automático de APN; asegúrese de que ambas ranuras SIM estén provisionadas si se requiere conectividad continua.
- Elegir TCP versus UDP puede tener implicaciones en las garantías de entrega y en el volumen de datos; seleccione el transporte acorde con sus políticas operativas y lo que soporte el firmware específico.
- Use la utilidad de configuración oficial de Ulbotech o herramientas autorizadas del proveedor para evitar errores de configuración y preservar la garantía y las funciones de gestión remota.
- Tras aplicar cambios de configuración, verifique la conectividad observando los mensajes del dispositivo en Plaspy y confirmando las actualizaciones de telemetría y posición.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech T362 con Plaspy ofrece una forma directa de convertir telemetría proveniente del OBD y fijaciones GNSS en información útil para la gestión de flotas. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la carga de configuración por dispositivo, mientras que la gestión de SIM dual y APN del T362 contribuye a mantener los vehículos conectados ante pérdidas de cobertura. En conjunto, soportan casos de uso habituales de flota como seguimiento en vivo, alarmas por eventos y flujos de trabajo de mantenimiento basados en telemetría.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la guía de instalación y las especificaciones técnicas más recientes en el sitio de Ulbotech http://www.ulbotech.com/ antes de un despliegue en producción.
