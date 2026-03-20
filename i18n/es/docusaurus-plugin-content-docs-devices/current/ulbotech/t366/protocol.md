---
slug: /ulbotech/t366/protocol
id: t366-protocol
sidebar_label: Protocol
title: Ulbotech - T366 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del Ulbotech T366 y compatibilidad con Plaspy para telemetría y rastreo vehicular confiables
keywords:
  - ulbotech t366
  - protocolo ulbotech t366
  - protocolo gps ulbotech t366
  - rastreador gps t366
  - protocolo t366 plaspy
  - rastreador gps ulbotech
  - protocolo obd gps
  - protocolo seguimiento vehicular
  - compatibilidad dispositivo plaspy
  - seguimiento flota t366
---

# Ulbotech - Protocolo T366

Esta página presenta el contexto público del protocolo para integrar el rastreador OBD Ulbotech T366 con la plataforma Plaspy. Explica de forma general cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y qué comportamientos del equipo son relevantes para un despliegue exitoso, sin exponer detalles internos del firmware ni del parser privado. El T366 es un rastreador OBD avanzado con GNSS, Wi‑Fi y radios GSM, telemetría OBD y CAN, y un inmovilizador integrado, diseñado para monitoreo de flotas compatible con Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento real puede diferir entre unidades y con el tiempo. Plaspy acepta conexiones en su endpoint público y puerto para ingestión, manejando la detección de protocolo de forma centralizada para simplificar la configuración del dispositivo.

## Resumen del protocolo

El protocolo de comunicación utilizado por un rastreador OBD como el T366 define cómo el equipo envía posiciones GNSS, telemetría OBD y CAN, y alertas de eventos a un servidor. Para la integración con Plaspy, el protocolo debe permitir la entrega fiable de ubicación y datos del vehículo, soportar identificación básica del dispositivo y habilitar flujos de eventos y comandos remotos que la plataforma pueda interpretar para mapas y alertas.

- Permite transmisiones periódicas y por evento de posiciones GNSS, telemetría OBD y CAN, y eventos de estado a un servidor remoto.
- Transporta identificadores que permiten a Plaspy asociar los reportes entrantes con un dispositivo y cuenta específicos.
- Soporta múltiples modos de transporte para que el dispositivo reporte por datos celulares o Wi‑Fi según la conectividad disponible.
- Codifica telemetría y tipos de eventos de forma que Plaspy pueda mapearlos al estado del vehículo, alertas y registros históricos.
- Permite señalización para configuración remota y gestión de firmware cuando el dispositivo y el fabricante lo soportan.

## Cómo Plaspy detecta el protocolo

Plaspy centraliza la ingestión de dispositivos para que la mayoría de los rastreadores compatibles puedan apuntar a un endpoint y puerto comunes sin requerir selección manual de protocolo dentro de la plataforma. Cuando un T366 correctamente configurado reporta al endpoint de Plaspy, la plataforma identifica la corriente de datos del rastreador y la asigna al perfil de dispositivo correcto para que la telemetría aparezca con la mínima configuración por parte del usuario.

- Plaspy expone un endpoint de ingestión compartido d.plaspy.com y una dirección IP 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos configurados para Plaspy usan el mismo número de puerto 8888 para el reporte de datos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint y puerto compartidos.
- En la mayoría de los casos usted solo necesita configurar el dispositivo para que reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y elegir el tipo de transporte soportado por el equipo.
- La selección manual de protocolo dentro de Plaspy suele ser innecesaria cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El T366 soporta múltiples transportes y puede alternar entre Wi‑Fi y GPRS para mantener el reporte continuo optimizando el uso de datos. Para despliegues con Plaspy, el contexto de conexión relevante es a qué endpoint y por qué transporte está enviando el dispositivo, y cómo está configurado el fallback entre redes.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del instalador.
- El T366 puede usar UDP o TCP en el puerto 8888 para el reporte, según la configuración del equipo y las condiciones de red.
- Plaspy acepta tanto UDP como TCP en el puerto 8888, de modo que los dispositivos pueden usar el transporte más adecuado a la conectividad y requisitos de datos.
- Usar el puerto compartido simplifica el aprovisionamiento porque todos los dispositivos Plaspy usan el puerto 8888 para ingestión.
- Asegúrese de que el APN y los ajustes celulares del dispositivo estén correctos para que el reporte por GPRS llegue al endpoint de Plaspy, y verifique la configuración de Wi‑Fi cuando se desee reporte por esa vía.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo implementa el dispositivo los intervalos de reporte, los disparadores de eventos o los campos opcionales; confirme siempre el comportamiento para el firmware específico instalado.
- Las revisiones de hardware o los módulos opcionales, como Wi‑Fi o sensores adicionales, pueden alterar la telemetría disponible y el comportamiento de transporte.
- Los menús de configuración del fabricante pueden exponer opciones de transporte, servidor y reporte; utilice esos ajustes para apuntar el equipo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunos entornos de instalación o variaciones en el cableado del vehículo pueden afectar la disponibilidad de datos OBD y CAN; valide las señales esperadas durante la puesta en marcha.
- La elección entre UDP y TCP afecta la semántica de entrega; seleccione el transporte que mejor soporte su despliegue y dispositivo y asegúrese de que el equipo esté configurado en consecuencia.
- Valide funciones de control remoto como el inmovilizador o la configuración de corte de motor con la guía del fabricante actualizada antes de habilitarlas en producción.

## Por qué es importante entender el protocolo

Comprender cómo el T366 se comunica con Plaspy ayuda a garantizar reportes fiables, un mapeo preciso de la telemetría y una resolución eficiente de problemas durante el despliegue y la operación. Tener claro el transporte, los campos de identificación y la variabilidad del firmware reduce el tiempo de integración y ayuda a mantener la calidad de los datos durante la vida útil del dispositivo.

- Asegura un aprovisionamiento correcto del dispositivo para que los datos lleguen a Plaspy con la asociación adecuada.
- Ayuda a resolver problemas de conectividad confirmando transporte, endpoint y ajustes de APN.
- Permite un manejo predecible de tipos de eventos y campos de telemetría para que las alertas e informes sean precisos.
- Facilita la planificación de actualizaciones de firmware o flujos de gestión remota que dependen de reportes estables.
- Reduce el tiempo de integración al alinear la configuración del dispositivo con las expectativas de ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T366 con Plaspy ofrece a operadores de flota y proveedores de servicios una solución OBD compacta y plug‑in que entrega precisión GNSS, telemetría OBD y CAN completa, y capacidades de inmovilización remota. Plaspy ingiere los datos del rastreador para ubicación en vivo, reproducción histórica, alertas y análisis de flota, de modo que las organizaciones pueden monitorear la salud del vehículo, eventos de seguridad y la protección de activos desde una sola plataforma.

Si desea conocer más sobre cómo Plaspy maneja la ingestión de dispositivos y la telemetría de flotas, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente sobre protocolo y firmware en el sitio oficial del fabricante en http://www.ulbotech.com/ antes de realizar un despliegue a gran escala.
