---
slug: /globalsat/tr_151/protocol
id: tr_151-protocol
sidebar_label: Protocol
title: GlobalSat - TR-151 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para usar el rastreador GlobalSat TR-151 con Plaspy, con detalles de conexión y notas de compatibilidad
keywords:
  - Protocolo GlobalSat TR-151
  - Protocolo GPS GlobalSat TR-151
  - Protocolo TR-151 Plaspy
  - Protocolo de comunicación TR-151
  - Protocolo de rastreo TR-151
  - Compatibilidad rastreador GlobalSat
  - Guía protocolo GPS
  - Rastreo de vehículos Plaspy
  - Rastreador de activos TR-151
  - Protocolo rastreador GPRS
---

# GlobalSat - Protocolo TR-151

Esta página describe el contexto público del protocolo para usar el rastreador GlobalSat TR-151 con Plaspy. Explica cómo el dispositivo puede comunicarse con Plaspy mediante transporte de red estándar y utiliza las características del TR-151 como referencia para cómo se reportan habitualmente la telemetría y la localización a una plataforma como Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo comienza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no sensible que facilita la configuración y la resolución de problemas.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de mensajes y opciones de transporte que el TR-151 usa para enviar datos de ubicación, estado y eventos a un servidor remoto. Para propietarios e integradores, el protocolo define cómo el rastreador informa su identidad, posición y telemetría básica para que la plataforma receptora pueda procesar y mostrar información útil.

- Permite la entrega de ubicación GPS y estado desde el rastreador a un servidor remoto para que Plaspy pueda mapear y procesar los datos del dispositivo.
- Permite que el rastreador se identifique para que la plataforma asocie los reportes entrantes con el activo correcto.
- Transporta actualizaciones periódicas de posición y mensajes impulsados por eventos, como SOS o alertas de movimiento, útiles para la supervisión.
- Soporta reportes basados en GPRS a puntos finales en servidor y SMS como alternativa para notificaciones telefónicas directas cuando el dispositivo lo admite.
- Funciona junto con la configuración de transporte para asegurar la entrega fiable de telemetría a un punto final en la nube como Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un punto final y puerto compartidos y realiza detección automática de protocolo, por lo que por lo general no necesita seleccionar un protocolo manualmente cuando el dispositivo está configurado correctamente. La detección se basa en el contenido y el comportamiento de los reportes entrantes en lugar de requerir que el usuario establezca un protocolo por adelantado.

- Plaspy usa el punto final del servidor d.plaspy.com y también acepta reportes directos a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, lo que simplifica la configuración entre distintos modelos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades y preferencias del equipo.
- Si el TR-151 está apuntando al endpoint de Plaspy y envía reportes de ubicación, Plaspy detectará y manejará automáticamente el protocolo informado.
- En la mayoría de los casos, usted solo necesita establecer la dirección de reporte del rastreador hacia Plaspy y asegurarse de que el transporte y las credenciales estén correctos en el dispositivo.

## Contexto de transporte y conexión

Las opciones de conexión y transporte determinan cómo el TR-151 entrega sus mensajes de protocolo a Plaspy. Para el reporte por red, el TR-151 puede usar GPRS para conectarse a Internet y luego enviar datos por TCP o UDP al servidor configurado.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Los equipos pueden apuntar al dominio d.plaspy.com como host de reporte o directamente a la IP del servidor 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos soportados, lo que reduce la complejidad de configuración por dispositivo.
- Elija TCP cuando se requiera fiabilidad orientada a sesión, o UDP cuando se prefiera menor latencia y un transporte más simple, sujeto a las capacidades del dispositivo.
- Los ajustes de red en el TR-151, como el APN y la conectividad GPRS, deben ser válidos para que el dispositivo alcance el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del TR-151 pueden cambiar el intervalo de mensajes, los eventos disponibles y los transportes soportados; verifique notas específicas del firmware antes de desplegar a gran escala.
- Revisiones de hardware o variantes regionales pueden ajustar el soporte de bandas GSM e influir en el comportamiento de conectividad aun cuando el protocolo de alto nivel sea el mismo.
- Algunas funciones, como reportes de ubicación por SMS y mensajes del botón SOS, operan fuera del protocolo GPRS y deben validarse por separado.
- La selección de transporte entre UDP y TCP afecta las características de entrega y debería coincidir con lo que el firmware del dispositivo soporta y con los requisitos del despliegue.
- Confirme que cualquier cadena de configuración de fábrica o personalizada usada para la dirección y puerto del servidor esté ingresada exactamente en el dispositivo cuando apunte a d.plaspy.com o a la IP del servidor.
- Siempre valide el comportamiento en una prueba controlada antes de implementar dispositivos en flotas de producción.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TR-151 ayuda a asegurar una configuración exitosa, un rastreo consistente y una resolución de problemas más ágil cuando los dispositivos se despliegan a gran escala. Un conocimiento claro de la ruta de reporte reduce tiempos de inactividad y mejora la fiabilidad de los datos de ubicación y eventos.

- Ayuda a diagnosticar problemas de conectividad al confirmar si el dispositivo puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Orienta en la selección correcta entre modos de transporte UDP y TCP según el soporte del dispositivo y las necesidades operativas.
- Permite un manejo predecible de mensajes de evento como SOS o alertas de movimiento dentro de Plaspy.
- Facilita la planificación de actualizaciones de firmware y la validación de que las actualizaciones no alteren comportamientos clave de reporte.
- Mejora las prácticas de configuración de endpoints para que los dispositivos sean reconocidos y asociados de forma fiable en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat TR-151 con Plaspy ofrece a las organizaciones una manera directa de recopilar y visualizar telemetría de vehículos y activos desde un rastreador robusto pensado para uso de campo. Plaspy centraliza los reportes entrantes del dispositivo para que los equipos puedan supervisar ubicaciones, recibir alertas y mantener control operativo tanto de flotas como de activos dispersos.

Plaspy está diseñado para aceptar reportes de dispositivos apuntando a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, lo que simplifica la incorporación. Para saber más sobre Plaspy y cómo puede apoyar las necesidades de rastreo de flotas o activos con TR-151, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio web de GlobalSat https://www.globalsat.com.tw/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
