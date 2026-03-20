---
slug: /meitrack/tc68l_e/protocol
id: tc68l_e-protocol
sidebar_label: Protocol
title: Meitrack - TC68L/E Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Meitrack TC68L/E con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Meitrack TC68L E
  - protocolo GPS Meitrack TC68L E
  - comunicación Meitrack TC68L E
  - compatibilidad Plaspy
  - rastreador OBD II
  - integración telemetría vehicular
  - protocolo seguimiento de flotas
  - GNSS y telemetría OBD
  - OBD conecta y usa
  - gestión remota FOTA
---

# Meitrack - Protocolo TC68L/E

Esta página resume el contexto público del protocolo para integrar el rastreador OBD II Meitrack TC68L/E con Plaspy. Explica cómo suele comunicarse el dispositivo con la plataforma Plaspy, cuáles son los ajustes de conexión públicos y qué comportamientos del protocolo son relevantes para el correcto reporte y uso de datos. El objetivo es ayudar a usuarios técnicos e integradores a entender la relación de comunicación sin exponer detalles internos de firmware.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, el SKU regional y la implementación del fabricante, por lo que los detalles específicos del dispositivo y el comportamiento avanzado de comandos deben verificarse contra la documentación de Meitrack y las notas de firmware vigentes.

## Resumen del protocolo

El protocolo de comunicación del TC68L/E regula cómo se empaquetan y envían las posiciones GNSS, la telemetría OBD y los datos de sensores periféricos desde el dispositivo a un servidor remoto. En el contexto de Plaspy, el protocolo es el mecanismo público que permite al rastreador identificarse, reportar ubicación y parámetros del vehículo, y habilitar funciones de la plataforma como alertas y reproducción histórica.

- Permite la transmisión de ubicación GNSS y telemetría proveniente del OBD desde el dispositivo hacia Plaspy para reportes en vivo e históricos.
- Transporta información de identificación para que Plaspy asocie los datos entrantes con el registro de rastreador correspondiente.
- Soporta reportes periódicos y por eventos para transmitir movimiento, eventos diagnósticos y actualizaciones de sensores a la plataforma.
- Actúa como puente para funciones de gestión remota como notificaciones FOTA y cambios de configuración cuando el firmware lo soporta.
- Proporciona el contexto de datos que Plaspy usa para poblar paneles, disparar alertas y alimentar APIs para integraciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint y puerto compartidos y utiliza esa conexión para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, cuando un TC68L/E está configurado para reportar a Plaspy será detectado y procesado sin que usted tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy escucha en una dirección de servidor y puerto compartidos, de modo que los dispositivos que reportan a ese endpoint se enrutan al pipeline de detección automática.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138 para alcanzar la plataforma.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos a ese puerto.
- Debido a que la detección es automática, la configuración típica se limita a ajustar el APN del dispositivo y la dirección y puerto del servidor en el lado del rastreador.
- Si un dispositivo no es detectado, los pasos de verificación incluyen confirmar la conectividad de red, la configuración del APN y que el dispositivo apunte al endpoint y puerto correctos de Plaspy.

## Transporte y contexto de conexión

El TC68L/E puede configurarse para usar opciones de transporte estándar para entregar telemetría a Plaspy. Desde la perspectiva de conexión, la mayor parte del trabajo de integración consiste en asegurarse de que el dispositivo apunte al endpoint correcto de Plaspy y que el transporte elegido sea compatible con el firmware del dispositivo y el entorno de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de despliegue.
- Plaspy acepta conexiones hacia d.plaspy.com y la IP numérica 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y la puesta a punto de los equipos.
- Elija UDP para menor sobrecarga o TCP para transporte fiable cuando el firmware del dispositivo y la red lo permitan; confirme qué transporte soporta su SKU.
- Asegúrese de que los ajustes APN de la red móvil sean correctos para que el rastreador establezca conectividad IP con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de versión de firmware pueden cambiar el comportamiento de los reportes, los nombres de campo y la telemetría disponible; verifique la compatibilidad con su firmware.
- Las revisiones de hardware y los SKUs regionales pueden soportar distintas bandas celulares y características periféricas que influyan en qué campos de datos están disponibles.
- Las cadenas de configuración y el comportamiento por defecto del fabricante a veces difieren según el lote de producción; confirme los valores predeterminados del dispositivo antes de un despliegue masivo.
- La elección del transporte (UDP vs TCP) debe coincidir con la capacidad del dispositivo y el entorno de red para evitar mensajes caídos o retrasados.
- Plaspy detecta protocolos automáticamente, pero es necesario que el dispositivo esté correctamente configurado apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para una detección adecuada.
- Valide campos de telemetría importantes, como parámetros OBD y precisión GNSS, con informes de muestra durante las pruebas iniciales.

## Por qué es importante comprender el protocolo

Entender cómo el TC68L/E se comunica con Plaspy mejora la velocidad de configuración, la eficacia en la resolución de problemas y la confiabilidad a largo plazo de su despliegue de rastreo. Un conocimiento claro de los ajustes de conexión, el comportamiento del transporte y dónde buscar diferencias de firmware ayuda a administradores e integradores a evitar errores comunes de integración.

- Acelera el alta inicial de dispositivos asegurando que la configuración de servidor y puerto coincida con los requisitos de Plaspy.
- Ayuda a diagnosticar problemas de conectividad al enfocar las comprobaciones en APN, endpoint, transporte y firmware.
- Permite decisiones informadas sobre UDP frente a TCP según cobertura y necesidades de latencia.
- Facilita la confirmación de que la telemetría OBD y los datos GNSS llegan a Plaspy en los formatos esperados para reportes y alertas.
- Reduce el riesgo en los despliegues al fomentar la validación de firmware y SKU antes de implementaciones a gran escala.

## Por qué usar Plaspy con este protocolo

Usar el Meitrack TC68L/E con Plaspy ofrece a las organizaciones una vía sencilla para combinar una instalación OBD II de tipo plug and play con una plataforma en la nube que agrega ubicación y telemetría del vehículo. El TC68L/E aporta datos de posición GNSS y parámetros OBD detallados que Plaspy procesa para seguimiento en vivo, diagnósticos, alertas y análisis histórico, apoyando operaciones de flota, alquileres y flujos de trabajo anti-robo.

Para saber más sobre cómo Plaspy se integra con una variedad de rastreadores GPS y revisar las funciones de la plataforma que complementan al TC68L/E, visite https://www.plaspy.com. Para los detalles más actuales sobre especificaciones de protocolo de dispositivo, comportamiento de firmware y documentación del fabricante, verifique la información en el sitio de Meitrack en https://www.meitrack.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
