---
slug: /eelink/k6/protocol
id: k6-protocol
sidebar_label: Protocol
title: EElink - K6 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador EElink K6 y cómo se comunica con Plaspy usando configuración compartida
keywords:
  - Protocolo EElink K6
  - EElink K6 GPS
  - protocolo de rastreo EElink K6
  - EElink K6 Plaspy
  - protocolo de rastreador GPS K6
  - protocolo de comunicación K6
  - compatibilidad rastreador GPS Plaspy
  - rastreo vehicular EElink K6
  - protocolo GPRS rastreador
  - rastreador de activos K6
---

# EElink - Protocolo K6

Esta página resume el contexto público del protocolo del rastreador GPS EElink K6 y explica cómo este dispositivo se comunica con la plataforma Plaspy. Se centra en el comportamiento de red y de reporte relevante para la integración y resolución de problemas, evitando detalles sensibles de implementación. Use esta guía para comprender cómo el K6 envía datos de posición y estado a Plaspy y qué verificar al desplegar el equipo.

El K6 soporta posicionamiento por GPS, complementos por LBS, subida de datos por GPRS, capacidades de voz bidireccional y una función SOS; se informa que funciona con Plaspy. Plaspy utiliza un punto de conexión y puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre valide la configuración del dispositivo y el firmware al preparar un rastreador para uso en producción.

## Resumen del protocolo

El protocolo de reporte es el mecanismo que el K6 usa para identificarse y enviar datos de ubicación, estado y alarmas a un servidor como Plaspy. El protocolo determina qué información se envía, con qué frecuencia se reporta y cómo el servidor reconoce o responde a los mensajes del dispositivo. En los K6, estos comportamientos están gobernados por el firmware instalado y la configuración del dispositivo elegida al desplegarlo.

- Permite que el rastreador informe datos de ubicación GPS y LBS, además de estado básico, a un servidor remoto
- Transporta eventos de alarma como pulsaciones SOS, alertas de geocerca y notificaciones de batería baja
- Transmite la identidad del dispositivo y el contexto de sesión para que el servidor asocie los mensajes al activo correcto
- Soporta actualizaciones de configuración desde el servidor o por OTA cuando el fabricante ofrece esa opción
- Opera sobre datos celulares usando GPRS para que los mensajes lleguen a un backend como Plaspy para su procesamiento

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los rastreadores en un único punto de conexión y detecta automáticamente el protocolo del dispositivo, de modo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy. Cuando un K6 está configurado para reportar a Plaspy enviará sus mensajes al servidor de Plaspy, y Plaspy empata el tráfico entrante con un protocolo soportado según el perfil del mensaje recibido.

- El dominio del servidor Plaspy es d.plaspy.com y la IP de host es 54.85.159.138
- Plaspy utiliza el puerto 8888 para el reporte de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere una selección explícita
- Asegúrese de que el K6 esté configurado para reportar al endpoint de Plaspy para que la detección automática funcione
- Si un dispositivo no parece registrarse, verifique APN, dirección de reporte, tipo de transporte y ajustes de firmware

## Transporte y contexto de conexión

Los ajustes de transporte y dirección de conexión determinan cómo el K6 alcanza Plaspy. El K6 puede configurarse para usar UDP o TCP según la capacidad y la configuración del dispositivo. Apuntar el K6 a Plaspy usando el dominio o la IP proporcionados y el puerto compartido es la configuración típica para reportes y gestión remota.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no hay configuración de puerto por dispositivo en el lado del servidor
- Use el tipo de transporte soportado por el firmware del dispositivo y ajuste esa configuración en la configuración del equipo
- Verifique el APN celular y la conectividad de la red para asegurar que los datos GPRS puedan llegar al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware; confirme que el firmware del K6 soporta el comportamiento de reporte que usted espera
- Revisiones de hardware o variantes regionales pueden implementar diferencias en alarmas o funciones opcionales
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y con las reglas de firewall de la red
- Personalizaciones del fabricante o firmware de distribuidores pueden cambiar formatos de mensaje o comandos soportados
- Las actualizaciones OTA pueden alterar el comportamiento del protocolo; revise las notas de la versión antes de actualizar la flota
- Siempre valide la identidad del dispositivo y el reporte en una prueba controlada antes de realizar un despliegue a gran escala
- Consulte al fabricante para ejemplos de configuración específicos del dispositivo y características soportadas

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar un rastreo confiable, un manejo correcto de alarmas y una resolución eficiente de problemas cuando un dispositivo K6 se integra con Plaspy. Saber cómo reporta el dispositivo, qué eventos puede enviar y cómo establece la conexión con el servidor reduce la incertidumbre durante la puesta en marcha y acelera la resolución de problemas de conectividad.

- Asegura la configuración correcta del dispositivo para reportar al endpoint de Plaspy
- Ayuda a diagnosticar actualizaciones de ubicación faltantes o comportamientos inesperados del equipo
- Orienta las decisiones sobre la selección de transporte y la configuración de firewall de la red
- Aclara cómo Plaspy recibe e interpreta alarmas y banderas de estado
- Facilita la planificación segura de actualizaciones de firmware o cambios en la configuración de la flota

## Por qué usar Plaspy con este protocolo

Usar Plaspy como backend para dispositivos EElink K6 proporciona una forma centralizada de recolectar posiciones y eventos desde una flota distribuida. Dado que Plaspy escucha en un endpoint y puerto consistentes y detecta automáticamente el protocolo entrante, los equipos pueden desplegar unidades K6 con menos ajustes por dispositivo en el servidor y confiar en la plataforma para procesar reportes de rastreo y alarmas estándar.

Si desea conocer más sobre cómo Plaspy maneja las conexiones de dispositivos y explorar opciones de despliegue para el EElink K6, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique los últimos detalles del protocolo específico del dispositivo y las instrucciones de firmware en el sitio del fabricante en https://www.eelink.com.cn/ antes de finalizar su despliegue.
