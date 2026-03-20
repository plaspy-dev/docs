---
slug: /enfora/mini_mt/protocol
id: mini_mt-protocol
sidebar_label: Protocol
title: Enfora - Mini MT Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Enfora Mini MT y su conexión a Plaspy con ajustes compartidos y detección automática
keywords:
  - protocolo Enfora Mini MT
  - protocolo GPS Enfora Mini MT
  - protocolo Enfora Mini MT para Plaspy
  - protocolo de comunicación Enfora Mini MT
  - protocolo de rastreo Enfora Mini MT
  - protocolo rastreador GPS Enfora
  - integración Mini MT Plaspy
  - compatibilidad dispositivos Enfora
  - rastreador GSM GPRS Plaspy
  - rastreo vehicular Enfora
---

# Enfora - Protocolo Mini MT

Esta página describe el contexto público del protocolo para usar el rastreador Enfora Mini MT con Plaspy. Se centra en cómo el Mini MT se comunica con una plataforma de rastreo y qué esperar al integrar este dispositivo compacto quad band GSM GPRS para flotas, seguridad personal y monitoreo de personal móvil.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento preciso del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Aquí se explica el contexto general de comunicación del Mini MT sin exponer detalles privados de implementación y se recomienda confirmar el comportamiento específico del dispositivo con la documentación del fabricante.

## Visión general del protocolo

El protocolo del dispositivo para el Enfora Mini MT define cómo el rastreador informa posición, estado y eventos a un servidor remoto y cómo el servidor puede, opcionalmente, enviar comandos o actualizaciones de configuración. A grandes rasgos, el protocolo permite una identificación fiable del dispositivo, actualizaciones de ubicación eficientes e informes de eventos adecuados para casos de uso de seguimiento personal y de personal.

- Permite que el Mini MT envíe posiciones y eventos de movimiento o alertas a un servidor remoto.
- Incluye elementos de identificación y estado del dispositivo para que una plataforma como Plaspy pueda asociar mensajes con el activo correcto.
- Soporta reportes que permiten a Plaspy mostrar información de ubicación, movimiento y alertas para monitoreo y respuesta.
- Puede incluir reportes periódicos y mensajes impulsados por eventos, como disparos de botón de pánico o sensores de movimiento.
- Está sujeto a las opciones de firmware y aprovisionamiento que determinan los intervalos de reporte y el contenido de los eventos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un endpoint compartido e identifica automáticamente el protocolo usado por el dispositivo. En la mayoría de los casos, un Mini MT correctamente configurado que apunte al endpoint de Plaspy comenzará a reportar sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.
- Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar a la plataforma.
- Los dispositivos deben aprovisionarse para enviar datos a la dirección del servidor Plaspy para permitir la detección y el onboarding automáticos.
- La detección automática facilita el soporte de una amplia gama de dispositivos y simplifica la configuración para los administradores.

## Transporte y contexto de conexión

El transporte de la conexión y el direccionamiento son detalles importantes de configuración que determinan cómo el Mini MT entrega sus mensajes de reporte a Plaspy. El Mini MT puede configurarse para usar UDP o TCP según el soporte del dispositivo y las opciones de aprovisionamiento, y Plaspy ofrece un endpoint de escucha consistente para simplificar la integración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- El dominio del servidor Plaspy es d.plaspy.com para configuración basada en DNS.
- La IP del servidor Plaspy es 54.85.159.138 como opción de direccionamiento alternativa.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- Asegúrese de que el APN y la configuración GSM del dispositivo permitan conexiones salientes hacia el endpoint de Plaspy y el protocolo elegido.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware entre unidades Mini MT pueden alterar qué mensajes y campos envía el dispositivo.
- Revisión de hardware o funciones opcionales del equipo, como voz o FOTA, pueden afectar el comportamiento de reporte disponible.
- Configuraciones provisionadas por el fabricante o restricciones del APN de la SIM pueden modificar la selección de transporte y la conectividad.
- La elección entre UDP y TCP puede tener efectos prácticos sobre la entrega y la retransmisión en redes móviles.
- Confirme los campos de configuración del dispositivo usados para la dirección del servidor, el transporte y los intervalos de reporte antes del despliegue.
- Valide cualquier cambio contra la documentación oficial de Enfora para el firmware y la revisión específicos del Mini MT.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Mini MT ayuda a asegurar una configuración fiable, un diagnóstico efectivo y un comportamiento predecible a largo plazo cuando se integra con Plaspy. Tener claridad sobre lo que el dispositivo envía y cómo la plataforma espera recibirlo reduce errores de configuración y acelera la resolución de problemas.

- Acelera el onboarding inicial aclarando qué dirección de servidor y transporte debe usar el dispositivo.
- Ayuda a interpretar comportamientos del dispositivo como reportes faltantes, mensajes duplicados o tiempos de evento inesperados.
- Orienta las decisiones sobre selección de transporte y configuración de red para despliegues móviles.
- Apoya la planificación de gestión de firmware cuando nuevas funciones o correcciones cambian los datos reportados.
- Mejora los flujos de soporte al acotar las causas probables cuando ocurren problemas de comunicación.

## Por qué usar Plaspy con este protocolo

Usar el Enfora Mini MT con Plaspy brinda a las organizaciones una vía práctica para capturar eventos de ubicación, movimiento y emergencia desde un rastreador pequeño y robusto con capacidad de voz. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga de configuración manual y ayudan a los equipos a desplegar soluciones de seguimiento personal y de trabajadores móviles más rápido.

Para conocer más sobre Plaspy y cómo la plataforma puede integrarse con dispositivos como el Enfora Mini MT, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos del dispositivo, notas de firmware e instrucciones de aprovisionamiento, verifique la información con el fabricante en http://www.enfora.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
