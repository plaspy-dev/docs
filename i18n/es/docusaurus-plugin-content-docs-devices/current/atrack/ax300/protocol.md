---
slug: /atrack/ax300/protocol
id: ax300-protocol
sidebar_label: Protocol
title: ATrack - AX300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador ATrack AX300 con Plaspy, con contexto de transporte y notas de compatibilidad
keywords:
  - Protocolo ATrack AX300
  - Protocolo GPS AX300
  - Protocolo de rastreo AX300
  - ATrack AX300 Plaspy
  - Protocolo de comunicación AX300
  - Rastreador OBD AX300
  - Protocolo rastreador LTE M
  - Telemetría vehicular AX300
  - Rastreo de flotas AX300 Plaspy
  - Compatibilidad protocolo AX300
---

# ATrack - Protocolo AX300

Esta página describe el contexto público del protocolo para usar el rastreador ATrack AX300 con Plaspy. Se centra en cómo el dispositivo comunica información con Plaspy a alto nivel, las opciones de conexión más habituales y consideraciones prácticas de compatibilidad para operadores de flotas e integradores. El AX300 es un rastreador vehicular LTE‑M con conexión OBD que se conecta al puerto OBD II para enviar ubicación GNSS y datos del vehículo a plataformas de flotas como Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello la información aquí es una guía pública y no sustituye la documentación del fabricante.

## Descripción general del protocolo

El protocolo de reporte del AX300 es el mecanismo por el cual el dispositivo envía posiciones GNSS, telemetría OBD/CAN y notificaciones de eventos a un servidor remoto. En la práctica, este protocolo permite que el rastreador se identifique, entregue datos GNSS y del vehículo útiles, y que el servidor asocie las actualizaciones con un registro de dispositivo en Plaspy.

- Transporta fijaciones GNSS y telemetría proveniente del OBD para que Plaspy muestre ubicación en tiempo real y trazas históricas.
- Incluye identidad del dispositivo e información de sesión que permite a Plaspy asociar los mensajes entrantes con el vehículo correcto.
- Entrega datos por eventos como estado de encendido, alarmas o disparos diagnósticos para soportar alertas y flujos de trabajo.
- Soporta reportes periódicos y actualizaciones bajo demanda para equilibrar la necesidad de telemetría y el consumo en conectividad LTE M.
- Funciona junto con datos opcionales de sensores BLE para ofrecer un panorama más completo cuando están habilitados.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos entrantes en un único endpoint compartido e identifica automáticamente el protocolo del dispositivo, por lo que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo en la plataforma. La clave para la detección y el onboarding automático es la correcta configuración del dispositivo para informar al servidor de Plaspy.

- Plaspy escucha tráfico de dispositivos en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- El servicio de escucha utiliza el puerto 8888; todos los dispositivos compatibles con Plaspy usan ese mismo puerto.
- Los dispositivos configurados para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888 se enrutan hacia Plaspy para la detección automática del protocolo.
- Cuando un AX300 está correctamente configurado para enviar datos a Plaspy, por lo general no es necesario seleccionar el protocolo manualmente en la plataforma.
- Si no aparece telemetría, un primer paso práctico es verificar el destino de reporte del dispositivo, el modo de transporte y el comportamiento del firmware.

## Contexto de transporte y conexión

Las opciones de conexión y transporte afectan la forma en que el AX300 se comunica con Plaspy, pero no cambian el propósito general del protocolo. El AX300 admite múltiples transportes y se puede configurar según las necesidades del despliegue; Plaspy acepta esos transportes en su endpoint compartido.

- El AX300 puede configurarse para usar transporte UDP o TCP al reportar a Plaspy en el puerto 8888.
- Los dispositivos pueden enviar tráfico al dominio d.plaspy.com o directamente a la IP 54.85.159.138, según la preferencia del instalador y la disponibilidad de DNS.
- El enfoque de puerto único de Plaspy significa que todos los rastreadores compatibles usan el puerto 8888, lo cual simplifica reglas de firewall y gateways en redes de flota.
- UDP se usa comúnmente para reportes periódicos ligeros, mientras que TCP está disponible donde se prefiera la fiabilidad de sesión, siempre sujeto a la configuración del dispositivo.
- Asegúrese de que el APN de la red móvil y la provisión de la SIM permitan conexiones salientes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, eliminar o cambiar campos reportados y el comportamiento de eventos; verifique siempre las notas de la versión de firmware para detalles específicos del AX300.
- Las revisiones de hardware y los mapeos CAN de los OEM pueden modificar qué parámetros OBD o J1939 están expuestos por el protocolo de reporte.
- La elección de transporte (UDP frente a TCP) puede afectar el comportamiento de entrega y debe seleccionarse en función de las condiciones de la red y las necesidades operativas.
- Las variantes regionales de LTE M pueden influir en la cadencia de telemetría y los perfiles de consumo energético, pero no en el concepto fundamental de reporte.
- Puede requerirse el uso de herramientas de configuración del fabricante o comandos SMS para apuntar los dispositivos a d.plaspy.com o a la IP del servidor de Plaspy.
- Confirme cualquier característica opcional, como el reenvío de sensores BLE o el comportamiento del adaptador RP1226, consultando la documentación del proveedor antes del despliegue.

## Por qué importa entender el protocolo

Comprender cómo el AX300 se comunica con Plaspy facilita una configuración correcta, acelera la resolución de problemas y asegura una operación confiable a largo plazo. Aunque Plaspy detecte el dispositivo automáticamente, conocer el contexto de conexión y protocolo reduce el tiempo de inactividad y mejora la integración.

- Ayuda a confirmar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy para que los datos lleguen de forma confiable.
- Facilita la resolución de problemas cuando falta telemetría al acotar las verificaciones a transporte, DNS o configuración de firmware.
- Aclara qué telemetría esperar del AX300 según el firmware y la disponibilidad de datos OBD del vehículo.
- Apoya la planificación de reglas de firewall y ajustes de APN celular que permitan tráfico saliente hacia Plaspy.
- Permite a los operadores elegir el modo de transporte más adecuado para su red y requisitos de reporte.

## Por qué usar Plaspy con este protocolo

Combinar el AX300 con Plaspy ofrece a los operadores de flotas una solución integrada de rastreo de ubicación y diagnóstico del vehículo. La conexión OBD II y el soporte de CAN dual en el AX300 proporcionan telemetría detallada que Plaspy puede aprovechar para mapas en vivo, alertas y flujos de mantenimiento, mientras que la conectividad LTE M ayuda a equilibrar consumo energético y cobertura en despliegues de flota.

Para conocer más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para detalles actualizados del protocolo AX300, notas de firmware y comportamiento específico del dispositivo, verifique la información vigente en el sitio del fabricante https://www.atrack.com.tw/. El soporte de protocolo y el comportamiento del firmware evolucionan con el tiempo, por lo que se recomienda consultar la documentación del fabricante al planificar despliegues en producción.
