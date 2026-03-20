---
slug: /gotop/tv_680/protocol
id: tv_680-protocol
sidebar_label: Protocol
title: GOTOP - TV-680 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el rastreador GOTOP TV-680 con Plaspy mediante ajustes de conexión compartidos
keywords:
  - protocolo GOTOP TV-680
  - protocolo GPS GOTOP TV-680
  - comunicación GOTOP TV-680
  - rastreo GOTOP TV-680
  - protocolo rastreador GOTOP
  - protocolo TV-680
  - protocolo rastreador GPS
  - compatibilidad dispositivos Plaspy
  - integración GPS Plaspy
  - rastreo vehicular GOTOP
---

# GOTOP - TV-680 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS GOTOP TV-680 con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión espera Plaspy y qué verificar durante la integración. La información presentada es de alto nivel y no incluye datos sensibles, útil para la configuración y resolución de problemas.

El GOTOP TV-680 es un rastreador GPS alimentado por batería que utiliza posicionamiento satelital y datos celulares para reportar ubicación y habilitar funciones de voz bidireccional. Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles de comandos específicos del equipo consulte la documentación oficial de GOTOP.

## Visión general del protocolo

A alto nivel, el protocolo del rastreador es el conjunto de mensajes y comportamientos que permiten al TV-680 identificarse, reportar posición y enviar datos de eventos a un servidor de rastreo como Plaspy. Esta sección evita formatos de paquetes de bajo nivel y explica el papel de la comunicación para un reporte e integración confiables.

- Permite que el TV-680 envíe información de ubicación, hora y estado a un servidor remoto para seguimiento y monitoreo.
- Transporta identificación del dispositivo e información de sesión para que el servidor asocie los datos entrantes con la instancia correcta del rastreador.
- Transmite mensajes basados en eventos, como alertas SOS, activaciones de geocerca o el estado de llamadas entrantes, en un formato que el servidor puede interpretar.
- Soporta actualizaciones periódicas y bajo demanda para satisfacer requisitos tanto de seguimiento en vivo como de registro histórico.
- Opera sobre datos celulares estándar enviando mensajes del dispositivo al endpoint configurado de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado se conecta. En la mayoría de los casos no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo apunta al endpoint de la plataforma.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy usada para reportes es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para datos entrantes de rastreadores y utiliza ese mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar datos a Plaspy en el puerto 8888.
- Cuando el TV-680 está configurado para reportar al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y procesará los mensajes entrantes.

## Transporte y contexto de conexión

El contexto de conexión trata sobre cómo el TV-680 llega a Plaspy a través de la red móvil y qué host y transporte se usan. Una selección correcta del transporte y de los ajustes del servidor garantiza que el dispositivo reporte de forma confiable en distintos operadores y condiciones de red.

- El TV-680 puede configurarse para enviar datos usando UDP o TCP, según el firmware y las opciones de configuración del dispositivo.
- Configure el equipo para reportar a d.plaspy.com o, en ausencia de DNS, a la IP numérica 54.85.159.138.
- Todos los dispositivos que se comunican con Plaspy usan el mismo puerto, el 8888, lo que simplifica reglas de firewall y de red.
- Confirme que la SIM del dispositivo tenga un APN activo y que el operador permita conexiones salientes en el transporte elegido.
- Condiciones de red, NAT y firewalls del operador pueden afectar la entrega; permita conexiones salientes hacia el endpoint de Plaspy y el puerto 8888.

## Notas sobre compatibilidad del protocolo

- El TV-680 es compatible con Plaspy cuando apunta al endpoint de reporte de Plaspy y utiliza ajustes de transporte soportados.
- Las revisiones de firmware pueden agregar, eliminar o modificar comportamientos del protocolo; verifique la versión del firmware al diagnosticar diferencias.
- Revisiones de hardware o modelos específicos por región pueden variar en funciones disponibles, como voz bidireccional o reporte de ubicación desencadenado por llamadas.
- Algunas funciones requieren una configuración correcta de la SIM y la red en el dispositivo, por ejemplo funciones de voz o asistidas por SMS.
- La elección entre UDP y TCP puede afectar la confiabilidad y el orden de los mensajes; seleccione el transporte recomendado por el firmware del dispositivo.
- Siempre valide la dirección del servidor de reporte y el transporte del dispositivo frente a la documentación oficial de GOTOP antes de un despliegue masivo.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el TV-680 con Plaspy facilita una configuración exitosa, operación confiable y una resolución de problemas eficiente. Un conocimiento práctico de las expectativas de conexión reduce el tiempo de integración y ayuda a resolver incidencias en campo.

- Asegura que el dispositivo esté configurado para reportar al endpoint y transporte correctos de Plaspy para que los datos lleguen de forma fiable.
- Ayuda a identificar si los problemas reportados son de red, SIM o configuración en el dispositivo en lugar de ser problemas del servidor.
- Aclara cómo eventos del dispositivo como SOS, respuesta de ubicación por llamadas y voz bidireccional se relacionan con el procesamiento y alertas en el servidor.
- Apoya la planificación de la vida útil de la batería y los intervalos de reporte al entender la frecuencia con la que el dispositivo envía datos.
- Facilita la validación del comportamiento del dispositivo tras actualizaciones de firmware o cambios de hardware.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TV-680 con Plaspy ofrece a las organizaciones una forma directa de recopilar datos de ubicación y eventos del rastreador en una única plataforma de monitoreo. Los ajustes de conexión compartidos y la detección automática de protocolo de Plaspy simplifican la incorporación para que los dispositivos comiencen a reportar sin seleccionar el protocolo manualmente.

Si desea saber más sobre cómo Plaspy maneja las integraciones de dispositivos y los servicios disponibles para monitoreo de flotas o activos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante sobre el GOTOP TV-680, consulte el sitio oficial de GOTOP en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
