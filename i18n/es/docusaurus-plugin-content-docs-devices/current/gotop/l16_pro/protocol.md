---
slug: /gotop/l16_pro/protocol
id: l16_pro-protocol
sidebar_label: Protocol
title: GOTOP - L16 PRO Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del smartwatch GOTOP L16 PRO y cómo se comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo GOTOP L16 PRO
  - Protocolo GPS GOTOP L16 PRO
  - Protocolo de rastreo GOTOP L16 PRO
  - Protocolo de comunicación GOTOP L16 PRO
  - Compatibilidad GOTOP L16 PRO con Plaspy
  - Rastreador GOTOP L16 PRO Plaspy
  - Protocolo GPS smartwatch GOTOP
  - Protocolo de rastreador GPS portátil
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador GPS Plaspy
---

# GOTOP - L16 PRO Protocolo

Esta página describe el contexto público del protocolo para usar el smartwatch rastreador GOTOP L16 PRO con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se comparten y qué tener en cuenta al configurar el equipo para asegurar reportes y notificaciones fiables a su cuenta Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos informan al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de la telemetría pueden variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que esta página mantiene un nivel público e independiente de la implementación al explicar las consideraciones prácticas de conectividad y compatibilidad para los dispositivos L16 PRO.

## Visión general del protocolo

El protocolo del rastreador es el método de reporte desde el dispositivo que permite al L16 PRO enviar ubicación, telemetría de sensores y eventos de seguridad a Plaspy. En términos prácticos, el protocolo define cómo se identifica el reloj, cómo se envían los datos y cómo se transmiten alertas como SOS o violaciones de geocerca para que Plaspy pueda almacenar, mostrar y actuar sobre la información.

- Permite reportes periódicos y por evento de la ubicación GPS y posicionamiento interior asistido por BLE hacia Plaspy.
- Transmite telemetría de sensores como frecuencia cardiaca, SpO2, temperatura y eventos del acelerómetro para detección de caídas.
- Lleva eventos y alarmas de seguridad, incluyendo SOS, batería baja y notificaciones de geocerca para alertas inmediatas.
- Proporciona identidad y estado del dispositivo para que Plaspy asocie los mensajes con el propietario y perfil correctos.
- Soporta flujos de monitoreo remoto, como indicadores de llamadas bidireccionales y líneas temporales de telemetría de salud sin exponer detalles internos del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador que usa el dispositivo que informa. Cuando un L16 PRO está configurado para reportar a Plaspy, normalmente no se requiere seleccionar el protocolo manualmente en la plataforma, siempre que el dispositivo apunte al servidor de Plaspy y utilice un transporte aceptado.

- El hostname del endpoint de Plaspy d.plaspy.com y la IP del servidor 54.85.159.138 se usan para el reporte de dispositivos.
- Plaspy escucha en el puerto 8888 y todos los dispositivos compatibles usan ese mismo puerto para reportar.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al endpoint, lo que simplifica la configuración para la mayoría de usuarios.
- Por lo general, solo es necesario configurar el L16 PRO para que reporte al endpoint de Plaspy; no se requiere un selector de protocolo adicional en Plaspy para dispositivos configurados correctamente.
- Confirme los ajustes de reporte del dispositivo y la configuración de APN/SIM en el rastreador para asegurar que los mensajes alcancen el endpoint de Plaspy.

## Transporte y contexto de conexión

El L16 PRO puede usar UDP o TCP como transporte según el soporte del dispositivo y la configuración. Plaspy soporta ambos transportes en un único puerto compartido para adaptarse a distintas implementaciones de dispositivo y condiciones de red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos y transportes.
- El L16 PRO puede usar UDP o TCP en el puerto 8888; elija el transporte que soporte su firmware y su entorno de red.
- Asegúrese de que los ajustes de APN y de la SIM o eSIM en el reloj sean correctos para que el dispositivo pueda establecer una sesión celular con el endpoint de Plaspy.
- Cortafuegos de red y restricciones del operador pueden afectar el comportamiento de UDP frente a TCP; consulte la documentación del operador al solucionar problemas de conectividad.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades L16 PRO pueden cambiar cuándo y cómo se reporta la telemetría; verifique las notas de la versión de firmware para conocer cambios de comportamiento.
- Las revisiones de hardware o variaciones en los módulos de sensores pueden afectar qué campos de telemetría transmite el dispositivo a Plaspy.
- Las opciones de configuración del lado del fabricante pueden alterar la preferencia de transporte o los intervalos de reporte; revise los menús de configuración antes del despliegue.
- La selección de UDP o TCP en el rastreador depende de lo que soporte el firmware del dispositivo y de las condiciones de la red local.
- El roaming celular multi región y la compatibilidad con operadores pueden influir en la conectividad y deben validarse para los países objetivo de despliegue.
- Siempre valide el reporte del dispositivo al endpoint de Plaspy durante la puesta en servicio para confirmar que los mensajes llegan como se espera.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del L16 PRO ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y lograr un comportamiento predecible cuando el dispositivo se usa con Plaspy. Incluso sin inspeccionar formatos de paquete de bajo nivel, saber cómo reporta el dispositivo y qué espera la plataforma reduce la mala configuración y acelera la resolución de incidencias.

- Confirma que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 y usa el puerto 8888.
- Ayuda a escoger entre UDP o TCP según el soporte del firmware y las condiciones de la red.
- Facilita interpretar la cadencia de telemetría, el impacto en la duración de la batería y los tiempos de alerta en Plaspy.
- Mejora los flujos de puesta en servicio y reduce falsos negativos en alertas SOS o de geocerca.
- Favorece la coordinación con actualizaciones del fabricante que puedan cambiar campos de telemetría o reglas de reporte.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP L16 PRO con Plaspy integra la ubicación GPS de wearables y la telemetría de salud en una plataforma centralizada de monitoreo. Plaspy ingiere ubicación, alertas SOS y datos de salud basados en sensores para que cuidadores y administradores puedan crear reglas de geocerca, recibir alertas instantáneas y revisar telemetría histórica para obtener información operativa.

El enfoque de endpoint compartido y la detección automática de protocolo de Plaspy simplifican el despliegue de dispositivos L16 PRO a gran escala. Para saber más sobre cómo Plaspy funciona con rastreadores wearables como el L16 PRO visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y las notas de firmware en el sitio del fabricante https://www.gotop.cc/.
