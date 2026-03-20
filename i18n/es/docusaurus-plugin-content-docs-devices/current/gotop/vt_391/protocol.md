---
slug: /gotop/vt_391/protocol
id: vt_391-protocol
sidebar_label: Protocol
title: GOTOP - VT-391 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP VT-391 y su conexión al servidor Plaspy
keywords:
  - protocolo GOTOP VT-391
  - protocolo GPS GOTOP VT-391
  - compatibilidad GOTOP VT-391 Plaspy
  - protocolo de rastreo VT-391
  - comunicación rastreador GOTOP
  - protocolo GPS WIFI VT-391
  - rastreo de flotas VT-391
  - datos de cámara GOTOP VT-391
  - identificación RFID VT-391
  - actualizaciones OTA VT-391
---

# GOTOP - Protocolo VT-391

Esta página documenta el contexto público del protocolo para usar el rastreador GOTOP VT-391 con la plataforma Plaspy. Se concentra en cómo el dispositivo suele comunicarse con un servidor Plaspy y qué comportamientos de reporte son relevantes al integrar unidades VT-391 en un flujo de trabajo de gestión de flotas. El contenido es de alto nivel, no sensible y está orientado a ser útil para la configuración y la resolución de problemas.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware del VT-391, la revisión de hardware o la implementación del fabricante. El VT-391 incluye opciones y características opcionales como reporte por WIFI, GPRS, SMS, registro de imágenes de cámara, identificación de conductor por RFID, entradas de sensores y capacidad de actualizaciones OTA, cualquiera de las cuales puede influir en cómo se configura el envío de datos a Plaspy.

## Visión general del protocolo

El protocolo de comunicación del VT-391 define cómo el rastreador envía posición, datos de sensores, alarmas y datos auxiliares a un servicio backend, de modo que ubicaciones, imágenes y eventos sean utilizables en una plataforma de gestión de flotas como Plaspy. El rol del protocolo es representar el estado del dispositivo de forma estable y parseable, mientras soporta funciones como capturas de cámara, eventos RFID, lecturas de sensores analógicos y control de audio bidireccional.

- Traduce lecturas GPS y de sensores del VT-391 a mensajes que el servidor puede interpretar para seguimiento y alertas.
- Transporta datos auxiliares como instantáneas de cámara, eventos de identificación por RFID y registros almacenados en tarjeta SD cuando la configuración del dispositivo lo permite.
- Transmite alarmas y eventos de estado, incluyendo SOS, movimiento, exceso de velocidad, frenadas bruscas y señales de accidente para la respuesta oportuna del operador.
- Permite comunicación bidireccional y comandos remotos cuando el firmware del dispositivo y el despliegue lo permiten.
- Soporta múltiples medios físicos en la práctica, incluyendo GPRS celular, reporte por WIFI y fallback por SMS si el dispositivo y el firmware lo admiten.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de múltiples dispositivos y detectar automáticamente el modo de comunicación cuando se conectan al endpoint compartido de Plaspy. En la mayoría de los casos no necesita seleccionar o registrar manualmente un protocolo dentro de Plaspy si el VT-391 está configurado para reportar a los ajustes de conexión de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para conexión directa.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del VT-391 y las preferencias de instalación.
- Cuando el VT-391 envía reportes válidos al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y procesará los mensajes entrantes.
- Una configuración correcta del endpoint del dispositivo y la selección del transporte son las razones más comunes por las que una unidad es reconocida sin necesidad de seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

La selección del transporte y la dirección DNS o IP son las principales consideraciones en la capa de conexión para un despliegue VT-391. El VT-391 soporta reporte por WIFI y rutas de datos celulares, y puede apuntar a un nombre de dominio o a una dirección IP al configurar su servidor de reporte.

- El VT-391 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Todos los dispositivos soportados por Plaspy comparten el puerto 8888, lo que simplifica la configuración de cortafuegos y redes para flotas.
- El reporte por WIFI está disponible en modelos VT-391 con módulo WIFI integrado y puede usarse cuando se prefiere una conexión de red local sobre la celular.
- Dependiendo del firmware, los dispositivos pueden incluir opciones de fallback como reporte por SMS u otros transportes alternativos para mayor redundancia.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el formato de los mensajes o los campos opcionales con el tiempo; valide el comportamiento según la revisión de firmware del equipo que vaya a desplegar.
- Revisión de hardware o módulos opcionales como la cámara, el lector RFID o puertos I/O adicionales pueden alterar los datos disponibles y la forma de reportarlos.
- La elección entre TCP y UDP afecta la semántica de entrega y puede estar dictada por políticas de red locales o requisitos de fiabilidad.
- Las actualizaciones OTA proporcionadas por el fabricante pueden introducir nuevas funciones o modificar detalles del protocolo, por lo que confirme la compatibilidad después de actualizar.
- Si su flujo de trabajo requiere transferencia de imágenes de cámara, verifique que el firmware del VT-391 y la configuración de Plaspy soporten el reporte de imágenes para el caso de uso previsto.
- Ajustes y personalizaciones del lado del fabricante pueden provocar variaciones en cómo se codifican eventos o datos de sensores; consulte la documentación oficial para reconciliar diferencias.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación VT-391 ayuda a garantizar una incorporación fiable de los dispositivos, una interpretación correcta de eventos y un comportamiento predecible en Plaspy. Saber qué puede reportar el equipo y cómo se conecta reduce el tiempo de configuración y facilita la resolución de problemas cuando las unidades no aparecen como se espera.

- Permite configurar correctamente la red y el cortafuegos usando el endpoint de Plaspy y el puerto compartido.
- Ayuda a determinar si funciones del dispositivo como imágenes de cámara o eventos RFID estarán disponibles en Plaspy sin trabajos personalizados.
- Facilita la resolución de datos faltantes al verificar transporte, dirección del servidor y compatibilidad de firmware.
- Apoya la planificación de redundancia y opciones de fallback como WIFI frente a GPRS o reporte por SMS.
- Establece expectativas claras sobre qué datos recibirá Plaspy del VT-391 en distintos escenarios de despliegue.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con unidades VT-391 ofrece a las organizaciones una plataforma centralizada para recopilar posiciones GPS, entradas de sensores, alarmas y, opcionalmente, imágenes de cámara y eventos de identificación de conductor desde una única familia de rastreadores. El conjunto de funciones del VT-391, que incluye reporte por WIFI, soporte de cámara, ID de conductor por RFID, entradas analógicas y digitales, y capacidad OTA, lo convierte en una opción flexible para casos de uso en flotas y seguridad donde la telemetría variada es valiosa.

Plaspy simplifica la integración ofreciendo un endpoint único y compartido en d.plaspy.com y escuchando en el puerto 8888 para todos los dispositivos soportados, detectando automáticamente el protocolo entrante. Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos y la visibilidad de la flota visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware e información de hardware más actual siempre verifique con el fabricante en https://www.gotop.cc/ porque el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
