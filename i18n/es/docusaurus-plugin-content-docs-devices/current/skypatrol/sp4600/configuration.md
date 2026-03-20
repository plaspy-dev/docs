---
slug: /skypatrol/sp4600/configuration
id: sp4600-configuration
sidebar_label: Configuration
title: SkyPatrol - SP4600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyPatrol SP4600 con ajustes de servidor Plaspy y pasos prácticos para integrar el rastreador
keywords:
  - SkyPatrol SP4600
  - configuración SP4600
  - instalación SP4600
  - configuración rastreador SkyPatrol
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración gestión de flotas
  - configuración servidor SP4600
  - configuración plataforma de seguimiento
---

# SkyPatrol - Configuración SP4600

Esta página describe el contexto de configuración pública para usar el rastreador SkyPatrol SP4600 con Plaspy. Resume los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, explica el flujo de trabajo típico de configuración y destaca las comprobaciones prácticas para que el rastreador comience a reportar en Plaspy. La serie SP4600 es un rastreador GSM GPRS cuatribanda disponible en variantes 2G y 3G e incluye funcionalidades como gestión remota por aire, actualizaciones de firmware y geocercas en hardware, aspectos relevantes a tener en cuenta al planear su despliegue.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use el endpoint y el puerto del servidor que se indican más abajo al configurar el dispositivo y consulte la documentación de SkyPatrol o la herramienta de su proveedor para la interfaz de configuración específica del equipo y cualquier comando SMS o por software requerido por su versión de firmware.

## Resumen de configuración

Configurar el SP4600 para Plaspy prepara el rastreador para enviar datos de ubicación y estado a un único endpoint de Plaspy, de modo que los dispositivos sean visibles dentro de la plataforma. El proceso se centra en establecer el destino del servidor, verificar la conectividad de red y confirmar que el dispositivo informa correctamente para que usted pueda supervisar y administrar el rastreador desde Plaspy.

- Configure el SP4600 para que apunte al endpoint de Plaspy y así los datos se enruten a la plataforma.
- Asegúrese de que el dispositivo tenga conectividad celular válida y los ajustes APN correctos para datos.
- Seleccione el protocolo de transporte que soporte el equipo y establezca el puerto requerido.
- Guarde y aplique la configuración del dispositivo y reinícielo si es necesario para activar los cambios.
- Verifique que el dispositivo aparezca y reporte en Plaspy para confirmar la integración exitosa.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Acceso al método o software oficial de configuración de SkyPatrol provisto por el vendedor o fabricante.  
- Una unidad SP4600 alimentada con la versión de red compatible seleccionada para su mercado: 2G o 3G.  
- Una SIM activa con servicio de datos y el APN correcto configurado para conectividad GPRS.  
- Conocimiento de la versión de firmware del dispositivo y de cualquier comando o formato SMS específico del proveedor necesario para cambiar los ajustes del servidor.  
- Una fuente de energía estable y la posibilidad de reiniciar el equipo después de aplicar los ajustes si la herramienta o el dispositivo lo requiere.  
- Acceso a las credenciales o detalles de cuenta de Plaspy necesarios para confirmar la visibilidad del dispositivo en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Cuando esté configurado, el SP4600 envía ubicación y eventos del dispositivo al endpoint y puerto del servidor Plaspy. Plaspy recibe estos mensajes y los mapea en la interfaz de la plataforma, donde la ubicación, los eventos de geocerca y el estado del equipo son visibles para usuarios y administradores.

- El dispositivo se configura para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El rastreador puede usar UDP o TCP según el firmware y las opciones de configuración del equipo.  
- Plaspy detecta y maneja automáticamente el protocolo nativo del rastreador SP4600.  
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no necesita asignaciones de puerto únicas por unidad.  
- Una vez que comienza el reporte, Plaspy procesa los mensajes de ubicación y eventos para que el dispositivo aparezca en la plataforma y pueda ser monitoreado.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de SkyPatrol o al software del proveedor para el SP4600.  
2. En los ajustes de servidor del dispositivo introduzca el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.  
3. Establezca el puerto del dispositivo en 8888, utilizado por Plaspy para todos los dispositivos soportados.  
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su firmware o preferencia de red.  
5. Configure el APN y parámetros de red necesarios para que el rastreador establezca conectividad GPRS.  
6. Aplique o guarde la configuración dentro de la herramienta del fabricante y reinicie el dispositivo si es necesario.  
7. Valide que el dispositivo reporta en Plaspy comprobando su presencia y los mensajes recientes en la plataforma.

## Ejemplos de comandos de configuración

El SP4600 admite configuración a través de la herramienta del proveedor SkyPatrol y también puede aceptar comandos por SMS o de configuración según el firmware. La sintaxis exacta de los comandos y los campos disponibles varían según el firmware y el software del proveedor, por lo que aquí no se proporcionan comandos universales. Consulte la documentación del SkyPatrol SP4600 o la herramienta de configuración de su proveedor para el conjunto de comandos y ejemplos apropiados para su revisión de firmware.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden alterar los pasos exactos de configuración y las opciones de transporte disponibles. Verifique el comportamiento del firmware antes de un despliegue a gran escala.  
- Elegir UDP o TCP puede afectar la fiabilidad de la conexión y la forma en que se retransmiten los mensajes; seleccione el transporte soportado y recomendado para su instalación.  
- Usar el dominio d.plaspy.com es preferible por flexibilidad, mientras que 54.85.159.138 puede utilizarse donde no haya DNS disponible.  
- Todos los dispositivos en Plaspy usan el puerto 8888 y Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita asignar puertos únicos por unidad.  
- Funcionalidades como FOTA y la gestión remota por aire pueden ayudar a actualizar firmware y configuraciones a escala, pero requieren que el dispositivo tenga una conectividad confiable.

## Por qué usar Plaspy con esta configuración

Apuntar el SkyPatrol SP4600 a Plaspy permite visibilidad centralizada y monitoreo operativo de una flota de dispositivos. Con el equipo reportando a un único endpoint y puerto de Plaspy, los administradores pueden rastrear ubicaciones, recibir notificaciones de eventos y gestionar grupos de rastreadores de manera consistente a través de la plataforma Plaspy.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com y verifique los detalles más recientes de configuración específica del dispositivo y la guía de firmware en el sitio del fabricante https://www.skypatrol.com/ para que la configuración de su SP4600 coincida con la documentación actual de SkyPatrol y el comportamiento del firmware.
