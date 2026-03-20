---
slug: /queclink/gv75/protocol
id: gv75-protocol
sidebar_label: Protocol
title: QuecLink - GV75 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del QuecLink GV75 y cómo se comunica con Plaspy para monitoreo de flotas fiable
keywords:
  - protocolo QuecLink GV75
  - protocolo GPS QuecLink GV75
  - protocolo de seguimiento GV75
  - compatibilidad GV75 Plaspy
  - protocolo rastreador GPS QuecLink
  - protocolo de comunicación GV75
  - rastreo de vehículos GV75
  - gestión de flotas GV75
  - protocolo de dispositivo Plaspy
  - integración de telemetría GV75
---

# QuecLink - Protocolo GV75

Esta página resume el contexto del protocolo público para usar el rastreador QuecLink GV75 con la plataforma Plaspy. Explica cómo el GV75 reporta posición y telemetría a Plaspy, qué papel cumple el protocolo de comunicación en esa integración y qué factores prácticos afectan la entrega e interpretación de los mensajes. El GV75 es un rastreador resistente con certificación IP67 con u-blox GNSS, conectividad GSM/GPRS cuatribanda, interfaz serial RS232 para telemetría extendida, búfer interno de mensajes y múltiples alarmas y entradas que Plaspy puede procesar cuando el dispositivo está configurado para reportar.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo comienza a enviar datos al endpoint de la plataforma. Los dispositivos que apunten a Plaspy deben dirigirse al dominio o IP del servidor Plaspy y al puerto común; el comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del GV75, la revisión de hardware y la implementación del fabricante, por lo que los ajustes de dispositivo y el firmware deben validarse contra la documentación de QuecLink si se requieren capacidades avanzadas.

## Descripción general del protocolo

El protocolo de comunicación del GV75 define los comportamientos del dispositivo y los tipos de mensaje que permiten al rastreador identificarse, reportar soluciones GNSS, enviar alarmas y estados de entradas, y transmitir telemetría como estado de batería y datos de sensores externos. En la práctica, este protocolo actúa como la interfaz entre la telemetría en el dispositivo y los servicios de ingestión de Plaspy, posibilitando seguimiento en tiempo real y reporte de eventos sin exponer detalles internos de implementación del equipo.

- Permite reportes periódicos y por eventos de posición para que Plaspy pueda trazar ubicaciones en vivo y recorridos históricos.
- Transporta eventos de entradas digitales y alarmas como estado de ignición, alertas por remolque y notificaciones de batería baja para generar alertas en la plataforma.
- Lleva telemetría y valores de sensores externos desde RS232 o entradas para que Plaspy los incluya en informes.
- Soporta entrega de mensajes en búfer, lo que mejora la fiabilidad cuando el GV75 sale de cobertura celular.
- Funciona sobre transportes celulares estándar para que el rastreador alcance Plaspy usando el endpoint y puerto configurados.

## Cómo Plaspy detecta el protocolo

Plaspy determina automáticamente el tratamiento apropiado para un dispositivo una vez que este empieza a reportar al endpoint y puerto compartidos de Plaspy. Para la mayoría de usuarios esto significa que no se requiere seleccionar manualmente el protocolo dentro de Plaspy cuando el GV75 está correctamente configurado para reportar a la dirección de Plaspy. La detección se basa en emparejar el tráfico entrante del dispositivo con un patrón de comunicación conocido en lugar de exigir cambios de configuración por dispositivo.

- Plaspy escucha en un único puerto común para todos los dispositivos soportados y utiliza ese endpoint para aceptar mensajes entrantes de los rastreadores.
- Los dispositivos deben apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para alcanzar la plataforma.
- El puerto de escucha de Plaspy es 8888 y Plaspy aceptará conexiones de dispositivos que usen este puerto común.
- Plaspy realiza detección automática de protocolo, de modo que las unidades GV75 correctamente configuradas normalmente no necesitan seleccionar el protocolo en la plataforma.
- Si un dispositivo no llega a Plaspy, verifique los ajustes de reporte del dispositivo y el enrutamiento de red hacia el endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

El GV75 soporta transportes celulares estándar y puede configurarse para usar UDP o TCP en el puerto de Plaspy según la configuración del dispositivo y las condiciones de red. Al integrar con Plaspy, asegúrese de que el rastreador esté dirigido al host de Plaspy y de que el transporte seleccionado sea compatible con su red y ajustes de firmware.

- El GV75 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y las reglas de firewall.
- La elección entre TCP y UDP puede afectar las garantías de entrega y la sobrecarga según el firmware y el comportamiento de la red móvil.
- El dispositivo también soporta reporte por SMS además de TCP/UDP cuando ese transporte es deseable o requerido por la instalación.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar las funciones disponibles, la cadencia de mensajes y el comportamiento de transporte; siempre verifique las notas de la versión de firmware para las unidades GV75 en su flota.
- Revisiones de hardware o variantes regionales de firmware pueden alterar los transportes soportados o las reglas de reporte por defecto.
- Las opciones de RS232 y telemetría externa dependen de la configuración y pueden requerir ajustes equivalentes en el dispositivo y en Plaspy para una ingestión correcta.
- El comportamiento del búfer y el tamaño del almacenamiento de mensajes en el dispositivo pueden afectar cómo se entrega la información histórica tras la reconexión.
- La selección de transporte (UDP vs TCP) y los ajustes de APN en la tarjeta SIM pueden influir en la conectividad y deben probarse en su entorno de despliegue.
- Valide la compatibilidad contra la documentación de QuecLink y pruebe una unidad de muestra antes del despliegue masivo.

## Por qué es importante comprender el protocolo

Comprender cómo el GV75 se comunica con Plaspy ayuda a garantizar una instalación confiable, manejo preciso de eventos y operación predecible a largo plazo. El conocimiento del protocolo y las opciones de transporte reduce el tiempo de configuración, acelera la resolución de problemas y le permite tomar decisiones informadas sobre firmware, intervalos de reporte y manejo de alarmas.

- Ayuda a confirmar los ajustes de reporte del dispositivo para que los mensajes lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Agiliza la resolución de problemas de reportes faltantes o demorados al clarificar el comportamiento de transporte y de búfer.
- Permite un mapeo correcto de las entradas y alarmas del GV75 hacia eventos y notificaciones en Plaspy.
- Orienta la elección entre TCP o UDP según la fiabilidad de la red y el volumen de mensajes esperado.
- Colabora en la planificación de actualizaciones de firmware y procedimientos de aprovisionamiento para flotas grandes.

## Por qué usar Plaspy con este protocolo

Usar el GV75 con Plaspy ofrece a las organizaciones una opción de hardware robusta que se integra en una plataforma unificada de gestión de flotas. El diseño resistente del GV75, su mensajería en búfer y las opciones de telemetría externa lo hacen una elección práctica para seguimiento en exteriores, marítimo e industrial; Plaspy procesa estos reportes de dispositivo para proporcionar mapas en vivo, historial, alertas de geocercas y paneles de telemetría.

Para obtener más información sobre cómo Plaspy gestiona las integraciones de dispositivos y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles más actuales a nivel de dispositivo sobre el protocolo, notas de firmware y revisiones de hardware del GV75 consulte el sitio del fabricante en https://www.queclink.com/ porque el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse contra la documentación oficial.
