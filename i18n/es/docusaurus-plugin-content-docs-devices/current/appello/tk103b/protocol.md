---
slug: /appello/tk103b/protocol
id: tk103b-protocol
sidebar_label: Protocol
title: Appello - TK103B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker Appello TK103B y cómo se comunica con Plaspy para seguimiento y monitoreo
keywords:
  - protocolo Appello TK103B
  - protocolo GPS TK103B
  - protocolo rastreador GPS Appello
  - Appello TK103B Plaspy
  - protocolo de comunicación TK103B
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular TK103B
  - protocolo rastreador GSM GPRS
  - compatibilidad protocolo rastreador
  - protocolo de dispositivo Plaspy
---

# Appello - Protocolo TK103B

Esta página describe el contexto del protocolo público para usar el tracker Appello TK103B con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica en términos generales, cómo Plaspy acepta y procesa los reportes del equipo y qué debe saber usted al configurar la unidad para el seguimiento en la nube. Los detalles descriptivos aquí usan el conjunto de funciones del TK103B como referencia, incluyendo conectividad GSM GPRS, reportes periódicos automáticos, capacidad de control remoto y alertas estándar como geocercas, exceso de velocidad, SOS y batería baja.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo apunta al endpoint de Plaspy. Para la familia TK103B, los dispositivos pueden configurarse para enviar datos a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888. El equipo puede usar UDP o TCP en el puerto 8888 y Plaspy emplea el mismo puerto para todos los trackers compatibles. El comportamiento exacto del protocolo puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre verifique los detalles del dispositivo al configurar y probar.

## Descripción general del protocolo

El TK103B transmite ubicación, estado e información de alerta mediante un enlace de datos celular hacia un servidor remoto. El protocolo del tracker define cómo el dispositivo formatea esos reportes, cómo se identifica ante el servidor y cómo se intercambian comandos remotos o acuses de recibo en configuraciones que lo permiten.

- Permite la transmisión de datos básicos de seguimiento como longitud, latitud, velocidad y marca de tiempo hacia una plataforma remota.
- Proporciona identificación del equipo e informes de estado para que Plaspy pueda asociar los datos entrantes con el activo correcto.
- Transporta alertas y señales de eventos, incluyendo geocercas, movimiento, exceso de velocidad, SOS y estado de la señal GPS, para soportar monitoreo y notificaciones.
- Soporta reportes automáticos periódicos con intervalos configurables para mantener un historial continuo de ubicación.
- Permite mensajes de control remoto y configuración desde una plataforma operadora cuando el firmware del equipo y la ruta de red lo permiten.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y aplica detección automática de protocolo para identificar el tipo de tracker. Cuando un TK103B envía reportes al endpoint de Plaspy, la plataforma hace coincidir los datos entrantes con la lógica de manejo apropiada sin que usted deba seleccionar manualmente un protocolo en la mayoría de los casos.

- El endpoint del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto de escucha para todos los dispositivos en Plaspy es 8888 y los equipos pueden usar UDP o TCP en ese puerto.
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan reportes correctamente configurados al endpoint.
- Generalmente los usuarios no necesitan elegir un protocolo dentro de Plaspy si el equipo está configurado para reportar al endpoint de Plaspy.
- Una identificación correcta del dispositivo y intervalos de reporte consistentes ayudan a que Plaspy asocie los mensajes entrantes con el registro de dispositivo adecuado.

## Transporte y contexto de conexión

El transporte de la conexión y los ajustes del endpoint determinan cómo el TK103B alcanza la plataforma Plaspy. El tracker usa GSM GPRS para el transporte de datos, por lo que es necesario configurar correctamente el APN y la red en el dispositivo para un reporte fiable. La elección entre UDP y TCP depende del firmware del equipo y de su configuración.

- Los dispositivos pueden configurarse para enviar a d.plaspy.com o directamente a 54.85.159.138.
- El puerto 8888 se utiliza para todos los dispositivos en Plaspy y es el puerto estándar que debe configurar en el tracker.
- El TK103B puede usar UDP o TCP en el puerto 8888 dependiendo de las opciones del modelo y del firmware.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo sean válidos para la tarjeta SIM en uso, de modo que el tracker pueda establecer la sesión de datos.
- La confiabilidad de la red y las limitaciones del operador pueden afectar la entrega de mensajes y la latencia tanto en UDP como en TCP.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar cómo el tracker formatea los reportes o qué funciones están disponibles, por lo que la versión de firmware es relevante para la compatibilidad.
- Las revisiones de hardware y variantes de modelo paralelas pueden implementar conjuntos de comandos o funciones opcionales diferentes.
- Algunas funciones, como el control remoto o la resolución de nombres mediante APN, pueden requerir opciones de firmware específicas o soporte del fabricante.
- La selección del transporte entre UDP y TCP puede afectar el comportamiento de acuses de recibo y retransmisiones; elija el transporte que su firmware soporte adecuadamente.
- Personalizaciones realizadas por el fabricante o el distribuidor pueden cambiar ajustes predeterminados o el comportamiento de comandos; siempre confirme la configuración después de la compra.
- Valide la compatibilidad probando un dispositivo apuntando al endpoint de Plaspy y revisando el estado del equipo en la plataforma.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del tracker ayuda a asegurar una configuración confiable y reduce el tiempo de resolución de problemas al integrar dispositivos TK103B con Plaspy. Conocer cómo el equipo reporta, qué alertas puede generar y cómo se identifica en la red hace que el despliegue y la supervisión operativa sean más predecibles.

- Ayuda a confirmar que el dispositivo está correctamente apuntado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Acelera la resolución de problemas por reportes faltantes, ubicaciones incorrectas o alertas perdidas.
- Aclara por qué ciertas funciones, como intervalos de auto track o comandos remotos, se comportan diferente entre versiones de firmware.
- Permite tomar decisiones informadas sobre elegir UDP o TCP según el comportamiento del equipo y las condiciones de la red.
- Facilita pruebas y validación efectivas antes de un despliegue a gran escala.

## Por qué usar Plaspy con este protocolo

Usar el Appello TK103B con Plaspy permite a las organizaciones centralizar la ubicación, el estado y los eventos de alerta del tracker en una sola plataforma para monitoreo, generación de informes y supervisión operativa. La combinación del TK103B de seguimiento en tiempo real, reportes automáticos periódicos y capacidades de control remoto encaja bien con la detección automática de protocolos de Plaspy y el puerto de conexión unificado, lo que simplifica la integración inicial.

Si desea saber más sobre cómo Plaspy puede trabajar con el TK103B y otros dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente del dispositivo en el sitio del fabricante en http://www.cnjeo.com/ antes de finalizar despliegues.
