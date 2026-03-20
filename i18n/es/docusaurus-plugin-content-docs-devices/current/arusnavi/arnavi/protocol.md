---
slug: /arusnavi/arnavi/protocol
id: arnavi-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Arusnavi Arnavi y su comunicación con Plaspy para monitoreo de flotas
keywords:
  - Protocolo Arusnavi Arnavi
  - Protocolo GPS Arusnavi Arnavi
  - Protocolo de comunicación Arnavi
  - Protocolo de rastreo Arnavi
  - Compatibilidad rastreador GPS Arusnavi
  - Integración CAN bus Arnavi
  - Protocolo monitoreo sensores Arnavi
  - Rastreo de flotas Arnavi Plaspy
  - Protocolo de dispositivo Plaspy
  - Compatibilidad rastreadores Plaspy
---

# Arusnavi - Protocolo Arnavi

Esta página documenta, a nivel público, el contexto del protocolo para usar el controlador de navegación Arnavi de Arusnavi con la plataforma Plaspy. Explica, sin información sensible, cómo el dispositivo se comunica con Plaspy para que integradores y responsables de flotas comprendan el papel del protocolo de reporte al conectar unidades Arnavi a un servicio centralizado de monitoreo.

El Arnavi es un controlador de navegación versátil diseñado para la supervisión remota de objetos móviles, con soporte para entradas digitales, discretas, analógicas, sensores de pulso y la integración con bus CAN. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de reglas que Arnavi usa para reportar ubicación, telemetría de sensores y datos del bus del vehículo a un servidor como Plaspy. En términos generales, el protocolo define cómo el dispositivo se identifica, entrega mensajes de telemetría y eventos, y transmite información de sensores y CAN para que Plaspy pueda presentar datos útiles a los usuarios.

- Permite informes periódicos y por evento de GPS y telemetría de sensores desde el Arnavi hacia un servidor remoto.
- Transporta datos de identificación para que Plaspy asocie los mensajes entrantes con un dispositivo registrado.
- Transmite valores de sensores y del bus CAN de forma que Plaspy pueda asignarlos a entradas, alertas y diagnósticos.
- En algunas variantes de firmware admite mensajes de configuración y control para modificar el comportamiento de reporte de forma remota.
- Proporciona información de estado y latido que ayuda a Plaspy a determinar la conectividad y salud del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico en un endpoint de servidor compartido y detecta automáticamente el protocolo del rastreador utilizado por un dispositivo entrante cuando este está configurado para reportar a la plataforma. En la mayoría de los casos no será necesario seleccionar manualmente un protocolo dentro de Plaspy si el Arnavi está configurado para enviar datos al endpoint soportado.

- Plaspy usa un único endpoint de escucha para los reportes de dispositivos, por lo que las nuevas conexiones se procesan de forma uniforme.
- Cuando un dispositivo Arnavi reporta al endpoint de Plaspy, la plataforma inspecciona el flujo de datos entrante y selecciona el manejo apropiado para ese dispositivo.
- Los usuarios por lo general solo necesitan configurar el Arnavi para apuntar al servidor de Plaspy; la identificación del protocolo la realiza Plaspy automáticamente.
- La identificación correcta del dispositivo depende de que este envíe su información identificadora como parte de sus mensajes habituales de reporte.
- Si un dispositivo usa múltiples modos de reporte, asegúrese de que esté en el modo esperado por su flujo de trabajo de gestión de flotas para que Plaspy pueda detectar y procesar sus mensajes.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el Arnavi establece el enlace con el servicio Plaspy. El Arnavi puede configurarse para usar UDP o TCP según el soporte del dispositivo y las elecciones de configuración local. Plaspy acepta reportes en un puerto compartido, de modo que todos los dispositivos soportados usan el mismo puerto y endpoint de servidor.

- Los dispositivos pueden configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com.
- Como alternativa, la dirección IP del servidor Plaspy 54.85.159.138 puede usarse en la configuración del dispositivo.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por la plataforma usan ese mismo puerto para reportar.
- El Arnavi puede configurarse para usar transporte UDP o TCP hacia el puerto 8888 según el firmware y el entorno de red.
- Las reglas de red y los firewalls deben permitir tráfico saliente UDP o TCP desde el dispositivo hacia el endpoint de Plaspy para asegurar una entrega confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades Arnavi pueden cambiar qué campos de telemetría están disponibles y cómo se reportan.
- Las revisiones de hardware y los módulos sensores opcionales pueden agregar o modificar entradas soportadas, como canales analógicos o contadores de pulsos.
- La disponibilidad de datos CAN depende del cableado del vehículo y de la configuración del Arnavi para canales CAN y mapeo de mensajes.
- La elección entre UDP y TCP afecta las características de entrega; confirme qué transporte soporta su compilación de firmware.
- Valide siempre un dispositivo enviando reportes de prueba al endpoint de Plaspy y verificando que los datos aparezcan correctamente en el sistema.
- Consulte las notas de lanzamiento del fabricante al actualizar firmware, ya que el comportamiento del protocolo y los conjuntos de mensajes pueden cambiar.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación Arnavi ayuda a asegurar una configuración fluida, una interpretación precisa de los datos y una resolución eficiente de problemas al integrar dispositivos con Plaspy. Conocer qué reporta el dispositivo y cómo se conecta reduce el tiempo de integración y mejora la fiabilidad a largo plazo.

- Facilita el mapeo de canales de sensores Arnavi y señales CAN a las entradas y alertas de Plaspy.
- Ayuda a diagnosticar problemas de conectividad relacionados con la selección de transporte o el filtrado de red.
- Orienta las decisiones sobre actualizaciones de firmware y su impacto en los campos reportados.
- Simplifica la validación de que la identidad del dispositivo y la telemetría llegan como se espera a Plaspy.
- Sirve para planificar consumo de energía, frecuencia de reporte y volumen de datos según el comportamiento del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el rastreador Arnavi con Plaspy ofrece una forma práctica de centralizar la información de GPS, sensores y bus del vehículo para el monitoreo de flotas y la supervisión operativa. La detección automática de protocolo y el endpoint de conexión unificado de Plaspy simplifican la incorporación de dispositivos, de modo que los responsables de flotas puedan concentrarse en los datos y los resultados en lugar de los detalles de transporte a bajo nivel.

Plaspy está diseñado para aceptar reportes de dispositivos en un único endpoint y puerto y para detectar automáticamente los protocolos de los rastreadores, reduciendo la complejidad de configuración en flotas mixtas. Para saber más sobre Plaspy y cómo puede trabajar con dispositivos Arnavi, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y documentación de hardware, consulte al fabricante en https://www.arusnavi.ru ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
