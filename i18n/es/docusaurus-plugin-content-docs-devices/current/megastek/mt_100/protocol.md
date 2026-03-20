---
slug: /megastek/mt_100/protocol
id: mt_100-protocol
sidebar_label: Protocol
title: Megastek - MT-100 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar Megastek MT-100 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo Megastek MT-100
  - Protocolo GPS Megastek MT-100
  - Protocolo de comunicación MT-100
  - Protocolo de rastreo MT-100
  - Compatibilidad rastreador Megastek
  - Compatibilidad de dispositivos Plaspy
  - Integración GPS Plaspy
  - Rastreo de vehículos Megastek MT-100
  - Rastreo en tiempo real MT-100
  - AGPS MT-100
---

# Megastek - Protocolo MT-100

Esta página describe el contexto público del protocolo para integrar el rastreador portátil Megastek MT-100 con Plaspy. Se enfoca en cómo el dispositivo comunica con el endpoint de Plaspy y qué debe considerarse al configurar los reportes para que ubicación, alarmas y estados lleguen de forma confiable a la plataforma. Se toma como referencia el conjunto de funciones del MT-100, incluyendo posicionamiento asistido por AGPS, alarma SOS con asistencia LBS, comunicación bidireccional, rastreo en tiempo real y soporte para GPRS y SMS.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento mantiene la discusión en un nivel público y práctico en lugar de documentar tramas específicas de firmware o estructuras de comandos privadas.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación del MT-100 define cómo el dispositivo reporta identidad, posición, alarmas y estado a un servidor remoto, y cómo el servidor puede enviar comandos o consultas de vuelta. Para la integración con Plaspy, el objetivo principal del protocolo es entregar de forma fiable telemetría y eventos útiles sobre transporte IP para que Plaspy pueda analizarlos y mostrarlos a los usuarios.

- Permitir que el dispositivo se identifique para que Plaspy asocie los mensajes con el activo o usuario correcto.
- Transmitir información de ubicación, incluyendo GPS asistido por AGPS y posiciones asistidas por LBS para eventos SOS.
- Transportar eventos de alarma y estado como geocerca, exceso de velocidad, vibración y batería baja.
- Permitir comandos bidireccionales y acuses de recibo cuando el firmware del dispositivo implemente control remoto o configuración.
- Usar un canal de transporte IP (datos GPRS) como ruta primaria para reportar a Plaspy, con SMS disponible en el MT-100 para mensajería alternativa o alertas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos entrantes de los dispositivos en un endpoint de servidor compartido e identifica automáticamente el protocolo del rastreador en función del tráfico de reporte que recibe. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre y cuando el MT-100 esté configurado para reportar correctamente al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto que usa Plaspy para reportes de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- La plataforma realiza detección automática de protocolo, por lo que los dispositivos configurados normalmente se registran sin necesidad de seleccionar el protocolo manualmente.
- La identidad correcta del dispositivo y el reporte de red al endpoint de Plaspy son los requisitos principales para una detección automática exitosa.
- Si un dispositivo no aparece, verifique que esté apuntando al endpoint correcto de Plaspy y que la conectividad de red permita conexiones salientes hacia el servidor.

## Contexto de transporte y conexión

La selección del transporte y la configuración de red determinan cómo el MT-100 alcanza el endpoint de Plaspy. El MT-100 soporta datos GPRS para reportes IP y SMS como canal secundario o de respaldo. Al configurar el dispositivo, elija el transporte que corresponda a las capacidades del firmware y al entorno de red.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte del equipo y la configuración local.
- Los dispositivos que reportan a Plaspy pueden apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración entre modelos.
- Asegúrese de que el APN del dispositivo y el plan de datos de la SIM permitan conexiones GPRS salientes al endpoint de Plaspy.
- Use UDP cuando el firmware del dispositivo lo requiera o cuando se prefiera menor overhead; use TCP si se necesita entrega ordenada y fiable y el firmware lo soporte.
- Cortafuegos de red y restricciones del operador pueden bloquear conexiones, por lo que confirme que el dispositivo puede alcanzar el endpoint de Plaspy desde la SIM y la ubicación desplegada.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware del MT-100 pueden cambiar los comandos y formatos de reporte; verifique las notas de firmware al diagnosticar problemas.
- El modo de transporte (UDP o TCP) debe coincidir con la configuración del dispositivo; algunas unidades pueden soportar solo un tipo de transporte.
- Ajustes de GPRS como el APN y el comportamiento del operador pueden afectar la forma y el momento en que el dispositivo se conecta con éxito a Plaspy.
- El MT-100 soporta SMS y puede ser útil para la configuración inicial o alertas de emergencia, pero no reemplaza el reporte continuo por IP.
- Personalizaciones del fabricante o firmware específico por región pueden alterar funciones disponibles o campos de mensaje.
- Siempre valide la compatibilidad con la documentación actual del fabricante para la unidad MT-100 específica en uso.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar reportes confiables a Plaspy, permite una resolución de problemas más precisa y favorece la mantenibilidad a largo plazo de los rastreadores desplegados. Tener claro el manejo de transportes, endpoints de servidor y cómo el dispositivo expone identidad y eventos reduce el tiempo de configuración y problemas operativos.

- Confirma que el dispositivo está apuntando al endpoint de Plaspy y usa el transporte y puerto esperados.
- Ayuda a interpretar telemetría faltante o retrasada revisando transporte, APN y conectividad del operador.
- Permite configurar correctamente los campos de identidad del dispositivo para que Plaspy detecte y asocie mensajes automáticamente.
- Facilita el diagnóstico del comportamiento de alarmas y el reporte de eventos como SOS, geocerca, exceso de velocidad y batería baja.
- Ayuda a planificar actualizaciones de firmware o reemplazos de hardware al identificar dónde las diferencias de protocolo pueden afectar la integración.

## Por qué usar Plaspy con este protocolo

Usar el Megastek MT-100 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar y actuar sobre datos de ubicación y eventos desde un rastreador portátil resistente. El endpoint compartido de Plaspy y la detección automática de protocolo minimizan la configuración manual requerida, permitiendo que los equipos se concentren en reglas, alertas y flujos operativos en lugar de detalles de conectividad de bajo nivel.

Para saber más sobre Plaspy y cómo maneja conexiones de dispositivos y presentación de datos, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo MT-100, notas de firmware y especificaciones de hardware consulte la documentación oficial del fabricante en https://www.megastek.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con el fabricante.
