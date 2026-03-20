---
slug: /appello/tk106/protocol
id: tk106-protocol
sidebar_label: Protocol
title: Appello - TK106 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Appello TK106 y compatibilidad con Plaspy, con indicaciones de conexión
keywords:
  - protocolo Appello TK106
  - protocolo GPS Appello TK106
  - protocolo Appello TK106 para Plaspy
  - protocolo rastreador GPS Appello
  - protocolo de comunicación TK106
  - protocolo de rastreo TK106
  - compatibilidad de dispositivos Plaspy
  - integración GPS Plaspy
  - rastreo de vehículos Appello TK106
  - compatibilidad firmware TK106
---

# Appello - Protocolo TK106

Esta página describe el contexto público del protocolo para usar el tracker Appello TK106 con la plataforma Plaspy. Explica cómo el equipo suele comunicarse con un servidor de terceros, qué papel juega el protocolo de reporte del tracker al integrarlo con Plaspy y qué debe tener en cuenta al configurar el dispositivo para un funcionamiento fiable. Las características de hardware y radio del TK106, como la conectividad GSM GPRS y el chip GPS New Star NS 1315, son la base para que el equipo informe posición y estado a un servicio backend.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta a la plataforma. El punto de acceso público de Plaspy es d.plaspy.com con IP de servidor 54.85.159.138 y puerto 8888. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888; Plaspy emplea el mismo puerto para todos los dispositivos. El comportamiento exacto del protocolo y los campos pueden variar según el firmware del TK106, la revisión de hardware y la implementación del fabricante, por lo que debe validar los detalles específicos con la documentación del firmware y las indicaciones del fabricante.

## Resumen del protocolo

El protocolo es el conjunto de convenciones que el tracker usa para enviar información de ubicación, hora y estado a través de la red celular hacia un servidor remoto. Para el TK106 esto significa que el equipo codifica y transmite reportes de posición, eventos de movimiento o alarmas y estado básico del dispositivo, de modo que un servidor como Plaspy pueda mostrar datos de rastreo útiles para los operadores.

- Permite la transmisión periódica o por eventos de coordenadas GPS y estados con marca temporal a un servidor remoto.
- Incluye identificación del dispositivo para que Plaspy pueda asociar los reportes entrantes con una unidad en particular.
- Transporta telemetría básica como movimiento, encendido del vehículo o estados de entradas externas cuando el dispositivo lo soporta.
- Soporta tanto transporte UDP como TCP según la configuración del equipo y las condiciones de la red.
- Permite al servidor reconocer o registrar los reportes entrantes para su procesamiento y visualización en Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del tracker cuando informa. Dado que Plaspy centraliza el transporte en una dirección y puerto comunes, normalmente no es necesario seleccionar manualmente el protocolo en la interfaz de Plaspy si el equipo está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP del servidor 54.85.159.138.
- El servicio utiliza el puerto 8888 para todos los dispositivos soportados y las conexiones entrantes.
- Los equipos pueden configurarse para reportar por UDP o TCP en el puerto 8888; Plaspy acepta ambos transportes.
- Cuando un TK106 o un tracker similar reporta a Plaspy, la plataforma empata los datos entrantes y aplica el manejo correspondiente de forma automática.
- Generalmente, usted solo necesita asegurarse de que el dispositivo apunte al endpoint de Plaspy y de que la configuración de red y la SIM en el tracker sean correctas.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el TK106 llega a Plaspy a través de la red celular y qué endpoint y opciones de transporte son las más usadas. La capacidad GSM GPRS del TK106 le permite enviar reportes de rastreo usando UDP o TCP hacia la dirección y puerto del servidor configurado; la elección entre UDP y TCP depende de la configuración del equipo y del comportamiento deseado en cuanto a reintentos y fiabilidad.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- La plataforma usa el puerto 8888 para todos los dispositivos y datos entrantes.
- El TK106 puede configurarse para usar UDP o TCP en el puerto 8888 según preferencia o soporte del firmware.
- Ajustes de red celular como la tarjeta SIM, el APN y la disponibilidad de señal afectan la capacidad del equipo para alcanzar el endpoint de Plaspy.
- Usar el nombre de dominio o la IP del servidor son opciones comunes de configuración según las capacidades del tracker.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos, eventos o reportes opcionales soporta un TK106; verifique el comportamiento según el firmware de su dispositivo.
- Revisiones de hardware o variantes regionales pueden alterar bandas de frecuencia soportadas o el desempeño GNSS, lo que puede afectar la fiabilidad de los reportes.
- El modo de transporte seleccionado en el equipo (UDP frente a TCP) puede influir en las características de entrega; elija el modo que se ajuste a sus necesidades operativas.
- Las interfaces de configuración del fabricante a veces usan campos de servidor por defecto diferentes; confirme que d.plaspy.com o 54.85.159.138 y el puerto 8888 estén ingresados correctamente.
- La detección automática de protocolo de Plaspy facilita la incorporación de dispositivos, pero sigue siendo necesario que la identificación del equipo y el formato de los reportes sean correctos.
- Siempre valide la compatibilidad con la documentación del fabricante y las notas de versión antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el tracker ayuda a garantizar una configuración fluida, un flujo de datos fiable y una resolución de problemas más rápida cuando surjan incidencias. Saber qué transporte usar, cómo se proporciona la identificación y qué tipos de reportes envía el equipo facilita que el TK106 funcione de forma consistente con Plaspy.

- Facilita la configuración correcta del servidor, el modo de transporte y los intervalos de reporte.
- Ayuda a diagnosticar problemas de conectividad confirmando si el tracker alcanza d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mejora las expectativas sobre frecuencia de datos, precisión e impacto en la batería según el patrón de reportes.
- Permite un manejo fiable de alarmas y eventos al asegurarse de que el equipo envía los reportes de estado necesarios.
- Reduce el tiempo de integración porque Plaspy detectará el protocolo automáticamente cuando el dispositivo informe correctamente.

## Por qué usar Plaspy con este protocolo

Usar el Appello TK106 con Plaspy es una forma práctica de convertir los reportes del dispositivo en datos de rastreo y gestión de flota utilizables para monitoreo, ruteo y supervisión operativa. La forma compacta del TK106 y su desempeño GNSS, combinados con la detección centralizada y el procesamiento de Plaspy, lo convierten en una buena opción para muchos escenarios de seguimiento de vehículos y activos donde se requieren actualizaciones de ubicación confiables.

Si desea saber más sobre Plaspy y cómo maneja los protocolos de trackers comunes, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo y las notas de firmware del fabricante en el sitio http://www.cnjeo.com/.
