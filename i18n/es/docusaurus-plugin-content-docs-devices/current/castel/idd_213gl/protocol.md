---
slug: /castel/idd_213gl/protocol
id: idd_213gl-protocol
sidebar_label: Protocol
title: Castel - IDD-213GL Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Castel IDD 213GL y cómo comunica ubicación y diagnósticos con Plaspy
keywords:
  - Protocolo Castel IDD 213GL
  - Protocolo GPS Castel IDD 213GL
  - Protocolo Castel IDD 213GL para Plaspy
  - Protocolo de comunicación Castel IDD 213GL
  - Protocolo de rastreo Castel IDD 213GL
  - Protocolo de rastreador GPS Castel
  - Protocolo OBD Castel IDD 213GL
  - Rastreo vehicular IDD 213GL
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador GPS Plaspy
---

# Castel - Protocolo IDD-213GL

Esta página ofrece una visión pública del contexto de comunicación del Castel IDD-213GL cuando se utiliza con Plaspy. Explica cómo el equipo reporta diagnósticos del vehículo y datos de ubicación a un servidor backend, y qué consideraciones del protocolo son relevantes para la integración y resolución de problemas. La información se concentra en el comportamiento y los puntos de configuración a alto nivel, más que en los detalles internos del dispositivo.

El IDD-213GL es un rastreador OBD inteligente capaz de leer datos de la ECU y enviar información de ubicación GPS y comportamiento de conducción a un servidor remoto. Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el reporte de datos puede diferir entre unidades y versiones de firmware.

## Resumen del protocolo

El protocolo de este rastreador define cómo el IDD-213GL empaqueta y transmite diagnósticos del vehículo, posiciones GPS y datos de eventos al backend. En la práctica esto significa que el dispositivo convierte lecturas OBD y de sensores en un formato que la plataforma Plaspy puede procesar y asociar con el registro del vehículo correspondiente.

- Permite enviar ubicación y datos derivados de la ECU como velocidad, RPM y códigos de diagnóstico al backend
- Provee reportes de eventos para alertas de comportamiento de conducción como aceleraciones bruscas, frenadas fuertes y ralentí prolongado
- Soporta reportes periódicos y por evento para que Plaspy reciba tanto actualizaciones en tiempo real como muestras históricas
- Permite que el dispositivo se identifique y comunique su modo de reporte para que Plaspy asocie los mensajes entrantes con el activo correcto
- Admite múltiples disparadores de reporte, incluyendo intervalo de tiempo, distancia y cambio de rumbo para controlar el volumen de datos

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de dispositivos en un endpoint y puerto compartidos e identifica automáticamente el protocolo del rastreador cuando llega un reporte con el formato esperado. Esto evita que la mayoría de los usuarios tengan que seleccionar manualmente un protocolo dentro de Plaspy, siempre que el rastreador esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha reportes de dispositivos en el dominio d.plaspy.com y también en la dirección IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy aplica detección automática de protocolo para las conexiones entrantes
- Si el IDD-213GL está configurado para reportar al endpoint de Plaspy, por lo general no será necesario seleccionar el protocolo manualmente
- La detección automática soporta tanto cargas periódicas de posición como mensajes por evento usados comúnmente para diagnósticos y alertas
- Una configuración correcta del dispositivo y un firmware actualizado incrementan la probabilidad de una detección sin problemas y de un parseo de datos correcto

## Transporte y contexto de conexión

Las elecciones de transporte y conexión determinan cómo se entregan los reportes del IDD-213GL a Plaspy, pero no cambian la naturaleza de los datos recolectados del vehículo. El dispositivo puede usar UDP o TCP según su configuración y el entorno de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte y la configuración del equipo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 para enviar reportes
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y centraliza la ingestión
- La selección del transporte afecta características de confiabilidad como confirmación de entrega y comportamiento de retransmisión a nivel de red
- Factores de red, como la calidad GPRS del operador o reglas de firewall, pueden influir en si UDP o TCP es la mejor opción para un despliegue específico

## Notas sobre compatibilidad del protocolo

- El IDD-213GL es compatible con protocolos de vehículo OBD II, EOBD, J1939 y J1708, lo que afecta los datos de diagnóstico disponibles para enviar
- Los campos reportados y los nombres de eventos pueden variar según la versión de firmware y la configuración del dispositivo, por lo que el contenido de la carga útil puede no ser idéntico entre unidades
- Las revisiones de hardware y los conjuntos de funciones opcionales pueden cambiar qué sensores o mensajes están disponibles para transmisión
- La selección del modo de transporte entre UDP y TCP puede ser configurable en el dispositivo y afectar la ingestión en Plaspy bajo ciertas condiciones de red
- Verifique siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar conectividad
- Confirme la compatibilidad y los campos de reporte esperados con la documentación del fabricante al desplegar a gran escala

## Por qué importa entender el protocolo

Comprender cómo se comunica el IDD-213GL ayuda a realizar una correcta configuración, un diagnóstico eficaz y a garantizar datos confiables para las operaciones de flota. Conocer el papel del transporte, el firmware y la configuración del dispositivo reduce el tiempo de integración y previene problemas comunes.

- Ayuda a asegurar que el dispositivo apunte a d.plaspy.com o 54.85.159.138 y esté usando el puerto correcto para que los reportes lleguen a Plaspy
- Facilita la resolución de problemas cuando campos de diagnóstico o eventos esperados no aparecen en la plataforma
- Aclara cómo las actualizaciones de firmware y las revisiones de hardware pueden afectar la telemetría disponible y los formatos de reporte
- Permite tomar decisiones informadas sobre usar UDP o TCP según la confiabilidad de la red y las prioridades operativas
- Favorece un mapeo predecible de los protocolos del bus del vehículo hacia los registros de activos en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Castel IDD-213GL con Plaspy proporciona visibilidad combinada de rastreo GPS y diagnósticos del vehículo, adecuada para operaciones de gestión de flotas. Plaspy ingiere ubicación, códigos de falla y eventos de comportamiento de conducción para que las organizaciones puedan supervisar el desempeño, programar mantenimiento y mejorar la seguridad de los conductores usando un solo backend.

Plaspy simplifica la integración aceptando reportes en un endpoint compartido y detectando automáticamente el protocolo del rastreador. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo con el fabricante en http://www.castelecom.com/
