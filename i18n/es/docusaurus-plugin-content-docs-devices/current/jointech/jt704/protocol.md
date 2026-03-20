---
slug: /jointech/jt704/protocol
id: jt704-protocol
sidebar_label: Protocol
title: Jointech - JT704 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del Jointech JT704 y su comunicación con Plaspy para reportes en tiempo real y programados
keywords:
  - protocolo Jointech JT704
  - protocolo GPS Jointech JT704
  - protocolo de comunicación Jointech JT704
  - protocolo de rastreo Jointech JT704
  - compatibilidad JT704 Plaspy
  - protocolo para rastreador de contenedores
  - rastreador GPS de contenedores Plaspy
  - protocolo de gestión de flotas
  - protocolo de rastreador GPS Plaspy
  - seguimiento de contenedores Jointech
---

# Jointech - JT704 Protocolo

Esta página explica el contexto público del protocolo para usar el rastreador de contenedores Jointech JT704 con Plaspy. Describe, en términos no sensibles, cómo el JT704 envía datos de ubicación y estado a Plaspy y qué papel juega su protocolo de reporte para proporcionar telemetría útil en monitoreo de contenedores y flujos logísticos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. Plaspy recibe informes en d.plaspy.com y en la dirección IP 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo, la cadencia de reporte y el contenido de los mensajes pueden variar según la versión de firmware, la revisión del hardware y la implementación del fabricante; por tanto, cuando sea necesario, valide la configuración contra la documentación del fabricante.

## Resumen del protocolo

El protocolo del JT704 define cómo el rastreador envía identificación, posición, telemetría y actualizaciones de estado a Plaspy para que esos mensajes se conviertan en mapas en tiempo real, alertas de eventos e informes históricos. En despliegues sobre contenedores, el protocolo soporta tanto transmisión de posición en vivo como reportes programados a intervalos fijos para equilibrar visibilidad y duración de la batería.

- Permite que el JT704 se identifique y establezca una sesión de reporte con el endpoint de Plaspy.
- Transporta actualizaciones de posición en tiempo real y reportes programados para despliegues de larga duración.
- Comunica el estado del dispositivo, como batería o alimentación, para que Plaspy genere alertas de mantenimiento y avisos de batería.
- Soporta reportes de eventos útiles para alertas de geocercas, detección de movimiento y verificación de rutas dentro de Plaspy.
- Funciona con las características de instalación del JT704, como montaje sin perforaciones, para ofrecer telemetría continua durante tránsitos prolongados.

## Detección del protocolo por parte de Plaspy

Plaspy recibe datos de los dispositivos en un endpoint compartido y usa detección automatizada para identificar el protocolo del rastreador, de modo que normalmente no es necesario seleccionar manualmente el protocolo dentro de Plaspy. Si el JT704 apunta al endpoint de Plaspy y utiliza el transporte soportado, la plataforma ingestará e interpretará los reportes entrantes para su visualización y procesamiento.

- Plaspy acepta reportes en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en despliegues a gran escala.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y la preferencia del operador.
- Cuando el JT704 está configurado para reportar al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y comienza a ingerir datos.
- En la mayoría de los casos no se requiere seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo está correctamente orientado al endpoint de Plaspy.

## Transporte y contexto de conexión

Comprender la capa de transporte y los ajustes de conexión es importante para asegurar que el JT704 pueda comunicarse con Plaspy desde su entorno de red desplegado. El JT704 soporta modos de reporte tanto continuos como programados; el tipo de transporte elegido puede afectar la vida útil de la batería y la fiabilidad de la conexión según el entorno celular.

- El JT704 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Usar TCP puede ofrecer entrega orientada a conexión, mientras que UDP puede ser preferible en escenarios de reportes programados con menor overhead, dependiendo de la configuración del equipo.
- Firewalls de red y la configuración APN del operador deben permitir conexiones salientes al endpoint de Plaspy en el puerto 8888.
- Al planificar despliegues, confirme que el APN del dispositivo y la provisión de la SIM sean compatibles con el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo entre mensajes y los campos disponibles en los reportes; siempre verifique el firmware instalado al validar el comportamiento.
- Las revisiones de hardware y los paquetes de sensores opcionales pueden modificar qué campos de telemetría el JT704 envía a Plaspy.
- Las opciones de configuración del fabricante pueden permitir alternar entre reportes por UDP y TCP en el puerto 8888; elija el transporte que mejor se adapte a su entorno de red.
- El comportamiento de las redes de los operadores, como NAT y APN privadas, puede afectar la alcanzabilidad del dispositivo hacia d.plaspy.com o hacia la dirección IP.
- Pruebe nuevos lotes de dispositivos en un entorno de staging antes de un despliegue masivo para confirmar la ingestión en Plaspy y la cadencia de reporte esperada.
- Ante dudas, valide la compatibilidad y los detalles específicos de firmware con la documentación de Jointech.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del JT704 ayuda a los equipos de operaciones e integradores a asegurar reportes fiables, resolver problemas de conectividad y diseñar planes de despliegue que optimicen la vida de la batería y la calidad de los datos dentro de Plaspy.

- Configuración más rápida al confirmar que el destino de reporte y el transporte son correctos para la ingestión en Plaspy.
- Solución de problemas más efectiva cuando aparezcan problemas de conectividad o datos faltantes en Plaspy.
- Mejor balance entre duración de batería y frecuencia de reporte al alinear parámetros programados con las necesidades operativas.
- Expectativas claras sobre la telemetría que Plaspy recibirá según el firmware y la configuración del dispositivo.
- Menor riesgo en despliegues mediante pruebas previas a producción y rollouts por etapas.

## Por qué usar Plaspy con este protocolo

Usar el JT704 con Plaspy ofrece visibilidad de contenedores pensada para logística de largo recorrido y cruce de fronteras, donde la instalación discreta y la larga duración de batería son críticas. Plaspy ingestará tanto reportes en tiempo real como programados del JT704 para que los equipos logísticos puedan monitorear movimientos, generar alertas de geocercas y cumplimiento, y mantener registros históricos para auditorías o trámites aduaneros. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican los despliegues a gran escala al eliminar la necesidad de asignar puertos o protocolos individuales por dispositivo.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica del protocolo y del firmware con el fabricante en https://www.jointcontrols.com/ antes de despliegues masivos.
