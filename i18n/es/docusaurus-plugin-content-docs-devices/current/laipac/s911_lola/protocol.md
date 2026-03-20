---
slug: /laipac/s911_lola/protocol
id: s911_lola-protocol
sidebar_label: Protocol
title: Laipac - S911 Lola Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Laipac S911 Lola y su comunicación con Plaspy para ubicación y alertas
keywords:
  - Protocolo Laipac S911 Lola
  - Protocolo GPS Laipac S911 Lola
  - Protocolo de rastreo Laipac S911 Lola
  - Protocolo Laipac Plaspy
  - Compatibilidad S911 Lola
  - Protocolo rastreador GPS Laipac
  - Comunicación S911 Lola
  - Integración S911 Lola Plaspy
  - Rastreo Laipac mPERS
  - Reporte de ubicación S911 Lola
---

# Laipac - Protocolo S911 Lola

Esta página documenta el contexto público del protocolo para usar el Laipac S911 Lola con Plaspy. Se enfoca en cómo el dispositivo se comunica con el backend de Plaspy para el reporte de ubicación, alertas SOS y eventos de voz bidireccional. El objetivo es ofrecer un resumen claro y no sensible de las consideraciones de comunicación que influyen en una integración exitosa y en la operación diaria.

El S911 Lola es un dispositivo compacto de respuesta personal de emergencia móvil con AGPS, botón de pánico SOS, alertas por caída y geocerca, y capacidad de voz celular bidireccional. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los comandos específicos y los detalles de firmware deben verificarse con Laipac cuando sea necesario.

## Descripción general del protocolo

A nivel general, el protocolo de reporte define cómo el S911 Lola se identifica, envía datos de posición y eventos, y transmite alertas para que Plaspy pueda analizarlos y mostrar información útil. Esta página no reproduce formatos propietarios del fabricante, pero explica el papel del protocolo en términos prácticos para la integración con Plaspy.

- Permite que el dispositivo envíe coordenadas de ubicación y eventos con marca temporal a un endpoint remoto para su procesamiento.
- Transmite tipos de alerta como pulsaciones del botón SOS, alertas por caída y activaciones de geocerca para que Plaspy muestre notificaciones.
- Lleva reportes periódicos de posición y actualizaciones de modo para que la plataforma refleje estado de batería, movimiento y perfil de rastreo.
- Soporta identificación básica del dispositivo e información de estado para que Plaspy asocie los mensajes con la cuenta correcta del rastreador.
- Facilita eventos opcionales de comunicación bidireccional que ocurren tras una alerta SOS o cuando se abren canales de voz.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador para los dispositivos soportados cuando llegan los mensajes. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar a las mismas opciones de conexión de Plaspy.

- Plaspy recibe reportes en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de red, lo que simplifica la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy usando el transporte esperado.
- Desde la perspectiva del usuario, el paso crítico es configurar el dispositivo para que reporte a Plaspy, más que elegir un protocolo dentro de la interfaz de Plaspy.
- Si la detección automática no ocurre, revisar el destino de reporte del dispositivo y el modo de transporte es el primer paso recomendado para la resolución de problemas.

## Transporte y contexto de conexión

El S911 Lola puede configurarse para reportar a Plaspy usando capas de transporte IP estándar. Plaspy soporta ambos modos de transporte comunes en el puerto compartido para adaptarse a distintas capacidades de dispositivo y entornos de red.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del instalador.
- Los rastreadores pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 al especificar el endpoint de Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que agiliza el despliegue en campo y las plantillas de configuración.
- La elección entre UDP y TCP puede afectar características de entrega como retransmisiones y el manejo del estado de conexión.
- Asegúrese de que la configuración APN del dispositivo y el acceso de red saliente permitan tráfico hacia el endpoint de Plaspy en el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos del mensaje, intervalos de reporte o funciones opcionales, por lo que siempre verifique la compatibilidad para la versión de firmware específica en el dispositivo.
- Las revisiones de hardware o diferencias de SKU pueden alterar sensores disponibles o la lógica de alertas y, por tanto, afectar el conjunto de eventos enviados a Plaspy.
- Algunas funciones, como detección de caídas, recordatorios de medicación o comportamiento del altavoz, dependen de la configuración del dispositivo y pueden estar habilitadas o deshabilitadas por el firmware.
- La selección del transporte entre UDP y TCP debe coincidir con la capacidad del dispositivo y los requisitos de red del despliegue.
- Los productos y servicios en la nube del fabricante pueden ofrecer diferentes opciones de integración; confirme que el dispositivo está configurado para reportar al endpoint de Plaspy para una integración directa.
- Valide cualquier integración según la documentación oficial de Laipac para conjuntos de comandos y guías de configuración específicos del modelo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el S911 Lola ayuda a administradores de sitio, integradores y equipos de soporte a configurar los dispositivos correctamente, diagnosticar problemas y alinear expectativas sobre alertas y precisión de posición. Tener claridad sobre el protocolo reduce el tiempo de configuración y mejora la confiabilidad operativa.

- Confirma que los dispositivos están reportando al endpoint y transporte correctos de Plaspy para que los datos lleguen de forma fiable.
- Ayuda a diagnosticar eventos faltantes, como alertas SOS o notificaciones de caída, revisando patrones de reporte y el modo del dispositivo.
- Orienta decisiones sobre la selección de transporte y la configuración de red para despliegues con conectividad restringida.
- Ayuda a validar reportes de batería y modo para asegurar que el dispositivo opera en el perfil de rastreo previsto.
- Aclara cuándo puede ser necesario un update de firmware del fabricante o el reemplazo del dispositivo para acceder a funciones más recientes.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Laipac S911 Lola ofrece a organizaciones y cuidadores una forma centralizada de recibir actualizaciones de ubicación, gestionar eventos SOS y mantener conciencia situacional sobre usuarios vulnerables. Plaspy acepta los reportes del dispositivo con una configuración de conexión compartida y simplificada, lo que permite que los despliegues escalen sin la complejidad de puertos por dispositivo.

Si desea obtener más información sobre Plaspy y cómo maneja el reporte de dispositivos, visite https://www.plaspy.com. Por favor, verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación del fabricante en el sitio oficial de Laipac https://laipac.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben confirmarse con el fabricante.
