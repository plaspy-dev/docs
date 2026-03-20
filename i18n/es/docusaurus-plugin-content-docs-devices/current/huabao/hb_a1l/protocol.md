---
slug: /huabao/hb_a1l/protocol
id: hb_a1l-protocol
sidebar_label: Protocol
title: Huabao - HB-A1L Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del candado Huabao HB-A1L y su comunicación con Plaspy para seguridad y gestión de flotas
keywords:
  - Protocolo Huabao HB-A1L
  - Protocolo GPS Huabao HB-A1L
  - Protocolo HB-A1L Plaspy
  - Protocolo de comunicación HB-A1L
  - Protocolo de rastreo HB-A1L
  - Protocolo de cerradura Huabao
  - Protocolo de cerradura esclava Bluetooth
  - Compatibilidad rastreo vehicular Plaspy
  - Seguridad de flotas HB-A1L
  - Integración RFID HB-A1L
---

# Huabao - Protocolo HB-A1L

Esta página describe el contexto público del protocolo para integrar el Candado Electrónico Huabao HB-A1L (modo esclavo) con la plataforma Plaspy. Se centra en cómo el HB-A1L, funcionando como esclavo Bluetooth emparejado con un dispositivo GPS maestro HB-A1Lm, transmite el estado del candado, alarmas, eventos RFID y telemetría de batería a Plaspy para una vista unificada de seguridad vehicular y gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el modelo de comunicación general y consideraciones prácticas de compatibilidad sin entrar en detalles internos de firmware.

## Descripción general del protocolo

El HB-A1L opera como un dispositivo esclavo Bluetooth que reporta eventos de cerradura y seguridad a un maestro GPS HB-A1Lm emparejado. El maestro agrega esos eventos con la telemetría del vehículo y los envía a Plaspy para que usted obtenga una vista combinada de ubicación, estado de la cerradura, registros de acceso y alarmas. El rol del protocolo se centra en la entrega fiable de eventos, identificación del dispositivo y correlación con datos GPS y del vehículo más que en el control directo del hardware.

- Permite que el HB-A1L reenvíe estado de la cerradura, alarmas por manipulación y corte de cadena, registros de acceso RFID y estado de batería al maestro GPS emparejado para su uplink
- Permite que el maestro adjunte ubicación y telemetría del vehículo a los eventos de la cerradura para que Plaspy muestre alertas y historiales correlacionados
- Transporta identificadores y marcas de tiempo que permiten a Plaspy asociar eventos con un vehículo y una cerradura específicos para informes y auditorías
- Soporta flujos de comando y control vía el maestro, como solicitudes de desbloqueo remoto iniciadas desde la plataforma o aplicaciones autorizadas
- Proporciona un enlace local ligero basado en BLE para que los candados esclavos permanezcan compactos mientras el maestro maneja el transporte celular o IP hacia Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos del maestro HB-A1Lm y utiliza el endpoint y puerto compartidos para identificar automáticamente el protocolo de reporte. En la mayoría de los casos, una vez que el maestro está configurado para enviar a Plaspy, no se requiere seleccionar manualmente el protocolo dentro de la plataforma. La detección se enfoca en identificar el canal de reporte del dispositivo y mapear los eventos entrantes al modelo de telemetría de la plataforma.

- Plaspy acepta reportes entrantes en el endpoint público d.plaspy.com y también en la IP del servidor 54.85.159.138 en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador para los dispositivos compatibles
- Si el maestro HB-A1Lm está configurado para enviar sus datos combinados de cerradura y GPS al endpoint de Plaspy, la plataforma asociará los eventos con el dispositivo registrado
- Usted normalmente solo debe asegurarse de que el dispositivo maestro apunte al endpoint de Plaspy y que los identificadores requeridos del dispositivo estén presentes
- Debido a que la detección es centralizada, agregar candados HB-A1L a través de su maestro es una tarea operativa de emparejamiento y aseguramiento del uplink a Plaspy en lugar de configurar cada candado esclavo individualmente en el servidor

## Transporte y contexto de conexión

El HB-A1L usa Bluetooth para comunicarse con el maestro GPS HB-A1Lm; el maestro luego utiliza transporte IP para entregar los datos a Plaspy. Plaspy soporta las opciones de transporte más comunes en su puerto único, por lo que los integradores pueden elegir TCP o UDP según las limitaciones del dispositivo y de la red.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a la IP 54.85.159.138
- El servidor Plaspy escucha en el puerto 8888 y todos los dispositivos soportados usan ese mismo puerto
- El maestro HB-A1Lm puede usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración
- BLE se usa localmente entre el candado esclavo HB-A1L y el maestro HB-A1Lm; el candado esclavo no requiere radio celular
- Asegúrese de que el enrutamiento de red y las reglas de firewall permitan conexiones salientes desde el maestro hacia el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el maestro HB-A1Lm pueden cambiar los campos exactos de evento o el tiempo de envío desde los candados HB-A1L; verifique las notas de la versión de firmware para los cambios de comportamiento
- Las revisiones de hardware del maestro o del esclavo pueden alterar sensores disponibles o identificadores que Plaspy recibe para correlación
- Las opciones de configuración por parte del fabricante pueden afectar si ciertas alarmas o lecturas RFID se reenvían al maestro y, subsecuentemente, a Plaspy
- La selección del transporte entre UDP y TCP influye en la semántica de entrega y debe elegirse acorde con la fiabilidad de la red y el soporte del dispositivo
- Confirme que el maestro HB-A1Lm esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que la plataforma pueda detectar e ingerir automáticamente los datos del dispositivo
- Valide los nombres de eventos y los identificadores esperados con la documentación del fabricante cuando se requiera un mapeo preciso de campos para informes personalizados

## Por qué es importante entender el protocolo

Comprender de manera práctica cómo el HB-A1L se comunica a través de su maestro GPS hacia Plaspy ayuda a las flotas a configurar una monitorización confiable, diagnosticar problemas más rápido y mantener la operatividad a largo plazo. Conocer la ruta de comunicación, las opciones de transporte y el comportamiento de detección reduce el tiempo de integración y mejora la respuesta ante incidentes.

- Asegura que el maestro esté correctamente apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que los eventos lleguen a Plaspy
- Ayuda a resolver la ausencia de eventos de cerradura revisando el emparejamiento BLE, el uplink del maestro y la selección de transporte
- Orienta las decisiones de actualización de firmware cuando se introducen nuevos tipos de alarma o campos de telemetría
- Aclara cómo viajan las alarmas de batería y manipulación desde el esclavo al maestro y hasta Plaspy para una alerta adecuada
- Apoya la planificación de la configuración de red y firewall al identificar el puerto único de Plaspy y el host permitido
- Mejora la confianza en operaciones remotas como desbloqueos iniciados por la plataforma al entender el flujo de extremo a extremo

## Por qué usar Plaspy con este protocolo

Usar el HB-A1L junto con el maestro HB-A1Lm y Plaspy es una solución práctica para operadores que necesitan visibilidad consolidada de la ubicación del vehículo, estado de puertas y alarmas de seguridad sin añadir hardware celular a cada candado. La arquitectura mantiene los candados esclavos compactos y robustos mientras Plaspy ofrece monitorización centralizada, alertas e informes históricos para la seguridad y cumplimiento de la flota.

Si desea saber más sobre cómo Plaspy recibe y presenta eventos de cerradura, ubicación y telemetría para dispositivos como el HB-A1L, visite https://www.plaspy.com. Para los detalles de protocolo específicos de cada dispositivo, notas de firmware y guías de implementación más actuales, verifique la información con el fabricante en https://www.huabaotelematics.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
