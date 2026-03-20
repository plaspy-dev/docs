---
slug: /globalsat/tr_520/protocol
id: tr_520-protocol
sidebar_label: Protocol
title: GlobalSat - TR-520 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar GlobalSat TR-520 con Plaspy en redes LTE M y NB IoT
keywords:
  - protocolo GlobalSat TR 520
  - protocolo GPS GlobalSat TR 520
  - compatibilidad TR 520 Plaspy
  - protocolo de comunicacion TR 520
  - protocolo de rastreo TR 520
  - protocolo rastreador GPS GlobalSat
  - rastreador LTE M NB IoT
  - protocolo de dispositivo Plaspy
  - integracion protocolo rastreador
  - protocolo para rastreo de flotas
---

# GlobalSat - Protocolo TR-520

Esta página documenta el contexto público del protocolo para usar el rastreador GlobalSat TR-520 con Plaspy. Describe el rol de comunicación del protocolo de reporte del dispositivo, las opciones de transporte disponibles y cómo Plaspy recibe esos datos sin exponer detalles internos del firmware ni implementaciones privadas.

Plaspy está preparado para aceptar conexiones de numerosos modelos de rastreadores mediante configuraciones de conexión compartidas y detección automática del protocolo. El comportamiento exacto en el equipo y la temporización de mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en los hechos de alto nivel que importan para una integración fiable con Plaspy.

## Resumen del protocolo

El TR-520 usa su protocolo de reporte para entregar posiciones GNSS, eventos de movimiento y telemetría del dispositivo a un servidor remoto. El rol público del protocolo es identificar el dispositivo, transportar datos de ubicación y sensores, y proporcionar información de estado básica para que Plaspy pueda mostrar posiciones, aplicar reglas y registrar el historial operativo.

- Permite al rastreador enviar posiciones GNSS y eventos de movimiento a un endpoint remoto para su procesamiento.
- Transporta la identidad del dispositivo y telemetría básica para que Plaspy asocie los datos con el activo correcto.
- Lleva indicadores de batería y salud que facilitan la planificación de ciclo de vida y el calendario de reemplazos.
- Soporta mensajes basados en eventos del acelerómetro y contexto asistido por BLE para mejorar la percepción situacional.
- Funciona sobre transportes de red estándar para que el TR-520 opere en redes LTE M y NB IoT mientras conserva energía.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes hacia un endpoint compartido y puede reconocer automáticamente el formato de reporte del rastreador cuando el equipo está apuntando correctamente al servidor de Plaspy. En despliegues típicos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al servidor de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden apuntar para reportes.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse cuando DNS no esté disponible.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El dispositivo se puede configurar para usar UDP o TCP en el puerto 8888, según ajustes del equipo y comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no se requiere selección manual en la plataforma si el dispositivo apunta al endpoint correcto.

## Transporte y contexto de conexión

La elección del transporte y la configuración correcta del endpoint son esenciales para que el TR-520 se conecte con Plaspy de forma fiable. El dispositivo soporta redes de área amplia de baja potencia y puede usar UDP o TCP para entregar sus mensajes periódicos y los basados en eventos al endpoint de Plaspy.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para sus reportes.
- El dispositivo puede configurarse con UDP o TCP en el puerto 8888 para adaptarse a requisitos de red y batería.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y la red en el lado del servidor.
- La tecnología de red, como LTE M o NB IoT, y los ajustes APN del operador pueden afectar la conectividad y deben validarse para el despliegue objetivo.
- Siempre que sea posible, verifique que el dispositivo reporte correctamente confirmando que llega al endpoint de Plaspy y aparece en la interfaz de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la cadencia de reporte, los campos de telemetría soportados y las funciones opcionales entregadas a Plaspy.
- Variantes de hardware o ediciones regionales pueden cambiar el soporte de bandas de radio y la gestión de energía, afectando el comportamiento práctico de reporte.
- La selección entre UDP y TCP puede influir en la retransmisión y el consumo de batería; elija el transporte compatible con el firmware del dispositivo y la red.
- Las funciones asistidas por BLE y el reporte de eventos del acelerómetro pueden ser opcionales y requerir configuración específica en el dispositivo.
- El TR-520 soporta actualizaciones OTA de firmware y estas pueden cambiar el comportamiento del protocolo con el tiempo; valide cualquier cambio después de una actualización.
- Siempre contraste la configuración del dispositivo con la documentación del fabricante para detalles específicos del modelo y del firmware.

## Por qué importa entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y mejorar los resultados operativos a largo plazo. Tener claro el endpoint, el transporte y las dependencias de firmware reduce la fricción en la integración y favorece un comportamiento predecible del dispositivo en campo.

- Garantiza que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que los datos lleguen a Plaspy.
- Ayuda a escoger UDP o TCP según la capacidad del dispositivo, la estabilidad de la red y las consideraciones de batería.
- Facilita la resolución de problemas cuando los dispositivos no aparecen en Plaspy al acotar las verificaciones a la red, el APN y la configuración del firmware.
- Permite planificar actualizaciones OTA y conocer las diferencias de firmware que pueden alterar los reportes y la telemetría.
- Mejora la planificación del ciclo de vida al entender cómo se transmiten a Plaspy los reportes de batería y la telemetría.

## Por qué usar Plaspy con este protocolo

Usar el TR-520 con Plaspy ofrece una solución práctica para organizaciones que requieren larga duración de batería, telemetría remota e inteligencia de movimiento. La combinación de GNSS, eventos del acelerómetro, asistencia BLE y conectividad de baja potencia convierte al TR-520 en una buena opción para activos de flota, equipos remotos y seguimiento de animales cuando el mantenimiento regular es limitado.

Si desea saber más sobre cómo Plaspy puede trabajar con el TR-520 y otros rastreadores, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la documentación actual en https://www.globalsat.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
