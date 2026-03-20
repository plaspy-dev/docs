---
slug: /megastek/mt80/protocol
id: mt80-protocol
sidebar_label: Protocol
title: Megastek - MT80 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el reloj GPS Megastek MT80 con Plaspy, con notas de transporte y compatibilidad
keywords:
  - Protocolo Megastek MT80
  - Protocolo GPS Megastek MT80
  - Compatibilidad MT80 Plaspy
  - Protocolo rastreador GPS MT80
  - Protocolo rastreador Megastek
  - Telemetría de salud MT80
  - Protocolo reloj GPS
  - Protocolo rastreador wearable GPS
  - MT80 GPRS TCP UDP
  - Protocolo de dispositivo Plaspy
---

# Megastek - Protocolo MT80

Esta página explica el contexto público del protocolo para usar el reloj GPS Megastek MT80 Series con Plaspy. Se centra en cómo el dispositivo informa ubicación, eventos y telemetría de salud de forma que Plaspy pueda recibir y presentar esos datos, evitando detalles internos del equipo o implementaciones privadas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la firmware del MT80, la variante de hardware y la configuración del fabricante, por lo que la información a continuación debe entenderse como guía general de integración y no como referencia específica de una versión de firmware.

## Resumen del protocolo

La serie MT80 comunica telemetría y eventos de alarma a servidores usando métodos estándar disponibles en dispositivos wearables celulares. El protocolo del dispositivo define cómo el reloj se identifica, cómo reporta posiciones, envía valores de sensores de salud y notifica alarmas para que Plaspy pueda convertir esos mensajes en eventos de panel y trayectos históricos.

- Permite identificar el dispositivo y reportar sesiones para que Plaspy asocie los datos entrantes con la cuenta y la unidad correctas.
- Entrega fijaciones de ubicación, marcas de tiempo y eventos de movimiento usados para rastreo en tiempo real y reproducción.
- Transmite campos de telemetría de salud como temperatura cutánea, SpO2 y frecuencia cardíaca desde la variante MT80BLE o mediante reenvío vía gateway del teléfono.
- Señala alarmas y eventos como SOS, eventos de voz bidireccional, alertas de geocerca, batería baja y detección de cinturón puesto/quitar o corte.
- Soporta opciones de transporte comunes (GPRS celular sobre TCP o UDP y SMS) para que los dispositivos puedan reportar a un endpoint de rastreo estándar.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes en un único endpoint y puerto compartidos y usa detección automatizada para reconocer el protocolo del rastreador. Cuando un MT80 está configurado correctamente para reportar a Plaspy, normalmente usted no necesita seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha los reportes de dispositivos en el endpoint compartido d.plaspy.com y también acepta conexiones al IP 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de servidor y Plaspy detecta automáticamente el protocolo del rastreador en ese puerto.
- Si el MT80 está configurado para enviar datos a d.plaspy.com o a 54.85.159.138 usando el transporte compatible, Plaspy clasificará y procesará la telemetría entrante.
- Las credenciales de dispositivo y los campos de identificación adecuados reportados por el MT80 ayudan a Plaspy a vincular los datos con la cuenta correcta.
- Usted debe confirmar que el MT80 está configurado para reportar usando uno de los transportes soportados y que el host y puerto de destino coinciden con la configuración de Plaspy.

## Transporte y contexto de conexión

La elección del transporte es una configuración del MT80 y depende de la variante de hardware regional y de las necesidades del despliegue. Plaspy soporta tanto reportes TCP como UDP en el mismo puerto estándar para que los integradores elijan el mejor balance entre fiabilidad y latencia.

- El MT80 puede configurarse para usar UDP o TCP para reportes GPRS; Plaspy acepta ambos tipos de transporte en el puerto 8888.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente al IP 54.85.159.138 como destino de reporte.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, ofreciendo un puerto único y consistente para el reporte de rastreadores entre modelos.
- El reporte por SMS también es comúnmente soportado por variantes MT80 en entornos donde no hay datos por paquete.
- Algunas variantes MT80 pueden reenviar telemetría de salud a través de un gateway emparejado en el smartphone, que luego envía los datos a Plaspy por el transporte elegido.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre lanzamientos MT80 pueden cambiar qué campos de telemetría se reportan y qué alarmas están disponibles; verifique la versión de firmware al realizar troubleshooting.
- Variantes de hardware como MT80BLE y MT804G pueden exponer sensores y opciones de reenvío diferentes; confirme la variante exacta antes de integrar.
- La selección de transporte (TCP vs UDP vs SMS) puede afectar garantías de entrega y latencia; escoja el transporte adecuado para el despliegue y las condiciones de red.
- Opciones de configuración o personalizaciones por parte del fabricante pueden alterar formatos de reporte o mapeos de campos; revise la configuración del dispositivo antes del despliegue.
- Al usar reenvío por Bluetooth o modos con gateway telefónico, asegúrese de que la app o el gateway emparejado esté configurado para reenviar datos de forma confiable al endpoint de Plaspy.
- Siempre valide reportes reales de dispositivos contra los registros de ingestión de Plaspy durante la configuración inicial para confirmar que los campos y eventos llegan como se espera.

## Por qué importa entender el protocolo

Tener un entendimiento claro y práctico de cómo se comunica el MT80 ayuda a garantizar una configuración fiable, un troubleshooting preciso y una operación predecible a largo plazo cuando se integra con Plaspy.

- Ayuda a decidir si usar TCP, UDP o SMS según el despliegue y el entorno de red.
- Facilita mapear los campos MT80 como ubicación, telemetría de salud y alarmas a los esquemas de eventos e informes de Plaspy.
- Agiliza el troubleshooting al enfocarse en desajustes de configuración como host, puerto o transporte incorrectos.
- Permite planificar mejor las compensaciones entre batería e intervalos de reporte vinculados a las limitaciones energéticas y muestreo de sensores de un wearable.
- Permite a los integradores planear el impacto de actualizaciones de firmware y validar cambios frente al comportamiento esperado en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar la serie MT80 con Plaspy ofrece a las organizaciones visibilidad unificada de ubicación, eventos de seguridad y telemetría de salud desde una sola plataforma. Para proveedores de cuidado, programas de trabajadores solitarios y despliegues supervisados, la combinación de sensores wearables y el procesamiento de ingestión y eventos de Plaspy permite alertas oportunas, revisión histórica y supervisión operativa sin requerir selección de protocolo por dispositivo.

Si desea saber más sobre cómo Plaspy maneja integraciones de dispositivos y las funciones disponibles para despliegues MT80, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles más actuales sobre protocolos específicos de dispositivos, notas de firmware y guías de implementación, verifique la información en el sitio del fabricante https://www.megastek.com/ ya que el comportamiento y los campos soportados pueden cambiar con revisiones de firmware y hardware.
