---
slug: /istartek/pt32/protocol
id: pt32-protocol
sidebar_label: Protocol
title: iStartek - PT32 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo que explica cómo el iStartek PT32 se comunica con Plaspy para un rastreo confiable de mascotas
keywords:
  - protocolo iStartek PT32
  - iStartek PT32 GPS
  - compatibilidad PT32 Plaspy
  - protocolo de comunicación PT32
  - protocolo del rastreador iStartek
  - rastreador para mascotas PT32
  - rastreador GPS 4G PT32
  - protocolo de rastreo PT32 Plaspy
  - guía de protocolos para rastreadores GPS
  - protocolo de dispositivo Plaspy
---

# iStartek - Protocolo PT32

Esta página presenta el contexto público del protocolo para conectar el rastreador GPS para mascotas iStartek PT32 con la plataforma Plaspy. Describe, en términos generales, cómo el PT32 reporta ubicación y estado, y explica los elementos de comunicación del dispositivo que importan al integrar este compacto rastreador 4G en Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la variante de hardware y la implementación del fabricante, por lo que esta página se centra en información pública y segura que ayuda con la instalación, las pruebas y la resolución de problemas sin entrar en detalles internos del dispositivo.

## Visión general del protocolo

El PT32 emplea un mecanismo de reporte por aire para enviar posición, movimiento y estado del dispositivo a un servidor remoto. En la práctica, este protocolo define cómo el rastreador se identifica, cómo se empaquetan los datos de ubicación y sensores, y cómo el servidor reconoce o registra esos reportes para que la información sea utilizable dentro de Plaspy.

- Permite que el PT32 transmita actualizaciones de ubicación GNSS y LBS además de telemetría básica como batería y movimiento.
- Transporta información de identidad del dispositivo para que Plaspy pueda asociar los reportes con el registro correcto del rastreador.
- Soporta reportes de eventos y alarmas orientados a mascotas, como vibración, batería baja y alertas de geocerca.
- Permite a la plataforma recibir actualizaciones periódicas o bajo demanda según el modo y la configuración del dispositivo.
- Proporciona la base para comandos remotos cuando están soportados, por ejemplo activar el buzzer o la luz para búsqueda de la mascota.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint y puerto compartidos y determina automáticamente qué protocolo de rastreador se está utilizando. Cuando el PT32 está configurado para reportar a Plaspy, la plataforma analiza los mensajes entrantes en el límite de red, por lo que los usuarios normalmente no necesitan seleccionar un protocolo manualmente dentro de Plaspy.

- Plaspy escucha el tráfico entrante de dispositivos en la dirección pública d.plaspy.com.
- La IP del servidor de la plataforma para reportes de dispositivos es 54.85.159.138 y el puerto configurado es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las características de la sesión y la carga útil entrantes.
- En la mayoría de los casos solo necesita apuntar el PT32 al endpoint de Plaspy y asegurar el transporte y credenciales correctas en el dispositivo.
- Si un dispositivo está correctamente configurado para reportar a Plaspy, la selección manual del protocolo dentro de la plataforma suele ser innecesaria.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el PT32 alcanza Plaspy a través de la red móvil. El dispositivo puede configurarse para usar modos de transporte estándar según su firmware y el entorno de red, y el mismo puerto se utiliza en todos los dispositivos conectados a Plaspy.

- El PT32 puede configurarse para usar UDP o TCP dependiendo del soporte del dispositivo y las opciones de configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto; el valor común para reportes de dispositivo es 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 para el reporte directo.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y debe seguir la guía del fabricante para la variante de firmware del PT32.
- Consideraciones de red como el NAT del operador móvil, ajustes APN y la calidad de señal pueden influir en la estabilidad de la conexión.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los transportes soportados y los tipos de eventos disponibles; siempre registre la versión de firmware al validar el comportamiento.
- Las variantes de hardware o los modelos regionales pueden implementar pilas de radio o GNSS ligeramente diferentes que alteren las características de reporte.
- Las configuraciones predeterminadas del fabricante pueden usar SMS como fallback o servidores alternos; confirme que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 al integrar con Plaspy.
- El uso de UDP frente a TCP es una decisión de configuración en el dispositivo y puede variar según el modelo PT32 o su firmware.
- Verifique si las funciones de comandos remotos, como activar el buzzer o la luz, requieren configuración adicional o permisos.
- Confirme si el FOTA y la gestión remota están habilitados para su dispositivo y cuenta antes de realizar actualizaciones remotas.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del PT32 ayuda a garantizar una instalación fiable y una operación a largo plazo con Plaspy. Saber qué envía el rastreador y cómo lo recibe la plataforma facilita la resolución de problemas de conectividad, la validación de la integridad de los datos y la planificación del despliegue de dispositivos.

- Acelera la provisión inicial del dispositivo al confirmar el host de reporte correcto, el transporte y el puerto.
- Ayuda a aislar problemas de conectividad como reportes perdidos, marcas de tiempo incorrectas o sesiones intermitentes.
- Facilita la verificación de que la identidad del dispositivo y la telemetría estén asignadas al usuario o activo correcto en Plaspy.
- Ayuda a planificar el impacto en la batería al elegir intervalos de reporte y modos de energía.
- Apoya el control de cambios cuando se aplican actualizaciones de firmware o cambios de configuración del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el PT32 con Plaspy ofrece una forma sencilla de centralizar el rastreo de mascotas, recibir alertas y revisar rutas históricas. El PT32 proporciona datos GNSS de alta sensibilidad, eventos de movimiento y alarmas específicas para mascotas, mientras que Plaspy ofrece el panel, la gestión de alertas y las funciones de historial necesarias para los flujos de recuperación y monitoreo.

Plaspy está diseñado para aceptar automáticamente los reportes de los rastreadores compatibles cuando el dispositivo está configurado al endpoint y puerto compartidos de Plaspy. Para conocer más sobre cómo funciona Plaspy y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y guía de implementación del fabricante, confirme la información en https://istartek.com/ ya que el comportamiento y las funciones de firmware pueden cambiar con el tiempo.
