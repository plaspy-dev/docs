---
slug: /parallel_track/trackbox/configuration
id: trackbox-configuration
sidebar_label: Configuration
title: Parallel track - Trackbox Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Trackbox de Parallel Track con Plaspy y comprobar informes de ubicación
keywords:
  - Configuración Trackbox Parallel Track
  - Instalación Trackbox Parallel Track
  - Configuración servidor Trackbox
  - Configuración Trackbox para Plaspy
  - Configuración plataforma GPS Trackbox
  - Integración Trackbox Parallel Track
  - Configuración software de rastreo Trackbox
  - Configuración gestión de flotas Trackbox
  - Guía de configuración del Trackbox
  - Configuración rastreador Plaspy
---

# Parallel track – Configuración del Trackbox

Esta página describe el contexto público de configuración para usar el Trackbox de Parallel Track con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, el proceso general para apuntar el Trackbox al endpoint de Plaspy y las comprobaciones prácticas para validar que el dispositivo puede reportar datos de ubicación a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante para el Trackbox pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que la orientación siguiente debe entenderse como el contexto público y práctico para integrar un Trackbox con Plaspy.

## Resumen de la configuración

Configurar un Trackbox para Plaspy implica dirigir el dispositivo al endpoint del servidor de Plaspy y confirmar la entrega confiable de las actualizaciones periódicas de posición. El objetivo es que el Trackbox envíe sus reportes al endpoint compartido de Plaspy para que la plataforma pueda analizar automáticamente el protocolo entrante y mostrar la ubicación del dispositivo.

- Configure el servidor de salida del Trackbox hacia el endpoint y puerto de Plaspy para que el dispositivo reenvíe sus reportes POST o paquetes a Plaspy.
- Seleccione el método de transporte que soporte el equipo, UDP o TCP, y apúntelo al puerto de Plaspy.
- Guarde y aplique la configuración en la herramienta oficial de Parallel o mediante el método del fabricante.
- Reinicie el Trackbox si el dispositivo requiere un reinicio para aplicar cambios de red o servidor.
- Verifique que el dispositivo aparezca en Plaspy y que las actualizaciones de ubicación lleguen en los intervalos esperados.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar la conexión del Trackbox:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que debe configurar el puerto 8888 independientemente del modelo del equipo o de la selección del protocolo.

## Requisitos habituales antes de la configuración

- Asegúrese de que el Trackbox tenga una fuente de alimentación estable y esté encendido durante la configuración.
- Confirme que el dispositivo tenga una conexión móvil funcional si se usa reporte por datos celulares.
- Disponga del método de configuración del fabricante Parallel Track (software, interfaz web o comandos SMS) para cambiar los ajustes de servidor y transporte.
- Conozca los datos de su SIM y el APN si el Trackbox los requiere para datos móviles.
- Tenga acceso a la documentación del Trackbox o al soporte del proveedor para seguir los pasos específicos de guardar y aplicar la configuración según la versión.
- Posea una cuenta en Plaspy o acceso de administrador para verificar que el dispositivo aparece y reporta en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el Trackbox envía sus reportes periódicos de ubicación al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión del dispositivo e intenta identificar automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en Plaspy.

- El Trackbox se apunta a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- El dispositivo utiliza transporte UDP o TCP según la configuración.
- Plaspy escucha en el puerto compartido y realiza la detección automática del protocolo para las conexiones entrantes.
- La entrega correcta de paquetes o datos POST hace que el dispositivo sea visible en Plaspy para mapeo y monitoreo.
- Tras la configuración y un reinicio si es necesario, las actualizaciones periódicas deberían aparecer en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial del Trackbox proporcionado por el fabricante.
2. En los ajustes de servidor del dispositivo ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy usa para todos los equipos.
4. Elija UDP o TCP si la configuración del Trackbox requiere selección de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta de configuración del Trackbox.
6. Reinicie el dispositivo si las instrucciones del fabricante indican hacerlo para aplicar los cambios.
7. Valide que el Trackbox esté reportando a Plaspy comprobando la aparición del dispositivo y las actualizaciones de ubicación recientes en la plataforma.

## Ejemplos de comandos de configuración

El fabricante del Trackbox admite múltiples métodos de configuración y variantes de firmware, por lo que los comandos exactos o los pasos de la interfaz variarán. Use la herramienta oficial de Parallel Track o el método SMS/API que proporcione el fabricante para fijar el endpoint de Plaspy y el transporte. Al emplear una aproximación por línea de comandos o SMS, siga el orden que requiere el dispositivo: establecer servidor, establecer puerto, establecer transporte, guardar y luego reiniciar.

Si dispone de cadenas de comando públicas específicas en la documentación de Parallel Track, aplíquelas en la secuencia que indique el fabricante y verifique que el dispositivo se conecte a d.plaspy.com en el puerto 8888.

## Notas de configuración

- Las diferencias de firmware pueden cambiar menús de configuración, sintaxis de comandos y dónde guardar los ajustes de servidor; consulte la documentación del Trackbox para pasos específicos por versión.
- Elija UDP o TCP según la opción disponible en el equipo; ambos son compatibles con Plaspy en el puerto 8888 y Plaspy detectará automáticamente el protocolo usado.
- Si utiliza datos celulares, confirme que el APN y los detalles de la SIM estén presentes y correctos para que el Trackbox pueda alcanzar el servidor Plaspy a través de la red móvil.
- La configuración por SMS puede estar disponible en algunos modelos de Trackbox para cambios en campo; siga la guía de comandos SMS del fabricante si utiliza ese método.
- Siempre aplique y guarde los ajustes según el flujo de trabajo del dispositivo, y reinicie cuando se le indique para asegurar que los cambios de red y servidor entren en efecto.

## Por qué usar Plaspy con esta configuración

Configurar el Trackbox de Parallel Track para reportar a Plaspy ofrece un endpoint de servidor y una lógica de análisis consistentes para que las organizaciones centralicen los reportes de ubicación y la supervisión operativa. El uso del endpoint compartido de Plaspy y la detección automática del protocolo elimina la necesidad de gestionar múltiples direcciones de servidor por modelo de dispositivo y simplifica los despliegues a gran escala.

Learn more about Plaspy and how it can manage Trackbox devices at https://www.plaspy.com. For the latest device specific instructions, firmware details, and manufacturer tools verify configuration steps on the Parallel Track official website http://www.paralleltrack.co.uk as methods and firmware behavior may change over time.
