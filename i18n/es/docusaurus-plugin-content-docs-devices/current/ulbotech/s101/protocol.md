---
slug: /ulbotech/s101/protocol
id: s101-protocol
sidebar_label: Protocol
title: Ulbotech - S101 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el adaptador Ulbotech S101 OBD II BLE con Plaspy para reenvío e integración de telemetría
keywords:
  - Protocolo Ulbotech S101
  - Protocolo GPS Ulbotech S101
  - Protocolo OBD II S101
  - Compatibilidad S101 Plaspy
  - Protocolo de comunicación Ulbotech S101
  - Protocolo de rastreo Ulbotech S101
  - S101 OBD BLE Plaspy
  - Telemetría OBD II Plaspy
  - Telemetría vehicular S101
  - ELM327 S101 Plaspy
---

# Ulbotech - Protocolo S101

Esta página resume el protocolo público y el contexto de conexión para utilizar el adaptador Ulbotech S101 OBD II BLE con Plaspy. Se concentra en cómo el S101 suministra telemetría OBD‑II a través de una pasarela Bluetooth Low Energy (por ejemplo un teléfono, tableta o PC con una app compatible con Plaspy) y cómo esa telemetría se reenvía a Plaspy para unificar seguimiento de vehículos y diagnóstico.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo cuando los datos se reportan al endpoint de Plaspy. El comportamiento exacto y los campos disponibles pueden variar según la versión de firmware del S101, la revisión de hardware, la app de la pasarela y la implementación del fabricante, por lo que esta página ofrece una visión general del protocolo y destaca detalles públicos no sensibles relevantes para la integración y la resolución de problemas.

## Visión general del protocolo

El S101 es un adaptador OBD‑II BLE basado en ELM327 que proporciona telemetría OBD estándar sobre Bluetooth Low Energy a un dispositivo pasarela. Esa pasarela ejecuta una app compatible con Plaspy que reenvía la telemetría y los datos de diagnóstico a Plaspy para que la plataforma pueda combinar parámetros del motor con la posición GPS y los eventos de la flota.

- El adaptador expone PIDs OBD‑II estándar (rpm del motor, temperatura del refrigerante, trims de combustible, MAF, posición del acelerador, códigos de falla) a una pasarela BLE que los agrega y reenvía.
- BLE sirve como transporte local entre el S101 y el dispositivo pasarela (móvil o de escritorio); la pasarela traduce o empaqueta la telemetría para la ingestión por Plaspy.
- Plaspy recibe la telemetría en su endpoint público y asocia los datos OBD con la ubicación e identidad del vehículo dentro de la plataforma.
- El rol del protocolo es transferir de forma fiable los diagnósticos del bus del vehículo hacia Plaspy a través de la pasarela sin que el adaptador necesite conectividad celular propia.
- Diferencias en firmware y apps pueden afectar la tasa de muestreo, los PIDs disponibles y cómo se presentan los códigos de diagnóstico cuando se reenvían a Plaspy.

## Cómo Plaspy detecta el protocolo

Cuando se envían telemetría y posición a Plaspy, la plataforma usa el endpoint y puerto compartidos por todos los dispositivos compatibles. Plaspy está diseñado para detectar automáticamente los protocolos entrantes de trackers y telemetría, por lo que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo o la pasarela está configurada para reportar al endpoint de Plaspy.

- Plaspy recibe telemetría en la dirección pública d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888.
- Los dispositivos o las apps pasarela pueden configurarse para enviar datos por TCP o UDP al puerto 8888 según las capacidades y ajustes.
- Todos los dispositivos que envían datos a Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de pasarelas.
- Dado que Plaspy detecta automáticamente el protocolo del tracker, usted normalmente solo necesita asegurarse de que la pasarela reporte al host y puerto correctos.
- Si la telemetría no aparece, revise los ajustes de la app pasarela para el host del servidor, la selección de transporte (TCP o UDP) y cualquier campo de autenticación requerido por la app.

## Transporte y contexto de conexión

El S101 se comunica localmente mediante Bluetooth Low Energy. El transporte de red hacia Plaspy lo gestiona el dispositivo pasarela y sigue los ajustes de conexión compartidos de Plaspy. En la práctica, esto significa que la pasarela reenvía la telemetría OBD al endpoint de Plaspy usando un puerto común y transporte seleccionable.

- Transporte local: el S101 utiliza Bluetooth 4.0 BLE para conectarse a un smartphone, tablet o PC que actúa como pasarela.
- Endpoint de Plaspy: telemetría reenviada a d.plaspy.com (IP 54.85.159.138) en el puerto 8888.
- Selección de transporte: las apps pasarela suelen permitir enviar telemetría por UDP o TCP en el puerto 8888 según la app y el entorno de red.
- Uso de un único puerto: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles para simplificar la configuración y centralizar el tráfico.
- Consideraciones de red: asegúrese de que el dispositivo pasarela tenga conectividad de red y que reglas de firewall o NAT permitan tráfico saliente TCP o UDP al puerto 8888 hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El S101 es un adaptador OBD‑II BLE y no es un tracker celular independiente; depende de una pasarela compatible con Plaspy para reenviar telemetría y ubicación.
- Las diferencias de firmware y de app pueden modificar qué PIDs OBD están disponibles, la frecuencia de muestreo y el manejo de códigos de diagnóstico.
- Algunos modelos de vehículo exponen más o menos PIDs según su implementación OBD II; la disponibilidad puede variar según el vehículo y el protocolo de interfaz.
- El transporte (TCP vs UDP) lo define la configuración de la pasarela; elija el transporte que mejor se ajuste a la app de la pasarela y a las necesidades de confiabilidad de la red.
- Valide la compatibilidad y las funciones soportadas con la documentación del fabricante y la documentación de la app pasarela de Plaspy para obtener los mejores resultados.
- Si opera flotas grandes, pilote un grupo pequeño de vehículos para confirmar el comportamiento entre distintos modelos y pasarelas antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se recopila, reenvía e interpreta la telemetría del S101 en Plaspy ayuda a garantizar una configuración correcta, reportes confiables y diagnósticos precisos en entornos de producción. Tener claro el camino de comunicación reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo.

- Asegura que las pasarelas estén configuradas correctamente para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte seleccionado.
- Facilita el diagnóstico de telemetría faltante revisando el emparejamiento BLE, los registros de la app pasarela y la conectividad de red saliente hacia Plaspy.
- Aclara la cadencia esperada de telemetría y qué PIDs deberían verse en los reportes de Plaspy para cada vehículo.
- Ayuda a planificar a escala de flota entendiendo cómo la cobertura de la pasarela BLE, la batería del teléfono y el comportamiento de la app afectan la continuidad de la telemetría.
- Apoya la coordinación de actualizaciones de firmware, versiones de la app pasarela y verificaciones de compatibilidad vehicular para preservar la calidad de los datos.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech S101 con Plaspy permite a operadores de flotas y usuarios individuales enriquecer el rastreo GPS con telemetría OBD‑II detallada sin añadir hardware celular al vehículo. El bajo consumo del S101 y su amplio soporte OBD‑II ofrecen una forma práctica y compacta de recabar parámetros del motor y códigos de diagnóstico que Plaspy puede combinar con datos de ubicación para generar información de flota más útil.

Si desea conocer más sobre cómo Plaspy integra telemetría y rastreo, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique las especificaciones más recientes del S101 y el comportamiento del firmware en el sitio del fabricante http://www.ulbotech.com/.
