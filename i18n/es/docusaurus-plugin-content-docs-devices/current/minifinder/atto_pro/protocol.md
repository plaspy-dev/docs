---
slug: /minifinder/atto_pro/protocol
id: atto_pro-protocol
sidebar_label: Protocol
title: MiniFinder - Atto Pro Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar MiniFinder Atto Pro con Plaspy, con ajustes de conexión y notas de compatibilidad
keywords:
  - protocolo MiniFinder Atto Pro
  - MiniFinder Atto Pro GPS
  - compatibilidad Atto Pro Plaspy
  - rastreador GPS Plaspy
  - protocolo de rastreador de animales
  - comunicación de rastreador GPS
  - integración de rastreadores Plaspy
  - protocolo de rastreador para mascotas
  - compatibilidad de dispositivos de rastreo
  - protocolo de rastreo en tiempo real
---

# MiniFinder - Protocolo Atto Pro

Esta página ofrece la información pública del protocolo para usar el rastreador MiniFinder Atto Pro con la plataforma Plaspy. Describe a alto nivel cómo se comunica el Atto Pro con Plaspy, cuáles son los ajustes de conexión más comunes y qué esperar al integrar el dispositivo para monitoreo en tiempo real e informes históricos.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión del hardware y la implementación del fabricante; por eso esta guía se centra en información pública y segura que facilita la puesta en marcha y la verificación, más que en detalles internos de paquetes o parsers.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del rastreador es el conjunto de reglas e intercambios de mensajes que permiten al Atto Pro enviar posiciones GNSS, telemetría de movimiento y sensores, y notificaciones de eventos a un servidor remoto como Plaspy. El protocolo define cómo se identifica el dispositivo, cómo informa posiciones periódicas y alarmas, y cómo la plataforma recibe y almacena esos mensajes para vista en vivo e historial.

- Permite la entrega de posiciones GNSS y telemetría desde el Atto Pro a Plaspy para seguimiento en tiempo real.
- Transmite notificaciones de eventos como rupturas de geocerca, alertas de movimiento y avisos de batería baja.
- Incluye identificación del dispositivo e información de sesión para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta almacenamiento en el dispositivo y posterior subida de posiciones guardadas cuando vuelve la conectividad.
- Permite que Plaspy aplique lógica de geocercas, alertas e historial una vez recibida la telemetría.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y utiliza detección automática para determinar el protocolo del rastreador cuando los dispositivos reportan a ese endpoint. En configuraciones habituales, el dispositivo se apunta al servidor de Plaspy y usa UDP o TCP según lo permita el equipo.

- El dominio del servidor Plaspy a configurar en los dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El servicio de Plaspy usa el puerto 8888 y este mismo puerto se emplea para todos los dispositivos en Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.
- Asegúrese de que el dispositivo esté configurado para reportar al endpoint de Plaspy y que la conectividad de red desde el dispositivo al servidor esté permitida por la operadora y cualquier firewall intermedio.
- Si un rastreador no aparece, verifique la configuración de reporte del dispositivo, la conectividad celular y que se esté usando el endpoint y puerto correctos de Plaspy.

## Transporte y contexto de la conexión

El contexto de conexión abarca cómo el Atto Pro alcanza el servidor de Plaspy a través de la red móvil. El Atto Pro soporta transporte celular y puede configurarse para usar UDP o TCP según la configuración del dispositivo y las condiciones de la red. Use los mismos valores de host y puerto de Plaspy para un enrutamiento consistente del tráfico del dispositivo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- La dirección del servidor Plaspy a usar es d.plaspy.com y alternativamente puede dirigirse a la IP pública 54.85.159.138.
- Plaspy emplea un único puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y el manejo del transporte.
- Elija UDP cuando se busque menor sobrecarga y la red lo soporte, o TCP cuando se prefiera entrega confiable y ordenada.
- Confirme que las operadoras móviles, la configuración de APN y cualquier firewall de red permitan tráfico saliente al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar la temporización de los mensajes, los eventos soportados y los campos de telemetría disponibles; siempre revise la versión de firmware al diagnosticar discrepancias.
- Las revisiones de hardware o variantes regionales del Atto Pro pueden alterar las bandas celulares soportadas u opciones de transporte y afectar la conectividad.
- La selección de transporte (UDP versus TCP) depende de la implementación; asegúrese de que el dispositivo esté en un modo de transporte compatible con la red y la configuración elegida.
- El comportamiento de registro local y el momento de la subida (cómo el dispositivo almacena y luego sube posiciones guardadas) puede variar según el firmware y debe validarse según su caso de uso.
- BLE y sensores integrados aportan telemetría pero pueden entregarse de forma distinta según el firmware; el emparejamiento de sensores y el comportamiento de corto alcance no cambian el endpoint de red del dispositivo.
- Valide la compatibilidad y el comportamiento más reciente del protocolo contra la documentación oficial de MiniFinder y las notas de lanzamiento.

## Por qué importa comprender el protocolo

Conocer cómo se comunica el Atto Pro con Plaspy ayuda a garantizar una configuración fiable, alertas oportunas y registros históricos consistentes. Tener claridad sobre transporte, ajustes de servidor y la variabilidad de firmware reduce el tiempo de solución de problemas y mejora la disponibilidad operativa cuando los dispositivos están desplegados.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para reportes exitosos.
- Facilita el diagnóstico de brechas de conectividad causadas por la operadora, APN o restricciones de firewall.
- Aclara qué esperar respecto a subidas de posiciones en buffer tras pérdidas de conectividad y cómo eso impacta la continuidad del historial.
- Contribuye a elegir intervalos de reporte y modos de transporte adecuados para balancear vida de batería y necesidades de datos.
- Guía los pasos de verificación cuando actualizaciones de firmware o revisiones de hardware cambian el comportamiento del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el MiniFinder Atto Pro con Plaspy ofrece a equipos y familias una plataforma única para monitoreo en vivo, alertas y revisión histórica de seguimiento de animales y activos portátiles. El diseño compacto IP67 del Atto Pro, su precisión GNSS, detección de movimiento y registro local complementan las capacidades de gestión de dispositivos, geocercas y flujos de notificación de Plaspy para ofrecer conciencia situacional práctica en recuperación de mascotas, supervisión ganadera y monitoreo remoto.

Para comenzar o saber más sobre cómo Plaspy gestiona la conectividad y el rastreo de dispositivos, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo, notas de firmware y orientación del fabricante, verifique la información actual en el sitio de MiniFinder https://minifinder.se/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
